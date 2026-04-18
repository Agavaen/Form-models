const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.get("/form", (req, res) => {
  res.render("form");
});


app.post("/form", (req, res) => {
  const { name, age } = req.body;


  if (!name || !age) {
    return res.render("result", {
      success: false,
      message: "Ошибка: заполните все поля"
    });
  }

  if (age < 0 || age > 120) {
    return res.render("result", {
      success: false,
      message: "Ошибка: некорректный возраст"
    });
  }

  res.render("result", {
    success: true,
    message: "Форма успешно отправлена!"
  });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});