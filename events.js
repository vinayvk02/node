// const { readFile } = require("fs");

// console.log("Starting the first task");

// readFile("./content/first.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
//   console.log("Inside the callback");
// });

// console.log("Started the first task");

// Second Example

// console.log("First");

// setTimeout(() => {
//   console.log("Second");
// }, 0);

// console.log("Third");

//Third Example

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request created");
  res.write("hello world");
});

server.listen(5000, () => {
  console.log("server successfully started running......");
});
