//Div functions
function showAddDiv() {
    //Check if already up
    var addArticleDiv = document.getElementById("addArticleDiv");
    if (addArticleDiv.style.display == "block") {
        return false;
    }

    var title = document.getElementById("addTitle");
    var author = document.getElementById("addAuthor");
    var article = document.getElementById("addArticle");

    //Clear all text that is in post just in case
    title.value = "";
    author.value = "";
    article.value = "";

    //Display div
    addArticleDiv.style.display = "block";
}

function hideAddDiv() {
    //Display confirmation (only if not blank)
    var addArticleDiv = document.getElementById("addArticleDiv");
    var title = document.getElementById("addTitle");
    var author = document.getElementById("addAuthor");
    var article = document.getElementById("addArticle");
    if (title.value !== "" || author.value !== "" || article.value !== "")
        if (!confirm("Are you sure you want to discard your current draft? (Warning: cannot be undone)"))
            return false;

    //Discard and hide
    addArticleDiv.style.display = "none";

    //Clear all text that is in post
    title.value = "";
    author.value = "";
    article.value = "";
}

//validation functions
function validateAddPost() {
    var title = document.getElementById("addTitle");
    var author = document.getElementById("addAuthor");
    var article = document.getElementById("addArticle");

    var button = document.getElementById("publish");

    if (title.value === "")
        button.className = "btn btn-primary disabled"
    else if (author.value === "")
        button.className = "btn btn-primary disabled"
    else if (article.value === "")
        button.className = "btn btn-primary disabled"
    else {
        button.className = "btn btn-primary"
    }
}

