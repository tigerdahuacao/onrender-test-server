const app = require("express")();

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderFeild"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get("/get-fruit-list",(req, res) => {
    const list=["Apple","Banana","Citrus"]
  res.status(200).send(JSON.stringify(list));
})

app.post("/post-mock-test-data-user-jack", (req, res) => {
    const obj={
        "name": "Jack Grealish",
        "gender":"male",
        "nation":"England",
        "profession": "Soccer Player"
    }
  res.status(200).send(JSON.stringify(obj));
});

app.get("/", function (req, res) {
  res.status(200).send("Welcome to onrender-test-server by Petro, You will get some mock data here!");
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(JSON.stringify(server.address()))

  console.log("应用实例，访问地址为 http://localhost:8080", host, port);
});