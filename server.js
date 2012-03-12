var http = require('http');
var redis = require('redis');
var client = redis.createClient();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var count = 0;
    client.get('awesome', function(error,result){
      if(error) {
        res.end(error);
      } else {
        res.end("awesome: " + result);
      };
    });
}).listen(3000);

console.log('Server running on port 3000');
