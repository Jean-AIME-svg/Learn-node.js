const express = require('express');
const rest = express();

let users = [{
    id : 1,
    name : "kevin",
    age : 30,
    email : "kevin@example.com",
}]



rest.get('/api', (req, res) => {
    res.send("welcome to api page")
})
rest.get('/api/users', (req, res) => {
   
   console.log(users)
   
})




rest.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
})