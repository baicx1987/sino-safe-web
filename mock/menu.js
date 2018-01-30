import { getUrlParams } from './utils';

export function getMenuMockData(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const params = getUrlParams(url);

  const dataSource = [
    {
      name: '基础数据管理',
      path: 'baseData',
      icon: 'check-circle-o',
      children: [
        {
          name: '考试数据管理',
          path: 'examData',
        },
        {
          name: '考试计划数据管理',
          path: 'examPlanData',
        },
        {
          name: '准考证数据管理',
          path: 'licenseData',
        },
        {
          name: '工作人员数据管理',
          path: 'workManData',
        },
        {
          name: '考点数据管理',
          path: 'placeData',
        },
        {
          name: '数据包管理',
          path: 'examDataData',
        },
        {
          name: '科目数据管理',
          path: 'subjectData',
        },
      ],
    },
    {
      name: '硬件设备管理',
      path: 'machineData',
      icon: 'check-circle-o',
      children: [
        {
          name: 'U盾使用管理',
          path: 'ukeyUse',
        },
        {
          name: 'U盾管理',
          path: 'ukey',
        },
        {
          name: 'U盾软件包管理',
          path: 'ukeyProgram',
        },
        {
          name: '硬件设备清单管理',
          path: 'billPlace',
        },
        {
          name: '硬件设备管理',
          path: 'machine',
        },
      ],
    }, {
      name: '皮肤管理',
      path: 'skinData',
      icon: 'check-circle-o',
      children: [
        {
          name: '模板管理',
          path: 'template',
        },
        {
          name: '模板使用管理',
          path: 'skinUse',
        },
        {
          name: '皮肤管理',
          path: 'skinPage',
        },
      ],
    }];

  const result =
    {
      status: '1',
      msg: '成功',
      dataMain: {
        list: dataSource,
      },
    };

  if (res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}
