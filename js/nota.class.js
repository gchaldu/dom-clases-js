export class Nota {
  constructor(legajo, nota) {
    this.legajo = legajo;
    this.nota = nota;
  }

  setLegajo(legajo) {
    this.legajo = legajo;
  }

  setNota(nota) {
    this.nota = nota;
  }

  getLegajo() {
    return this.legajo;
  }

  getNota() {
    return this.nota;
  }
}
