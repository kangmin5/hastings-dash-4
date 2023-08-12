const target = `quotes/simple`

export const SimpleUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type SimpleUrl = typeof SimpleUrl[keyof typeof SimpleUrl];

export const SimpleAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type SimpleAction = typeof SimpleAction[keyof typeof SimpleAction];


export const SimpleStrategy = {
  getAllSimples: "getAllSimples",
  getSimpleById: "getSimpleById",
  addSimple: "addSimple",
  alterSimpleById: "alterSimpleById",
  getSimplesBy: "getSimplesBy",
  delSimpleById: "delSimpleById",
} as const;
type SimpleStrategy = typeof SimpleStrategy[keyof typeof SimpleStrategy];
