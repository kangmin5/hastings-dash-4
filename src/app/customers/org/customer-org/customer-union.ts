const target = `admin/customers/customer`

export const CustomerUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type CustomerUrl = typeof CustomerUrl[keyof typeof CustomerUrl];

export const CustomerAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type CustomerAction = typeof CustomerAction[keyof typeof CustomerAction];


export const CustomerStrategy = {
  getAllCustomers: "getAllCustomers",
  getCustomerById: "getCustomerById",
  addCustomer: "addCustomer",
  alterCustomerById: "alterCustomerById",
  getCustomersBy: "getCustomersBy",
  delCustomerById: "delCustomerById",
} as const;
type CustomerStrategy = typeof CustomerStrategy[keyof typeof CustomerStrategy];
