function getArticleGenerator(articles) {
    let displayElement = document.querySelector('#content');
    let array = articles.slice();

    let showNext = function () {
        if (array.length > 0) {
            let currText = array.shift();
            let newArticle = document.createElement('article');
            newArticle.textContent = currText;
            displayElement.appendChild(newArticle);
        }
    };

    return showNext;
}
