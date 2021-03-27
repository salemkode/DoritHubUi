const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  let path = req.url == "/" ? "dfsf.js" : req.url;
  if (fs.existsSync("./public/" + path)) {
    let re = fs.readFileSync("./public" + path);
    res.write(re);
  } else {
    let re = fs.readFileSync("./public/index.html");
    res.write(re);
  }
  res.end();
});

console.log("Go to : http://127.0.0.1:3000");
server.listen(3000);