const express = require("express");
const cors    = require("cors");
const app = express();
const port = 3000

app.use(
    cors({
        origin: "http://192.168.1.3:8081",
        methods: ['GET', 'POST','PUT'],
        credentials : true,
        //allowedHeaders 
        //maxAge
    })
);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/data", (req,res) => {
    res.json({"topic":"Learning CORS"});
});

app.put("/data", (req,res) => {
    res.json({"isSuccess":true});
});

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
});