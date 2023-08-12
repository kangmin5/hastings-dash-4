const target = `systems/company`

export const CompanyUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type CompanyUrl = typeof CompanyUrl[keyof typeof CompanyUrl];

export const CompanyAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type CompanyAction = typeof CompanyAction[keyof typeof CompanyAction];


export const CompanyStrategy = {
  getAllCompanies: "getAllCompanies",
  getCompanyById: "getCompanyById",
  addCompany: "addCompany",
  alterCompanyById: "alterCompanyById",
  getCompaniesBy: "getCompaniesBy",
  delCompanyById: "delCompanyById",
} as const;
type CompanyStrategy = typeof CompanyStrategy[keyof typeof CompanyStrategy];
