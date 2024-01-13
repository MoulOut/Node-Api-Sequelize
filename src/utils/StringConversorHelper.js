module.exports = (paramsObject) => {
  for (let property in paramsObject) {
    if (/Id|oid/.test(property)) {
      paramsObject[property] = Number(paramsObject[property]);
    }
  }
  return paramsObject;
};
