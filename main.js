const pokeday = document.getElementById('pokeday')
const pokemonth = document.getElementById('month')
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

const printMonth = () => {
    for (i = 0; i < months.length; i++) {
        pokemonth.insertAdjacentHTML('beforeend', `<div id="pokeMonth">${months[i]}</div>`)
    }
}
printMonth()

fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=365')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const pokemon = data.results
        pokemon.forEach(element => {
            pokeday.insertAdjacentHTML('beforeend', `<div id="pokemon">${element.name}</div>`)
        });
    })