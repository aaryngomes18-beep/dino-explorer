const st = document.createElement("style");
st.textContent = "body::before{display:none}html{background:#0a2216}#bg{position:fixed;top:0;left:0;width:100%;height:100vh;height:100lvh;z-index:-1;background:url('background.png') center/cover no-repeat;pointer-events:none}";
document.head.appendChild(st);
const bg = document.createElement("div");
bg.id = "bg";
document.body.prepend(bg);
