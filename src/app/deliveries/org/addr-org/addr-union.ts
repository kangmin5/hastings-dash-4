const target = `admin/deliveries/addr`

export const AddrUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type AddrUrl = typeof AddrUrl[keyof typeof AddrUrl];

export const AddrAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type AddrAction = typeof AddrAction[keyof typeof AddrAction];


export const AddrStrategy = {
  getAllAddrs: "getAllAddrs",
  getAddrById: "getAddrById",
  addAddr: "addAddr",
  alterAddrById: "alterAddrById",
  getAddrsBy: "getAddrsBy",
  delAddrById: "delAddrById",
} as const;
type AddrStrategy = typeof AddrStrategy[keyof typeof AddrStrategy];
