const target = `admin/customers/note`

export const NoteUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type NoteUrl = typeof NoteUrl[keyof typeof NoteUrl];

export const NoteAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type NoteAction = typeof NoteAction[keyof typeof NoteAction];


export const NoteStrategy = {
  getAllNotes: "getAllNotes",
  getNoteById: "getNoteById",
  addNote: "addNote",
  alterNoteById: "alterNoteById",
  getNotesBy: "getNotesBy",
  delNoteById: "delNoteById",
} as const;
type NoteStrategy = typeof NoteStrategy[keyof typeof NoteStrategy];
