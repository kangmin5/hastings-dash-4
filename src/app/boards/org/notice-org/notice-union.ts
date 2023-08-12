const target = `admin/boards/notice`

export const NoticeUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  addImage: `admin/boards/notice-image?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type NoticeUrl = typeof NoticeUrl[keyof typeof NoticeUrl];

export const NoticeAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  addImage : `${target}-do-add-image`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type NoticeAction = typeof NoticeAction[keyof typeof NoticeAction];


export const NoticeStrategy = {
  getAllNotices: "getAllNotices",
  getNoticeById: "getNoticeById",
  addNotice: "addNotice",
  alterNoticeById: "alterNoticeById",
  getNoticesBy: "getNoticesBy",
  delNoticeById: "delNoticeById",
} as const;
type NoticeStrategy = typeof NoticeStrategy[keyof typeof NoticeStrategy];
