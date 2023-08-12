const target = `admin/system/depart`

export const DepartUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type DepartUrl = typeof DepartUrl[keyof typeof DepartUrl];

export const DepartAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type DepartAction = typeof DepartAction[keyof typeof DepartAction];


export const DepartStrategy = {
  getAllDeparts: "getAllDeparts",
  getDepartById: "getDepartById",
  addDepart: "addDepart",
  alterDepartById: "alterDepartById",
  getDepartsBy: "getDepartsBy",
  delDepartById: "delDepartById",
} as const;
type DepartStrategy = typeof DepartStrategy[keyof typeof DepartStrategy];
