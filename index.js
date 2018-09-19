var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todo');

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));
app.get('/', function(req, res) {
    res.sendFile('index.html')
});
app.use('/api', todoRoutes);
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
})