/* ===== RENDER ===== */
const $=id=>document.getElementById(id),C=CONFIG;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
document.title=C.brand;
$("brand").innerHTML=C.logo?`<img src="${C.logo}" alt="${esc(C.brand)}">`:esc(C.brand);$("brand2").textContent=C.brand;
$("addr").textContent=$("addr2").textContent=C.address;
$("hours").textContent=C.hours;
$("phoneTop").textContent=C.phone;$("phoneTop").href="tel:"+C.phone.replace(/\s/g,"");
$("heroTitle").textContent=C.heroTitle;$("heroText").textContent=C.heroText;
$("menu").innerHTML=C.menu.filter(m=>m[1]!=="#price").map(m=>`<a href="${m[1]}">${esc(m[0])}</a>`).join("");
$("foot").innerHTML=`${esc(C.phone)}<br><a href="https://t.me/${esc(C.telegram)}">Telegram</a>`;
const IC={search:'<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',tooth:'<path d="M7 3.5c-2.2 0-3.5 1.7-3.5 4 0 2.2.9 3.4 1.6 5.2.8 2 .9 3.700 1.400 6 .3 1.400 1.100 2.300 2 2.300 1.100 0 1.400-1.500 1.700-3 .2-1 .6-1.700 1.300-1.700s1.100.7 1.300 1.700c.3 1.500.6 3 1.700 3 .9 0 1.700-.9 2-2.300.5-2.300.6-4 1.400-6 .7-1.800 1.600-3 1.600-5.200 0-2.300-1.300-4-3.500-4-1.600 0-2.500.9-4 .9S8.600 3.500 7 3.500z"/>',implant:'<path d="M5 4h14c0 3-2.200 5-4.500 5h-5C7.200 9 5 7 5 4z"/><path d="M9 12h6M9.500 15h5M10 18h4M12 9v12"/>',crown:'<path d="M4 18h16M5 18l-1-10 5 4 3-6 3 6 5-4-1 10"/>',drop:'<path d="M12 3c3.500 4.500 6 7.500 6 11a6 6 0 0 1-12 0c0-3.500 2.500-6.500 6-11z"/><path d="M9.500 14.500a2.500 2.500 0 0 0 2.500 2.500"/>',syringe:'<path d="M18 3l3 3M16 5l3 3M14 7l3 3-7.500 7.500-4-1-1-4zM5.500 18.500L3 21M10 13l2 2"/>',spark:'<path d="M12 3l1.800 5.200L19 10l-5.200 1.800L12 17l-1.800-5.200L5 10l5.200-1.800z"/><path d="M19 16l.7 2 2 .7-2 .7L19 21.400l-.7-2-2-.7 2-.7z"/>',plus:'<circle cx="12" cy="12" r="8.500"/><path d="M12 8v8M8 12h8"/>'};
const svcIco=k=>`<span class="svc-ico"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k]||IC.plus}</svg></span>`;
$("serviceGrid").innerHTML=C.services.map((s,i)=>`<article class="card svc" data-service="${i}" tabindex="0" role="button" aria-label="${esc(s.t)}: batafsil">${svcIco(s.ic)}<h3>${esc(s.t)}</h3><p class="muted">${esc(s.d)}</p><ul>${s.items.slice(0,3).map(x=>`<li>${esc(x)}</li>`).join("")}</ul><span class="svc-more">Batafsil <i aria-hidden="true">→</i></span></article>`).join("");
/* ===== MUTAXASSISLAR: avtomatik aylanuvchi slayder + nuqtalar ===== */
(function(){const el=$("docs");el.className="docs-car";
 const slide=d=>`<div class="card doc-slide">${d.img?`<img class="doc-photo" src="${d.img}" alt="${esc(d.n)}" loading="lazy" width="360" height="450">`:`<div class="avatar"></div>`}<div class="doc-info"><h3>${esc(d.n)}</h3><div class="tag">${esc(d.r)} · ${esc(d.e)}</div><p class="muted">${esc(d.b).replace(/\n/g,"<br>")}</p>${d.book===false?"":`<button class="btn ghost" data-book="${esc(d.n)}">Yozilish</button>`}</div></div>`;
 el.innerHTML=`<div class="docs-track" tabindex="0" role="region" aria-roledescription="carousel" aria-label="Mutaxassislar">${C.doctors.map(slide).join("")}</div><div class="docs-dots" role="tablist" aria-label="Mutaxassislarni tanlash">${C.doctors.map((d,i)=>`<button type="button" role="tab" aria-label="${esc(d.n)}" data-dot="${i}"></button>`).join("")}</div>`;
 const tr=el.firstElementChild,dots=[...el.querySelectorAll("[data-dot]")],n=dots.length,DELAY=3000;
 const reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
 let cur=0,timer=null,hold=false,inView=true,raf=0;
 const mark=i=>{cur=i;dots.forEach((b,j)=>{b.classList.toggle("on",j===i);b.setAttribute("aria-selected",j===i)})};
 const pos=i=>tr.children[i].offsetLeft;
 const go=(i,instant)=>{i=(i+n)%n;tr.scrollTo({left:pos(i),behavior:instant?"auto":"smooth"});mark(i)};
 const stop=()=>{clearInterval(timer);timer=null};
 const start=()=>{stop();if(reduce||n<2)return;timer=setInterval(()=>{if(!hold&&inView&&!document.hidden)go(cur+1)},DELAY)};
 /* qo'lda surilganda nuqta ham o'tadi */
 tr.addEventListener("scroll",()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{const step=tr.children[0].offsetWidth+16,i=Math.max(0,Math.min(n-1,Math.round(tr.scrollLeft/step)));if(i!==cur)mark(i)})},{passive:true});
 /* nuqtani bosish */
 el.addEventListener("click",e=>{const b=e.target.closest("[data-dot]");if(b){go(+b.dataset.dot);start()}});
 /* foydalanuvchi tegsa vaqtincha to'xtaydi, qo'yib yuborsa qayta boshlanadi */
 const pause=()=>{hold=true},resume=()=>{hold=false;start()};
 tr.addEventListener("touchstart",pause,{passive:true});tr.addEventListener("touchend",resume,{passive:true});tr.addEventListener("touchcancel",resume,{passive:true});
 el.addEventListener("mouseenter",pause);el.addEventListener("mouseleave",resume);
 tr.addEventListener("focusin",pause);tr.addEventListener("focusout",resume);
 tr.addEventListener("keydown",e=>{if(e.key==="ArrowRight"){e.preventDefault();go(cur+1);start()}if(e.key==="ArrowLeft"){e.preventDefault();go(cur-1);start()}});
 /* faqat ekranda ko'ringanda aylanadi */
 if("IntersectionObserver" in window)new IntersectionObserver(es=>{inView=es[0].isIntersecting},{threshold:.25}).observe(el);
 addEventListener("resize",()=>go(cur,true));
 mark(0);start();
})();
$("cases").innerHTML=C.cases.map(c=>{const ph=(src,lab)=>`<figure>${src?`<img src="${esc(src)}" alt="${esc(c.t)} — ${lab}" loading="lazy">`:"Rasm joyi"}<figcaption>${lab}</figcaption></figure>`;
 return `<div class="card"><div class="ba">${ph(c.before,"Oldin")}${ph(c.after,"Keyin")}</div><div class="tag">${esc(c.tag)}</div><h3>${esc(c.t)}</h3><p class="muted" style="margin:0;font-size:14px">${esc(c.d)}</p><div class="case-meta">${c.meta.map(m=>`<span>${esc(m)}</span>`).join("")}</div></div>`}).join("");
$("articles").innerHTML=C.articles.map((a,i)=>`<div class="card art">${C.artImgs&&C.artImgs[i]?`<img class="art-img" src="${C.artImgs[i]}" alt="${esc((C.artAlts||[])[i]||a[0])}" loading="lazy" width="450" height="280">`:""}<h3>${esc(a[0])}</h3><p class="muted" style="margin:0">${esc(a[1])}</p>${a[2]?`<button class="btn ghost" data-article="${i}" type="button">O‘qish</button>`:""}</div>`).join("");
(function(){const rd=$("reader"),sc=()=>{rd.scrollTop=0};
 const close=()=>{rd.hidden=true;document.body.style.overflow=""};
 document.addEventListener("click",e=>{const b=e.target.closest("[data-article]");if(b){const a=C.articles[+b.dataset.article];$("rt").textContent=a[0];{const im=$("rimg"),src=C.artImgs&&C.artImgs[+b.dataset.article];if(src){im.src=src;im.alt=(C.artAlts||[])[+b.dataset.article]||a[0];im.hidden=false}else{im.hidden=true}}$("rbody").innerHTML=a[2].replace(/__BRAND__/g,esc(C.brand));rd.hidden=false;document.body.style.overflow="hidden";sc()}
  if(e.target.closest("#readerClose"))close()});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!rd.hidden&&!$("modal").classList.contains("open"))close()});
})();
/* ===== XIZMAT PANELI ===== */
(function(){const rd=$("reader"),back=$("readerClose"),cta=rd.querySelector(".reader-cta");let open=false,cur=0;
 const hash=i=>"#xizmat-"+C.services[i].k;
 function show(i,push){const v=C.services[i];open=true;back.textContent="← Xizmatlar";
  $("rt").textContent=v.t;{const im=$("rimg");im.src="images/"+(i+1)+".png";im.alt=v.t;im.classList.add("sq");im.hidden=false}
  $("rbody").innerHTML=`<p class="lead">${esc(v.intro)}</p><div class="note"><b>Kimga kerak:</b> ${esc(v.who)}</div><h3>Xizmat turlari va narxlari</h3><p class="muted pick-hint">Narx ustiga bosing: xizmat avtomatik tanlanadi.</p><ul class="plist">${v.prices.map((r,j)=>`<li role="button" tabindex="0" data-price="${j}"><span class="pn">${esc(r[0])}</span><span class="pp">${esc(r[1])}</span></li>`).join("")}</ul><h3>Yozilish</h3><form id="svcForm" class="svc-form"><label for="svcN">Ismingiz</label><input id="svcN" required><label for="svcP">Telefon</label><input id="svcP" type="tel" required placeholder="+998"><label for="svcBtn">Xizmat</label><input type="hidden" id="svcS"><div class="dd" id="svcDd"><button type="button" class="dd-btn" id="svcBtn" aria-haspopup="listbox" aria-expanded="false"><span id="svcBtnT">Xizmatni tanlang</span></button><ul class="dd-list" id="svcList" role="listbox" hidden>${v.prices.map((r,j)=>`<li role="option" tabindex="-1" data-opt="${j}"><span>${esc(r[0])}</span><b>${esc(r[1])}</b></li>`).join("")}</ul></div><div class="svc-submit"><button class="btn" type="submit">Yozilish</button></div><div class="ok" id="svcOk">So‘rov yuborildi. Tez orada qo‘ng‘iroq qilamiz.</div></form><div class="svc-addr"><div class="svc-addr-in svc-addr-top"><h3>Manzil</h3></div><iframe class="svc-map" title="Klinika manzili xaritada" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${encodeURIComponent(C.address)}&output=embed"></iframe><div class="svc-addr-in"><p class="svc-a">${esc(C.address)}</p><p class="svc-ph"><a href="tel:${C.phone.replace(/\s/g,"")}">${esc(C.phone)}</a></p><div class="svc-links"><a class="btn" href="tel:${C.phone.replace(/\s/g,"")}">Qo‘ng‘iroq qilish</a><a class="btn ghost" href="https://t.me/${esc(C.telegram)}" target="_blank" rel="noopener">Telegram</a></div></div></div>`;
  cta.hidden=true;cur=i;
  rd.hidden=false;document.body.style.overflow="hidden";rd.scrollTop=0;
  if(push&&location.hash!==hash(i))history.pushState(null,"",hash(i))}
 function hide(fromHash){if(!open)return;open=false;rd.hidden=true;document.body.style.overflow="";
  if(!fromHash&&location.hash.indexOf("#xizmat-")==0)history.back()}
 function fromHash(){const m=location.hash.match(/^#xizmat-(.+)$/);
  if(m){const i=C.services.findIndex(x=>x.k===m[1]);if(i>-1){show(i,false);return}}
  hide(true)}
 document.addEventListener("click",e=>{
  const c=e.target.closest("[data-service]");if(c){show(+c.dataset.service,true);return}
  const ob=e.target.closest("#svcBtn");if(ob){const l=$("svcList");l.hidden=!l.hidden;ob.setAttribute("aria-expanded",String(!l.hidden));if(!l.hidden){const sel=l.querySelector(".on");(sel||l).scrollIntoView&&0}return}
  const op=e.target.closest("[data-opt]");if(op){setSvc(+op.dataset.opt);return}
  if(!e.target.closest("#svcDd"))closeDd();
  const pr=e.target.closest("[data-price]");if(pr){pick(+pr.dataset.price);return}
  if(e.target.closest("[data-article]")){$("rimg").classList.remove("sq");open=false;back.textContent="← Maqolalar";cta.hidden=false}
  if(e.target.closest("#readerClose"))hide(false)});
 document.addEventListener("keydown",e=>{
  if(e.key==="Enter"||e.key===" "){const c=e.target.closest&&e.target.closest("[data-service]");if(c&&c.tagName==="ARTICLE"){e.preventDefault();show(+c.dataset.service,true)}}
  if(e.key==="Escape"&&open&&!$("modal").classList.contains("open")){const l=$("svcList");if(l&&!l.hidden){closeDd();return}hide(false)}});
 function mark(j){document.querySelectorAll("#rbody [data-price]").forEach(x=>x.classList.toggle("sel",+x.dataset.price===j))}
 function setSvc(j){const v=C.services[cur],r=v.prices[j];$("svcS").value=j;$("svcBtnT").textContent=r[0]+" — "+r[1];$("svcBtn").classList.add("has");mark(j);closeDd()}
 function closeDd(){const l=$("svcList");if(l&&!l.hidden){l.hidden=true;$("svcBtn").setAttribute("aria-expanded","false")}}
 function pick(j){setSvc(j);$("svcOk").style.display="none";$("svcForm").scrollIntoView({behavior:"smooth",block:"center"});setTimeout(()=>$("svcN").focus({preventScroll:true}),450)}
 document.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches&&e.target.matches("[data-price]")){e.preventDefault();pick(+e.target.dataset.price)}});
 document.addEventListener("submit",e=>{if(e.target.id!=="svcForm")return;e.preventDefault();if($("svcS").value===""){$("svcList").hidden=false;$("svcBtn").setAttribute("aria-expanded","true");$("svcBtn").focus();return}const sv=C.services[cur],r=sv.prices[+$("svcS").value];$("svcOk").style.display="block";send($("svcN").value,$("svcP").value,"",sv.t+": "+r[0]+" — "+r[1])});
 addEventListener("hashchange",fromHash);fromHash();
})();
/* ===== MODAL ===== */
$("d").innerHTML='<option value="">Farqi yo‘q</option>'+C.doctors.filter(d=>d.book!==false).map(d=>`<option>${esc(d.n)}</option>`).join("");
const modal=$("modal");
document.addEventListener("click",e=>{
 const b=e.target.closest("[data-book]");
 if(b){$("d").value=b.dataset.book||"";$("ok").style.display="none";modal.classList.add("open");$("n").focus()}
 if(e.target===modal||e.target.id==="close")modal.classList.remove("open");
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")modal.classList.remove("open")});
function send(name,phone,doc,svc){
 const text=`Yangi so‘rov\nIsm: ${name}\nTelefon: ${phone}${doc?"\nShifokor: "+doc:""}${svc?"\nXizmat: "+svc:""}`;
 window.open(`https://t.me/${C.telegram}?text=${encodeURIComponent(text)}`,"_blank");
}
$("bookForm").addEventListener("submit",e=>{e.preventDefault();$("ok").style.display="block";send($("n").value,$("p").value,$("d").value)});
$("contactForm").addEventListener("submit",e=>{e.preventDefault();$("ok2").style.display="block";send($("n2").value,$("p2").value,"")});

/* ===== SCROLL ANIMATSIYA ===== */
(function(){
 const io="IntersectionObserver" in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -6% 0px"}):null;
 function watch(el,delay){el.classList.add("reveal");el.style.setProperty("--d",(delay||0)+"ms");io?io.observe(el):el.classList.add("in")}
 function init(root){
  root.querySelectorAll(".hero .wrap > *, section h2, section .muted:not(.card .muted), .banner, .logos, form, .tabs").forEach((el,i)=>{if(!el.classList.contains("reveal"))watch(el,0)});
  root.querySelectorAll(".grid, .slider").forEach(g=>{[...g.children].forEach((c,i)=>{if(!c.classList.contains("reveal"))watch(c,Math.min(i,5)*110)})});
 }
 init(document);
 const nav=document.querySelector("header.nav");
 const onScroll=()=>nav.classList.toggle("scrolled",scrollY>10);
 addEventListener("scroll",onScroll,{passive:true});onScroll();
})();
