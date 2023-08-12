const target = `admin/systems/image`

export const ImageUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type ImageUrl = typeof ImageUrl[keyof typeof ImageUrl];

export const ImageAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type ImageAction = typeof ImageAction[keyof typeof ImageAction];


export const ImageStrategy = {
  getAllCompanies: "getAllCompanies",
  getImageById: "getImageById",
  addImage: "addImage",
  alterImageById: "alterImageById",
  getCompaniesBy: "getCompaniesBy",
  delImageById: "delImageById",
} as const;
type ImageStrategy = typeof ImageStrategy[keyof typeof ImageStrategy];
