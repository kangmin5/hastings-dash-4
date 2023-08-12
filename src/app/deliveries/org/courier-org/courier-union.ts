const target = `admin/deliveries/courier`

export const CourierUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type CourierUrl = typeof CourierUrl[keyof typeof CourierUrl];

export const CourierAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type CourierAction = typeof CourierAction[keyof typeof CourierAction];


export const CourierStrategy = {
  getAllCouriers: "getAllCouriers",
  getCourierById: "getCourierById",
  addCourier: "addCourier",
  alterCourierById: "alterCourierById",
  getCouriersBy: "getCouriersBy",
  delCourierById: "delCourierById",
} as const;
type CourierStrategy = typeof CourierStrategy[keyof typeof CourierStrategy];
