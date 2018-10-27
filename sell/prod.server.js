var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/',function (req,res,next) {
  req.url='index.html';
  next();
});

app.use(router);

var appData=require('./data.json');
var seller=appData.seller;
var goods=appData.goods;
var ratings=appData.ratings;
app.get('/api/seller',function(req,res){
  res.json({
    errno: 0,
    data: seller
  });
});
app.get('/api/goods',function(req,res){
  res.json({
    errno: 0,
    data: goods
  });
});
app.get('/api/ratings',function(req,res){
  res.json({
    errno: 0,
    data: ratings
  });
});

app.use(express.static('./dist'));

module.exports = app.listen(port,function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log('Listening at http://192.168.10.171:'+port+'\n');
});
