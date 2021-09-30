const http = require('http');
const app = express()
const fs = require('fs')
const port = 3000;

app.post('/user_create', (req, res) => {
    console.log("Tentativa de criar um novo usuario")
})

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Erro: Arquivo html nao encontrado')
        } else {
            res.write(data)
        }
        res.end();
    })
    
});

//Server will be listening port://3000 on localhost
server.listen(port, function(error) {
    if(error){
        console.log('Something went wrong', error);
    }else{
        console.log('Server is listening on port ', + port);
    }
})


