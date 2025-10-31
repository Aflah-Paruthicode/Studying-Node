
const https = require("https");

function ApiCall() {
  https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched Data Successfully");
  });
}

module.exports = { ApiCall };
