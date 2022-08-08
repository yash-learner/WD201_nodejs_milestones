const fs = require("fs");
const http = require("http");

fs.readFile("home.html", function (err, home) {
  if (err) throw err;
  http
    .createServer((request, response) => {
      response.writeHeader(200, { "content-type": "text/html" });
      response.write(home);
      response.end();
    })
    .listen(3000);
});
