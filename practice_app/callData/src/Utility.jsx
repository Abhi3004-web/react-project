export function Utility(obj, parent = "", res = {}) {
  for (let key in obj) {
    const propName = parent ? `${parent}.${key}` : key;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      Utility(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}