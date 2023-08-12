const target = `admin/quotes/quick`

export const QuickUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type QuickUrl = typeof QuickUrl[keyof typeof QuickUrl];

export const QuickAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type QuickAction = typeof QuickAction[keyof typeof QuickAction];


export const QuickStrategy = {
  getAllQuicks: "getAllQuicks",
  getQuickById: "getQuickById",
  addQuick: "addQuick",
  alterQuickById: "alterQuickById",
  getQuicksBy: "getQuicksBy",
  delQuickById: "delQuickById",
} as const;
type QuickStrategy = typeof QuickStrategy[keyof typeof QuickStrategy];
