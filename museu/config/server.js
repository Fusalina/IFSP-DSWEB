let express = require('express'); //retorna uma função

let app = express();
let port = process.env.PORT || 3000;


app.use(express.static('./public'));

app.set("view engine", "ejs");

app.listen(port, function(){
    console.log('Servidor rodando com express na porta', port);
});

module.exports = app;