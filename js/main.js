import { Estudiante } from "./estudiante.class.js";

const listaEstudiantes = [
  { legajo: 1, nombre: "pepa", apellido: "archuby" },
  { legajo: 2, nombre: "maria", apellido: "archuby" },
  { legajo: 3, nombre: "juana", apellido: "archuby" },
];

const ul = document.getElementById("lista");

document.addEventListener("DOMContentLoaded", () => {
  listar();
});

function crearFilaEstudiante(estudiante) {
  const li = document.createElement("li");
  li.textContent = `Legajo: ${estudiante.legajo} - ${estudiante.apellido}`;

  return li;
}

function listar() {
  for (let estudiante of listaEstudiantes) {
    const li = crearFilaEstudiante(estudiante);
    ul.appendChild(li);
  }
}

const btn = document.getElementById("btnAgregar");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  agregar();
});

function agregar() {
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const legajo = document.getElementById("legajo");

  const estudiante = new Estudiante(legajo.value, nombre.value, apellido.value);
  listaEstudiantes.push(estudiante);
  ul.textContent = "";
  listar();
}
