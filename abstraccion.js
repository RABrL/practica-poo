class Animal { // Clase abstracta
  constructor (raza, peso, especie, nombre) {
    this.raza = raza
    this.peso = peso
    this.especie = especie
  }

  sonido () {}
}

class Perro extends Animal { // Herencia
  constructor (raza, peso, especie, nombre) {
    super(raza, peso, especie)
    this.nombre = nombre
  }

  sonido () { // Poliformismo
    console.log(`${this.nombre} hace Guau guau`)
  }
}

class Gato extends Animal { // Herencia
  constructor (raza, peso, especie, nombre) {
    super(raza, peso, especie)
    this.nombre = nombre
  }

  sonido () { // Poliformismo
    console.log(`${this.nombre} hace Miau miau`)
  }
}
const perro = new Perro('Doberman', '20kg', 'perro', 'Mateo')
console.log(perro)
perro.sonido()
const gato = new Gato('Persa', '3kg', 'gato', 'Michi')
console.log(gato)
gato.sonido()
