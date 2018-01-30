/**
 * 此文件管理所有模拟的路径
 */
import mockjs from 'mockjs';
import { getTable, postTable, getCheckData } from './mock/table';
import { getExamViewData, getExamMockData, postExamMockData, getUnitSelectData,postExamNameVerif } from './mock/exam';
import { getExamPlanViewData, getExamPlanMockData, getExamNameSelectData, postExamPlanMockData, postExamPlanNameVerif } from './mock/examPlan';
import { getLicenseViewData,getExamineeViewData, getPhotoViewData, getExamPlanNameSelectData, getSubjectSelectData, getAreaSelectData, getLicenseMockData, postLicenseMockData, postIdentityVerif } from './mock/license';
import { getWorkManViewData, getWorkManMockData, postWorkManMockData } from './mock/workMan';
import { getPlaceViewData, getPlaceMockData, postPlaceMockData } from './mock/Place';
import { getExamDataViewData, getExamDataMockData, postExamDataMockData, getExamDataSelectData } from './mock/examData';
import { getSubjectViewData, getSubjectMockData, postSubjectMockData } from './mock/subject';
import { getUkeyUseViewData, getUkeyUseMockData, postUkeyUseMockData, postUkeyUseStateMockData, getUkeyMachineSelectData } from './mock/ukeyUse';
import { getUkeyViewData, getUkeyMockData, postUkeyMockData, postUkeyIdVerif } from './mock/ukey';
import { getMachineViewData, getMachineMockData, postMachineMockData } from './mock/machine';
import { getTemplateViewData, getTemplateMockData, postTemplateMockData, postTemplateVerif } from './mock/template';
import { getSkinUseViewData, getSkinUseMockData, postSkinUseMockData } from './mock/skinUse';
import { getUkeyProgramViewData, getUkeyProgramMockData, postUkeyProgramMockData } from './mock/ukeyProgram';
import { getBillPlaceMockData, getBillMockData } from './mock/bill';

import { getMenuMockData } from './mock/menu';
import { getActivities, getNotice, getFakeList } from './mock/api';
import { getFakeChartData } from './mock/chart';
import { imgMap } from './mock/utils';
import { getProfileBasicData } from './mock/profile';
import { getProfileAdvancedData } from './mock/profile';
import { getNotices } from './mock/notices';
import { format, delay } from 'roadhog-api-doc';

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    $desc: "获取当前用户接口",
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: {
        "status":1,
        "msg":"成功",
        "dataMain":{
              name: 'Serati Ma',
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
              userid: '00000001',
              notifyCount: 12,
              "deDeleted":false
            }
      }
  },
  // GET POST 可省略
  'GET /api/users':{
    "status":1,
    "msg":"成功",
    "dataMain":[{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }]
  },
  'GET /api/project/notice': getNotice,
  'GET /api/activities': getActivities,
  // 菜单数据
  'GET /sys/menu':getMenuMockData,
  //select 外键数据
  'GET /sys/unitSelect': getUnitSelectData,
  'GET /data/examSelect': getExamNameSelectData,
  'GET /data/examPlanSelect': getExamPlanNameSelectData,
  'GET /data/examDataSelect': getExamDataSelectData,
  'GET /data/subjectSelect': getSubjectSelectData,
  'GET /data/areaSelect': getAreaSelectData,
  'GET /machine/machineSelect':getUkeyMachineSelectData,

  // exam 增删改查
  'GET /data/examView': getExamViewData,
  'GET /data/examPage': getExamMockData,
  'POST /data/exam': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postExamMockData,
  },
  'POST /data/examNameVerif': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postExamNameVerif,
  },
  // examPlan 增删改查
  'GET /data/examPlanView': getExamPlanViewData,
  'GET /data/examPlanPage': getExamPlanMockData,
  'POST /data/examPlan': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postExamPlanMockData,
  },
  'POST /data/examPlanNameVerify': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postExamPlanNameVerif,
  },
  // license 增删改查
  'GET /data/licenseView': getLicenseViewData,
  'GET /data/examineeView': getExamineeViewData,
  'GET /data/photoView': getPhotoViewData,
  'GET /data/licensePage': getLicenseMockData,
  'POST /data/license': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postLicenseMockData,
  },
  'POST /data/identityVerify': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postIdentityVerif,
  },
  // workMan 增删改查
  'GET /data/workManView': getWorkManViewData,
  'GET /data/workManPage': getWorkManMockData,
  'POST /data/workMan': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postWorkManMockData,
  },
  // place 增删改查
  'GET /data/placeView': getPlaceViewData,
  'GET /data/placePage': getPlaceMockData,
  'POST /data/place': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postPlaceMockData,
  },
  // ExamData 增删改查
  'GET /data/examDataView': getExamDataViewData,
  'GET /data/examDataPage': getExamDataMockData,
  'POST /data/examData': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postExamDataMockData,
  },
  // subject 增删改查
  'GET /data/subjectView': getSubjectViewData,
  'GET /data/subjectPage': getSubjectMockData,
  'POST /data/subject': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postSubjectMockData,
  },
  // UkeyUse 增删改查
  'GET /machine/ukeyUseView': getUkeyUseViewData,
  'GET /machine/ukeyUsePage': getUkeyUseMockData,
  'POST /machine/ukeyUse': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postUkeyUseMockData,
  },
  'POST /machine/ukeyUseState': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postUkeyUseStateMockData,
  },
  // Ukey 增删改查
  'POST /machine/ukeyIdVerify':{
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postUkeyIdVerif,
  },
  'GET /machine/ukeyView': getUkeyViewData,
  'GET /machine/ukeyPage': getUkeyMockData,
  'POST /machine/ukey': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postUkeyMockData,
  },
  // UkeyProgram 增删改查
  'GET /machine/ukeyProgramView': getUkeyProgramViewData,
  'GET /machine/ukeyProgramPage': getUkeyProgramMockData,
  'POST /machine/ukeyProgram': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postUkeyProgramMockData,
  },
  // billPlace 增删改查
  'GET /machine/billPlacePage': getBillPlaceMockData,
  // bill 增删改查
  'GET /machine/billPage': getBillMockData,
  // Machine 增删改查
  'GET /machine/machineView': getMachineViewData,
  'GET /machine/machinePage': getMachineMockData,
  'POST /machine/machine': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postMachineMockData,
  },
  // Template 增删改查
  'GET /skin/templateView': getTemplateViewData,
  'GET /skin/templatePage': getTemplateMockData,
  'POST /skin/template': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postTemplateMockData,
  },
  'POST /skin/templateNameVerif': postTemplateVerif,
  // SkinUse 增删改查
  'GET /skin/skinUseView': getSkinUseViewData,
  'GET /skin/skinUsePage': getSkinUseMockData,
  'POST /skin/skinUse': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postSkinUseMockData,
  },

  'GET /api/table': getTable,
  'GET /api/check': getCheckData,
  'POST /api/table': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postTable,
  },
  'POST /api/forms': (req, res) => {
    res.send({ message: 'Ok' });
  },
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }]
  }),
  'GET /api/fake_list': getFakeList,
  'GET /api/fake_chart_data': getFakeChartData,
  'GET /api/profile/basic': getProfileBasicData,
  'GET /api/profile/advanced': getProfileAdvancedData,
  'POST /api/login/account': (req, res) => {
    const { password, userName, type } = req.body;
    res.send({
      status: password === '888888' && userName === 'admin' ? 'ok' : 'error',
      type,
    });
  },
  'POST /api/register': (req, res) => {
    res.send({ status: 'ok' });
  },
  'GET /api/notices': getNotices,
};
//  如果开发环境，delay函数模拟延迟，如果是生产环境，则不启服务
export default noProxy ? {} : delay(proxy, 1000);
