const target = `admin/deliveries/unship`

export const UnshipUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`
} as const
type UnshipUrl = (typeof UnshipUrl)[keyof typeof UnshipUrl]

export const UnshipAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne: `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`
} as const
type UnshipAction = (typeof UnshipAction)[keyof typeof UnshipAction]

export const UnshipStrategy = {
  getAllUnship: 'getAllUnship',
  getUnshipById: 'getUnshipById',
  addUnship: 'addUnship',
  alterUnshipById: 'alterUnshipById',
  getUnshipBy: 'getUnshipBy',
  delUnshipById: 'delUnshipById'
} as const
type UnshipStrategy = (typeof UnshipStrategy)[keyof typeof UnshipStrategy]
