(()=>{try{const e=[{name:"twitter",code:'<a href="" class="select-share-js-btn">\n\t\t\t<i class="fa-brands fa-x-twitter fa-lg select-share-js-btn-twitter"></i>\n\t\t\t</a>'},{name:"linkedin",code:'<a href="" class="select-share-js-btn">\n\t\t\t<i class="fab fa-linkedin-in fa-lg select-share-js-btn-linkedin"></i>\n\t\t\t</a>'},{name:"facebook",code:'<a href="" class="select-share-js-btn">\n\t\t\t<i class="fab fa-facebook-f fa-lg select-share-js-btn-facebook"></i>\n\t\t\t</a>'},{name:"email",code:'<a href="" class="select-share-js-btn">\n\t\t\t<i class="fas fa-envelope fa-lg select-share-js-btn-email"></i>\n\t\t\t</a>'}],t="/* this css code for select-share-js dark theme */ #select-share-js {position: absolute;display: none;}.select-share-js-main {background: #272727;display: flex;flex-direction: row;justify-content: space-around;align-items: center;position: relative;border-radius: 10px;}.select-share-js-btn {height: 35px;width: 35px;border-radius: 3px;display: flex;flex-direction: column;justify-content: center;align-items: center;font-size: 16px;text-decoration: none;}.select-share-js-btn:hover {box-shadow: 0px 0px 4px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);}.select-share-js-btn i {color: #ffffff;}@media screen and (max-width: 1000px) {.select-share-js-main {border-radius: 3px;}.select-share-js-btn {border-radius: 0px;}}",s="/* this css code for select-share-js light theme */ #select-share-js {position: absolute;display: none;}.select-share-js-main {background: #e0e5ec;display: flex;flex-direction: row;justify-content: space-around;align-items: center;position: relative;border-radius: 5px;}.select-share-js-btn {height: 35px;width: 35px;border-radius: 3px;display: flex;flex-direction: column;justify-content: center;align-items: center;font-size: 16px;text-decoration: none;}.select-share-js-btn:hover {box-shadow: 0px 0px 4px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);}.select-share-js-btn-facebook {color: #3b5998;}.select-share-js-btn-twitter {color: #00acee;}.select-share-js-btn-linkedin {color: #0e76a8;}.select-share-js-btn-whatsapp {color: #25d366;}.select-share-js-btn-telegram {color: #0088cc;}.select-share-js-btn-email {color: #0f0f0f;}@media screen and (max-width: 1000px) {.select-share-js-main {border-radius: 3px;}.select-share-js-btn {border-radius: 0px;}}";let n=document.querySelector("#select-share-js");const a=document.createElement("div");a.classList.add("select-share-js-main"),n.appendChild(a);const r=n.getAttribute("theme"),c=n.attributes,i=Array.from(c);if(n){const e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),e.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css")}if("dark"===r){const e=document.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t,document.head.appendChild(e)}else{const e=document.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e)}i.forEach((t=>{try{if("id"!==t.name&&"theme"!==t.name){const s=t.name,n=(t.value,e.find((e=>e.name===s)).code);a.innerHTML+=n}}catch(e){}})),document.addEventListener("mouseup",(function(){(function(){let e="";return window.getSelection?e=window.getSelection().toString():document.selection&&"Control"!==document.selection.type&&(e=document.selection.createRange().text),e})()?function(e){let t=document.getElementById("select-share-js");t.style.display="block";let s=window.getSelection().getRangeAt(0).getBoundingClientRect();t.style.top=s.top-t.offsetHeight-5+"px",t.style.left=s.left+(s.width-t.offsetWidth)/2+"px"}():n.style.display="none"}))}catch(e){console.log("😪 This is error from Select-share-js :- ",e.massage)}})();