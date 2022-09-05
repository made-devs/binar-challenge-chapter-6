const express = require("express");
const ejs = require("ejs");
const models = require("./models");
const app = express();
const { Op } = require("sequelize");

app.set("view engine", "ejs");

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", async (req, res) => {
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
  });
});

app.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  const user = await models.usergamebiodata.findOne({
    where: {
      id: id,
    },
    include: [models.usergame],
  });
  res.render("detail", {
    user: user,
  });
  // res.json(user);
});

// add user
app.get("/create", (req, res) => {
  res.render("create");
});

app.post("/save", async (req, res) => {
  const { username, password } = req.body;
  await models.usergame.create({
    username: username,
    // password: password,
  });
  res.redirect("/");
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

// edit data
app.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const usergame = await models.usergame.findOne({
    where: {
      id: id,
    },
  });

  res.render("edit", {
    usergame: usergame,
  });
});

app.post("/update/:id", async (req, res) => {
  const { id } = req.params;
  const usergame = await models.usergame.findOne({
    where: {
      id: id,
    },
  });
  await usergame.update(req.body);
  res.redirect("/");
});

models.sequelize
  .authenticate()
  .then(() => {
    app.listen(3000, () => {
      console.log("listening port: 3000");
    });
  })
  .catch(console.log);
