const target = `troubles/trouble`

export const TroubleUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type TroubleUrl = typeof TroubleUrl[keyof typeof TroubleUrl];

export const TroubleAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-srch`,
} as const;
type TroubleAction = typeof TroubleAction[keyof typeof TroubleAction];


export const TroubleStrategy = {
  getAllFailureTrouble: "getAllFailureTrouble",
  rejectedTrouble: "rejectedTrouble",
  getByIdFailureTrouble: "getByIdFailureTrouble",
  addOneFailureTrouble: "addOneFailureTrouble",
  alterByIdFailureTrouble: "alterByIdFailureTrouble",
  getByFailureTrouble: "getByFailureTrouble",
  delByIdFailureTrouble: "delByIdFailureTrouble",
  successIsFalseTrouble: "successIsFalseTrouble",
  hasNotAccessTokenTrouble: "hasNotAccessTokenTrouble",
} as const;
type TroubleStrategy = typeof TroubleStrategy[keyof typeof TroubleStrategy];
