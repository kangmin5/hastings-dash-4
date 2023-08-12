const target = `quotes/quote`

export const QuoteUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type QuoteUrl = typeof QuoteUrl[keyof typeof QuoteUrl];

export const QuoteAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type QuoteAction = typeof QuoteAction[keyof typeof QuoteAction];


export const QuoteStrategy = {
  getAllQuotes: "getAllQuotes",
  getQuoteById: "getQuoteById",
  addQuote: "addQuote",
  alterQuoteById: "alterQuoteById",
  getQuotesBy: "getQuotesBy",
  delQuoteById: "delQuoteById",
} as const;
type QuoteStrategy = typeof QuoteStrategy[keyof typeof QuoteStrategy];
