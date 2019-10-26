const cursor = document.querySelector(".cursor")
const box = document.querySelectorAll(".box-group")

const growCursor = function(){
cursor.classList.add("is-down")
}
const shrinkCursor = function(){
cursor.classList.remove("is-down")
}
const moveCursor = function(x,y){
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
}




document.addEventListener("mousedown", function(){
    growCursor()
})
document.addEventListener("mouseup", function(){
    shrinkCursor()
})
document.addEventListener("mousemove", function(){
    moveCursor(event.pageX, event.pageY)
})

box.addEventListener("mouseenter", function(){
    cursor.classList.add("hidden")
})
box.addEventListener("mouseout", function(){
    cursor.classList.remove("hidden")
})