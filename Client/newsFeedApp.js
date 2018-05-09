const pgp = require('pg-promise')();
const db = pgp('postgres://db2user:leftovers@db2.cvyqrq8vd48c.us-west-1.rds.amazonaws.com:5432/db2');
const express = require('express')
const app = express();

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))



db.one('SELECT * FROM "NEWS_FEED"')
		.then(function(data){
			app.get('/data/newsfeed', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});


db.one('SELECT "Content" FROM "NEWS_FEED" WHERE "Feed_ID" = 1')
		.then(function(data){
			app.get('/data/content1', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});


db.one('SELECT "Content" FROM "NEWS_FEED" WHERE "Feed_ID" = 2')
		.then(function(data){
			app.get('/data/content2', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});



db.one('SELECT "Content" FROM "NEWS_FEED" WHERE "Feed_ID" = 3')
		.then(function(data){
			app.get('/data/content3', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});


db.one('SELECT "Title" FROM "NEWS_FEED" WHERE "Feed_ID" = 1')
		.then(function(data){
			app.get('/data/title1', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});



db.one('SELECT "Title" FROM "NEWS_FEED" WHERE "Feed_ID" = 2')
		.then(function(data){
			app.get('/data/title2', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});


db.one('SELECT "Title" FROM "NEWS_FEED" WHERE "Feed_ID" = 3')
		.then(function(data){
			app.get('/data/title3', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});



db.one('SELECT "ThumbsUp" FROM "NEWS_FEED" WHERE "Feed_ID" = 1')
		.then(function(data){
			app.get('/data/thumbup1', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});


db.one('SELECT "ThumbsUp" FROM "NEWS_FEED" WHERE "Feed_ID" = 2')
		.then(function(data){
			app.get('/data/thumbup2', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});


db.one('SELECT "ThumbsUp" FROM "NEWS_FEED" WHERE "Feed_ID" = 3')
		.then(function(data){
			app.get('/data/thumbup3', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});


db.one('SELECT "ThumbsDown" FROM "NEWS_FEED" WHERE "Feed_ID" = 1')
		.then(function(data){
			app.get('/data/thumbdown1', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});


db.one('SELECT "ThumbsDown" FROM "NEWS_FEED" WHERE "Feed_ID" = 2')
		.then(function(data){
			app.get('/data/thumbdown2', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});


db.one('SELECT "ThumbsDown" FROM "NEWS_FEED" WHERE "Feed_ID" = 3')
		.then(function(data){
			app.get('/data/thumbdown3', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});


db.one('SELECT "Image" FROM "NEWS_FEED" WHERE "Feed_ID" = 1')
		.then(function(data){
			app.get('/data/image1', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});

db.one('SELECT "Image" FROM "NEWS_FEED" WHERE "Feed_ID" = 2')
		.then(function(data){
			app.get('/data/image2', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});

db.one('SELECT "Image" FROM "NEWS_FEED" WHERE "Feed_ID" = 3')
		.then(function(data){
			app.get('/data/image3', function(request,response) {
 			 response.send(data)
			})
		})
		.catch(error => {
			console.log('error');
		});




  
app.listen(app.get('port'), function() {      /* makes app keep listening */
  console.log("Node app is running at localhost:" + app.get('port'))
})
