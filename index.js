const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

// filter by search query parameter
app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLocaleLowerCase();
    const matched = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

// POST
app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("Example app listening on port", port);
});
