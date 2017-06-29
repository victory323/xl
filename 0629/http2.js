/**
 * Created by Administrator on 2017/6/29.
 */


var http=require("http")

var fs=require("fs");


//http.createServer(function (req, res) {
//  console.log(req.url);
//  if(req.url=="/index.html"){
//      fs.readFile("index.html","utf-8", function (err, data) {
//
//          if(err){
//              console.log("读取失败");
//              console.log(err);
//
//          }else{
//              res.writeHead(200, {"content-type":"text/html;charest=utf8"})
//              res.end(data)
//          }
//      })
//  }else if(req.url=="/index.css"){
//      fs.readFile("index.css","utf-8", function (err, data) {
//
//          if(err){
//              console.log("读取失败");
//              console.log(err);
//
//          }else{
//              res.writeHead(200, {"content-type":"text/css;charest=utf8"})
//              res.end(data)
//          }
//      })
//  }else if(req.url=="/index.js"){
//      fs.readFile("index.js","utf-8", function (err, data) {
//
//          if(err){
//              console.log("读取失败");
//              console.log(err);
//
//          }else{
//              res.writeHead(200, {"content-type":"text/javascript;charest=utf8"})
//              res.end(data)
//          }
//      })
//  }else if(req.url=="/demo.html"){
//      fs.readFile("demo.html","utf-8", function (err, data) {
//
//          if(err){
//              console.log("读取失败");
//              console.log(err);
//
//          }else{
//              res.writeHead(200, {"content-type":"text/html;charest=utf8"})
//              res.end(data)
//          }
//      })
//  } else if(req.url=="/4.jpg"){
//      fs.readFile("4.jpg", function (err, data) {
//
//          if(err){
//              console.log("读取失败");
//              console.log(err);
//
//          }else{
//              res.writeHead(200, {"content-type":"image/jpeg;charest=utf8"})
//              res.end(data)
//          }
//      })
//  }
//
//}).listen(3000)

//switch
http.createServer(function(req,res){
	var url=req.url;
	switch(url){
	case "/index.html":fs.readFile("index.html","utf-8", function (err, data) {

            if(err){
                console.log("读取失败");
                console.log(err);

            }else{
                res.writeHead(200, {"content-type":"text/html;charest=utf8"})
                res.end(data)
            }
        })
	break;
	case "/index.css":fs.readFile("index.css","utf-8", function (err, data) {

            if(err){
                console.log("读取失败");
                console.log(err);

            }else{
                res.writeHead(200, {"content-type":"text/css;charest=utf8"})
                res.end(data)
            }
        })
	break;
	case "/index.js":fs.readFile("index.js","utf-8", function (err, data) {

            if(err){
                console.log("读取失败");
                console.log(err);

            }else{
                res.writeHead(200, {"content-type":"text/javascript;charest=utf8"})
                res.end(data)
            }
        })
	break;
	case "/demo.html":fs.readFile("demo.html","utf-8", function (err, data) {

            if(err){
                console.log("读取失败");
                console.log(err);

            }else{
                res.writeHead(200, {"content-type":"text/html;charest=utf8"})
                res.end(data)
            }
        })
	break;
	case "/4.jpg":fs.readFile("4.jpg", function (err, data) {

            if(err){
                console.log("读取失败");
                console.log(err);

            }else{
                res.writeHead(200, {"content-type":"image/jpeg;charest=utf8"})
                res.end(data)
            }
        })
	break;
}
}).listen(3000)

