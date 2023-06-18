const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World here");
});

const users = [
  {
    id: 1,
    name: "Nizam",
    email: "Nizamuddin15bd@gmail.com",
    phone: "01254865141",
  },
  { id: 2, name: "uddin", email: "uddin15bd@gmail.com", phone: "01254865141" },
  { id: 3, name: "Niloy", email: "niloy15bd@gmail.com", phone: "01254865141" },
  { id: 4, name: "faihan", email: "faihan@gmail.com", phone: "01254865141" },
  { id: 5, name: "hasan", email: "hasan@gmail.com", phone: "01254865141" },
  { id: 6, name: "ullah", email: "ullah@gmail.com", phone: "01254865141" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.listen(port, () => {
  console.log("Example app listening on port", port);
});
