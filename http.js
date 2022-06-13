const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1><center>Welcome to the <em>HomePAge</em></center></h1> ");
  }
  if (req.url === "/about") {
    res.end("<h1><center>Welcome to the <em>About page</em></center></h1>");
  }
  res.end(`<h1>Oops!</h1>
  <p><em>We Can't seem to find the page you're looking for</em></p>
  <p><a href='/'>back home</a></p>`);
});
server.listen(3500);
