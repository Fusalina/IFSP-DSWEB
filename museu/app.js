const app = require('./config/server');
app.use(express.static('./public'));

app.get('/', function(req, res){
    // let pagina = '<html><body>Museu Virtual</body></html>';
    // res.send(pagina)
    res.render("home.ejs");
})

app.get('/tarsila', function(req, res){
    // let pagina = '<html><body>Obras: Tarsila do Amaral</body></html>';
    // res.send(pagina)
    res.render("tarsila.ejs");
})

app.get('/portinari', function(req, res){
    // let pagina = '<html><body>Obras: Cândido Portinari</body></html>';
    // res.send(pagina)
    res.render("portinari.ejs")
})