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