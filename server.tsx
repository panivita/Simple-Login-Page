const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/auth", (req, res) => {
  const { email, username } = req.body;
  const loginData = {
    email,
    username,
    token: "test12345",
  };
  res.status(200).json({ message: "success", loginData });
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
