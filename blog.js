function showAddDiv(){
    //Check if already up
    var addArticleDiv = document.getElementById("addArticleDiv");
    if (addArticleDiv.style.display=="block"){
        return false;
    }
    
    var title = document.getElementById("addTitle");
    var author = document.getElementById("addAuthor");    
    var article = document.getElementById("addArticle");

    //Clear all text that is in post just in case
    title.value="";
    author.value="";
    article.value="";

    //Display div
    addArticleDiv.style.display="block";
}

function hideAddDiv(){
    var addArticleDiv = document.getElementById("addArticleDiv");
    var title = document.getElementById("addTitle");
    var author = document.getElementById("addAuthor");    
    var article = document.getElementById("addArticle");

    //Hide div
    addArticleDiv.style.display="none";
    
    //Clear all text that is in post
    title.value="";
    author.value="";
    article.value="";
}