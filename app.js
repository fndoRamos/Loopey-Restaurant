const express = require("express");
const hbs = require("hbs")

const app = express();

app.use(express.static("public")); // Make everything inside of public/ available

app.set("views", __dirname + "/views"); // tells our Express app where to look for our views
app.set("view engine", "hbs"); //sets HBS as the template engine

hbs.registerPartials(__dirname + "/views/partials");//tell HBS wich directory we use for partials 

//app.get(path, code);
//app.get(path, (req, res, next) => {});

const dataMargarita = {
  title: "Pizza Margarita",
  price: 12,
  recommendedDrink: "beer",
  imageFile: "pizza-margarita.jpg",
  ingredients: ["mozzarella", "tomato sauce", "basilicum"],
};

const dataVeggie = {
  title: "Veggie Pizza",
  price: 15,
  recommendedDrink: "power smoothie",
  imageFile: "pizza-veggie.jpg",
  ingredients: ["cherry tomatoes", "basilicum", "Olives"],
};

const dataSeafood = {
  title: "Seafood Pizza",
  recommendedDrink: "white wine",
  imageFile: "pizza-seafood.jpg",
  ingredients: ["tomato sauce", "garlic", "prawn"],
};

//get /
app.get("/", (request, response, next) => {
  console.log("we have received a request for the homepage");
  //console.log(request.path);
  //console.log(request.baseUrl);
  //console.log(request.protocol);
  //console.log(request.method);

  response.render("home-page");
});

//get /contact
app.get("/contact", (req, res, next) => {
  res.render("contact-page");
});

app.get("/pizzas/margarita", (req, res, next) => {
  //res.send("page for margarita")
  res.render("product", dataMargarita);
});

app.get("/pizzas/veggie", (req, res, next) => {
  //res.send("page for veggie")
  res.render("product", dataVeggie);
});

app.get("/pizzas/seafood", (req, res, next) => {
  //res.send("page for seafood")
  res.render("product", dataSeafood);
});

app.listen(3000, () => {
  console.log("server listening on port 3000....");
});
