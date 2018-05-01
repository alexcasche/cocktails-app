module.exports = {
  capitalize: function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  objToArray: function(obj) {
    let array = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        array.push({ key: key, value: obj[key] });
      }
    }
    return array;
  },
  buildQuery: function(arr) {
    let queryString;
    arr.forEach((query) => {
      queryString = `${queryString}${query.key}=${query.value}&`;
    })
    return queryString.slice(0, -1);
  }
}