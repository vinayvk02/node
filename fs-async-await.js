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

const start = async () => {
  try {
    const first = await getFile("./content/first.txt");
    const second = await getFile("./content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
