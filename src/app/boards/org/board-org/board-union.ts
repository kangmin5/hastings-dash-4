const target = `boards/board`

export const BoardUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type BoardUrl = typeof BoardUrl[keyof typeof BoardUrl];

export const BoardAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type BoardAction = typeof BoardAction[keyof typeof BoardAction];


export const BoardStrategy = {
  getAllBoards: "getAllBoards",
  getBoardById: "getBoardById",
  addBoard: "addBoard",
  alterBoardById: "alterBoardById",
  getBoardsBy: "getBoardsBy",
  delBoardById: "delBoardById",
} as const;
type BoardStrategy = typeof BoardStrategy[keyof typeof BoardStrategy];
