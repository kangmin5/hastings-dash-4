const target = `admin/customers/point`

export const PointUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
  getByUser: `${target}?do=src&aim=user`,
} as const;
type PointUrl = typeof PointUrl[keyof typeof PointUrl];

export const PointAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
  getByUser: `${target}-do-get-by-user`,
} as const;
type PointAction = typeof PointAction[keyof typeof PointAction];


export const PointStrategy = {
  getAllPoints: "getAllPoints",
  getPointById: "getPointById",
  addPoint: "addPoint",
  alterPointById: "alterPointById",
  getPointsBy: "getPointsBy",
  delPointById: "delPointById",
  getPointsByUser: "getPointsByUser",
} as const;
type PointStrategy = typeof PointStrategy[keyof typeof PointStrategy];
