const target = `admin/customers/tunnel`

export const TunnelUrl = {
  getAll: `${target}?by=all`,
  getById: `${target}?id=`,
  addOne: `${target}?do=add`,
  alterById: `${target}?do=alter`,
  delById: `${target}?do=del`,
  getBy: `${target}?do=srch`,
} as const;
type TunnelUrl = typeof TunnelUrl[keyof typeof TunnelUrl];

export const TunnelAction = {
  getAll: `${target}-by-all`,
  getById: `${target}-by-id`,
  addOne : `${target}-do-add`,
  alterById: `${target}-do-alter`,
  delById: `${target}-do-del`,
  getBy: `${target}-do-get`,
} as const;
type TunnelAction = typeof TunnelAction[keyof typeof TunnelAction];


export const TunnelStrategy = {
  getAllTunnels: "getAllTunnels",
  getTunnelById: "getTunnelById",
  addTunnel: "addTunnel",
  alterTunnelById: "alterTunnelById",
  getTunnelsBy: "getTunnelsBy",
  delTunnelById: "delTunnelById",
} as const;
type TunnelStrategy = typeof TunnelStrategy[keyof typeof TunnelStrategy];
