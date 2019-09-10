const pokeday = document.getElementById('pokeday')
const pokebithday = document.getElementById("date-pick");
const clickbtn = document.getElementById("search-btn")
let userIdPokemon = ''
let userBirthday = null

//Get The user ID with parsing the Date.
const getUserId = () => {
  //Get the Value from the input
  userBirthday = pokebithday.value
  // use Date.parse() to convert a string representation of a date, and returns the number of milliseconds.
  let parseDate = Date.parse(userBirthday)
  //Slice the year from the input and set the fist day of Year. 
  let startOfYear = userBirthday.slice(0, 4) + '-01-01'
  //Parse the Fisrt day of Year with Date.parse()
  let parseStart = Date.parse(startOfYear)
  //Get the number of day convert the Milliseconds into Days using this formula: 1000 * 60 * 60 * 24
  //I use 86400000 which are the seconds in 24 hours
  let days = 86400000
  //Get the difference between the first day of the year and the select date.
  let diff = parseDate - parseStart
  //Round up the number obtained from the division and add one
  let numberOfDate = Math.ceil(diff / days) + 1
  //Set the UserId as the result
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
    <img src="${pokemon.sprites.front_default}" alt="Avatar" style="width:50%">
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
    .catch(error => console.log(error))
    .then(data => {
      renderPokemon(data)
    })
}