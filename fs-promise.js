const { readFile } = require("fs");

const getFile = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

getFile("../content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
