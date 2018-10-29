var http=require("http");
var fs=require("fs");
var path=require("path");
http.createServer(function(req,res){
	if(req.url==="/new"){
		res.setHeader("Content-type",'text/html');
		fs.readFile(path.join(__dirname,"new.html"),function(err,data){
			if(!err){
				res.end(data);
			}
		});
	}
	else if(req.url==="/1.jpeg"){
		fs.readFile(path.join(__dirname,"1.jpeg"),function(err,data){
			if(!err){
				res.setHeader("Content-Type","image/jpeg");
				res.end(data);
			}
		});
	}
	else {
		res.end("can't find");
	}
}).listen(8080,function(){
	console.log("服务器加载成功！");
});
