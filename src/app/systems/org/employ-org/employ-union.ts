const target = `systems/employ`

export const EmployUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type EmployUrl = typeof EmployUrl[keyof typeof EmployUrl];

export const EmployAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type EmployAction = typeof EmployAction[keyof typeof EmployAction];


export const EmployStrategy = {
  getAllEmploys: "getAllEmploys",
  getEmployById: "getEmployById",
  addEmploy: "addEmploy",
  alterEmployById: "alterEmployById",
  getEmploysBy: "getEmploysBy",
  delEmployById: "delEmployById",
} as const;
type EmployStrategy = typeof EmployStrategy[keyof typeof EmployStrategy];
