(function () {
  var st = document.createElement("style");
  st.textContent =
    "html,body{height:100%;margin:0;overflow:hidden;overscroll-behavior:none}" +
    "html{background:#0a2216 url('background.png') center/cover no-repeat}" +
    "body::before{display:none}" +
    ".card,.note{-webkit-backdrop-filter:none;backdrop-filter:none;background:rgba(8,32,18,.9)}" +
    "#scroller{position:fixed;top:0;left:0;right:0;bottom:0;overflow-y:auto;overflow-x:hidden;overscroll-behavior:none;-webkit-overflow-scrolling:touch}";
  document.head.appendChild(st);
  var w = document.createElement("div");
  w.id = "scroller";
  while (document.body.firstChild) { w.appendChild(document.body.firstChild); }
  document.body.appendChild(w);
  window.scrollTo = function () { w.scrollTop = 0; };
})();
