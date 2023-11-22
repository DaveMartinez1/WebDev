const botonMenos = document.getElementById("boton-menos")
const botonMas = document.getElementById("boton-mas")
const numero = document.getElementById("numero")

let contador = 0

botonMenos.addEventListener('click', () => {
    contador--

    if (contador < 0) {
        contador = 0
    } else {
        numero.textContent = contador
    }

})

botonMas.addEventListener('click', () => {
    contador++
    numero.textContent = contador

})

document.addEventListener('keydown', evento => {
    if (evento.code === "Backspace") {
        contador = 0
        numero.textContent = contador
    }
})