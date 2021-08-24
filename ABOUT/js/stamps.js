let number = 0
const stamps = [
    "../../img/sello94.png",
    "../../img/miscMamaso.png",
    "../../img/selloletras.png",
    "../../img/miscPita.png",
    "../../img/miscSalva.png",
    "../../img/selloexpo.png",
    "../../img/miscBici.png",
    "../../img/miscHugo.png",
    "../../img/miscGas.png"

]

const stampsTag = document.querySelector("div.stamps")

const audio = document.createElement("audio")
audio.setAttribute("src", "banjo.MP3")
audio.play()

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