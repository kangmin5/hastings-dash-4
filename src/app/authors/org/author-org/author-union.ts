const target = `admin/authors/author`
export const AuthorUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
  login: `${target}?do=login`,
  logout: `${target}?do=logout`,
} as const;
type AuthorUrl = typeof AuthorUrl[keyof typeof AuthorUrl];

export const AuthorAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
  login: `${target}-do-login`,
  logout: `${target}-do-logout`,
} as const;
type AuthorAction = typeof AuthorAction[keyof typeof AuthorAction];


export const AuthorStrategy = {
  getAllAuthors: "getAllAuthors",
  getAuthorById: "getAuthorById",
  addAuthor: "addAuthor",
  alterAuthorById: "alterAuthorById",
  getAuthorsBy: "getAuthorsBy",
  delAuthorById: "delAuthorById",
} as const;
type AuthorStrategy = typeof AuthorStrategy[keyof typeof AuthorStrategy];
