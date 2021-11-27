const http = require("http");

const server = http.createServer((req,res) => {
    // res.end("Hello From SUBHAM PAUL!");
    // console.log(req.url)
    if (req.url=="/") {
        res.end("You are in home page");
    } else if (req.url=="/profile") {
        res.end("you're in profile page");
    } else if (req.url=="/about") {
        res.end("you're in about page");
    } else{
        res.end("<h1> 404 error, page not exist </h1>");
    }
})

server.listen(8000,"127.0.0.1", () => {
    console.log("Listening port no 8000");
})