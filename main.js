const pokeday = document.getElementById('pokeday')
const pokebithday = document.getElementById("date-pick");
const clickbtn = document.getElementById("clickkk")
let userIdPokemon = []

const getUserId = () => {
    let userBirthday = pokebithday.value
    let parseDate = Date.parse(userBirthday)
    let startOfYear = userBirthday.slice(0,4)+'-01-01'
    let parseStart = Date.parse(startOfYear)
    //You can also use 86400000
    let days = 1000 * 60 * 60 * 24
    let diff = parseDate - parseStart 
    let numberOfDate = Math.ceil(diff/days)
    userIdPokemon.push(numberOfDate)
    console.log(userIdPokemon)
}
clickbtn.addEventListener("click", getUserId)


fetch('https://pokeapi.co/api/v2/pokemon/25/')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // const pokemon = data.results
        // console.log(pokemon)
        // pokemon.forEach(element => {
        //     pokeday.insertAdjacentHTML('beforeend', `<div class="div1" id="pokemon">${element.name}</div>`)
        // });
    })