const pokeday = document.getElementById('pokeday')
const pokebithday = document.getElementById("date-pick");
const clickbtn = document.getElementById("search-btn")
let userIdPokemon = ''
let userBirthday = null

//Get The user ID with parsing the Date.
const getUserId = () => {
  let userBirthday = pokebithday.value
  const parseDate = Date.parse(userBirthday)
  const startOfYear = userBirthday.slice(0, 4) + '-01-01'
  const parseStart = Date.parse(startOfYear)
  //You can also use 86400000
  const days = 1000 * 60 * 60 * 24
  const diff = parseDate - parseStart
  const numberOfDate = Math.ceil(diff / days) + 1
  userIdPokemon = numberOfDate
}

//This Function 'watch' if the input is null or a date. 
const searchPoke = () => {
  getUserId()
  if (userBirthday == null || userBirthday == '') {
    alert('Selecciona una fecha');
    return false;
  } else {
    getPokemon()
  }
}

//This function shows the Pokemon in HTML
const renderPokemon = (pokemon) => {
  pokeday.innerHTML =
    `<div class="card">
    <h3><b>${pokemon.name}</b></h3>  
    <img src="${pokemon.sprites.front_default}" alt="Avatar" style="width:70%">
    <div class="info">
    <p>${pokemon.id}</p>
    </div>
  </div>`
}

//Button Fuction
clickbtn.addEventListener("click", searchPoke)

//Get Data from API using Fetch
const getPokemon = () => {
  //You can use name, number, type, or ability in the url. 
  //Example: pokemon/ditto/, pokemon/1/, type/3/ or ability/4/.
  fetch(`https://pokeapi.co/api/v2/pokemon/${userIdPokemon}/`)
    .then(response => response.json())
    .then(data => {
      renderPokemon(data)
    })
}
