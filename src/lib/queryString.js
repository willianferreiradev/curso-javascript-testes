module.exports.queryString = (obj) => {
  return Object.keys(obj).map(value => `${value}=${obj[value]}`).join('&');
}