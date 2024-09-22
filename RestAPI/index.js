const express = require("express");
const fs = require('fs');
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//middleware - plugin
app.use(express.urlencoded({ extended: false}));

// Middleware to parse JSON request bodies
app.use(express.json());

app.get("/users", (req, res) => {
    const html = `
    <ul>
      ${users.map(user => `<li>${user.first_name}</li>`).join(" ")}
    </ul>
    `;
    res.send(html);
});

// REST API 
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app
   .route("/api/users/:id")
   .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ error: "User not found" });
    }
})
   .patch((req, res) => {
      // Edit the user with id
     return res.json({ status: "pending" });
})
   .delete((req, res) => {
      // Delete the user with id 
     return res.json({ status: "pending" });
});

app.post("/api/users", (req, res) => {
    const body = req.body;
    //console.log("Body", body); 
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length });
    });
});

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));


