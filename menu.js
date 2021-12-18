let navMenu = document.querySelector(".navMenu");
let navBtn = document.querySelector(".navBtn");

navBtn.addEventListener("click", ()=> {
	navBtn.classList.toggle("text-yellow-400")
	navMenu.classList.toggle("opacity-0")
	navMenu.classList.toggle("pointer-events-none")
})

