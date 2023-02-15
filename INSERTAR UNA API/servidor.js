// console.log("Esto es una prueba");

// let x = 2 * 5;

// console.log("Esto es lo q'hay " + x);

const htp = require("http");

function sitioweb(req, res) {
    res.writeHead(200, { "Content-type": "test/plain" });
    res.end("mi primer servidor");
}

let servidor = http.createServer(sitioweb);

servidor.listen(6969, "127.0.0.1");

console.log("Servidor corriendo en el puerto 6969");