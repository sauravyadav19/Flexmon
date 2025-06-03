import pokemonDataset from './pokemonDataset.js';

for(let pokemon of pokemonDataset){

    const individualCard = document.createElement("div");
    individualCard.setAttribute('class','individualCard');

    const image = document.createElement("img");
    image.src = pokemon['sprite'];
    image.setAttribute('class','image-Container');

    const name = document.createElement('div');
    name.innerText = pokemon['name'];
    name.setAttribute('class','name-Container');

    individualCard.append(image);
    individualCard.append(name);
    document.querySelector('#card-Container').append(individualCard);


}
const cardContainer = document.querySelector("#card-Container");
const overlay = document.querySelector("#overlay");
let currentHoverCard = null;


cardContainer.addEventListener('mouseenter',function(event){
    const card = event.target.closest('.individualCard');
    if(card&& cardContainer.contains(card)){
        overlay.style.display = 'block';
        card.classList.add('card-on-hover');
        card.style.zIndex = 101;
        currentHoverCard = card;
    }
    },{capture:true});

cardContainer.addEventListener('mouseleave',function(event){
    const card = event.target.closest('.individualCard');
    if(card&& card == currentHoverCard){
        overlay.style.display = 'none';
        card.classList.remove('card-on-hover');
        card.style.zIndex = '';
    }
    },{capture:true});