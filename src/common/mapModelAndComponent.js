const mapModelAndComponent = {
  examData: {
    modelArry: ['baseData/exam'],
    init: () => import('../routes/BaseData/ExamData'),
  },
  examPlanData: {
    modelArry: ['baseData/examPlan'],
    init: () => import('../routes/BaseData/ExamPlanData'),
  },
  licenseData: {
    modelArry: ['baseData/license'],
    init: () => import('../routes/BaseData/LicensesData'),
  },
  workManData: {
    modelArry: ['baseData/workMan'],
    init: () => import('../routes/BaseData/WorkManData'),
  },
  placeData: {
    modelArry: ['baseData/place'],
    init: () => import('../routes/BaseData/PlaceData'),
  },
  examDataData: {
    modelArry: ['baseData/examData'],
    init: () => import('../routes/BaseData/ExamDataData'),
  },
  subjectData: {
    modelArry: ['baseData/subject'],
    init: () => import('../routes/BaseData/SubjectData'),
  },
  ukeyUse: {
    modelArry: ['machine/ukeyUse'],
    init: () => import('../routes/Machine/UkeyUse'),
  },
  ukey: {
    modelArry: ['machine/ukey'],
    init: () => import('../routes/Machine/Ukey'),
  },
  ukeyProgram: {
    modelArry: ['machine/ukeyProgram'],
    init: () => import('../routes/Machine/UkeyProgram'),
  },
  billPlace: {
    modelArry: ['machine/bill'],
    init: () => import('../routes/Machine/BillPlace'),
  },
  machine: {
    modelArry: ['machine/machine'],
    init: () => import('../routes/Machine/Machine'),
  },
  template: {
    modelArry: ['skin/template'],
    init: () => import('../routes/Skin/Template'),
  },
  skinUse: {
    modelArry: ['skin/skinUse'],
    init: () => import('../routes/Skin/SkinUse'),
  },
  skinPage: {
    modelArry: ['skin/skinPage'],
    init: () => import('../routes/Skin/SkinPage'),
  },
};
export { mapModelAndComponent };
