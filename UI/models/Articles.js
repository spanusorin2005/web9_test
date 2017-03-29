/* global Article */
function Articles(){
	this.models = [];
}

Articles.prototype.findArticleById = function(id) {
	var result;
	for (var i=0; i<this.models.length; i++) {
		if (this.models[i].id == id) {
			result = this.models[i];
		}
	}
	return result;
}
Articles.prototype.getAll = function() {
	//get all article items from server/localStorage
	// var articlesStr = localStorage.getItem("articles");
	// var articles = JSON.parse(articlesStr);
	// if (articles) {
	// 	for (var i=0; i<articles.length; i++) {
	// 		var article = new Article(articles[i]);
	// 		this.models.push(article);
	// 	}

	// 	console.log(articles);
	// 	console.log(this.models);
	// }
	var that = this;
	var config = {
		url: "https://web9-spinusorin.c9users.io/curs21-PHP-API/articles",
		method: "GET",
		success: function(resp) {
			for (var i=0; i<resp.length; i++) {
				var article = new Article(resp[i]);
				that.models.push(article);
			}
		},
		error: function(){
			console.log("Something went wrong while getting the articles");
		}
	}
	return $.ajax(config);
}

Articles.prototype.removeArticle = function(articleId) {
	//here we will search for article model by id
	//and we remove it from models array and from 
	//server/localStorage
}

Articles.prototype.save = function(articleData) {
	//here we should save the new article to server
	
	// https://web9-siitwebcluj.c9users.io/curs21-PHP-API/articles/add
	// POST
	
	//title
	//content
	//user_id
	//category_id
	var formData = new FormData();
	formData.append("main_image_url",articleData.img);
	formData.append("title", articleData.title);
	formData.append("content", articleData.content);
	formData.append("user_id", "1");
	formData.append("category_id", "1");
	
	var config = {
		url: "https://web9-spinusorin.c9users.io/curs21-PHP-API/articles/add",
		method: "POST",
		data:  formData,
		processData:false,        // To send DOMDocument or non processed data file it is set to false
		contentType: false,
		success: function(resp) {
			console.log("all good");
		},
		error: function() {
			console.log("article was not added");
		}
	}
	
	return $.ajax(config);
}