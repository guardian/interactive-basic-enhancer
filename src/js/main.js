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

var tgtEl;

// if (!document){
// 	tgtEl = document.querySelector('#article-body-blocks');
// }

if (parentdoc){
	tgtEl = parentdoc.querySelector('.content__article-body');
}

console.log(tgtEl)


var sourceHTML = tgtEl.innerHTML;

var resHTML = sourceHTML.split("the Commons computers of Damian Green");
resHTML = resHTML.join("<span class='green-highlight'>the Commons computers of Damian Green</span>");
var resHTML = resHTML.split("Green meets Kate Maltby");
resHTML = resHTML.join("Green meets <span class='maltby-highlight'>Kate Maltby</span>")

tgtEl.innerHTML = resHTML;



