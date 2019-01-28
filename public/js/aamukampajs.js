const header = document.querySelector("#header");
const main = document.querySelector('#pokemonHolder');
const pokemonList = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
    "Fearow",
    "Ekans",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sandshrew",
    "Sandslash",
    "Nidoran-f",
    "Nidorina",
    "Nidoqueen",
    "Nidoran-m",
    "Nidorino",
    "Nidoking",
    "Clefairy",
    "Clefable",
    "Vulpix",
    "Ninetales",
    "Jigglypuff",
    "Wigglypuff",
    "Zubat",
    "Golbat",
    "Oddish",
    "Gloom",
    "Vileplume",
    "Paras",
    "Parasect",
    "Venonat",
    "Venomoth",
    "Diglett",
    "Dugtrio",
    "Meowth",
    "Persian",
    "Psyduck",
    "Golduck",
    "Mankey",
    "Primeape",
    "Growlithe",
    "Arcanine",
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Abra",
    "Kadabra",
    "Alakazam",
    "Machop",
    "Machoke",
    "Machamp",
    "Bellsprout",
    "Weepinbell",
    "Victreebel",
    "Tentacool",
    "Tentacruel",
    "Geodude",
    "Graveler",
    "Golem",
    "Ponyta",
    "Rapidash",
    "Slowpoke",
    "Slowbro",
    "Magnemite",
    "Magneton",
    "Farfetchd",
    "Doduo",
    "Dodrio",
    "Seel",
    "Dewgong",
    "Grimer",
    "Muk",
    "Shellder",
    "Cloyster",
    "Gastly",
    "Haunter",
    "Gengar",
    "Onix",
    "Drowzee",
    "Hypno",
    "Krabby",
    "Kingler",
    "Voltorb",
    "Electrode",
    "Exeggcute",
    "Exeggutor",
    "Cubone",
    "Marowak",
    "Hitmonlee",
    "Hitmonchan",
    "Lickitung",
    "Koffing",
    "Weezing",
    "Rhyhorn",
    "Rhydon",
    "Chansey",
];
const returnDate = new Date(2019,2,10);
const currentDate = new Date();
const date = Math.floor((returnDate - currentDate) / (1000*60*60*24));
header.innerHTML = `Aamuja jäljellä ${date + 1}`;
    const holder = document.createElement('div');
    holder.id = "pokemon";
    const name = document.createElement('h2');
    const imgHolder = document.createElement('img');
    imgHolder.id = "image";
    const br = document.createElement('br');
    name.innerText = `${pokemonList[date]} #${date+1}`;
    imgHolder.src =`https://img.pokemondb.net/artwork/${pokemonList[date].toLowerCase()}.jpg`;
    holder.appendChild(name);
   // holder.appendChild(br);
    main.appendChild(imgHolder);
    main.appendChild(holder);

/*
for(let item of pokemonList){
    const holder = document.createElement('div');
    const name = document.createElement('h2');
    const imgHolder = document.createElement('img');
    const br = document.createElement('br');
    name.innerText = item;
    imgHolder.src =`https://img.pokemondb.net/artwork/${item.toLowerCase()}.jpg`;
    holder.appendChild(name);
    holder.appendChild(br);
    holder.appendChild(imgHolder);
    main.appendChild(holder);
}*/

