var http = require('http');

let port = 3000;
let server = http.createServer(function (req, res) {
    let pagina = "";
    let rota = req.url;
    console.log(rota);
    if (rota === '/') {
        pagina = '<html><body>Rota principal</body></html>';
    } else if (rota === '/notas') {
        pagina = '<html><body>Rota das notas</body></html>';
    } else if (rota === '/slides') {
        pagina = '<html><body>Rota dos slides</body></html>';
    } else {
        pagina = '<html><body>Rota nao encontrada</body></html>';
    }
    res.end(pagina);
});

//Server will be listening port://3000 on localhost
server.listen(port);
console.log('Servidor escutando porta ', port);


