const fs = require("fs");
const http = require("http");

fs.writeFile(
  "sample.txt",
  "Hello World. Welcome to Node.js File System module.",
  function (err) {
    if (err) throw err;
    console.log("File Created!");
  }
);

fs.readFile("sample.txt", function (err, data) {
  if (err) throw err;
  console.log(data.toString());
});

// Using fs
const server = http.createServer(function (req, res) {
  fs.readFile("sample.txt", function (err, data) {
    res.end(data);
  });
});
server.listen(3000);

// Using Streams
const stream_server = http.createServer(function (req, res) {
  const stream = fs.createReadStream("sample.txt");
  stream.pipe(res);
});

stream_server.listen(3001);

const readline = require("readline");
// Reading input from command line
/*


const lineDetail = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lineDetail.question(`Please provide your name - `, (userName) => {
  console.log(`Hi ${userName}`);
  lineDetail.close();
});
*/

// cli,  fs, streams

const lineDetail1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lineDetail1.question(`Please provide the full file path - `, (path) => {
  const server1 = http.createServer((req, res) => {
    const stream1 = fs.createReadStream(`${path}`);
    stream1.pipe(res);
  });
  lineDetail1.close();
  server1.listen(3002);
});
