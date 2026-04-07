let cards = document.querySelectorAll(".flip-card");
let contadorDom = document.getElementById("contador");
const frente = document.querySelectorAll(".flip-front")
const todas = document.getElementById("todas")
const vocales = document.getElementById("vocales")
const card = document.querySelectorAll(".col-6")

let contador = parseInt(contadorDom.innerText)
cards.forEach(function(card) {
    card.addEventListener("click", function() {
        card.classList.toggle("active");
    });
});

frente.forEach(front => {
    front.addEventListener("click", function() {
        contadorContar()
    })
})

function contadorContar(){
    contador++
    contadorDom.innerText=contador;

} 


function todasBtn() {
  card.forEach(el => {
    el.classList.remove("d-none");
  });
}

function vocalesBtn() {
  card.forEach(el => {
    if (el.classList.contains("vocal")) {
      el.classList.remove("d-none");
    } else {
      el.classList.add("d-none");
    }
  });

}