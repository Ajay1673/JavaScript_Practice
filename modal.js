const openModal = document.querySelectorAll(".show-modal")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".close-modal")
const overlay = document.querySelector(".overlay")

const removeHidden = function (){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
    console.log(modal.classList.value)
    
}

const addHidden = function(){
    modal.classList.add('hidden')
    overlay.classList.add("hidden")
}

for(let i=0;i<openModal.length;i++){
    openModal[i].addEventListener('click', removeHidden) 
}
closeModal.addEventListener('click', addHidden)
overlay.addEventListener('click', addHidden)
document.addEventListener('keydown',function(e){
    if(e.key=="Escape" && !modal.classList.contains("hidden")){
        console.log(e.key)
        addHidden()
        console.log(modal.classList)
        console.log(modal.classList.value)
    }
})