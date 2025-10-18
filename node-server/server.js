// const http = require("http");

// const hostname = '127.0.0.1';

// const port = 4000 ; 

// const server = http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/plain');


//     res.write('random somethign data for gettingh undertanding of write ueueueueueueueeeeueuueueuue');
//     res.write("   delayed in data hahhahahhahhahahah  ")
//     setTimeout(()=>{
//         res.end(`sending of server nodejs hehehhehehe!${process.ppid}`,);  //when end is call then we consider the http complete
//     },3000)
    


// });

// server.listen(port,hostname,()=>{
//     console.log(`Node Server is running at ${hostname} : ${port} `)
// })





// import http from "http";

// const port = 5000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome to Node.js server");
//   } else if (req.url === "/time") {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ time: new Date() }));
//   } else {
//     res.writeHead(404);
//     res.end("Not Found");
//   }
// });

// server.listen(port, () => console.log(`Server running on port ${port}`));



import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/block") {
    const start = Date.now();
    while (Date.now() - start < 5000) {}
    res.end("Blocked for 5 seconds");
  } else {
    res.end("Fast route");
  }
});

server.listen(5000, () => console.log("Server started"));
