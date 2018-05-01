const axios = require("axios");

function getCocktailData() {
  const url = `${process.env.REACT_APP_BASE_URL}:${process.enc.REACT_APP_API_PORT}/api/cocktails`;
  return axios(url).then(response => response.data);
}

export { getCocktailData };