const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyparser = require("body-parser");
const session = require("express-session");
const MaskData = require("maskdata");

const { v4: uuidv4 } = require("uuid");
const ejs = require("ejs");
const models = require("./models");
const app = express();
const { Op } = require("sequelize");
const credential = fs.readFileSync("users.json");
const users = JSON.parse(credential);

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

// masking password
const password = "pL4Y3r";
const maskPasswordOpt = {
  maskWith: "*",
  maxMaskedCharacters: 16,
};
const maskedPassword = MaskData.maskPassword(users.password, maskPasswordOpt);

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(
  session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  })
);

// Load static asset
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

app.get("/", (req, res) => {
  res.render("login");
});

// login user
app.post("/login", (req, res) => {
  if (req.body.email == users.username && req.body.password == users.password) {
    req.session.user = req.body.email;
    res.redirect("/dashboard");
  } else {
    res.end("Invalid Username");
  }
});

// route for dashboard
app.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.status(200);
    res.render("dashboard", { user: req.session.user });
  } else {
    res.send("Unauthorize User");
  }
});

// route for games
app.get("/games", (req, res) => {
  if (req.session.user) {
    res.status(200);
    res.render("games", { user: req.session.user });
  } else {
    res.send("Unauthorize User");
  }
  // res.render("games");
});

// route for api
app.get("/api", (req, res) => {
  res.status(200).send({ username: users.username, password: maskedPassword });
});

// Dashboard user
app.get("/index", async (req, res) => {
  if (req.session.user) {
    res.status(200);
    const searchUser = req.query.search_user;
    let usergames;
    if (!searchUser) {
      usergames = await models.usergame.findAll();
    } else {
      usergames = await models.usergame.findAll({
        where: {
          username: {
            [Op.iLike]: `%${searchUser}%`,
          },
        },
      });
    }
    res.render("index", {
      usergames: usergames,
      search_user: searchUser,
      user: req.session.user,
    });
  } else {
    res.send("Unauthorize User");
  }
});

app.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  const user = await models.usergame.findOne({
    where: { id: id },
    include: [models.usergamebiodata, models.usergamehistory],
  });
  const histories = user.usergamehistories;

  res.render("detail", { user, histories });
});

// Add new user
app.get("/create", (req, res) => {
  res.render("create");
});

app.post("/save", async (req, res) => {
  const { username, password } = req.body;
  await models.usergame.create({
    username: username,
    password: password,
  });
  res.redirect("/index");
});

// delete user
app.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await models.usergame.destroy({
    where: {
      id: id,
    },
  });
  res.redirect("/");
});

// Edit data user
app.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const user = await models.usergamebiodata.findOne({
    where: {
      id: id,
    },
    include: [models.usergame],
  });

  res.render("edit", {
    user: user,
  });
  // res.json(user);
});

app.post("/update/:id", async (req, res) => {
  const { id } = req.params;
  const user = await models.usergame.findOne({
    where: {
      id: id,
    },
  });
  const biodata = await models.usergamebiodata.findOne({
    where: {
      id: id,
    },
  });
  await user.update(req.body);
  await biodata.update(req.body);
  res.redirect("/index");
});

// Add biodata user
app.get("/add/:id", async (req, res) => {
  const { id } = req.params;
  const user = await models.usergame.findOne({
    where: { id: id },
  });
  res.render("add", { user });
});

app.post("/add/:id", async (req, res) => {
  const { id } = req.params;
  const { usergameId, dob, pob, city, gender } = req.body;
  await models.usergamebiodata.create({
    usergameId: usergameId,
    dob: dob,
    pob: pob,
    city: city,
    gender: gender,
  });
  res.redirect("/index");
});

models.sequelize
  .authenticate()
  .then(() => {
    app.listen(port, () => {
      console.log("listening port: 3000");
    });
  })
  .catch(console.log);
