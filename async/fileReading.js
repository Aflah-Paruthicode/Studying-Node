const fs = require("fs");

function readTextFile() {
  fs.readFile("./file", "utf8", (err, data) => {
    console.log("File Data : ", data);
  });
}

module.exports = { readTextFile };
