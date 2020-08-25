
//gsap .from(".bild", {opacity: 0, duration:1, y:-50 });

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".modal-img")

previews.forEach(preview => {
      preview.addEventListener('click', ()=> {
          modal.classList.add("open");
      })
} )