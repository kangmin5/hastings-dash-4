const target = `admin/boards/counsel`

export const CounselUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
  getByUser: `${target}?do=srch&aim=user`,
} as const;
type CounselUrl = typeof CounselUrl[keyof typeof CounselUrl];

export const CounselAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
  getByUser: `${target}-do-get-by-user`,
} as const;
type CounselAction = typeof CounselAction[keyof typeof CounselAction];


export const CounselStrategy = {
  getAllCounsels: "getAllCounsels",
  getCounselById: "getCounselById",
  addCounsel: "addCounsel",
  alterCounselById: "alterCounselById",
  getCounselsBy: "getCounselsBy",
  getCounselsByUser: "getCounselsByUser",
  delCounselById: "delCounselById",
} as const;
type CounselStrategy = typeof CounselStrategy[keyof typeof CounselStrategy];
