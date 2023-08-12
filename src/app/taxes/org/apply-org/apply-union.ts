const target = `taxes/apply`

export const ApplyUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type ApplyUrl = typeof ApplyUrl[keyof typeof ApplyUrl];

export const ApplyAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type ApplyAction = typeof ApplyAction[keyof typeof ApplyAction];


export const ApplyStrategy = {
  getAllApplies: "getAllApplies",
  getApplyById: "getApplyById",
  addApply: "addApply",
  alterApplyById: "alterApplyById",
  getAppliesBy: "getAppliesBy",
  delApplyById: "delApplyById",
} as const;
type ApplyStrategy = typeof ApplyStrategy[keyof typeof ApplyStrategy];
