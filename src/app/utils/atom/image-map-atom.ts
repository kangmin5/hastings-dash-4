export function ImageMap() {

  function get(key?: string) {
    const defaultKey = "default";
    const map = {
      imageUrl: "https://media.newyorker.com/photos/5e59705cdce85800084faae0/master/w_1600%2Cc_limit/200309_r35983b.jpg",

    };
    return map[key] ?? map[defaultKey];
  }

  return Object.freeze({
    get,
  });
}


