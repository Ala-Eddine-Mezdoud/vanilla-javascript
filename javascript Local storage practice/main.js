let li = document.querySelectorAll("ul li")
let box = document.getElementById("box")




window.onload = function(){
    if ( window.localStorage.getItem("color") !== null) {
        box.style.backgroundColor = window.localStorage.getItem("color")
        li.forEach((e)=>{
            if (e.getAttribute("data-value") === window.localStorage.getItem("color") ) {
                li.forEach((e)=>{
                    e.classList.remove("active")
                })
                e.classList.add("active")
            }
        })
    }
}

li.forEach((e)=>{
    e.onclick = function(){
        li.forEach((e)=>{
            e.classList.remove("active")
        })
        e.classList.add("active")
        window.localStorage.setItem("color",e.getAttribute("data-value"))
        box.style.backgroundColor = window.localStorage.getItem("color")

    }
})




