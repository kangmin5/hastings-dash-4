const target = `admin/boards/faq`

export const FaqUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,

  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type FaqUrl = typeof FaqUrl[keyof typeof FaqUrl];

export const FaqAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type FaqAction = typeof FaqAction[keyof typeof FaqAction];


export const FaqStrategy = {
  getAllFaqs: "getAllFaqs",
  getFaqById: "getFaqById",
  addFaq: "addFaq",
  alterFaqById: "alterFaqById",
  getFaqsBy: "getFaqsBy",
  delFaqById: "delFaqById",
} as const;
type FaqStrategy = typeof FaqStrategy[keyof typeof FaqStrategy];
