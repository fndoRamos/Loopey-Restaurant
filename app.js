const express = require("express");

const app = express();

app.use(express.static("public")); // Make everything inside of public/ available

//app.get(path, code);
//app.get(path, (req, res, next) => {});

//get /
app.get("/", (request, response, next) => {
  console.log("we have received a request for the homepage");
  //console.log(request.path);
  //console.log(request.baseUrl);
  //console.log(request.protocol);
  //console.log(request.method);

  response.sendFile(__dirname + "/views/home-page.html");
});

//get /contact
app.get("/contact", (req, res, next) => {
    res.sendFile(__dirname + "/views/contact-page.html");
});

app.listen(3000, () => {
  console.log("server listening on port 3000....");
});
