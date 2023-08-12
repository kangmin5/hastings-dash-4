const target = `admin/orders/order`

export const OrderUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
  getByUser: `${target}?do=srch&aim=user`,
} as const;
type OrderUrl = typeof OrderUrl[keyof typeof OrderUrl];

export const OrderAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
  getByUser: `${target}-do-get-by-user`,
} as const;
type OrderAction = typeof OrderAction[keyof typeof OrderAction];


export const OrderStrategy = {
  getAllOrders: "getAllOrders",
  getOrderById: "getOrderById",
  addOrder: "addOrder",
  alterOrderById: "alterOrderById",
  getOrdersBy: "getOrdersBy",
  delOrderById: "delOrderById",
  getOrdersByUser: "getOrdersByUser",
} as const;
type OrderStrategy = typeof OrderStrategy[keyof typeof OrderStrategy];
