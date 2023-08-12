const target = `admin/customers/dormant`

export const DormantUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type DormantUrl = typeof DormantUrl[keyof typeof DormantUrl];

export const DormantAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type DormantAction = typeof DormantAction[keyof typeof DormantAction];


export const DormantStrategy = {
  getAllDormants: "getAllDormants",
  getDormantById: "getDormantById",
  addDormant: "addDormant",
  alterDormantById: "alterDormantById",
  getDormantsBy: "getDormantsBy",
  delDormantById: "delDormantById",
} as const;
type DormantStrategy = typeof DormantStrategy[keyof typeof DormantStrategy];
