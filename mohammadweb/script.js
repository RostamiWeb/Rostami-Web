// ---------- SCROLL ANIMATION ----------

const revealElements = document.querySelectorAll(".card, .project, .blog-card");

function revealOnScroll(){

let windowHeight = window.innerHeight;

revealElements.forEach(el=>{

let elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

el.style.opacity="1";
el.style.transform="translateY(0px)";

}

})

}

window.addEventListener("scroll",revealOnScroll);



// ---------- COUNTER ANIMATION ----------

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

let target = +counter.getAttribute("data-target");

let speed = 200;

function updateCounter(){

let count = +counter.innerText;

let increment = target / speed;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCounter,10);

}

else{

counter.innerText = target;

}

}

updateCounter();

});



// ---------- FAQ TOGGLE ----------

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

item.addEventListener("click",()=>{

item.classList.toggle("active");

})

});



// ---------- MOBILE MENU ----------

const menuBtn = document.createElement("div");

menuBtn.innerHTML = "☰";

menuBtn.style.fontSize = "28px";

menuBtn.style.cursor = "pointer";

menuBtn.style.color = "white";

document.querySelector(".header .container").appendChild(menuBtn);

menuBtn.addEventListener("click",()=>{

let nav = document.querySelector(".nav");

if(nav.style.display==="flex"){

nav.style.display="none";

}

else{

nav.style.display="flex";

nav.style.flexDirection="column";

}

});



// ---------- SCROLL TO TOP BUTTON ----------

const topBtn = document.createElement("button");

topBtn.innerText = "↑";

topBtn.style.position="fixed";

topBtn.style.bottom="30px";

topBtn.style.right="30px";

topBtn.style.padding="12px 18px";

topBtn.style.border="none";

topBtn.style.borderRadius="50%";

topBtn.style.background="linear-gradient(45deg,#ff00ff,#6a00ff)";

topBtn.style.color="white";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

document.body.appendChild(topBtn);



window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});



topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});



// ---------- TYPING EFFECT ----------

const heroTitle = document.querySelector(".hero h1");

const text = "Professional Website Design";

let index = 0;

function typeEffect(){

if(index < text.length){

heroTitle.innerHTML += text.charAt(index);

index++;

setTimeout(typeEffect,70);

}

}

heroTitle.innerHTML="";

typeEffect();



// ---------- CURSOR GLOW ----------

const glow = document.createElement("div");

glow.style.width="20px";

glow.style.height="20px";

glow.style.borderRadius="50%";

glow.style.position="fixed";

glow.style.background="rgba(170,0,255,0.5)";

glow.style.pointerEvents="none";

glow.style.filter="blur(10px)";

document.body.appendChild(glow);



document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";

});



// ---------- PORTFOLIO EFFECT ----------

const projets = document.querySelectorAll(".project");

projects.forEach(project=>{

project.addEventListener("mouseenter",()=>{

project.style.boxShadow="0 0 30px #a855f7";

})

project.addEventListener("mouseleave",()=>{

project.style.boxShadow="none";

})

});
// PORTFOLIO FILTER

const filters = document.querySelectorAll(".filter-buttons button");

const projects = document.querySelectorAll(".project");

filters.forEach(btn=>{

btn.addEventListener("click",()=>{

let type = btn.getAttribute("data-filter");

projects.forEach(project=>{

if(type==="all" || project.classList.contains(type)){

project.style.display="block";

}

else{

project.style.display="none";

}

});

});

});



// ADVANCED CURSOR GLOW

const glowCursor = document.createElement("div");

glowCursor.style.width="40px";

glowCursor.style.height="40px";

glowCursor.style.borderRadius="50%";

glowCursor.style.position="fixed";

glowCursor.style.pointerEvents="none";

glowCursor.style.background="radial-gradient(circle,#ff00ff,#6a00ff)";

glowCursor.style.filter="blur(20px)";

document.body.appendChild(glowCursor);

document.addEventListener("mousemove",(e)=>{

glowCursor.style.left=e.clientX+"px";

glowCursor.style.top=e.clientY+"px";

});



// PARALLAX EFFECT

window.addEventListener("scroll",()=>{

let scrollY = window.scrollY;

document.querySelector(".hero").style.transform =

"translateY(" + scrollY * 0.2 + "px)";

});
// CURSOR PARTICLE

const particle = document.createElement("div");

particle.style.position="fixed";

particle.style.width="12px";

particle.style.height="12px";

particle.style.borderRadius="50%";

particle.style.background="#ff00ff";

particle.style.pointerEvents="none";

particle.style.boxShadow="0 0 20px #ff00ff";

document.body.appendChild(particle);

document.addEventListener("mousemove",(e)=>{

particle.style.left=e.clientX+"px";

particle.style.top=e.clientY+"px";

});