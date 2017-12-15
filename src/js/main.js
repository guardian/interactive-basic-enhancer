var el = document.createElement('script');

el.src = process.env.PATH + '/app.js';
document.body.appendChild(el);


var parentwindow = window.parent;
var parentdoc = window.parent.window.document;

var s = parentdoc.createElement('link');
s.type = 'text/css';
s.rel = 'stylesheet';
s.href =  process.env.PATH + '/main.css';
parentdoc.head.appendChild(s);

    console.log('here we go')
    var sourceHTML = parentdoc.querySelector('.content__article-body').innerHTML;
    console.log(sourceHTML);
    var found = sourceHTML.search("the Commons computers of Damian Green,");
    var resHTML = sourceHTML.split("the Commons computers of Damian Green");
    resHTML = resHTML.join("<span class='green-highlight'>the Commons computers of Damian Green</span>");
    var resHTML = resHTML.split("Green meets Kate Maltby");
    resHTML = resHTML.join("Green meets <span class='maltby-highlight'>Kate Maltby</span>")
   
    parentdoc.querySelector('.content__article-body').innerHTML = resHTML;

