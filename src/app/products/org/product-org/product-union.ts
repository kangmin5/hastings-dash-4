const target = `admin/products/product`

export const ProductUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
  getByMain: `${target}?do=srch&aim=main`,
} as const;
type ProductUrl = typeof ProductUrl[keyof typeof ProductUrl];

export const ProductAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
  getByMain: `${target}-do-srch-aim-main`,
} as const;
type ProductAction = typeof ProductAction[keyof typeof ProductAction];


export const ProductStrategy = {
  getAllProducts: "getAllProducts",
  getProductById: "getProductById",
  addProduct: "addProduct",
  alterProductById: "alterProductById",
  getProductsBy: "getProductsBy",
  delProductById: "delProductById",
  getProductsByMain: "getProductsByMain",
} as const;
type ProductStrategy = typeof ProductStrategy[keyof typeof ProductStrategy];
