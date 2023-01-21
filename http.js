const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("Hello welcome to the Homepage");
//   res.end();
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the Home Page");
  }
  if (req.url === "/about") {
    res.end("This is about page");
  }
  res.end(`
   <h1>Oops!!</h1>
   <p>We can't seem to find the page you're looking for.</p>
   <a href="/"> Back to Home</a>
   `);
});

server.listen(5000);
