const fetch = require("node-fetch");

const httpPost =
  (url) =>
  async (data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*"
      },
      body: JSON.stringify(data),
    });
    return response;
  };


  module.exports.httpPost = httpPost
