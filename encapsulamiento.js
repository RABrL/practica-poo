class Persona {
  #dni
  #nombre
  constructor (dni, nombre) {
    this.#dni = dni
    this.#nombre = nombre
  }

  set setNombre (nombre) {
    this.#nombre = nombre
  }

  get getNombre () {
    return this.#nombre
  }

  set setDni (dni) {
    this.#dni = dni
  }

  get getDni () {
    return this.#dni
  }
}

const persona1 = new Persona(1193378401, 'Robinson')
// persona1.#nombre ------> Da error porque no se puede acceder a un atributo privado
console.log(persona1.getDni) // Esta es la forma para acceder a un atributo privado
console.log(persona1.getNombre)
/* persona1.setNombre = 'Carlos'  -------> Da errpr proque no se puede editar un atributo privado */
persona1.setNombre = 'Carlos' // Esta es la forma correcta
persona1.setDni = 3837483
