const express = require("express");
const app = express();
const port = 3000

app.get("/data", (req,res) => {
    res.json({"topic":"Learning CORS"});
});

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
});