const target = `admin/customers/subscribe`

export const SubscribeUrl = {
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getById: `${target}?id=`,
  getAll: `${target}?by=all`,
  getBy: `${target}?do=srch`,
  getByUser: `${target}?do=srch&aim=user`,
} as const;
type SubscribeUrl = typeof SubscribeUrl[keyof typeof SubscribeUrl];

export const SubscribeAction = {
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getById: `${target}-by-id`,
  getAll: `${target}-by-all`,
  getBy: `${target}-do-get`,
  getByUser: `${target}-do-get-by-user`,
} as const;
type SubscribeAction = typeof SubscribeAction[keyof typeof SubscribeAction];


export const SubscribeStrategy = {

  getSubscribeById: "getSubscribeById",
  addSubscribe: "addSubscribe",
  alterSubscribeById: "alterSubscribeById",
  delSubscribeById: "delSubscribeById",
  getAllSubscribes: "getAllSubscribes",
  getSubscribesBy: "getSubscribesBy",
  getSubscribesByUser: "getSubscribesByUser",

} as const;
type SubscribeStrategy = typeof SubscribeStrategy[keyof typeof SubscribeStrategy];
