const pokemonList = document.getElementById("pokemonList")
const loadMoreButton = document.getElementById("loadMoreButton")

const maxRecords = 11

const limit = 251
let offset = 0;



function loadPokemons(offset, limit) {
   pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHTML = pokemons.map((pokemon) => 
    `
      <li class="pokemon  ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
          
        <div class="details">
          <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}   
          </ol>
          
          <img src=${pokemon.photo} alt=${pokemon.name}>
        </div>
      </li>
    `
    ).join("")
    
    pokemonList.innerHTML += newHTML
   })
}

loadPokemons(offset, limit)

loadMoreButton.addEventListener("click", () => {
  offset += limit
  loadPokemons(offset, limit)
})