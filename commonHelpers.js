import{A as P,S,i as y}from"./assets/vendor-b41355b7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function q(s){let{largeImageURL:e,webformatURL:i,tags:n,likes:t,views:r,comments:o,downloads:E}=s;return`<li class="gallery-item">
      <a href="${e}"><img src="${i}" alt="${n}" class="gallery-image"></a>
        <ul class="info-list">
          <li class="list-item">
            <h3>Likes</h3>
            <p class="likes-js">${t}</p>
          </li>
          <li class="list-item">
            <h3>Views</h3>
            <p class="views-js">${r}</p>
          </li>
          <li class="list-item">
            <h3>Comments</h3>
            <p class="comments-js">${o}</p>
          </li>
          <li class="list-item">
            <h3>Downloads</h3>
            <p class="downloads-js">${E}</p>
          </li>
        </ul>
    </li>`}function L(s){return s.map(q).join("")}const x="44366879-bfb1deb33845459b9a36e6118",O=P.create({baseURL:"https://pixabay.com/api/"});async function b(s,e){return(await O.get("",{params:{key:x,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const j="/goit-js-hw-12/assets/error-8da60983.svg",u=document.querySelector(".form"),d=document.querySelector(".gallery"),w=document.querySelector(".lds-roller"),p=document.querySelector(".load-btn"),v=new S(".gallery a",{captionsData:"alt",captionDelay:250});let a=1,m=1,l="";const B=15;u.addEventListener("submit",async s=>{if(s.preventDefault(),d.innerHTML="",l=s.target.elements.input.value.trim(),l===""){c("Please enter the data for the request!","blue");return}a=1,R(),g();try{const e=await b(l,a);if(m=Math.ceil(e.totalHits/B),e.totalHits===0){c("Sorry, there are no images matching your search query. Please try again!","red"),u.reset(),h();return}const i=L(e.hits);d.innerHTML=i,v.refresh(),f()}catch{c("ERROR")}u.reset(),f(),h()});p.addEventListener("click",async()=>{a++,R(),g();try{const s=await b(l,a),e=L(s.hits);d.insertAdjacentHTML("beforeend",e),v.refresh(),$()}catch{c("ERROR")}h(),f()});function R(){w.classList.remove("hidden")}function h(){w.classList.add("hidden")}function T(){p.classList.remove("hidden")}function g(){p.classList.add("hidden")}function f(){a>=m?(g(),m&&y.info({title:"The End!",message:"We're sorry, but you've reached the end of search results."})):T()}function c(s,e){y.error({position:"topRight",maxWidth:"360px",theme:"dark",messageColor:"white",iconUrl:j,message:s,color:e})}function $(){const e=d.children[0].getBoundingClientRect().height;scrollBy({top:e*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
