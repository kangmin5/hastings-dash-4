const target = `products/cat`

export const CatUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type CatUrl = typeof CatUrl[keyof typeof CatUrl];

export const CatAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type CatAction = typeof CatAction[keyof typeof CatAction];


export const CatStrategy = {
  getAllCategories: "getAllCategories",
  getCatById: "getCatById",
  addCat: "addCat",
  alterCatById: "alterCatById",
  getCategoriesBy: "getCategoriesBy",
  delCatById: "delCatById",
} as const;
type CatStrategy = typeof CatStrategy[keyof typeof CatStrategy];
