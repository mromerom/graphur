// Matthew Romero Moore
// github.com/mromerom
// built using https://github.com/shiffman/A2Z-F16/tree/gh-pages/week4-twitter/09_twitter_replier_image

//Creating a Twitter object to connect to Twitter API
var Twit = require('twit');
var config = require('./keys.js');
var T = new Twit(config);

var tweetToReply = {
	"entities":{
		"user_mentions": "[graph3r]"
	}
};

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
	if (err){
		console.log("there was an error.");
	} else {
		console.log("great success!");
	}
}

var fs = require('fs');
var request = require('request');

var exec = require('child_process').exec;

var stream = T.stream('user');
stream.on('tweet', tweetEvent);

function getEquation(tweet){
	var equation = tweet.split("@graph3r")[1];
	return equation;
}

var latexEquation = getEquation(tweet);
var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);
calculator.setExpression({
	'latex': "'" + JSON.parse(latexEquation) + "'"
});

function tweetEvent(tweet){
  	var reply_to = tweet.in_reply_to_screen_name;
  	var name = tweet.user.screen_name;
  	var txt = tweet.text;
  	var media = tweet.entities.media;
	var id = tweet.id_str;

	if (reply_to === 'graph3r'){
		if ((!tweet.text.includes("y=")) && (!tweet.text.includes("x"))){
			var reply = '@' + name + 'invalid equation format!'
		}
	}
}
