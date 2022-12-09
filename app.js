const menuBtn = document.querySelector(".navbar__toggle")
const menuList = document.querySelector(".navbar__list")


menuBtn.addEventListener("click", ()=>{
    menuList.classList.toggle("show")
    menuBtn.classList.toggle("show")
})
