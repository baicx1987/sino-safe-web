import React from 'react';
import { connect } from 'dva';
import { Spin } from 'antd';
import dynamic from 'dva/dynamic';
import cloneDeep from 'lodash/cloneDeep';
import { mapModelAndComponent } from './common/mapModelAndComponent';
import { getPlainNode } from './utils/utils';

const App = (WrappedComponent) => {
  @connect(state => ({
    menuData: state.global.menuData,
    // currentUser: state.user.currentUser,
    collapsed: state.global.collapsed,
    fetchingNotices: state.global.fetchingNotices,
    notices: state.global.notices,
  }))
  class App extends React.Component {
    componentDidMount() {
      this.props.dispatch({
        type: 'global/fetchMenu',
      });
    }
    render() {
      const { currentUser, collapsed, fetchingNotices, notices, location, dispatch,
        app, menuData, history } = this.props;
      const dynamicWrapper = (app, models, component) => dynamic({
        app,
        models: () => models.map(m => import(`./models/${m}.js`)),
        component,
      });
      function getRouteData(navData, path) {
        if (!navData.some(item => item.layout === path) ||
          !(navData.filter(item => item.layout === path)[0].children)) {
          return null;
        }
        const route = cloneDeep(navData.filter(item => item.layout === path)[0]);
        const nodeList = getPlainNode(route.children);
        return nodeList;
      }
      let navData = [];
      if (menuData) {
        menuData.map((item) => {
          item.children.map((childItem) => {
            childItem.component = dynamicWrapper(app,
              [mapModelAndComponent[childItem.path].modelArry],
              mapModelAndComponent[childItem.path].init);
            return childItem;
          });
          return item;
        });
        navData = [
          {
            component: dynamicWrapper(app, ['user', 'login'], () => import('./layouts/BasicLayout')),
            layout: 'BasicLayout',
            name: '首页', // for breadcrumb
            path: '/',
            children: menuData,
          }];
      }

      const passProps = {
        app,
        navData,
        history,
        getRouteData: (path) => {
          return getRouteData(navData, path);
        },
        billComp: dynamicWrapper(app, ['machine/bill'], () => import('./routes/Machine/Bill')),
        currentUser,
        collapsed,
        fetchingNotices,
        notices,
        location,
        dispatch,
      };
      return (
        navData.length === 0 ? <Spin spinning /> :
        <WrappedComponent {...this.props} {...passProps} />
      );
    }
  }

  return App;
};
export default App;
