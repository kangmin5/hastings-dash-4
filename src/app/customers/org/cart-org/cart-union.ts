const target = `admin/customers/cart`

export const CartUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
  getByUser: `${target}?do=srch&aim=user`,
} as const;
type CartUrl = typeof CartUrl[keyof typeof CartUrl];

export const CartAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
  getByUser: `${target}-do-get-by-user`,
} as const;
type CartAction = typeof CartAction[keyof typeof CartAction];


export const CartStrategy = {
  getAllCarts: "getAllCarts",
  getCartById: "getCartById",
  addCart: "addCart",
  alterCartById: "alterCartById",
  getCartsBy: "getCartsBy",
  getCartsByUser: "getCartsByUser",
  delCartById: "delCartById",
} as const;
type CartStrategy = typeof CartStrategy[keyof typeof CartStrategy];
