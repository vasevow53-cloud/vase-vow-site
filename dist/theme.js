(function(){
const root=document.documentElement;
function update(){const dark=root.dataset.theme==='dark';document.querySelectorAll('[data-theme-toggle]').forEach(b=>{b.setAttribute('aria-pressed',String(dark));b.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');b.querySelector('span').textContent=dark?'Light':'Dark'});document.querySelectorAll('[data-logo-light]').forEach(img=>{img.src=dark?img.dataset.logoDark:img.dataset.logoLight})}
let animationTimer;const reduced=matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('[data-theme-toggle]').forEach(b=>b.addEventListener('click',()=>{if(!reduced.matches){clearTimeout(animationTimer);root.classList.add('theme-changing');animationTimer=setTimeout(()=>root.classList.remove('theme-changing'),500)}root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('vase-vow-theme',root.dataset.theme)}catch{}update()}));
const system=matchMedia('(prefers-color-scheme: dark)');system.addEventListener('change',e=>{let saved;try{saved=localStorage.getItem('vase-vow-theme')}catch{}if(!saved){root.dataset.theme=e.matches?'dark':'light';update()}});update();
})();
