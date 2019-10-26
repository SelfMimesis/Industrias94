let number = 0
const stamps = [
    "sello94.png",
    "selloletras.png",
    "sellototal.png",
    "sellocohete.png",
    "selloexpo.png"
]

const stampsTag = document.querySelector("div.stamps")

const addStamps = function(x,y){
const img = document.createElement("img")
img.setAttribute("src", stamps[number])
img.style.left = x + "px"
img.style.top = y +"px"
img.style.position = "absolute"
stampsTag.appendChild(img)
}

document.addEventListener("click", function(event){
    addStamps(event.pageX, event.pageY)
    number = number +1
    if(number > stamps.length - 1){
  number = 0
    }

})