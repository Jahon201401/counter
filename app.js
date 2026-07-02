let count = document.getElementById("count")
let inc = document.getElementById("inc")
let decrement = document.getElementById("decrement")
let reset = document.getElementById("reset")
let number = 0

function yangilash(){
    count.textContent = number
}
inc.addEventListener("click",()=>{
    number++
    yangilash()
})
decrement.addEventListener("click",()=>{
    number--
    yangilash()
})
reset.addEventListener("click",()=>{
    number = 0
    yangilash()
})

