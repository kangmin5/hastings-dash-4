const target = `admin/quotes/QuickEntry`

export const QuickEntryUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type QuickEntryUrl = typeof QuickEntryUrl[keyof typeof QuickEntryUrl];

export const QuickEntryAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type QuickEntryAction = typeof QuickEntryAction[keyof typeof QuickEntryAction];


export const QuickEntryStrategy = {
  getAllQuickEntries: "getAllQuickEntries",
  getQuickEntryById: "getQuickEntryById",
  addQuickEntry: "addQuickEntry",
  alterQuickEntryById: "alterQuickEntryById",
  getQuickEntriesBy: "getQuickEntriesBy",
  delQuickEntryById: "delQuickEntryById",
} as const;
type QuickEntryStrategy = typeof QuickEntryStrategy[keyof typeof QuickEntryStrategy];
