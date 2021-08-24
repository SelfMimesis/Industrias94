const box = document.getElementsByClassName("box-inner")
const sections = document.querySelectorAll("section")
const bodyTag = document.querySelector("body")

const addMovement = function(){
topViewport = window.pageYOffset
const midViewport = topViewport + (window.innerHeight / 2)

sections.forEach((section, index)=> {
 const topSection = section.offsetTop
 const midSection = topSection + (section.offsetHeight / 2)

 const distanceToSection = midViewport - midSection

 const image = section.querySelector("img")
 const contenido = section.querySelector("div")

 let rotation = distanceToSection / 100


 let contentDist = -1 * distanceToSection/ 2

 image.src= image + ".jpg"
    



})


}

addMovement();

document.addEventListener("scroll", function(){
    addMovement();
})

document.addEventListener("resize",function(){
 addMovement();
})