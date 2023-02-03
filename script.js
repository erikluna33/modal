'use strict';
console.log(document.querySelectorAll(".show-modal")[1])
console.log(typeof(document.querySelectorAll(".show-modal")))

const modalBtns = document.querySelectorAll(".show-modal")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const closeModal = document.querySelector(".close-modal");

const openModal = function(){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}


for(let i = 0; i < modalBtns.length; i++){
    console.log(modalBtns[i].textContent)
    modalBtns[i].addEventListener("click", openModal)
    
}

closeModal.addEventListener("click", function(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
})

overlay.addEventListener("click", function(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
})

document.addEventListener("keydown", function(k){
    console.log(k.key);
    if(k.key === "Escape"){
        modal.classList.add("hidden")
        overlay.classList.add("hidden")
    }
    
})
