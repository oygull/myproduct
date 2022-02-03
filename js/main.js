let elDarkLight = document.getElementById('darkLight');
let elMenuBtn = document.getElementById('menuBtn');
let elheaderMenu = document.getElementById('headerMenu');

elDarkLight.addEventListener('click', function(){
  document.body.classList.toggle('dark');
  document.getElementById('lightLogo').classList.toggle('logo-show');
  document.getElementById('darkLogo').classList.toggle('logo-hide');
})

elMenuBtn.addEventListener('click', function(){
  elheaderMenu.classList.toggle('show');
})