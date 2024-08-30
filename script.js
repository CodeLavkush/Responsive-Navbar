let menuBtn = document.querySelector(".menu-btn");
let sideNavbar = document.querySelector(".navbar-side");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener('click', ()=>{
    sideNavbar.style.display = 'flex';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'flex';
})

closeBtn.addEventListener('click', ()=>{
    sideNavbar.style.display = 'none';
    menuBtn.style.display = 'flex';
    closeBtn.style.display = 'none';
})
