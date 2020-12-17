const navButton = document.querySelector(".nav-button");
const mobileMenu = document.querySelector(".nav-mobile");
const navBar = document.querySelector(".nav");
const topButton = document.querySelector('.top-button');
const loginButton = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const menuOverlay = document.querySelector('.overlay');
const menuClose = document.querySelector('.nav-mobile-container');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navBar.classList.add('nav-fixed');
    topButton.classList.add('top-active')

  } else {
    navBar.classList.remove('nav-fixed');
    topButton.classList.remove('top-active')
  }
});

topButton.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

navButton.addEventListener('click', () => {
  navButton.classList.toggle("close");
  mobileMenu.classList.toggle("active");
  menuOverlay.classList.toggle("overlay-active");
});

loginButton.addEventListener('click' , () =>{
  modal.classList.toggle('modal-active')
})

window.addEventListener('click' ,(e) =>{
  if(e.target == menuClose){
    mobileMenu.classList.remove('active');
    navButton.classList.remove("close");
    menuOverlay.classList.remove("overlay-active");
    console.log(e.target)
  }
})

window.addEventListener('click' ,(e) =>{
  if(e.target == menuOverlay){
    mobileMenu.classList.remove('active');
    navButton.classList.remove("close");
    menuOverlay.classList.remove("overlay-active");
    console.log(e.target)
  }
})

window.addEventListener('click' ,(e) =>{
  if(e.target == modal){
    modal.classList.remove('modal-active');
  }
})
