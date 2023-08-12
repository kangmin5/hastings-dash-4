const target = `products/attr`

export const AttrUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type AttrUrl = typeof AttrUrl[keyof typeof AttrUrl];

export const AttrAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type AttrAction = typeof AttrAction[keyof typeof AttrAction];


export const AttrStrategy = {
  getAllAttrs: "getAllAttrs",
  getAttrById: "getAttrById",
  addAttr: "addAttr",
  alterAttrById: "alterAttrById",
  getAttrsBy: "getAttrsBy",
  delAttrById: "delAttrById",
} as const;
type AttrStrategy = typeof AttrStrategy[keyof typeof AttrStrategy];
