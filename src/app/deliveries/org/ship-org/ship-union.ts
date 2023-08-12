const target = `ships/ship`

export const ShipUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type ShipUrl = typeof ShipUrl[keyof typeof ShipUrl];

export const ShipAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type ShipAction = typeof ShipAction[keyof typeof ShipAction];


export const ShipStrategy = {
  getAllShips: "getAllShips",
  getShipById: "getShipById",
  addShip: "addShip",
  alterShipById: "alterShipById",
  getShipsBy: "getShipsBy",
  delShipById: "delShipById",
} as const;
type ShipStrategy = typeof ShipStrategy[keyof typeof ShipStrategy];
