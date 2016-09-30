var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/animate.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'animate.css'));
});

app.get('/ui/font-awesome.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'font-awesome.min.css'));
});
app.get('/ui/jquery.fancybox.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.fancybox.css'));
});
app.get('/ui/jquery.fs.boxer.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.fs.boxer.min.css'));
});
app.get('/ui/lightview.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'lightview.css'));
});
app.get('/ui/main.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.css'));
});
app.get('/ui/owl.carousel.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'owl.carousel.css'));
});
app.get('/ui/slit-slider.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'slit-slider.css'));
});
app.get('/ui/superslides.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'superslides.css'));
});
app.get('/ui/bootstrap.min.css', function (req,res){
    res.sendFile(path.join(__dirname, 'ui','bootstrap.min.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ethixx', function (req, res)
{
    res.sendFile(path.join(__dirname, 'ui', 'home.html'));
});
app.get('/ethixx', function (req, res)
{
    res.sendFile(path.join(__dirname, 'ui', 'index1.html'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
