export const enum department {
  name = `personnel`
}
export const enum actor {
  self = `manager`,
  model = `Employee`,
  instance = `employee`,
  directory = `employees`
}

export const enum urn {
  add = `${actor.self}/${actor.directory}`,
  all = `${actor.self}/${actor.directory}`,
  some = `${actor.self}/${actor.directory}/search`,
  one = `${actor.self}/${actor.directory}?id=`,
  alter = `${actor.self}/${actor.directory}?id=`,
  remove = `${actor.self}/${actor.directory}?id=`,
}
export const enum action {
  add = `post`,
  all = `get`,
  some = `post`,
  one = `get`,
  alter = `put`,
  remove = `delete`
}

export const enum slice {
  name = `${actor.instance}`,
  add = `${actor.self}/add${actor.model}`,
  all = `${actor.self}/all${actor.model}s`,
  some = `${actor.self}/some${actor.model}s`,
  one = `${actor.self}/one${actor.model}`,
  alter = `${actor.self}/alter${actor.model}`,
  remove = `${actor.self}/remove${actor.model}`,
}




