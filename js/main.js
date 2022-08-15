var elMenuOpenBtn = document.querySelector(".js-menu-open-btn");
var elHeader = document.querySelector(".site-header");
var elBody = document.querySelector(".body");

elMenuOpenBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-header--active");

    elBody.classList.toggle("body--active");
})