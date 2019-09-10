const pokeday = document.getElementById('pokeday')
const pokebithday = document.getElementById("date-pick");
const clickbtn = document.getElementById("search-btn")
let userIdPokemon = ''

//Get The user ID with parsing the Date.
const getUserId = () => {
  //Get the Value from the input
  let userBirthday = pokebithday.value
  // declare the start and end dates to subtract the user's birthday
  let parseDate = Date.parse(userBirthday)
  let startOfYear = userBirthday.slice(0, 4) + '-01-01'
  let parseStart = Date.parse(startOfYear)
  //You can also use 86400000
  let days = 1000 * 60 * 60 * 24
  let diff = parseDate - parseStart
  let numberOfDate = Math.ceil(diff / days) + 1
  userIdPokemon = numberOfDate
  //Detect if the date is empty
  if (userBirthday == null || userBirthday == '') {
    alert('Selecciona una fecha');
    return false;
  } else {
    getPokemon()
  }
}

//This function Show the card of the Pokemon
function renderPokemon(pokemon) {
  pokeday.innerHTML =
    `<div class="card">
    <h3><b>${pokemon.name}</b></h3>  
    <img src="${pokemon.sprites.front_default}" alt="Avatar" style="width:50%">
    <div class="info">
    <p>${pokemon.id}</p>  
    </div>
  </div>`
}

//Button Fuction
clickbtn.addEventListener("click", getUserId)

//Get Data from API
const getPokemon = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${userIdPokemon}/`)
    .then(response => response.json())
    .then(data => {
      renderPokemon(data)
    })
}