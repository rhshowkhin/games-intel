module.exports = function(app){

 var prices = require('./../controllers/prices.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

app.route('/api/prices')
    .get(prices.list)
    .post(users.requiresLogin, prices.listByGenre);

app.param('priceId', prices.priceByID);
};



// module.exports = function(app){

//  var articles = require('./../controllers/articles.server.controller.js');
//  var users = require('./../controllers/users.server.controller.js');

// //  app.route('/articles/list')
// // 	.get(articles.listview);
 
 
//  app.route('/api/articles')
// 	.get(articles.list)
// 	.post(users.requiresLogin, articles.create);

//   app.route('/api/articles/:articleId')
// 	.get(articles.read)
//   .delete(users.requiresLogin, articles.delete);

// 	app.route('/api/articles/edit/:articleId')
// 	.get(articles.read)
// 	.put(users.requiresLogin, articles.update);


// app.param('articleId', articles.articleByID);
// };

//  app.route('/articles/list')
// 	.get(articles.listview);
 
 
//  app.route('/api/games')
// 	.get(games.list)
// 	.post(users.requiresLogin, games.create);

//   app.route('/api/games/:gameId')
// 	.get(games.read)
//   .delete(users.requiresLogin, games.delete);

// 	app.route('/api/games/edit/:gameId')
// 	.get(games.read)
// 	.put(users.requiresLogin, games.update);
	
// app.route('/games/new').get(games.new);
// app.route('/games/all/:genre').get(games.listByGenre);


