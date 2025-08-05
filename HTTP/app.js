let http = require("http");

const port = 3131

http.createServer((req, res) => {
    console.log(`Servidor rodando na port ${port}
    http://localhost:3131`);
    res.end("<h1>bem vindo ao servidor</h1>");
}).listen(port);