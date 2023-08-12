const target = `admin/boards/inquiry`

export const InquiryUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  addImage: `admin/boards/faq-image?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
  getByUser: `${target}?do=srch&aim=user`,
} as const;
type InquiryUrl = typeof InquiryUrl[keyof typeof InquiryUrl];

export const InquiryAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
  getByUser: `${target}-do-get-by-user`,
} as const;
type InquiryAction = typeof InquiryAction[keyof typeof InquiryAction];


export const InquiryStrategy = {
  getAllInquiries: "getAllInquiries",
  getInquiryById: "getInquiryById",
  addInquiry: "addInquiry",
  alterInquiryById: "alterInquiryById",
  getInquiriesBy: "getInquiriesBy",
  getInquiriesByUser: "getInquiriesByUser",
  delInquiryById: "delInquiryById",
} as const;
type InquiryStrategy = typeof InquiryStrategy[keyof typeof InquiryStrategy];
