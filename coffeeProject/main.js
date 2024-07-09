const inToNavbar=document.querySelector("#inNav")
const outToNavbar=document.querySelector("#x")
const mobileNavbar=document.querySelector(".moblie-nav")
const body=document.querySelector("body")
const inNav=document.querySelector(".in")
inToNavbar.addEventListener("click",()=>{
    mobileNavbar.style.display="flex"
    inNav.style.display="none"
})
outToNavbar.addEventListener("click",()=>{
    mobileNavbar.style.display="none"
    inNav.style.display="block"
    inNav.remove()
})
