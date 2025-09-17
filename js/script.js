const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});
const temaBtn = document.getElementById("tema-toggle");
const temas = ["tema-padrao", "tema-escuro", "tema-magico"];
let atual = localStorage.getItem("tema") || "tema-padrao";

document.body.classList.add(atual);
document.querySelector("header").classList.add(atual);

temaBtn.addEventListener("click", () => {
  const index = (temas.indexOf(atual) + 1) % temas.length;
  const novoTema = temas[index];

  document.body.classList.remove(atual);
  document.querySelector("header").classList.remove(atual);

  document.body.classList.add(novoTema);
  document.querySelector("header").classList.add(novoTema);

  localStorage.setItem("tema", novoTema);
  atual = novoTema;
});
