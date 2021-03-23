const fs = require('fs');
const http = require('http');
const watch = require('watch');
const che = require('child_process');

const server = http.createServer((req, res) => {
  // console.log(req.url);

  let path = req.url == "/" ? "dfsf.js" : req.url;
  if (fs.existsSync("./public/" + path)) {
    let re = fs.readFileSync("./public" + path);
    res.write(re);
  } else {
    let re = fs.readFileSync("./public/index.html");
    res.write(re);
    // res.statusCode = 400
  }
  res.end();
});

watch.watchTree("./src", function (f, curr, prev) {
  // Fire server-side reload event
  console.log("Reload bulid");
  che.exec("yarn run build")
});
console.log("Go to : http://127.0.0.1:3000");
server.listen(3000);