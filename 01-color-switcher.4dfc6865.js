const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let o,n=!1;t.addEventListener("click",(()=>{n||(o=setInterval((()=>{n=!0,document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))})),e.addEventListener("click",(()=>{clearInterval(o),n=!1}));
//# sourceMappingURL=01-color-switcher.4dfc6865.js.map
