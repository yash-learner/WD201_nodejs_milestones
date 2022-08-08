const fs = require("fs");
const http = require("http");
const readline = require("readline");

let homeContent = "";
let projectContent = "";
let registrationContent = "";
let scriptContent = "";
let cssContent = "";

fs.readFile("home.html", function (err, home) {
  if (err) throw err;
  homeContent = home;
});

fs.readFile("project.html", function (err, project) {
  if (err) throw err;
  projectContent = project;
});

fs.readFile("form.js", function (err, form) {
  if (err) throw err;
  scriptContent = form;
});

fs.readFile("main.css", function (err, main) {
  if (err) throw err;
  cssContent = main;
});

const lineDetail1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lineDetail1.question(
  `Please provide the path for project (input:registration.html) `,
  (path) => {
    fs.readFile(`${path}`, function (err, registration) {
      if (err) throw err;
      registrationContent = registration;
    });
    lineDetail1.close();
  }
);

http
  .createServer(function (request, response) {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/form.js":
        response.write(scriptContent);
        response.end();
        break;
      case "/main.css":
        response.writeHeader(200, { "Content-Type": "text/css" });
        response.write(cssContent);
        response.end();
        break;
      case "/registration":
        response.write(registrationContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(3000);
