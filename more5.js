(function () {
  var h = Math.max(window.screen.height, window.innerHeight, 800) + 100;
  var st = document.createElement("style");
  st.textContent =
    "html{background:#0a2216;overscroll-behavior:none}" +
    "body{overscroll-behavior:none}" +
    "body::before{display:none}" +
    ".card,.note{-webkit-backdrop-filter:none;backdrop-filter:none;background:rgba(8,32,18,.9)}" +
    "#bg{position:fixed;left:0;top:-50px;width:100%;height:" + h + "px;z-index:-1;background:url('background.png') center/cover no-repeat;pointer-events:none;transform:translate3d(0,0,0)}";
  document.head.appendChild(st);
  var d = document.createElement("div");
  d.id = "bg";
  document.body.prepend(d);
})();
