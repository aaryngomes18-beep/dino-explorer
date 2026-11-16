const bg = document.createElement("style");
bg.textContent = 'body::before{background:url("background.png") center/cover no-repeat,linear-gradient(180deg,#143d27,#05120b)}';
document.head.appendChild(bg);
