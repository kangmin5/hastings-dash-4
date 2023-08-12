const target = `boards/board`

export const ReturnApplyUrl = { 
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type ReturnApplyUrl = typeof ReturnApplyUrl[keyof typeof ReturnApplyUrl];

export const ReturnApplyAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-srch`,
} as const;
type ReturnApplyAction = typeof ReturnApplyAction[keyof typeof ReturnApplyAction];


export const ReturnApplyStrategy = {
  fakeReturnApplies: "fakeReturnApplies",
  getAllReturnApplies: "getAllReturnApplies",
  getReturnApplyById: "getReturnApplyById",
  addReturnApply: "addReturnApply",
  alterReturnApplyById: "alterReturnApplyById",
  getReturnAppliesBy: "getReturnAppliesBy",
  delReturnApplyById: "delReturnApplyById",
} as const;
type ReturnApplyStrategy = typeof ReturnApplyStrategy[keyof typeof ReturnApplyStrategy];