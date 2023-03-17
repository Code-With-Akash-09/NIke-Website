
// image changing function
function imgSlider(anything){
    document.getElementById("shoes").src = anything;
}


// for menu
const open = document.getElementById("open");
const close = document.getElementById("close");
const nav = document.getElementById("nav");
const cart = document.getElementById("cart");


function openMenu(){
    nav.classList.toggle("active");
    open.style.display = "none";
    close.style.display = "flex";
    cart.style.display = "none";
}
function closeMenu() {
    nav.classList.toggle("active");
    open.style.display = "flex";
    close.style.display = "none";
    cart.style.display = "flex";
}
