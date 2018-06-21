var twit = require('twit/lib/twitter');
var config = require('./config.js');

var fs = require("fs");
var text = fs.readFileSync("./dialog.txt", "utf-8");
var tweets = text.split("\n");

var Twitter = new twit(config);

var i = 0;
var postTweet = function(){
  Twitter.post('statuses/update', {
    status : tweets[i]
  },function(err, data, response){
    console.log(data)
  });
  i += 1;
}

postTweet()

setInterval(postTweet, 30000)
