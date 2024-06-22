import{A as E,S as P,i as y}from"./assets/vendor-b41355b7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();function S(s){let{largeImageURL:e,webformatURL:o,tags:n,likes:t,views:i,comments:r,downloads:R}=s;return`<li class="gallery-item">
      <a href="${e}"><img src="${o}" alt="${n}" class="gallery-image"></a>
        <ul class="info-list">
          <li class="list-item">
            <h3>Likes</h3>
            <p class="likes-js">${t}</p>
          </li>
          <li class="list-item">
            <h3>Views</h3>
            <p class="views-js">${i}</p>
          </li>
          <li class="list-item">
            <h3>Comments</h3>
            <p class="comments-js">${r}</p>
          </li>
          <li class="list-item">
            <h3>Downloads</h3>
            <p class="downloads-js">${R}</p>
          </li>
        </ul>
    </li>`}function L(s){return s.map(S).join("")}const q="44366879-bfb1deb33845459b9a36e6118",x=E.create({baseURL:"https://pixabay.com/api/"});async function b(s,e){return(await x.get("",{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const O="/goit-js-hw-12/assets/error-8da60983.svg",g=document.querySelector(".form"),d=document.querySelector(".gallery"),w=document.querySelector(".lds-roller"),f=document.querySelector(".load-btn"),T=new P(".gallery a",{captionsData:"alt",captionDelay:250});let a=1,m=1,l="";const j=15;g.addEventListener("submit",async s=>{if(s.preventDefault(),d.innerHTML="",l=s.target.elements.input.value.trim(),l===""){c("Please enter the data for the request!","blue");return}a=1,v(),p();try{const e=await b(l,a);if(m=Math.ceil(e.totalHits/j),e.totalHits===0){c("Sorry, there are no images matching your search query. Please try again!","red"),u();return}const o=L(e.hits);d.innerHTML=o,T.refresh(),h()}catch{c("ERROR")}g.reset(),h(),u()});f.addEventListener("click",async()=>{a++,v(),p();try{const s=await b(l,a),e=L(s.hits);d.insertAdjacentHTML("beforeend",e),$()}catch{c("ERROR")}u(),h()});function v(){w.classList.remove("hidden")}function u(){w.classList.add("hidden")}function B(){f.classList.remove("hidden")}function p(){f.classList.add("hidden")}function h(){a>=m?(p(),m&&y.info({title:"The End!",message:"The image collection is over!"})):B()}function c(s,e){y.error({position:"topRight",maxWidth:"360px",theme:"dark",messageColor:"white",iconUrl:O,message:s,color:e})}function $(){const e=d.children[0].getBoundingClientRect().height;scrollBy({top:e*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
