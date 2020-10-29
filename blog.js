//Internal
function getCurrentDate(){
    const month = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
return month[date.getMonth()]+" "+dd+", "+date.getFullYear();
}

//AddDiv functions
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
    
    //Discard and hide
    addArticleDiv.style.display = "none";

    //Clear all text that is in post
    title.value = "";
    author.value = "";
    article.value = "";
}

function hideAddDivConfirm() {
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

//Publish
function publishArticle(){
    var title = document.getElementById("addTitle");
    var author = document.getElementById("addAuthor");
    var article = document.getElementById("addArticle");

    var mainContent=document.getElementById("mainContent");

    //Create blog post
    var div=document.createElement("div");
    div.className="blog-post";
    div.tagName="userPost";

    var h2=document.createElement("h2");
    h2.className="blog-post-title";
    h2.innerHTML=title.value;
    div.appendChild(h2);

    var p1=document.createElement("p");
    p1.className="blog-post-meta";
    p1.innerHTML=getCurrentDate()+" by "; //Get Date
    var authorRef=document.createElement("a"); //Set author as link
    authorRef.href='#';
    authorRef.innerHTML=author.value;
    p1.append(authorRef);
    div.appendChild(p1);

    var p2=document.createElement("p");
    p2.innerHTML=article.value;
    div.appendChild(p2);

    var hr=document.createElement("hr");
    div.appendChild(hr);

    //Give confirmation
    alert("Blog Post Published Successfully!");

    //Publish and hide Add Post
    document.getElementById("yourPosts").style.display="block";
    mainContent.prepend(div); //Adds to beginning rather than end
    hideAddDiv();
}