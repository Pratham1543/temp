const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("welcome to our about page");
  }
  res.end(
    `<h1> OOPs</h1>
    <p>we cant find the page</p>
    <a href="/">back to the homepage</a>
    `
  );
});

server.listen(5000);
