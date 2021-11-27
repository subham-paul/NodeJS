const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {

    // in this process you not streaming
   /*  fs.readFile("stream.txt", (err, data) => {
        if(err) return console.error(err);
        res.end(data.toString());
    }); */

    // in this process you streaming, chunkdata parameter name
 /*    const rStream = fs.createReadStream("stream.txt");
    rStream.on("data", (chunkdata) => {
        res.write(chunkdata);
    });
    rStream.on("end", () => {
        res.end();
    });
    rStream.on("error", (err) => {
        console.log(err);
        res.end("file not found");
    }); */


    // 2nd way
    const rStream = fs.createReadStream("stream.txt");
    rStream.pipe(res);
});

server.listen(8000,"127.0.0.1");