const express = require("express");
const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" },
];


app.get("/api", (req, res) => {
    res.json(users);
    res.json({ message: "Hello World" });
});

app.post("/api/users", (req, res)=>{
    console.log(req.body)
    users.push(req.body)
    res.json({status : "ok"})
})

app.get("/api/users/:id", (req, res)=>{
    console.log(req.params.id)
    res.json(users[req.params.id])
})

app.put("/api/users/:id", (req, res)=>{
    const id = req.params.id
    users[id] = req.body
    res.json({status:"ok"})
})

app.delete("/api/users/:id", (req, res)=>{
    const id = req.params.id
    users.splice(id,1)
    res.json({status:"deleted"})
})

app.listen(8000, (()=>console.log('You have successfully connected to port 8000')))