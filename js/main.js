function muestra_oculta (id) {
  let div = document.getElementById (id);
  if (div.style.display == "none") {
    div.style.display = "flex";
  }
  else {
    div.style.display = "none";
  }
}
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
