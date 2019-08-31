const pokeday = document.getElementById('pokeday')
const pokebithday = document.getElementById("date-pick");
const clickbtn = document.getElementById("clickkk")
let userIdPokemon = ''

const getUserId = () => {
    let userBirthday = pokebithday.value
    let parseDate = Date.parse(userBirthday)
    let startOfYear = userBirthday.slice(0, 4) + '-01-01'
    let parseStart = Date.parse(startOfYear)
    //You can also use 86400000
    let days = 1000 * 60 * 60 * 24
    let diff = parseDate - parseStart
    let numberOfDate = Math.ceil(diff / days)+1
    userIdPokemon = numberOfDate
    console.log(userIdPokemon)
    getPokemon()
}

function renderPokemon(pokemon) {
    pokeday.innerHTML =
    `<div class="card">
    <img src="${pokemon.sprites.front_default}" alt="Avatar" style="width:100%">
    <div class="info">
      <h4><b>${pokemon.name}</b></h4> 
      <p>${pokemon.id}</p> 
    </div>
  </div>`
}

clickbtn.addEventListener("click", getUserId)

const getPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${userIdPokemon}/`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            renderPokemon(data)
        })
}