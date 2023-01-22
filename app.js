const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/result-final.txt",
      `Final file : ${first},${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// getFile("../content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// const getFile = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, result) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(result);
//     });
//   });
// };
