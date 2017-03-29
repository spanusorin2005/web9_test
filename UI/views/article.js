/*global $*/
/*global Article*/
$(document).ready(onHtmlLoaded);
//always check if HTML is loaded before doing anything
//HTML operaations on view
function onHtmlLoaded(){
    var articles = new Articles();
    articles.getAll();
    
    var currentArticleId = getUrlParam("id");
    var article = articles.findArticleById(currentArticleId);
    var containerElement = $("#container1");
    
    generateArticleTitle(article.title);
    generateArticleContent(article.content);
    
    //generates a h2 element,adds the title and append the element to the container 
    function generateArticleTitle(articleTitle){
        var titleElement = $("<h2></h2>");
        titleElement.html(articleTitle);
        
        containerElement.append(titleElement);
    }
    
     //generates an article element,adds the content and append the element to the container
    function generateArticleContent(articleContent){
        var articleContentElem = $("<article></article>");
        
        articleContentElem.html(articleContent);
        containerElement.append(articleContentElem);
    }
    
    //util function, will return the url param for the provided key
    function getUrlParam(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
           return null;
        }
        else{
           return results[1] || 0;
        }
    }
}