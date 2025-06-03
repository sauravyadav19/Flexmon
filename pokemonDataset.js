//Dataset taken from the following link 
//https://gist.githubusercontent.com/saninmersion/f2999d482ba4c64f97b5156cd3681e7c/raw/848f8a3ba2f03627effbfca55d9b4cd307fc36f9/pokemon_data.json


const pokemonDataset = [
    {
        "id": 1,
        "name": "bulbasaur",
        "height": 0.7,
        "weight": 6.9,
        "species": "Seed Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        "id": 2,
        "name": "ivysaur",
        "height": 1,
        "weight": 13,
        "species": "Seed Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "There is a bud on this Pokémon’s back. To support its weight,\nIvysaur’s legs and trunk grow thick and strong.\nIf it starts spending more time lying in the sunlight,\nit’s a sign that the bud will bloom into a large flower soon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    {
        "id": 3,
        "name": "venusaur",
        "height": 2,
        "weight": 100,
        "species": "Seed Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "There is a large flower on Venusaur’s back. The flower is said\nto take on vivid colors if it gets plenty of nutrition and sunlight.\nThe flower’s aroma soothes the emotions of people.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    {
        "id": 3,
        "name": "venusaur-mega",
        "height": 2.4,
        "weight": 155.5,
        "species": "Seed Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "There is a large flower on Venusaur’s back. The flower is said\nto take on vivid colors if it gets plenty of nutrition and sunlight.\nThe flower’s aroma soothes the emotions of people.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png"
    },
    {
        "id": 4,
        "name": "charmander",
        "height": 0.6,
        "weight": 8.5,
        "species": "Lizard Pokémon",
        "types": [
            "fire"
        ],
        "description": "The flame that burns at the tip of its tail is an indication\nof its emotions. The flame wavers when Charmander\nis enjoying itself. If the Pokémon becomes enraged,\nthe flame burns fiercely.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        "id": 5,
        "name": "charmeleon",
        "height": 1.1,
        "weight": 19,
        "species": "Flame Pokémon",
        "types": [
            "fire"
        ],
        "description": "Charmeleon mercilessly destroys its foes using its sharp\nclaws. If it encounters a strong foe, it turns aggressive.\nIn this excited state, the flame at the tip of its tail flares with\na bluish white color.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
        "id": 6,
        "name": "charizard",
        "height": 1.7,
        "weight": 90.5,
        "species": "Flame Pokémon",
        "types": [
            "flying",
            "fire"
        ],
        "description": "Charizard flies around the sky in search of powerful opponents.\nIt breathes fire of such great heat that it melts anything.\nHowever, it never turns its fiery breath on any opponent\nweaker than itself.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
        "id": 6,
        "name": "charizard-mega-y",
        "height": 1.7,
        "weight": 100.5,
        "species": "Flame Pokémon",
        "types": [
            "flying",
            "fire"
        ],
        "description": "Charizard flies around the sky in search of powerful opponents.\nIt breathes fire of such great heat that it melts anything.\nHowever, it never turns its fiery breath on any opponent\nweaker than itself.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png"
    },
    {
        "id": 6,
        "name": "charizard-mega-x",
        "height": 1.7,
        "weight": 110.5,
        "species": "Flame Pokémon",
        "types": [
            "dragon",
            "fire"
        ],
        "description": "Charizard flies around the sky in search of powerful opponents.\nIt breathes fire of such great heat that it melts anything.\nHowever, it never turns its fiery breath on any opponent\nweaker than itself.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png"
    },
    {
        "id": 7,
        "name": "squirtle",
        "height": 0.5,
        "weight": 9,
        "species": "Tiny Turtle Pokémon",
        "types": [
            "water"
        ],
        "description": "Squirtle’s shell is not merely used for protection.\nThe shell’s rounded shape and the grooves on its\nsurface help minimize resistance in water,\nenabling this Pokémon to swim at high speeds.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        "id": 8,
        "name": "wartortle",
        "height": 1,
        "weight": 22.5,
        "species": "Turtle Pokémon",
        "types": [
            "water"
        ],
        "description": "Its tail is large and covered with a rich, thick fur. The tail\nbecomes increasingly deeper in color as Wartortle ages.\nThe scratches on its shell are evidence of this Pokémon’s\ntoughness as a battler.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
    },
    {
        "id": 9,
        "name": "blastoise",
        "height": 1.6,
        "weight": 85.5,
        "species": "Shellfish Pokémon",
        "types": [
            "water"
        ],
        "description": "Blastoise has water spouts that protrude from its shell.\nThe water spouts are very accurate.\nThey can shoot bullets of water with enough accuracy\nto strike empty cans from a distance of over 160 feet.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    },
    {
        "id": 9,
        "name": "blastoise-mega",
        "height": 1.6,
        "weight": 101.1,
        "species": "Shellfish Pokémon",
        "types": [
            "water"
        ],
        "description": "Blastoise has water spouts that protrude from its shell.\nThe water spouts are very accurate.\nThey can shoot bullets of water with enough accuracy\nto strike empty cans from a distance of over 160 feet.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png"
    },
    {
        "id": 10,
        "name": "caterpie",
        "height": 0.3,
        "weight": 2.9,
        "species": "Worm Pokémon",
        "types": [
            "bug"
        ],
        "description": "It’s easy to catch, and it grows quickly, making\nit one of the top recommendations for novice\nPokémon Trainers.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
    },
    {
        "id": 11,
        "name": "metapod",
        "height": 0.7,
        "weight": 9.9,
        "species": "Cocoon Pokémon",
        "types": [
            "bug"
        ],
        "description": "Its shell is hard, but it’s still just a bug shell.\nIt’s been known to break, so intense battles\nwith it should be avoided.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    },
    {
        "id": 12,
        "name": "butterfree",
        "height": 1.1,
        "weight": 32,
        "species": "Butterfly Pokémon",
        "types": [
            "flying",
            "bug"
        ],
        "description": "When attacked by other Pokémon, it defends\nitself by scattering its poisonous scales and\nfluttering its wings.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
        "id": 13,
        "name": "weedle",
        "height": 0.3,
        "weight": 3.2,
        "species": "Hairy Bug Pokémon",
        "types": [
            "poison",
            "bug"
        ],
        "description": "Weedle has an extremely acute sense of smell. It is capable\nof distinguishing its favorite kinds of leaves from those it\ndislikes just by sniffing with its big red proboscis (nose).",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
    },
    {
        "id": 14,
        "name": "kakuna",
        "height": 0.6,
        "weight": 10,
        "species": "Cocoon Pokémon",
        "types": [
            "poison",
            "bug"
        ],
        "description": "Kakuna remains virtually immobile as it clings to a tree.\nHowever, on the inside, it is extremely busy as it prepares\nfor its coming evolution.\nThis is evident from how hot the shell becomes to the touch.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
    },
    {
        "id": 15,
        "name": "beedrill",
        "height": 1,
        "weight": 29.5,
        "species": "Poison Bee Pokémon",
        "types": [
            "poison",
            "bug"
        ],
        "description": "Beedrill is extremely territorial. No one should ever approach\nits nest—this is for their own safety. If angered, they will attack\nin a furious swarm.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    {
        "id": 15,
        "name": "beedrill-mega",
        "height": 1.4,
        "weight": 40.5,
        "species": "Poison Bee Pokémon",
        "types": [
            "poison",
            "bug"
        ],
        "description": "Beedrill is extremely territorial. No one should ever approach\nits nest—this is for their own safety. If angered, they will attack\nin a furious swarm.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10090.png"
    },
    {
        "id": 16,
        "name": "pidgey",
        "height": 0.3,
        "weight": 1.8,
        "species": "Tiny Bird Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "Pidgey has an extremely sharp sense of direction.\nIt is capable of unerringly returning home to its nest,\nhowever far it may be removed from its familiar surroundings.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
    },
    {
        "id": 17,
        "name": "pidgeotto",
        "height": 1.1,
        "weight": 30,
        "species": "Bird Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "Pidgeotto claims a large area as its own territory. This\nPokémon flies around, patrolling its living space. If its territory\nis violated, it shows no mercy in thoroughly punishing the foe\nwith its sharp claws.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
    },
    {
        "id": 18,
        "name": "pidgeot",
        "height": 1.5,
        "weight": 39.5,
        "species": "Bird Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "This Pokémon has a dazzling plumage of beautifully\nglossy feathers. Many Trainers are captivated by the\nstriking beauty of the feathers on its head, compelling\nthem to choose Pidgeot as their Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
    },
    {
        "id": 18,
        "name": "pidgeot-mega",
        "height": 2.2,
        "weight": 50.5,
        "species": "Bird Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "This Pokémon has a dazzling plumage of beautifully\nglossy feathers. Many Trainers are captivated by the\nstriking beauty of the feathers on its head, compelling\nthem to choose Pidgeot as their Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10073.png"
    },
    {
        "id": 19,
        "name": "rattata",
        "height": 0.3,
        "weight": 3.5,
        "species": "Mouse Pokémon",
        "types": [
            "normal"
        ],
        "description": "With their strong capacity for survival, they can\nlive in dirty places without concern. Left\nunchecked, their numbers multiply rapidly.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
        "id": 19,
        "name": "rattata-alola",
        "height": 0.3,
        "weight": 3.8,
        "species": "Mouse Pokémon",
        "types": [
            "normal",
            "dark"
        ],
        "description": "With their strong capacity for survival, they can\nlive in dirty places without concern. Left\nunchecked, their numbers multiply rapidly.",
        "sprite": null
    },
    {
        "id": 20,
        "name": "raticate",
        "height": 0.7,
        "weight": 18.5,
        "species": "Mouse Pokémon",
        "types": [
            "normal"
        ],
        "description": "Its disposition is far more violent than its looks\nwould suggest. Don’t let your hand get too close\nto its face, as it could bite your hand clean off.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
    },
    {
        "id": 20,
        "name": "raticate-totem-alola",
        "height": 1.4,
        "weight": 105,
        "species": "Mouse Pokémon",
        "types": [
            "normal",
            "dark"
        ],
        "description": "Its disposition is far more violent than its looks\nwould suggest. Don’t let your hand get too close\nto its face, as it could bite your hand clean off.",
        "sprite": null
    },
    {
        "id": 20,
        "name": "raticate-alola",
        "height": 0.7,
        "weight": 25.5,
        "species": "Mouse Pokémon",
        "types": [
            "normal",
            "dark"
        ],
        "description": "Its disposition is far more violent than its looks\nwould suggest. Don’t let your hand get too close\nto its face, as it could bite your hand clean off.",
        "sprite": null
    },
    {
        "id": 21,
        "name": "spearow",
        "height": 0.3,
        "weight": 2,
        "species": "Tiny Bird Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "Farmers whose fields are troubled by bug\nPokémon appreciate Spearow for its vigorous\nappetite and look after it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
    },
    {
        "id": 22,
        "name": "fearow",
        "height": 1.2,
        "weight": 38,
        "species": "Beak Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "Drawings of a Pokémon resembling Fearow can\nbe seen in murals from deep in ancient history.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
    },
    {
        "id": 23,
        "name": "ekans",
        "height": 2,
        "weight": 6.9,
        "species": "Snake Pokémon",
        "types": [
            "poison"
        ],
        "description": "Ekans curls itself up in a spiral while it rests. Assuming this\nposition allows it to quickly respond to a threat from any\ndirection with a glare from its upraised head.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
    },
    {
        "id": 24,
        "name": "arbok",
        "height": 3.5,
        "weight": 65,
        "species": "Cobra Pokémon",
        "types": [
            "poison"
        ],
        "description": "This Pokémon is terrifically strong in order to constrict things\nwith its body. It can even flatten steel oil drums. Once Arbok\nwraps its body around its foe, escaping its crunching embrace\nis impossible.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
    },
    {
        "id": 25,
        "name": "pikachu",
        "height": 0.4,
        "weight": 6,
        "species": "Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    {
        "id": 25,
        "name": "pikachu-rock-star",
        "height": 0.4,
        "weight": 6,
        "species": "Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png"
    },
    {
        "id": 25,
        "name": "pikachu-belle",
        "height": 0.4,
        "weight": 6,
        "species": "Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png"
    },
    {
        "id": 25,
        "name": "pikachu-phd",
        "height": 0.4,
        "weight": 6,
        "species": "Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png"
    },
    {
        "id": 25,
        "name": "pikachu-cosplay",
        "height": 0.4,
        "weight": 6,
        "species": "Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png"
    },
    {
        "id": 25,
        "name": "pikachu-libre",
        "height": 0.4,
        "weight": 6,
        "species": "Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png"
    },
    {
        "id": 25,
        "name": "pikachu-pop-star",
        "height": 0.4,
        "weight": 6,
        "species": "Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png"
    },
    {
        "id": 25,
        "name": "pikachu-unova-cap",
        "height": 0.4,
        "weight": 6,
        "species": "Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.",
        "sprite": null
    },
    {
        "id": 25,
        "name": "pikachu-sinnoh-cap",
        "height": 0.4,
        "weight": 6,
        "species": "Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.",
        "sprite": null
    },
    {
        "id": 25,
        "name": "pikachu-kalos-cap",
        "height": 0.4,
        "weight": 6,
        "species": "Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.",
        "sprite": null
    },
    {
        "id": 25,
        "name": "pikachu-original-cap",
        "height": 0.4,
        "weight": 6,
        "species": "Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.",
        "sprite": null
    },
    {
        "id": 25,
        "name": "pikachu-hoenn-cap",
        "height": 0.4,
        "weight": 6,
        "species": "Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.",
        "sprite": null
    },
    {
        "id": 25,
        "name": "pikachu-alola-cap",
        "height": 0.4,
        "weight": 6,
        "species": "Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "It’s in its nature to store electricity. It feels\nstressed now and then if it’s unable to fully\ndischarge the electricity.",
        "sprite": null
    },
    {
        "id": 26,
        "name": "raichu",
        "height": 0.8,
        "weight": 30,
        "species": "Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "It becomes aggressive when it has electricity\nstored up. At such times, even its Trainer has to\ntake care to avoid being attacked.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
    },
    {
        "id": 26,
        "name": "raichu-alola",
        "height": 0.7,
        "weight": 21,
        "species": "Mouse Pokémon",
        "types": [
            "psychic",
            "electric"
        ],
        "description": "It becomes aggressive when it has electricity\nstored up. At such times, even its Trainer has to\ntake care to avoid being attacked.",
        "sprite": null
    },
    {
        "id": 27,
        "name": "sandshrew",
        "height": 0.6,
        "weight": 12,
        "species": "Mouse Pokémon",
        "types": [
            "ground"
        ],
        "description": "It usually makes its home in deserts and arid\nzones, where rain does not fall. It digs holes to\ncatch Bug-type Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
    },
    {
        "id": 27,
        "name": "sandshrew-alola",
        "height": 0.7,
        "weight": 40,
        "species": "Mouse Pokémon",
        "types": [
            "steel",
            "ice"
        ],
        "description": "It usually makes its home in deserts and arid\nzones, where rain does not fall. It digs holes to\ncatch Bug-type Pokémon.",
        "sprite": null
    },
    {
        "id": 28,
        "name": "sandslash",
        "height": 1,
        "weight": 29.5,
        "species": "Mouse Pokémon",
        "types": [
            "ground"
        ],
        "description": "It uses its claws to climb trees and then curls\nits body into a spiny ball, ready to drop onto\nany prey that appears.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
    },
    {
        "id": 28,
        "name": "sandslash-alola",
        "height": 1.2,
        "weight": 55,
        "species": "Mouse Pokémon",
        "types": [
            "steel",
            "ice"
        ],
        "description": "It uses its claws to climb trees and then curls\nits body into a spiny ball, ready to drop onto\nany prey that appears.",
        "sprite": null
    },
    {
        "id": 29,
        "name": "nidoran-f",
        "height": 0.4,
        "weight": 7,
        "species": "Poison Pin Pokémon",
        "types": [
            "poison"
        ],
        "description": "Nidoran♀ has barbs that secrete a powerful poison.\nThey are thought to have developed as protection for\nthis small-bodied Pokémon. When enraged, it releases\na horrible toxin from its horn.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
    },
    {
        "id": 30,
        "name": "nidorina",
        "height": 0.8,
        "weight": 20,
        "species": "Poison Pin Pokémon",
        "types": [
            "poison"
        ],
        "description": "When Nidorina are with their friends or family, they keep\ntheir barbs tucked away to prevent hurting each other.\nThis Pokémon appears to become nervous if separated\nfrom the others.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
    },
    {
        "id": 31,
        "name": "nidoqueen",
        "height": 1.3,
        "weight": 60,
        "species": "Drill Pokémon",
        "types": [
            "ground",
            "poison"
        ],
        "description": "Nidoqueen’s body is encased in extremely hard scales.\nIt is adept at sending foes flying with harsh tackles. This\nPokémon is at its strongest when it is defending its young.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
    },
    {
        "id": 32,
        "name": "nidoran-m",
        "height": 0.5,
        "weight": 9,
        "species": "Poison Pin Pokémon",
        "types": [
            "poison"
        ],
        "description": "Nidoran♂ has developed muscles for moving its ears. Thanks\nto them, the ears can be freely moved in any direction. Even\nthe slightest sound does not escape this Pokémon’s notice.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
    },
    {
        "id": 33,
        "name": "nidorino",
        "height": 0.9,
        "weight": 19.5,
        "species": "Poison Pin Pokémon",
        "types": [
            "poison"
        ],
        "description": "Nidorino has a horn that is harder than a diamond. If it senses\na hostile presence, all the barbs on its back bristle up at once,\nand it challenges the foe with all its might.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
    },
    {
        "id": 34,
        "name": "nidoking",
        "height": 1.4,
        "weight": 62,
        "species": "Drill Pokémon",
        "types": [
            "ground",
            "poison"
        ],
        "description": "Nidoking’s thick tail packs enormously destructive power.\nWith one swing, it can topple a metal transmission tower. Once\nthis Pokémon goes on a rampage, there is no stopping it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
    },
    {
        "id": 35,
        "name": "clefairy",
        "height": 0.6,
        "weight": 7.5,
        "species": "Fairy Pokémon",
        "types": [
            "fairy"
        ],
        "description": "On nights with a full moon, they gather together\nand dance. The surrounding area is enveloped\nin an abnormal magnetic field.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
    },
    {
        "id": 36,
        "name": "clefable",
        "height": 1.3,
        "weight": 40,
        "species": "Fairy Pokémon",
        "types": [
            "fairy"
        ],
        "description": "According to tradition, people who see a pair\nof Clefable skipping by can look forward to a\nhappy marriage.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
    },
    {
        "id": 37,
        "name": "vulpix",
        "height": 0.6,
        "weight": 9.9,
        "species": "Fox Pokémon",
        "types": [
            "fire"
        ],
        "description": "From its mouth spew flames that seem to\nresemble the spirits of the deceased. Some\npeople mistakenly think this fire is a ghost.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
    },
    {
        "id": 37,
        "name": "vulpix-alola",
        "height": 0.6,
        "weight": 9.9,
        "species": "Fox Pokémon",
        "types": [
            "ice"
        ],
        "description": "From its mouth spew flames that seem to\nresemble the spirits of the deceased. Some\npeople mistakenly think this fire is a ghost.",
        "sprite": null
    },
    {
        "id": 38,
        "name": "ninetales",
        "height": 1.1,
        "weight": 19.9,
        "species": "Fox Pokémon",
        "types": [
            "fire"
        ],
        "description": "Said to live for a thousand years, this Pokémon\nuses its supernatural abilities to manipulate fire.\nIt can burn its prey to a crisp as it pleases.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
    },
    {
        "id": 38,
        "name": "ninetales-alola",
        "height": 1.1,
        "weight": 19.9,
        "species": "Fox Pokémon",
        "types": [
            "fairy",
            "ice"
        ],
        "description": "Said to live for a thousand years, this Pokémon\nuses its supernatural abilities to manipulate fire.\nIt can burn its prey to a crisp as it pleases.",
        "sprite": null
    },
    {
        "id": 39,
        "name": "jigglypuff",
        "height": 0.5,
        "weight": 5.5,
        "species": "Balloon Pokémon",
        "types": [
            "fairy",
            "normal"
        ],
        "description": "Jigglypuff possess a vocal range that exceeds\n12 octaves, but each individual’s singing skill\ndepends on its own effort.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
    },
    {
        "id": 40,
        "name": "wigglytuff",
        "height": 1,
        "weight": 12,
        "species": "Balloon Pokémon",
        "types": [
            "fairy",
            "normal"
        ],
        "description": "As it inhales, it expands...and expands...and\nexpands. Wigglytuff compete to see which one\ncan inflate itself the most.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
    },
    {
        "id": 41,
        "name": "zubat",
        "height": 0.8,
        "weight": 7.5,
        "species": "Bat Pokémon",
        "types": [
            "flying",
            "poison"
        ],
        "description": "When exposed to sunlight, they suffer burns.\nThe frequency of their ultrasonic waves can\ndiffer slightly from colony to colony.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
    },
    {
        "id": 42,
        "name": "golbat",
        "height": 1.6,
        "weight": 55,
        "species": "Bat Pokémon",
        "types": [
            "flying",
            "poison"
        ],
        "description": "Sometimes they drink so much blood, they can’t\nfly anymore. Then they fall to the ground and\nbecome food for other Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
    },
    {
        "id": 43,
        "name": "oddish",
        "height": 0.5,
        "weight": 5.4,
        "species": "Weed Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "Oddish searches for fertile, nutrient-rich soil, then plants itself.\nDuring the daytime, while it is planted, this Pokémon’s feet\nare thought to change shape and become similar to the roots\nof trees.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
    },
    {
        "id": 44,
        "name": "gloom",
        "height": 0.8,
        "weight": 8.6,
        "species": "Weed Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "From its mouth Gloom drips honey that smells absolutely\nhorrible. Apparently, it loves the horrid stench. It sniffs the\nnoxious fumes and then drools even more of its honey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
    },
    {
        "id": 45,
        "name": "vileplume",
        "height": 1.2,
        "weight": 18.6,
        "species": "Flower Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "Vileplume has the world’s largest petals. They are used to\nattract prey that are then doused with toxic spores. Once the\nprey are immobilized, this Pokémon catches and devours them.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
    },
    {
        "id": 46,
        "name": "paras",
        "height": 0.3,
        "weight": 5.4,
        "species": "Mushroom Pokémon",
        "types": [
            "grass",
            "bug"
        ],
        "description": "Mushrooms called tochukaso sprout from its\nback. They can be dried and powdered to make\na medicine used to extend life.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
    },
    {
        "id": 47,
        "name": "parasect",
        "height": 1,
        "weight": 29.5,
        "species": "Mushroom Pokémon",
        "types": [
            "grass",
            "bug"
        ],
        "description": "It scatters toxic spores from its mushroom cap.\nOnce harvested, these spores can be steeped\nand boiled down to prepare herbal medicines.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
    },
    {
        "id": 48,
        "name": "venonat",
        "height": 1,
        "weight": 30,
        "species": "Insect Pokémon",
        "types": [
            "poison",
            "bug"
        ],
        "description": "Venonat is said to have evolved with a coat of thin, stiff hair\nthat covers its entire body for protection. It possesses large\neyes that never fail to spot even minuscule prey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
    },
    {
        "id": 49,
        "name": "venomoth",
        "height": 1.5,
        "weight": 12.5,
        "species": "Poison Moth Pokémon",
        "types": [
            "poison",
            "bug"
        ],
        "description": "Venomoth is nocturnal—it is a Pokémon that only becomes\nactive at night. Its favorite prey are small insects that gather\naround streetlights, attracted by the light in the darkness.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
    },
    {
        "id": 50,
        "name": "diglett",
        "height": 0.2,
        "weight": 0.8,
        "species": "Mole Pokémon",
        "types": [
            "ground"
        ],
        "description": "Many farmers cherish and nurture Diglett\nbecause its droppings enrich the soil it lives in.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
    },
    {
        "id": 50,
        "name": "diglett-alola",
        "height": 0.2,
        "weight": 1,
        "species": "Mole Pokémon",
        "types": [
            "steel",
            "ground"
        ],
        "description": "Many farmers cherish and nurture Diglett\nbecause its droppings enrich the soil it lives in.",
        "sprite": null
    },
    {
        "id": 51,
        "name": "dugtrio",
        "height": 0.7,
        "weight": 33.3,
        "species": "Mole Pokémon",
        "types": [
            "ground"
        ],
        "description": "Despite the closeness between this Pokémon\nand farmers and other people, no one has ever\nseen the parts of it concealed underground.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
    },
    {
        "id": 51,
        "name": "dugtrio-alola",
        "height": 0.7,
        "weight": 66.6,
        "species": "Mole Pokémon",
        "types": [
            "steel",
            "ground"
        ],
        "description": "Despite the closeness between this Pokémon\nand farmers and other people, no one has ever\nseen the parts of it concealed underground.",
        "sprite": null
    },
    {
        "id": 52,
        "name": "meowth",
        "height": 0.4,
        "weight": 4.2,
        "species": "Scratch Cat Pokémon",
        "types": [
            "normal"
        ],
        "description": "It loves shiny things. It often fights with\nMurkrow over prey they’re both trying to catch.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
    },
    {
        "id": 52,
        "name": "meowth-alola",
        "height": 0.4,
        "weight": 4.2,
        "species": "Scratch Cat Pokémon",
        "types": [
            "dark"
        ],
        "description": "It loves shiny things. It often fights with\nMurkrow over prey they’re both trying to catch.",
        "sprite": null
    },
    {
        "id": 53,
        "name": "persian",
        "height": 1,
        "weight": 32,
        "species": "Classy Cat Pokémon",
        "types": [
            "normal"
        ],
        "description": "It has a high opinion of itself, although not to\nthe same extent as the Alolan Persian. It’s quite\ndifficult to make friends with this Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
    },
    {
        "id": 53,
        "name": "persian-alola",
        "height": 1.1,
        "weight": 33,
        "species": "Classy Cat Pokémon",
        "types": [
            "dark"
        ],
        "description": "It has a high opinion of itself, although not to\nthe same extent as the Alolan Persian. It’s quite\ndifficult to make friends with this Pokémon.",
        "sprite": null
    },
    {
        "id": 54,
        "name": "psyduck",
        "height": 0.8,
        "weight": 19.6,
        "species": "Duck Pokémon",
        "types": [
            "water"
        ],
        "description": "This Pokémon is troubled by constant\nheadaches. The more pain it’s in, the more\npowerful its psychokinesis becomes.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
    },
    {
        "id": 55,
        "name": "golduck",
        "height": 1.7,
        "weight": 76.6,
        "species": "Duck Pokémon",
        "types": [
            "water"
        ],
        "description": "It swims along the banks of lakes and catches\nfish Pokémon. It takes them to the shore and\nquietly eats them up.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
    },
    {
        "id": 56,
        "name": "mankey",
        "height": 0.5,
        "weight": 28,
        "species": "Pig Monkey Pokémon",
        "types": [
            "fighting"
        ],
        "description": "Its raging tires it out and causes it to fall asleep,\nbut the anger resonating in its dreams causes it\nto wake up—which infuriates it all over again.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
    },
    {
        "id": 57,
        "name": "primeape",
        "height": 1,
        "weight": 32,
        "species": "Pig Monkey Pokémon",
        "types": [
            "fighting"
        ],
        "description": "Some researchers theorize that Primeape\nremains angry even when inside a Poké Ball.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
    },
    {
        "id": 58,
        "name": "growlithe",
        "height": 0.7,
        "weight": 19,
        "species": "Puppy Pokémon",
        "types": [
            "fire"
        ],
        "description": "It looks cute, but when you approach another\nTrainer’s Growlithe, it will bark at you and bite.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
    },
    {
        "id": 59,
        "name": "arcanine",
        "height": 1.9,
        "weight": 155,
        "species": "Legendary Pokémon",
        "types": [
            "fire"
        ],
        "description": "The fire burning inside its body serves as the\nenergy to fuel it as it runs great distances.\nIt appears in many legends.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
    },
    {
        "id": 60,
        "name": "poliwag",
        "height": 0.6,
        "weight": 12.4,
        "species": "Tadpole Pokémon",
        "types": [
            "water"
        ],
        "description": "It’s still not very good at walking. Its Trainers\nshould train this Pokémon to walk every day.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
    },
    {
        "id": 61,
        "name": "poliwhirl",
        "height": 1,
        "weight": 20,
        "species": "Tadpole Pokémon",
        "types": [
            "water"
        ],
        "description": "It marches over the land in search of bug\nPokémon to eat. Then it takes them underwater\nso it can dine on them where it’s safe.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
    },
    {
        "id": 62,
        "name": "poliwrath",
        "height": 1.3,
        "weight": 54,
        "species": "Tadpole Pokémon",
        "types": [
            "fighting",
            "water"
        ],
        "description": "Its percentage of body fat is nearly zero. Its\nbody is entirely muscle, which makes it heavy\nand forces its swimming prowess to develop.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
    },
    {
        "id": 63,
        "name": "abra",
        "height": 0.9,
        "weight": 19.5,
        "species": "Psi Pokémon",
        "types": [
            "psychic"
        ],
        "description": "It can teleport itself to safety while it’s asleep,\nbut when it wakes, it doesn’t know where it is,\nso it panics.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
    },
    {
        "id": 64,
        "name": "kadabra",
        "height": 1.3,
        "weight": 56.5,
        "species": "Psi Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Kadabra’s presence infests televisions and\nmonitors with creepy shadows that bring\nbad luck.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
    },
    {
        "id": 65,
        "name": "alakazam",
        "height": 1.5,
        "weight": 48,
        "species": "Psi Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Its brain cells continue to increase in number\nuntil its death. The older the Alakazam, the\nlarger its head.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
    },
    {
        "id": 65,
        "name": "alakazam-mega",
        "height": 1.2,
        "weight": 48,
        "species": "Psi Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Its brain cells continue to increase in number\nuntil its death. The older the Alakazam, the\nlarger its head.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10037.png"
    },
    {
        "id": 66,
        "name": "machop",
        "height": 0.8,
        "weight": 19.5,
        "species": "Superpower Pokémon",
        "types": [
            "fighting"
        ],
        "description": "With its superhuman strength, it’s able to throw\na hundred people all at the same time. Its\nstrength comes from lifting Graveler every day.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
    },
    {
        "id": 67,
        "name": "machoke",
        "height": 1.5,
        "weight": 70.5,
        "species": "Superpower Pokémon",
        "types": [
            "fighting"
        ],
        "description": "It willingly assists with hard labor because it\nknows the work is good training for its muscles.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
    },
    {
        "id": 68,
        "name": "machamp",
        "height": 1.6,
        "weight": 130,
        "species": "Superpower Pokémon",
        "types": [
            "fighting"
        ],
        "description": "It can lift heavy loads with the greatest of ease.\nIt can even heft dump trucks. But its clumsy\nfingers prevent it from doing any precision work.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
    },
    {
        "id": 69,
        "name": "bellsprout",
        "height": 0.7,
        "weight": 4,
        "species": "Flower Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "Bellsprout’s thin and flexible body lets it bend and sway\nto avoid any attack, however strong it may be. From its mouth,\nthis Pokémon spits a corrosive fluid that melts even iron.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
    },
    {
        "id": 70,
        "name": "weepinbell",
        "height": 1,
        "weight": 6.4,
        "species": "Flycatcher Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "Weepinbell has a large hook on its rear end. At night, the\nPokémon hooks on to a tree branch and goes to sleep.\nIf it moves around in its sleep, it may wake up to find itself\non the ground.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
    },
    {
        "id": 71,
        "name": "victreebel",
        "height": 1.7,
        "weight": 15.5,
        "species": "Flycatcher Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "Victreebel has a long vine that extends from its head.\nThis vine is waved and flicked about as if it were an animal\nto attract prey. When an unsuspecting prey draws near,\nthis Pokémon swallows it whole.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
    },
    {
        "id": 72,
        "name": "tentacool",
        "height": 0.9,
        "weight": 45.5,
        "species": "Jellyfish Pokémon",
        "types": [
            "poison",
            "water"
        ],
        "description": "It drifts in shallow seas, such as the areas near\nbeaches. If you get bitten or stabbed by its\ntoxic tentacles, rush to the hospital.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
    },
    {
        "id": 73,
        "name": "tentacruel",
        "height": 1.6,
        "weight": 55,
        "species": "Jellyfish Pokémon",
        "types": [
            "poison",
            "water"
        ],
        "description": "Although these Pokémon are rare, when a large\noutbreak of them occurs, all fish Pokémon\ndisappear from the surrounding sea.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
    },
    {
        "id": 74,
        "name": "geodude",
        "height": 0.4,
        "weight": 20,
        "species": "Rock Pokémon",
        "types": [
            "ground",
            "rock"
        ],
        "description": "There are plenty of them to be found along any\nroad. A scholar with too much free time once\ncounted a hundred of them along a single route.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
    },
    {
        "id": 74,
        "name": "geodude-alola",
        "height": 0.4,
        "weight": 20.3,
        "species": "Rock Pokémon",
        "types": [
            "electric",
            "rock"
        ],
        "description": "There are plenty of them to be found along any\nroad. A scholar with too much free time once\ncounted a hundred of them along a single route.",
        "sprite": null
    },
    {
        "id": 75,
        "name": "graveler",
        "height": 1,
        "weight": 105,
        "species": "Rock Pokémon",
        "types": [
            "ground",
            "rock"
        ],
        "description": "This slow-footed Pokémon moves by curling up\nand rolling instead of walking. With enough\nmomentum, its speed can exceed 60 mph.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
    },
    {
        "id": 75,
        "name": "graveler-alola",
        "height": 1,
        "weight": 110,
        "species": "Rock Pokémon",
        "types": [
            "electric",
            "rock"
        ],
        "description": "This slow-footed Pokémon moves by curling up\nand rolling instead of walking. With enough\nmomentum, its speed can exceed 60 mph.",
        "sprite": null
    },
    {
        "id": 76,
        "name": "golem",
        "height": 1.4,
        "weight": 300,
        "species": "Megaton Pokémon",
        "types": [
            "ground",
            "rock"
        ],
        "description": "Once a year, this Pokémon molts, and its shed\nshell returns to the soil. This process creates\nenriched soil, so farmers collect the shells.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
    },
    {
        "id": 76,
        "name": "golem-alola",
        "height": 1.7,
        "weight": 316,
        "species": "Megaton Pokémon",
        "types": [
            "electric",
            "rock"
        ],
        "description": "Once a year, this Pokémon molts, and its shed\nshell returns to the soil. This process creates\nenriched soil, so farmers collect the shells.",
        "sprite": null
    },
    {
        "id": 77,
        "name": "ponyta",
        "height": 1,
        "weight": 30,
        "species": "Fire Horse Pokémon",
        "types": [
            "fire"
        ],
        "description": "Ponyta is very weak at birth. It can barely stand up.\nThis Pokémon becomes stronger by stumbling and\nfalling to keep up with its parent.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
    },
    {
        "id": 78,
        "name": "rapidash",
        "height": 1.7,
        "weight": 95,
        "species": "Fire Horse Pokémon",
        "types": [
            "fire"
        ],
        "description": "Rapidash usually can be seen casually cantering in the fields\nand plains. However, when this Pokémon turns serious, its\nfiery manes flare and blaze as it gallops its way up to 150 mph.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
    },
    {
        "id": 79,
        "name": "slowpoke",
        "height": 1.2,
        "weight": 36,
        "species": "Dopey Pokémon",
        "types": [
            "psychic",
            "water"
        ],
        "description": "Alolan home cooking involves drying Slowpoke\ntails and then simmering them into a salty stew.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
    },
    {
        "id": 80,
        "name": "slowbro",
        "height": 1.6,
        "weight": 78.5,
        "species": "Hermit Crab Pokémon",
        "types": [
            "psychic",
            "water"
        ],
        "description": "Whenever Shellder bites down hard on its tail,\nit gives Slowbro a flash of inspiration...which it\nforgets a moment later.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
    },
    {
        "id": 80,
        "name": "slowbro-mega",
        "height": 2,
        "weight": 120,
        "species": "Hermit Crab Pokémon",
        "types": [
            "psychic",
            "water"
        ],
        "description": "Whenever Shellder bites down hard on its tail,\nit gives Slowbro a flash of inspiration...which it\nforgets a moment later.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10071.png"
    },
    {
        "id": 81,
        "name": "magnemite",
        "height": 0.3,
        "weight": 6,
        "species": "Magnet Pokémon",
        "types": [
            "steel",
            "electric"
        ],
        "description": "It sends out electromagnetic waves, which let it\nfloat through the air. Touching it while it’s eating\nelectricity will give you a full-body shock.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
    },
    {
        "id": 82,
        "name": "magneton",
        "height": 1,
        "weight": 60,
        "species": "Magnet Pokémon",
        "types": [
            "steel",
            "electric"
        ],
        "description": "It has about three times the electrical power of\nMagnemite. For some reason, outbreaks of this\nPokémon happen when lots of sunspots appear.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
    },
    {
        "id": 83,
        "name": "farfetchd",
        "height": 0.8,
        "weight": 15,
        "species": "Wild Duck Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "Farfetch’d is always seen with a stalk from a plant of some\nsort. Apparently, there are good stalks and bad stalks. This\nPokémon has been known to fight with others over stalks.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
    },
    {
        "id": 84,
        "name": "doduo",
        "height": 1.4,
        "weight": 39.2,
        "species": "Twin Bird Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "Doduo’s two heads contain completely identical brains. A\nscientific study reported that on rare occasions, there will be\nexamples of this Pokémon possessing different sets of brains.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
    },
    {
        "id": 85,
        "name": "dodrio",
        "height": 1.8,
        "weight": 85.2,
        "species": "Triple Bird Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "Apparently, the heads aren’t the only parts of the body that\nDodrio has three of. It has three sets of hearts and lungs as\nwell, so it is capable of running long distances without rest.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
    },
    {
        "id": 86,
        "name": "seel",
        "height": 1.1,
        "weight": 90,
        "species": "Sea Lion Pokémon",
        "types": [
            "water"
        ],
        "description": "Seel hunts for prey in the frigid sea underneath sheets of ice.\nWhen it needs to breathe, it punches a hole through the ice\nwith the sharply protruding section of its head.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
    },
    {
        "id": 87,
        "name": "dewgong",
        "height": 1.7,
        "weight": 120,
        "species": "Sea Lion Pokémon",
        "types": [
            "ice",
            "water"
        ],
        "description": "Dewgong loves to snooze on bitterly cold ice. The sight of\nthis Pokémon sleeping on a glacier was mistakenly thought\nto be a mermaid by a mariner long ago.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
    },
    {
        "id": 88,
        "name": "grimer",
        "height": 0.9,
        "weight": 30,
        "species": "Sludge Pokémon",
        "types": [
            "poison"
        ],
        "description": "It was born from sludge transformed by\nexposure to X-rays from the moon. When its\ninternal load of germs decreases, it dies.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
    },
    {
        "id": 88,
        "name": "grimer-alola",
        "height": 0.7,
        "weight": 42,
        "species": "Sludge Pokémon",
        "types": [
            "dark",
            "poison"
        ],
        "description": "It was born from sludge transformed by\nexposure to X-rays from the moon. When its\ninternal load of germs decreases, it dies.",
        "sprite": null
    },
    {
        "id": 89,
        "name": "muk",
        "height": 1.2,
        "weight": 30,
        "species": "Sludge Pokémon",
        "types": [
            "poison"
        ],
        "description": "After recent environmental improvements, this\nPokémon is now hardly seen at all. People\nspeculate that it may go extinct at some point.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
    },
    {
        "id": 89,
        "name": "muk-alola",
        "height": 1,
        "weight": 52,
        "species": "Sludge Pokémon",
        "types": [
            "dark",
            "poison"
        ],
        "description": "After recent environmental improvements, this\nPokémon is now hardly seen at all. People\nspeculate that it may go extinct at some point.",
        "sprite": null
    },
    {
        "id": 90,
        "name": "shellder",
        "height": 0.3,
        "weight": 4,
        "species": "Bivalve Pokémon",
        "types": [
            "water"
        ],
        "description": "This Pokémon’s tongue is always hanging out.\nIt uses its tongue with great dexterity to dig up\nsand from the seabed in its search for food.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
    },
    {
        "id": 91,
        "name": "cloyster",
        "height": 1.5,
        "weight": 132.5,
        "species": "Bivalve Pokémon",
        "types": [
            "ice",
            "water"
        ],
        "description": "Excavation of the tombs of ancient hunting\ntribes has turned up many spears tipped with\nspikes that had fallen off this Pokémon’s shell.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
    },
    {
        "id": 92,
        "name": "gastly",
        "height": 1.3,
        "weight": 0.1,
        "species": "Gas Pokémon",
        "types": [
            "poison",
            "ghost"
        ],
        "description": "Although Gastly is barely visible, when it’s near,\na faint sweet smell lingers.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
    },
    {
        "id": 93,
        "name": "haunter",
        "height": 1.6,
        "weight": 0.1,
        "species": "Gas Pokémon",
        "types": [
            "poison",
            "ghost"
        ],
        "description": "It fears the light and revels in the dark. It may\nbe on the verge of extinction in cities that stay\nbrightly lit at night.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
    },
    {
        "id": 94,
        "name": "gengar",
        "height": 1.5,
        "weight": 40.5,
        "species": "Shadow Pokémon",
        "types": [
            "poison",
            "ghost"
        ],
        "description": "It apparently wishes for a traveling companion.\nSince it was once human itself, it tries to create\none by taking the lives of other humans.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
    },
    {
        "id": 94,
        "name": "gengar-mega",
        "height": 1.4,
        "weight": 40.5,
        "species": "Shadow Pokémon",
        "types": [
            "poison",
            "ghost"
        ],
        "description": "It apparently wishes for a traveling companion.\nSince it was once human itself, it tries to create\none by taking the lives of other humans.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10038.png"
    },
    {
        "id": 95,
        "name": "onix",
        "height": 8.8,
        "weight": 210,
        "species": "Rock Snake Pokémon",
        "types": [
            "ground",
            "rock"
        ],
        "description": "Onix has a magnet in its brain. It acts as a compass so that\nthis Pokémon does not lose direction while it is tunneling.\nAs it grows older, its body becomes increasingly rounder\nand smoother.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
    },
    {
        "id": 96,
        "name": "drowzee",
        "height": 1,
        "weight": 32.4,
        "species": "Hypnosis Pokémon",
        "types": [
            "psychic"
        ],
        "description": "It finds really fun dreams tasty. When it makes\nfriends with people, it may show them the most\ndelicious dreams it’s ever eaten.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
    },
    {
        "id": 97,
        "name": "hypno",
        "height": 1.6,
        "weight": 75.6,
        "species": "Hypnosis Pokémon",
        "types": [
            "psychic"
        ],
        "description": "As a matter of course, it makes anyone it meets\nfall asleep and has a taste of their dreams.\nAnyone having a good dream, it carries off.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
    },
    {
        "id": 98,
        "name": "krabby",
        "height": 0.4,
        "weight": 6.5,
        "species": "River Crab Pokémon",
        "types": [
            "water"
        ],
        "description": "Krabby live on beaches, burrowed inside holes dug into\nthe sand. On sandy beaches with little in the way of food,\nthese Pokémon can be seen squabbling with each other\nover territory.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
    },
    {
        "id": 99,
        "name": "kingler",
        "height": 1.3,
        "weight": 60,
        "species": "Pincer Pokémon",
        "types": [
            "water"
        ],
        "description": "Kingler has an enormous, oversized claw. It waves this huge\nclaw in the air to communicate with others. However, because\nthe claw is so heavy, the Pokémon quickly tires.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
    },
    {
        "id": 100,
        "name": "voltorb",
        "height": 0.5,
        "weight": 10.4,
        "species": "Ball Pokémon",
        "types": [
            "electric"
        ],
        "description": "Voltorb is extremely sensitive—it explodes at the slightest\nof shocks. It is rumored that it was first created when a\nPoké Ball was exposed to a powerful pulse of energy.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
    },
    {
        "id": 101,
        "name": "electrode",
        "height": 1.2,
        "weight": 66.6,
        "species": "Ball Pokémon",
        "types": [
            "electric"
        ],
        "description": "One of Electrode’s characteristics is its attraction to electricity.\nIt is a problematical Pokémon that congregates mostly at\nelectrical power plants to feed on electricity that has just\nbeen generated.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
    },
    {
        "id": 102,
        "name": "exeggcute",
        "height": 0.4,
        "weight": 2.5,
        "species": "Egg Pokémon",
        "types": [
            "psychic",
            "grass"
        ],
        "description": "Six of them together form a full-fledged\nPokémon. It’s often hunted by Crabrawler,\nbut uses psychokinesis to drive it off.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
    },
    {
        "id": 103,
        "name": "exeggutor",
        "height": 2,
        "weight": 120,
        "species": "Coconut Pokémon",
        "types": [
            "psychic",
            "grass"
        ],
        "description": "When the time comes, one of its three heads\nfalls off. Before long, the fallen head grows into\nan Exeggcute.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
    },
    {
        "id": 103,
        "name": "exeggutor-alola",
        "height": 10.9,
        "weight": 415.6,
        "species": "Coconut Pokémon",
        "types": [
            "dragon",
            "grass"
        ],
        "description": "When the time comes, one of its three heads\nfalls off. Before long, the fallen head grows into\nan Exeggcute.",
        "sprite": null
    },
    {
        "id": 104,
        "name": "cubone",
        "height": 0.4,
        "weight": 6.5,
        "species": "Lonely Pokémon",
        "types": [
            "ground"
        ],
        "description": "The skull it wears on its head is that of its dead\nmother. According to some, it will evolve when\nit comes to terms with the pain of her death.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
    },
    {
        "id": 105,
        "name": "marowak",
        "height": 1,
        "weight": 45,
        "species": "Bone Keeper Pokémon",
        "types": [
            "ground"
        ],
        "description": "This Pokémon is out for vengeance on its natural\nenemy, Mandibuzz. It throws bones like\nboomerangs to try to take it down.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
    },
    {
        "id": 105,
        "name": "marowak-alola",
        "height": 1,
        "weight": 34,
        "species": "Bone Keeper Pokémon",
        "types": [
            "ghost",
            "fire"
        ],
        "description": "This Pokémon is out for vengeance on its natural\nenemy, Mandibuzz. It throws bones like\nboomerangs to try to take it down.",
        "sprite": null
    },
    {
        "id": 106,
        "name": "hitmonlee",
        "height": 1.5,
        "weight": 49.8,
        "species": "Kicking Pokémon",
        "types": [
            "fighting"
        ],
        "description": "Hitmonlee’s legs freely contract and stretch. Using these\nspringlike legs, it bowls over foes with devastating kicks.\nAfter battle, it rubs down its legs and loosens the muscles\nto overcome fatigue.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
    },
    {
        "id": 107,
        "name": "hitmonchan",
        "height": 1.4,
        "weight": 50.2,
        "species": "Punching Pokémon",
        "types": [
            "fighting"
        ],
        "description": "Hitmonchan is said to possess the spirit of a boxer who had\nbeen working toward a world championship. This Pokémon\nhas an indomitable spirit and will never give up in the face\nof adversity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
    },
    {
        "id": 108,
        "name": "lickitung",
        "height": 1.2,
        "weight": 65.5,
        "species": "Licking Pokémon",
        "types": [
            "normal"
        ],
        "description": "Whenever Lickitung comes across something new, it will\nunfailingly give it a lick. It does so because it memorizes things\nby texture and by taste. It is somewhat put off by sour things.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
    },
    {
        "id": 109,
        "name": "koffing",
        "height": 0.6,
        "weight": 1,
        "species": "Poison Gas Pokémon",
        "types": [
            "poison"
        ],
        "description": "Koffing embodies toxic substances. It mixes the toxins with raw\ngarbage to set off a chemical reaction that results in a terribly\npowerful poison gas. The higher the temperature, the more gas\nis concocted by this Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
    },
    {
        "id": 110,
        "name": "weezing",
        "height": 1.2,
        "weight": 9.5,
        "species": "Poison Gas Pokémon",
        "types": [
            "poison"
        ],
        "description": "Weezing alternately shrinks and inflates its twin bodies to mix\ntogether toxic gases inside. The more the gases are mixed,\nthe more powerful the toxins become. The Pokémon also\nbecomes more putrid.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
    },
    {
        "id": 111,
        "name": "rhyhorn",
        "height": 1,
        "weight": 115,
        "species": "Spikes Pokémon",
        "types": [
            "rock",
            "ground"
        ],
        "description": "Rhyhorn’s brain is very small. It is so dense, while on a run\nit forgets why it started running in the first place. It apparently\nremembers sometimes if it demolishes something.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
    },
    {
        "id": 112,
        "name": "rhydon",
        "height": 1.9,
        "weight": 120,
        "species": "Drill Pokémon",
        "types": [
            "rock",
            "ground"
        ],
        "description": "Rhydon has a horn that serves as a drill. It is used for\ndestroying rocks and boulders. This Pokémon occasionally\nrams into streams of magma, but the armor-like hide prevents\nit from feeling the heat.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
    },
    {
        "id": 113,
        "name": "chansey",
        "height": 1.1,
        "weight": 34.6,
        "species": "Egg Pokémon",
        "types": [
            "normal"
        ],
        "description": "Not only are these Pokémon fast runners,\nthey’re also few in number, so anyone who finds\none must be lucky indeed.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
    },
    {
        "id": 114,
        "name": "tangela",
        "height": 1,
        "weight": 35,
        "species": "Vine Pokémon",
        "types": [
            "grass"
        ],
        "description": "Tangela’s vines snap off easily if they are grabbed. This\nhappens without pain, allowing it to make a quick getaway.\nThe lost vines are replaced by newly grown vines the very\nnext day.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
    },
    {
        "id": 115,
        "name": "kangaskhan",
        "height": 2.2,
        "weight": 80,
        "species": "Parent Pokémon",
        "types": [
            "normal"
        ],
        "description": "The child in its pouch leaves home after roughly\nthree years. That is the only time the mother is\nheard to cry wildly.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
    },
    {
        "id": 115,
        "name": "kangaskhan-mega",
        "height": 2.2,
        "weight": 100,
        "species": "Parent Pokémon",
        "types": [
            "normal"
        ],
        "description": "The child in its pouch leaves home after roughly\nthree years. That is the only time the mother is\nheard to cry wildly.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10039.png"
    },
    {
        "id": 116,
        "name": "horsea",
        "height": 0.4,
        "weight": 8,
        "species": "Dragon Pokémon",
        "types": [
            "water"
        ],
        "description": "If Horsea senses danger, it will reflexively spray a dense\nblack ink from its mouth and try to escape. This Pokémon\nswims by cleverly flapping the fin on its back.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
    },
    {
        "id": 117,
        "name": "seadra",
        "height": 1.2,
        "weight": 25,
        "species": "Dragon Pokémon",
        "types": [
            "water"
        ],
        "description": "Seadra generates whirlpools by spinning its body.\nThe whirlpools are strong enough to swallow even\nfishing boats. This Pokémon weakens prey with\nthese currents, then swallows it whole.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
    },
    {
        "id": 118,
        "name": "goldeen",
        "height": 0.6,
        "weight": 15,
        "species": "Goldfish Pokémon",
        "types": [
            "water"
        ],
        "description": "Spellbound by the length of its horn and the\nbeauty of its fins, many strange Trainers raise\nGoldeen and nothing but Goldeen.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
    },
    {
        "id": 119,
        "name": "seaking",
        "height": 1.3,
        "weight": 39,
        "species": "Goldfish Pokémon",
        "types": [
            "water"
        ],
        "description": "Trainers who are crazy for Seaking are divided\ninto horn enthusiasts and fin enthusiasts.\nThe two groups do not get along well.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
    },
    {
        "id": 120,
        "name": "staryu",
        "height": 0.8,
        "weight": 34.5,
        "species": "Star Shape Pokémon",
        "types": [
            "water"
        ],
        "description": "This Pokémon gets nibbled on by Lumineon and\nothers. Thanks to its red core, it regenerates\nfast, so it’s unconcerned by their snack attacks.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
    },
    {
        "id": 121,
        "name": "starmie",
        "height": 1.1,
        "weight": 80,
        "species": "Mysterious Pokémon",
        "types": [
            "psychic",
            "water"
        ],
        "description": "Its unusual body shape, reminiscent of abstract\nart, led local people to spread rumors that this\nPokémon may be an invader from outer space.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
    },
    {
        "id": 122,
        "name": "mr-mime",
        "height": 1.3,
        "weight": 54.5,
        "species": "Barrier Pokémon",
        "types": [
            "fairy",
            "psychic"
        ],
        "description": "Mr. Mime is a master of pantomime. Its gestures and motions\nconvince watchers that something unseeable actually exists.\nOnce the watchers are convinced, the unseeable thing exists\nas if it were real.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
    },
    {
        "id": 123,
        "name": "scyther",
        "height": 1.5,
        "weight": 56,
        "species": "Mantis Pokémon",
        "types": [
            "flying",
            "bug"
        ],
        "description": "While young, they live together deep in the\nmountains, training themselves in how to fight\nwith their scythes and move at high speeds.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
    },
    {
        "id": 124,
        "name": "jynx",
        "height": 1.4,
        "weight": 40.6,
        "species": "Human Shape Pokémon",
        "types": [
            "psychic",
            "ice"
        ],
        "description": "Jynx walks rhythmically, swaying and shaking its hips\nas if it were dancing. Its motions are so bouncingly alluring,\npeople seeing it are compelled to shake their hips without\ngiving any thought to what they are doing.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
    },
    {
        "id": 125,
        "name": "electabuzz",
        "height": 1.1,
        "weight": 30,
        "species": "Electric Pokémon",
        "types": [
            "electric"
        ],
        "description": "Electricity leaks from it in amounts far greater\nthan the amount of electricity it eats.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
    },
    {
        "id": 126,
        "name": "magmar",
        "height": 1.3,
        "weight": 44.5,
        "species": "Spitfire Pokémon",
        "types": [
            "fire"
        ],
        "description": "When angered, it spouts brilliant fire from all\nover its body. It doesn’t calm down until its\nopponent has burned to ash.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
    },
    {
        "id": 127,
        "name": "pinsir",
        "height": 1.5,
        "weight": 55,
        "species": "Stag Beetle Pokémon",
        "types": [
            "bug"
        ],
        "description": "One solid blow from its horns is enough to split\napart a large tree. Its greatest rival in Alola\nis Vikavolt.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
    },
    {
        "id": 127,
        "name": "pinsir-mega",
        "height": 1.7,
        "weight": 59,
        "species": "Stag Beetle Pokémon",
        "types": [
            "flying",
            "bug"
        ],
        "description": "One solid blow from its horns is enough to split\napart a large tree. Its greatest rival in Alola\nis Vikavolt.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10040.png"
    },
    {
        "id": 128,
        "name": "tauros",
        "height": 1.4,
        "weight": 88.4,
        "species": "Wild Bull Pokémon",
        "types": [
            "normal"
        ],
        "description": "Although it’s known to be a fierce Pokémon,\nTauros in the Alola region are said to possess\na measure of calmness.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
    },
    {
        "id": 129,
        "name": "magikarp",
        "height": 0.9,
        "weight": 10,
        "species": "Fish Pokémon",
        "types": [
            "water"
        ],
        "description": "Its reckless leaps make it easy pickings for\npredators. On the bright side, many Pokémon\nenjoy longer life spans, thanks to Magikarp.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
    },
    {
        "id": 130,
        "name": "gyarados",
        "height": 6.5,
        "weight": 235,
        "species": "Atrocious Pokémon",
        "types": [
            "flying",
            "water"
        ],
        "description": "There are people who swear that any place\nGyarados appears is fated for destruction.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
    },
    {
        "id": 130,
        "name": "gyarados-mega",
        "height": 6.5,
        "weight": 305,
        "species": "Atrocious Pokémon",
        "types": [
            "dark",
            "water"
        ],
        "description": "There are people who swear that any place\nGyarados appears is fated for destruction.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10041.png"
    },
    {
        "id": 131,
        "name": "lapras",
        "height": 2.5,
        "weight": 220,
        "species": "Transport Pokémon",
        "types": [
            "ice",
            "water"
        ],
        "description": "These Pokémon were once near extinction due\nto poaching. Following protective regulations,\nthere is now an overabundance of them.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
    },
    {
        "id": 132,
        "name": "ditto",
        "height": 0.3,
        "weight": 4,
        "species": "Transform Pokémon",
        "types": [
            "normal"
        ],
        "description": "With its astonishing capacity for\nmetamorphosis, it can get along with anything.\nIt does not get along well with its fellow Ditto.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    },
    {
        "id": 133,
        "name": "eevee",
        "height": 0.3,
        "weight": 6.5,
        "species": "Evolution Pokémon",
        "types": [
            "normal"
        ],
        "description": "Current studies show it can evolve into an\nincredible eight different species of Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
    },
    {
        "id": 134,
        "name": "vaporeon",
        "height": 1,
        "weight": 29,
        "species": "Bubble Jet Pokémon",
        "types": [
            "water"
        ],
        "description": "Blending in with the water and erasing all signs\nof its presence, it patiently waits for its prey,\nfish Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
    },
    {
        "id": 135,
        "name": "jolteon",
        "height": 0.8,
        "weight": 24.5,
        "species": "Lightning Pokémon",
        "types": [
            "electric"
        ],
        "description": "When its fur stands on end, that’s a sign it’s\nabout to give off a jolt of electricity. Take care,\nas sometimes lightning strikes next to it, too.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
    },
    {
        "id": 136,
        "name": "flareon",
        "height": 0.9,
        "weight": 25,
        "species": "Flame Pokémon",
        "types": [
            "fire"
        ],
        "description": "Its average body temperature is between 1,300\nand 1,500 degrees Fahrenheit. In its internal\nflame sac, temperatures reach 3,000 degrees.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
    },
    {
        "id": 137,
        "name": "porygon",
        "height": 0.8,
        "weight": 36.5,
        "species": "Virtual Pokémon",
        "types": [
            "normal"
        ],
        "description": "It can convert its body into digital data,\nwhich enables it to enter cyberspace.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
    },
    {
        "id": 138,
        "name": "omanyte",
        "height": 0.4,
        "weight": 7.5,
        "species": "Spiral Pokémon",
        "types": [
            "water",
            "rock"
        ],
        "description": "Omanyte is one of the ancient and long-since-extinct Pokémon\nthat have been regenerated from fossils by people. If attacked\nby an enemy, it withdraws itself inside its hard shell.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
    },
    {
        "id": 139,
        "name": "omastar",
        "height": 1,
        "weight": 35,
        "species": "Spiral Pokémon",
        "types": [
            "water",
            "rock"
        ],
        "description": "Omastar uses its tentacles to capture its prey. It is\nbelieved to have become extinct because its shell grew too\nlarge and heavy, causing its movements to become too slow\nand ponderous.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
    },
    {
        "id": 140,
        "name": "kabuto",
        "height": 0.5,
        "weight": 11.5,
        "species": "Shellfish Pokémon",
        "types": [
            "water",
            "rock"
        ],
        "description": "Kabuto is a Pokémon that has been regenerated from a fossil.\nHowever, in extremely rare cases, living examples have\nbeen discovered. The Pokémon has not changed at all for\n300 million years.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
    },
    {
        "id": 141,
        "name": "kabutops",
        "height": 1.3,
        "weight": 40.5,
        "species": "Shellfish Pokémon",
        "types": [
            "water",
            "rock"
        ],
        "description": "Kabutops swam underwater to hunt for its prey in ancient\ntimes. The Pokémon was apparently evolving from being a\nwater dweller to living on land as evident from the beginnings\nof change in its gills and legs.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
    },
    {
        "id": 142,
        "name": "aerodactyl",
        "height": 1.8,
        "weight": 59,
        "species": "Fossil Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "In ancient times, it ruled the skies. A widely\naccepted theory is that it went extinct due to\na large meteor impact.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
    },
    {
        "id": 142,
        "name": "aerodactyl-mega",
        "height": 2.1,
        "weight": 79,
        "species": "Fossil Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "In ancient times, it ruled the skies. A widely\naccepted theory is that it went extinct due to\na large meteor impact.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10042.png"
    },
    {
        "id": 143,
        "name": "snorlax",
        "height": 2.1,
        "weight": 460,
        "species": "Sleeping Pokémon",
        "types": [
            "normal"
        ],
        "description": "It eats nearly 900 pounds of food every day.\nIt starts nodding off while eating—and continues\nto eat even while it’s asleep.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
    },
    {
        "id": 144,
        "name": "articuno",
        "height": 1.7,
        "weight": 55.4,
        "species": "Freeze Pokémon",
        "types": [
            "flying",
            "ice"
        ],
        "description": "Articuno is a legendary bird Pokémon that can control ice.\nThe flapping of its wings chills the air. As a result, it is said\nthat when this Pokémon flies, snow will fall.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
    },
    {
        "id": 145,
        "name": "zapdos",
        "height": 1.6,
        "weight": 52.6,
        "species": "Electric Pokémon",
        "types": [
            "flying",
            "electric"
        ],
        "description": "Zapdos is a legendary bird Pokémon that has the ability\nto control electricity. It usually lives in thunderclouds.\nThe Pokémon gains power if it is stricken by lightning bolts.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
    },
    {
        "id": 146,
        "name": "moltres",
        "height": 2,
        "weight": 60,
        "species": "Flame Pokémon",
        "types": [
            "flying",
            "fire"
        ],
        "description": "Moltres is a legendary bird Pokémon that has the ability\nto control fire. If this Pokémon is injured, it is said to dip its\nbody in the molten magma of a volcano to burn and heal itself.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
    },
    {
        "id": 147,
        "name": "dratini",
        "height": 1.8,
        "weight": 3.3,
        "species": "Dragon Pokémon",
        "types": [
            "dragon"
        ],
        "description": "After a 10-hour struggle, a fisherman was able\nto pull one up and confirm its existence.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
    },
    {
        "id": 148,
        "name": "dragonair",
        "height": 4,
        "weight": 16.5,
        "species": "Dragon Pokémon",
        "types": [
            "dragon"
        ],
        "description": "From time immemorial, it has been venerated by\nagricultural peoples as an entity able to control\nthe weather.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
    },
    {
        "id": 149,
        "name": "dragonite",
        "height": 2.2,
        "weight": 210,
        "species": "Dragon Pokémon",
        "types": [
            "flying",
            "dragon"
        ],
        "description": "Incur the wrath of this normally calm Pokémon\nat your peril, because it will smash everything\nto smithereens before it’s satisfied.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
    },
    {
        "id": 150,
        "name": "mewtwo",
        "height": 2,
        "weight": 122,
        "species": "Genetic Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Mewtwo is a Pokémon that was created by genetic\nmanipulation. However, even though the scientific power\nof humans created this Pokémon’s body, they failed to\nendow Mewtwo with a compassionate heart.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    },
    {
        "id": 150,
        "name": "mewtwo-mega-x",
        "height": 2.3,
        "weight": 127,
        "species": "Genetic Pokémon",
        "types": [
            "fighting",
            "psychic"
        ],
        "description": "Mewtwo is a Pokémon that was created by genetic\nmanipulation. However, even though the scientific power\nof humans created this Pokémon’s body, they failed to\nendow Mewtwo with a compassionate heart.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10043.png"
    },
    {
        "id": 150,
        "name": "mewtwo-mega-y",
        "height": 1.5,
        "weight": 33,
        "species": "Genetic Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Mewtwo is a Pokémon that was created by genetic\nmanipulation. However, even though the scientific power\nof humans created this Pokémon’s body, they failed to\nendow Mewtwo with a compassionate heart.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10044.png"
    },
    {
        "id": 151,
        "name": "mew",
        "height": 0.4,
        "weight": 4,
        "species": "New Species Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Mew is said to possess the genetic composition of all\nPokémon. It is capable of making itself invisible at will,\nso it entirely avoids notice even if it approaches people.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
    },
    {
        "id": 152,
        "name": "chikorita",
        "height": 0.9,
        "weight": 6.4,
        "species": "Leaf Pokémon",
        "types": [
            "grass"
        ],
        "description": "In battle, Chikorita waves its leaf around to keep the foe at\nbay. However, a sweet fragrance also wafts from the leaf,\nbecalming the battling Pokémon and creating a cozy,\nfriendly atmosphere all around.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png"
    },
    {
        "id": 153,
        "name": "bayleef",
        "height": 1.2,
        "weight": 15.8,
        "species": "Leaf Pokémon",
        "types": [
            "grass"
        ],
        "description": "Bayleef’s neck is ringed by curled-up leaves. Inside each\ntubular leaf is a small shoot of a tree. The fragrance of this\nshoot makes people peppy.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png"
    },
    {
        "id": 154,
        "name": "meganium",
        "height": 1.8,
        "weight": 100.5,
        "species": "Herb Pokémon",
        "types": [
            "grass"
        ],
        "description": "The fragrance of Meganium’s flower soothes and calms\nemotions. In battle, this Pokémon gives off more of its\nbecalming scent to blunt the foe’s fighting spirit.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png"
    },
    {
        "id": 155,
        "name": "cyndaquil",
        "height": 0.5,
        "weight": 7.9,
        "species": "Fire Mouse Pokémon",
        "types": [
            "fire"
        ],
        "description": "Cyndaquil protects itself by flaring up the flames on its back.\nThe flames are vigorous if the Pokémon is angry. However, if it\nis tired, the flames splutter fitfully with incomplete combustion.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png"
    },
    {
        "id": 156,
        "name": "quilava",
        "height": 0.9,
        "weight": 19,
        "species": "Volcano Pokémon",
        "types": [
            "fire"
        ],
        "description": "Quilava keeps its foes at bay with the intensity of its flames\nand gusts of superheated air. This Pokémon applies its\noutstanding nimbleness to dodge attacks even while scorching\nthe foe with flames.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png"
    },
    {
        "id": 157,
        "name": "typhlosion",
        "height": 1.7,
        "weight": 79.5,
        "species": "Volcano Pokémon",
        "types": [
            "fire"
        ],
        "description": "Typhlosion obscures itself behind a shimmering heat haze that\nit creates using its intensely hot flames. This Pokémon creates\nblazing explosive blasts that burn everything to cinders.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png"
    },
    {
        "id": 158,
        "name": "totodile",
        "height": 0.6,
        "weight": 9.5,
        "species": "Big Jaw Pokémon",
        "types": [
            "water"
        ],
        "description": "Despite the smallness of its body, Totodile’s jaws are very\npowerful. While the Pokémon may think it is just playfully\nnipping, its bite has enough power to cause serious injury.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png"
    },
    {
        "id": 159,
        "name": "croconaw",
        "height": 1.1,
        "weight": 25,
        "species": "Big Jaw Pokémon",
        "types": [
            "water"
        ],
        "description": "Once Croconaw has clamped its jaws on its foe, it will\nabsolutely not let go. Because the tips of its fangs are\nforked back like barbed fishhooks, they become impossible\nto remove when they have sunk in.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png"
    },
    {
        "id": 160,
        "name": "feraligatr",
        "height": 2.3,
        "weight": 88.8,
        "species": "Big Jaw Pokémon",
        "types": [
            "water"
        ],
        "description": "Feraligatr intimidates its foes by opening its huge mouth.\nIn battle, it will kick the ground hard with its thick and powerful\nhind legs to charge at the foe at an incredible speed.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png"
    },
    {
        "id": 161,
        "name": "sentret",
        "height": 0.8,
        "weight": 6,
        "species": "Scout Pokémon",
        "types": [
            "normal"
        ],
        "description": "When Sentret sleeps, it does so while another stands guard.\nThe sentry wakes the others at the first sign of danger. When\nthis Pokémon becomes separated from its pack, it becomes\nincapable of sleep due to fear.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png"
    },
    {
        "id": 162,
        "name": "furret",
        "height": 1.8,
        "weight": 32.5,
        "species": "Long Body Pokémon",
        "types": [
            "normal"
        ],
        "description": "Furret has a very slim build. When under attack, it can slickly\nsquirm through narrow spaces and get away. In spite of its\nshort limbs, this Pokémon is very nimble and fleet.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png"
    },
    {
        "id": 163,
        "name": "hoothoot",
        "height": 0.7,
        "weight": 21.2,
        "species": "Owl Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "Hoothoot has an internal organ that senses and tracks the\nearth’s rotation. Using this special organ, this Pokémon\nbegins hooting at precisely the same time every day.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png"
    },
    {
        "id": 164,
        "name": "noctowl",
        "height": 1.6,
        "weight": 40.8,
        "species": "Owl Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "Noctowl never fails at catching prey in darkness. This Pokémon\nowes its success to its superior vision that allows it to see in\nminimal light, and to its soft, supple wings that make no sound\nin flight.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png"
    },
    {
        "id": 165,
        "name": "ledyba",
        "height": 1,
        "weight": 10.8,
        "species": "Five Star Pokémon",
        "types": [
            "flying",
            "bug"
        ],
        "description": "They communicate with one another using bodily\nfluids that give off odors. When they’re angry,\ntheir odor smells sour.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png"
    },
    {
        "id": 166,
        "name": "ledian",
        "height": 1.4,
        "weight": 35.6,
        "species": "Five Star Pokémon",
        "types": [
            "flying",
            "bug"
        ],
        "description": "In battle, it throws punches with all four arms.\nThe power of each individual blow is piddly,\nso it aims to win by quantity rather than quality.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png"
    },
    {
        "id": 167,
        "name": "spinarak",
        "height": 0.5,
        "weight": 8.5,
        "species": "String Spit Pokémon",
        "types": [
            "poison",
            "bug"
        ],
        "description": "Some fishermen weave its sturdy thread into\nnets to catch fish Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png"
    },
    {
        "id": 168,
        "name": "ariados",
        "height": 1.1,
        "weight": 33.5,
        "species": "Long Leg Pokémon",
        "types": [
            "poison",
            "bug"
        ],
        "description": "It spins thread from both its rear and its mouth.\nThen it wraps its prey up in thread and sips\ntheir bodily fluids at its leisure.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png"
    },
    {
        "id": 169,
        "name": "crobat",
        "height": 1.8,
        "weight": 75,
        "species": "Bat Pokémon",
        "types": [
            "flying",
            "poison"
        ],
        "description": "Silent and swift in its four-winged flight, it bites\ndown on its prey before they realize what’s\nhappening. In a heartbeat, it drains their blood.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png"
    },
    {
        "id": 170,
        "name": "chinchou",
        "height": 0.5,
        "weight": 12,
        "species": "Angler Pokémon",
        "types": [
            "electric",
            "water"
        ],
        "description": "It lives in the depths beyond the reach of\nsunlight. It flashes lights on its antennae\nto communicate with others of its kind.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png"
    },
    {
        "id": 171,
        "name": "lanturn",
        "height": 1.2,
        "weight": 22.5,
        "species": "Light Pokémon",
        "types": [
            "electric",
            "water"
        ],
        "description": "This Pokémon flashes a bright light that blinds\nits prey. This creates an opening for it to deliver\nan electrical attack.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png"
    },
    {
        "id": 172,
        "name": "pichu",
        "height": 0.3,
        "weight": 2,
        "species": "Tiny Mouse Pokémon",
        "types": [
            "electric"
        ],
        "description": "Despite this Pokémon’s cute appearance, those\nwho want to live with one should prepare to be\non the receiving end of its electric jolts.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png"
    },
    {
        "id": 173,
        "name": "cleffa",
        "height": 0.3,
        "weight": 3,
        "species": "Star Shape Pokémon",
        "types": [
            "fairy"
        ],
        "description": "Because of its silhouette, it’s believed to be a\nstar reborn. For some reason, it loves Minior.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png"
    },
    {
        "id": 174,
        "name": "igglybuff",
        "height": 0.3,
        "weight": 1,
        "species": "Balloon Pokémon",
        "types": [
            "fairy",
            "normal"
        ],
        "description": "It moves by bouncing along. As it moves a lot,\nit sweats, and its body gives off a sweet aroma.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png"
    },
    {
        "id": 175,
        "name": "togepi",
        "height": 0.3,
        "weight": 1.5,
        "species": "Spike Ball Pokémon",
        "types": [
            "fairy"
        ],
        "description": "As its energy, Togepi uses the positive emotions of\ncompassion and pleasure exuded by people and Pokémon.\nThis Pokémon stores up feelings of happiness inside its shell,\nthen shares them with others.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png"
    },
    {
        "id": 176,
        "name": "togetic",
        "height": 0.6,
        "weight": 3.2,
        "species": "Happiness Pokémon",
        "types": [
            "flying",
            "fairy"
        ],
        "description": "Togetic is said to be a Pokémon that brings good fortune.\nWhen the Pokémon spots someone who is pure of heart,\nit is said to appear and share its happiness with that person.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png"
    },
    {
        "id": 177,
        "name": "natu",
        "height": 0.2,
        "weight": 2,
        "species": "Tiny Bird Pokémon",
        "types": [
            "flying",
            "psychic"
        ],
        "description": "Natu has a highly developed jumping ability. The Pokémon\nflaps and leaps onto tree branches that are taller than\ngrown-up people to pick at the tree’s new shoots.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png"
    },
    {
        "id": 178,
        "name": "xatu",
        "height": 1.5,
        "weight": 15,
        "species": "Mystic Pokémon",
        "types": [
            "flying",
            "psychic"
        ],
        "description": "Xatu is known to stand motionless while staring at the sun all\nday long. Some people revere it as a mystical Pokémon out of\ntheir belief that Xatu is in possession of the power to see into\nthe future.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png"
    },
    {
        "id": 179,
        "name": "mareep",
        "height": 0.6,
        "weight": 7.8,
        "species": "Wool Pokémon",
        "types": [
            "electric"
        ],
        "description": "Mareep’s fluffy coat of wool rubs together and builds a static\ncharge. The more static electricity is charged, the more brightly\nthe lightbulb at the tip of its tail glows.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png"
    },
    {
        "id": 180,
        "name": "flaaffy",
        "height": 0.8,
        "weight": 13.3,
        "species": "Wool Pokémon",
        "types": [
            "electric"
        ],
        "description": "Flaaffy’s wool quality changes so that it can generate\na high amount of static electricity with a small amount of\nwool. The bare and slick parts of its hide are shielded\nagainst electricity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png"
    },
    {
        "id": 181,
        "name": "ampharos",
        "height": 1.4,
        "weight": 61.5,
        "species": "Light Pokémon",
        "types": [
            "electric"
        ],
        "description": "Ampharos gives off so much light that it can be seen even from\nspace. People in the old days used the light of this Pokémon\nto send signals back and forth with others far away.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png"
    },
    {
        "id": 181,
        "name": "ampharos-mega",
        "height": 1.4,
        "weight": 61.5,
        "species": "Light Pokémon",
        "types": [
            "dragon",
            "electric"
        ],
        "description": "Ampharos gives off so much light that it can be seen even from\nspace. People in the old days used the light of this Pokémon\nto send signals back and forth with others far away.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10045.png"
    },
    {
        "id": 182,
        "name": "bellossom",
        "height": 0.4,
        "weight": 5.8,
        "species": "Flower Pokémon",
        "types": [
            "grass"
        ],
        "description": "A Bellossom grows flowers more beautifully if it has evolved\nfrom a smelly Gloom—the more stinky the better. At night, this\nPokémon closes its petals and goes to sleep.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png"
    },
    {
        "id": 183,
        "name": "marill",
        "height": 0.4,
        "weight": 8.5,
        "species": "Aqua Mouse Pokémon",
        "types": [
            "fairy",
            "water"
        ],
        "description": "When fishing for food at the edge of a fast-running stream,\nMarill wraps its tail around the trunk of a tree. This Pokémon’s\ntail is flexible and configured to stretch.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png"
    },
    {
        "id": 184,
        "name": "azumarill",
        "height": 0.8,
        "weight": 28.5,
        "species": "Aqua Rabbit Pokémon",
        "types": [
            "fairy",
            "water"
        ],
        "description": "Azumarill can make balloons out of air. It makes these air\nballoons if it spots a drowning Pokémon. The air balloons\nenable the Pokémon in trouble to breathe.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png"
    },
    {
        "id": 185,
        "name": "sudowoodo",
        "height": 1.2,
        "weight": 38,
        "species": "Imitation Pokémon",
        "types": [
            "rock"
        ],
        "description": "Apparently, the larger the green parts of this\nPokémon, the more collectors value it. It’s a\nparticular favorite among elderly people.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png"
    },
    {
        "id": 186,
        "name": "politoed",
        "height": 1.1,
        "weight": 33.9,
        "species": "Frog Pokémon",
        "types": [
            "water"
        ],
        "description": "It’s the leader of Poliwag and Poliwhirl.\nWhen Politoed roars, they all cower in fear.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png"
    },
    {
        "id": 187,
        "name": "hoppip",
        "height": 0.4,
        "weight": 0.5,
        "species": "Cottonweed Pokémon",
        "types": [
            "flying",
            "grass"
        ],
        "description": "This Pokémon drifts and floats with the wind. If it senses the\napproach of strong winds, Hoppip links its leaves with other\nHoppip to prepare against being blown away.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png"
    },
    {
        "id": 188,
        "name": "skiploom",
        "height": 0.6,
        "weight": 1,
        "species": "Cottonweed Pokémon",
        "types": [
            "flying",
            "grass"
        ],
        "description": "Skiploom’s flower blossoms when the temperature rises\nabove 64 degrees Fahrenheit. How much the flower opens\ndepends on the temperature. For that reason, this Pokémon\nis sometimes used as a thermometer.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png"
    },
    {
        "id": 189,
        "name": "jumpluff",
        "height": 0.8,
        "weight": 3,
        "species": "Cottonweed Pokémon",
        "types": [
            "flying",
            "grass"
        ],
        "description": "Jumpluff rides warm southern winds to cross the sea and fly to\nforeign lands. The Pokémon descends to the ground when it\nencounters cold air while it is floating.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png"
    },
    {
        "id": 190,
        "name": "aipom",
        "height": 0.8,
        "weight": 11.5,
        "species": "Long Tail Pokémon",
        "types": [
            "normal"
        ],
        "description": "Aipom’s tail ends in a hand-like appendage that can be cleverly\nmanipulated. However, because the Pokémon uses its tail so\nmuch, its real hands have become rather clumsy.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png"
    },
    {
        "id": 191,
        "name": "sunkern",
        "height": 0.3,
        "weight": 1.8,
        "species": "Seed Pokémon",
        "types": [
            "grass"
        ],
        "description": "Sunkern tries to move as little as it possibly can. It does so\nbecause it tries to conserve all the nutrients it has stored in its\nbody for its evolution. It will not eat a thing, subsisting only on\nmorning dew.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png"
    },
    {
        "id": 192,
        "name": "sunflora",
        "height": 0.8,
        "weight": 8.5,
        "species": "Sun Pokémon",
        "types": [
            "grass"
        ],
        "description": "Sunflora converts solar energy into nutrition. It moves around\nactively in the daytime when it is warm. It stops moving as\nsoon as the sun goes down for the night.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png"
    },
    {
        "id": 193,
        "name": "yanma",
        "height": 1.2,
        "weight": 38,
        "species": "Clear Wing Pokémon",
        "types": [
            "flying",
            "bug"
        ],
        "description": "Yanma is capable of seeing 360 degrees without having to\nmove its eyes. It is a great flier that is adept at making sudden\nstops and turning midair. This Pokémon uses its flying ability\nto quickly chase down targeted prey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png"
    },
    {
        "id": 194,
        "name": "wooper",
        "height": 0.4,
        "weight": 8.5,
        "species": "Water Fish Pokémon",
        "types": [
            "ground",
            "water"
        ],
        "description": "Wooper usually lives in water. However, it occasionally comes\nout onto land in search of food. On land, it coats its body with\na gooey, toxic film.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png"
    },
    {
        "id": 195,
        "name": "quagsire",
        "height": 1.4,
        "weight": 75,
        "species": "Water Fish Pokémon",
        "types": [
            "ground",
            "water"
        ],
        "description": "Quagsire hunts for food by leaving its mouth wide open in\nwater and waiting for its prey to blunder in unaware. Because\nthe Pokémon does not move, it does not get very hungry.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png"
    },
    {
        "id": 196,
        "name": "espeon",
        "height": 0.9,
        "weight": 26.5,
        "species": "Sun Pokémon",
        "types": [
            "psychic"
        ],
        "description": "It unleashes psychic power from the orb on its\nforehead. When its power is exhausted, the orb\ngrows dull and dark.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png"
    },
    {
        "id": 197,
        "name": "umbreon",
        "height": 1,
        "weight": 27,
        "species": "Moonlight Pokémon",
        "types": [
            "dark"
        ],
        "description": "With its black fur, it blends into the darkness.\nIt bides its time, and when prey appears, this\nPokémon goes for its throat, and then eats it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png"
    },
    {
        "id": 198,
        "name": "murkrow",
        "height": 0.5,
        "weight": 2.1,
        "species": "Darkness Pokémon",
        "types": [
            "flying",
            "dark"
        ],
        "description": "Seen as a symbol of bad luck, it’s generally\ndisliked. Yet it gives presents—objects that\nsparkle or shine—to Trainers it’s close to.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png"
    },
    {
        "id": 199,
        "name": "slowking",
        "height": 2,
        "weight": 79.5,
        "species": "Royal Pokémon",
        "types": [
            "psychic",
            "water"
        ],
        "description": "This Pokémon is so famed for its intellect that a\nproverb still persists in some regions: “When in\ndoubt, ask Slowking.”",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png"
    },
    {
        "id": 200,
        "name": "misdreavus",
        "height": 0.7,
        "weight": 1,
        "species": "Screech Pokémon",
        "types": [
            "ghost"
        ],
        "description": "If you hear a sobbing sound emanating from a\nvacant room, it’s undoubtedly a bit of mischief\nfrom Misdreavus.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png"
    },
    {
        "id": 201,
        "name": "unown",
        "height": 0.5,
        "weight": 5,
        "species": "Symbol Pokémon",
        "types": [
            "psychic"
        ],
        "description": "This Pokémon is shaped like ancient writing. It is a mystery as\nto which came first, the ancient writings or the various Unown.\nResearch into this topic is ongoing but nothing is known.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png"
    },
    {
        "id": 202,
        "name": "wobbuffet",
        "height": 1.3,
        "weight": 28.5,
        "species": "Patient Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Wobbuffet does nothing but endure attacks—it won’t attack on\nits own. However, it won’t endure an attack on its tail. When\nthat happens, the Pokémon will try to take the foe with it using\nDestiny Bond.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png"
    },
    {
        "id": 203,
        "name": "girafarig",
        "height": 1.5,
        "weight": 41.5,
        "species": "Long Neck Pokémon",
        "types": [
            "psychic",
            "normal"
        ],
        "description": "Girafarig’s rear head contains a tiny brain that is too small for\nthinking. However, the rear head doesn’t need to sleep, so it\ncan keep watch over its surroundings 24 hours a day.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png"
    },
    {
        "id": 204,
        "name": "pineco",
        "height": 0.6,
        "weight": 7.2,
        "species": "Bagworm Pokémon",
        "types": [
            "bug"
        ],
        "description": "Pineco hangs from a tree branch and patiently waits for prey to\ncome along. If the Pokémon is disturbed while eating by\nsomeone shaking its tree, it drops down to the ground and\nexplodes with no warning.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png"
    },
    {
        "id": 205,
        "name": "forretress",
        "height": 1.2,
        "weight": 125.8,
        "species": "Bagworm Pokémon",
        "types": [
            "steel",
            "bug"
        ],
        "description": "Forretress conceals itself inside its hardened steel shell.\nThe shell is opened when the Pokémon is catching prey,\nbut it does so at such a quick pace that the shell’s inside\ncannot be seen.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png"
    },
    {
        "id": 206,
        "name": "dunsparce",
        "height": 1.5,
        "weight": 14,
        "species": "Land Snake Pokémon",
        "types": [
            "normal"
        ],
        "description": "Dunsparce has a drill for its tail. It uses this tail to burrow into\nthe ground backward. This Pokémon is known to make its\nnest in complex shapes deep under the ground.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png"
    },
    {
        "id": 207,
        "name": "gligar",
        "height": 1.1,
        "weight": 64.8,
        "species": "Fly Scorpion Pokémon",
        "types": [
            "flying",
            "ground"
        ],
        "description": "Gligar glides through the air without a sound as if it were\nsliding. This Pokémon hangs on to the face of its foe using\nits clawed hind legs and the large pincers on its forelegs, then\ninjects the prey with its poison barb.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png"
    },
    {
        "id": 208,
        "name": "steelix",
        "height": 9.2,
        "weight": 400,
        "species": "Iron Snake Pokémon",
        "types": [
            "ground",
            "steel"
        ],
        "description": "Steelix lives even further underground than Onix.\nThis Pokémon is known to dig toward the earth’s core.\nThere are records of this Pokémon reaching a depth of\nover six-tenths of a mile underground.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png"
    },
    {
        "id": 208,
        "name": "steelix-mega",
        "height": 10.5,
        "weight": 740,
        "species": "Iron Snake Pokémon",
        "types": [
            "ground",
            "steel"
        ],
        "description": "Steelix lives even further underground than Onix.\nThis Pokémon is known to dig toward the earth’s core.\nThere are records of this Pokémon reaching a depth of\nover six-tenths of a mile underground.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10072.png"
    },
    {
        "id": 209,
        "name": "snubbull",
        "height": 0.6,
        "weight": 7.8,
        "species": "Fairy Pokémon",
        "types": [
            "fairy"
        ],
        "description": "Its growls make its opponents uneasy. This\nlaid-back Pokémon tends to sleep half the day.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png"
    },
    {
        "id": 210,
        "name": "granbull",
        "height": 1.4,
        "weight": 48.7,
        "species": "Fairy Pokémon",
        "types": [
            "fairy"
        ],
        "description": "More timid than Snubbull, this Pokémon is doted\non by young people amused at the contrast\nbetween its looks and its attitude.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png"
    },
    {
        "id": 211,
        "name": "qwilfish",
        "height": 0.5,
        "weight": 3.9,
        "species": "Balloon Pokémon",
        "types": [
            "poison",
            "water"
        ],
        "description": "Qwilfish sucks in water, inflating itself. This Pokémon\nuses the pressure of the water it swallowed to shoot toxic\nquills all at once from all over its body. It finds swimming\nsomewhat challenging.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png"
    },
    {
        "id": 212,
        "name": "scizor",
        "height": 1.8,
        "weight": 118,
        "species": "Pincer Pokémon",
        "types": [
            "steel",
            "bug"
        ],
        "description": "Once it has identified an enemy, this Pokémon\nsmashes it mercilessly with pincers hard\nas steel.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png"
    },
    {
        "id": 212,
        "name": "scizor-mega",
        "height": 2,
        "weight": 125,
        "species": "Pincer Pokémon",
        "types": [
            "steel",
            "bug"
        ],
        "description": "Once it has identified an enemy, this Pokémon\nsmashes it mercilessly with pincers hard\nas steel.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10046.png"
    },
    {
        "id": 213,
        "name": "shuckle",
        "height": 0.6,
        "weight": 20.5,
        "species": "Mold Pokémon",
        "types": [
            "rock",
            "bug"
        ],
        "description": "Shuckle quietly hides itself under rocks, keeping its body\nconcealed inside its hard shell while eating berries it has\nstored away. The berries mix with its body fluids to become\na juice.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png"
    },
    {
        "id": 214,
        "name": "heracross",
        "height": 1.5,
        "weight": 54,
        "species": "Single Horn Pokémon",
        "types": [
            "fighting",
            "bug"
        ],
        "description": "Heracross has sharp claws on its feet. These are planted\nfirmly into the ground or the bark of a tree, giving the\nPokémon a secure and solid footing to forcefully fling away\nfoes with its proud horn.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png"
    },
    {
        "id": 214,
        "name": "heracross-mega",
        "height": 1.7,
        "weight": 62.5,
        "species": "Single Horn Pokémon",
        "types": [
            "fighting",
            "bug"
        ],
        "description": "Heracross has sharp claws on its feet. These are planted\nfirmly into the ground or the bark of a tree, giving the\nPokémon a secure and solid footing to forcefully fling away\nfoes with its proud horn.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10047.png"
    },
    {
        "id": 215,
        "name": "sneasel",
        "height": 0.9,
        "weight": 28,
        "species": "Sharp Claw Pokémon",
        "types": [
            "ice",
            "dark"
        ],
        "description": "It uses its claws to poke holes in eggs so it can\nslurp out the insides. Breeders consider it a\nscourge and will drive it away or eradicate it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png"
    },
    {
        "id": 216,
        "name": "teddiursa",
        "height": 0.6,
        "weight": 8.8,
        "species": "Little Bear Pokémon",
        "types": [
            "normal"
        ],
        "description": "This Pokémon likes to lick its palms that are sweetened by\nbeing soaked in honey. Teddiursa concocts its own honey\nby blending fruits and pollen collected by Beedrill.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png"
    },
    {
        "id": 217,
        "name": "ursaring",
        "height": 1.8,
        "weight": 125.8,
        "species": "Hibernator Pokémon",
        "types": [
            "normal"
        ],
        "description": "In the forests inhabited by Ursaring, it is said that there are\nmany streams and towering trees where they gather food. This\nPokémon walks through its forest gathering food every day.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png"
    },
    {
        "id": 218,
        "name": "slugma",
        "height": 0.7,
        "weight": 35,
        "species": "Lava Pokémon",
        "types": [
            "fire"
        ],
        "description": "Slugma does not have any blood in its body. Instead, intensely\nhot magma circulates throughout this Pokémon’s body,\ncarrying essential nutrients and oxygen to its organs.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png"
    },
    {
        "id": 219,
        "name": "magcargo",
        "height": 0.8,
        "weight": 55,
        "species": "Lava Pokémon",
        "types": [
            "rock",
            "fire"
        ],
        "description": "Magcargo’s body temperature is approximately\n18,000 degrees Fahrenheit. Water is vaporized on contact.\nIf this Pokémon is caught in the rain, the raindrops instantly\nturn into steam, cloaking the area in a thick fog.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png"
    },
    {
        "id": 220,
        "name": "swinub",
        "height": 0.4,
        "weight": 6.5,
        "species": "Pig Pokémon",
        "types": [
            "ground",
            "ice"
        ],
        "description": "Swinub roots for food by rubbing its snout against the ground.\nIts favorite food is a mushroom that grows under the cover of\ndead grass. This Pokémon occasionally roots out hot springs.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png"
    },
    {
        "id": 221,
        "name": "piloswine",
        "height": 1.1,
        "weight": 55.8,
        "species": "Swine Pokémon",
        "types": [
            "ground",
            "ice"
        ],
        "description": "Piloswine is covered by a thick coat of long hair that enables\nit to endure the freezing cold. This Pokémon uses its tusks to\ndig up food that has been buried under ice.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png"
    },
    {
        "id": 222,
        "name": "corsola",
        "height": 0.6,
        "weight": 5,
        "species": "Coral Pokémon",
        "types": [
            "rock",
            "water"
        ],
        "description": "Pursued by Mareanie for the branches on its\nhead, this Pokémon will sometimes snap its own\nbranches off as a diversion while it escapes.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png"
    },
    {
        "id": 223,
        "name": "remoraid",
        "height": 0.6,
        "weight": 12,
        "species": "Jet Pokémon",
        "types": [
            "water"
        ],
        "description": "Remoraid sucks in water, then expels it at high velocity using\nits abdominal muscles to shoot down flying prey. When\nevolution draws near, this Pokémon travels downstream\nfrom rivers.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png"
    },
    {
        "id": 224,
        "name": "octillery",
        "height": 0.9,
        "weight": 28.5,
        "species": "Jet Pokémon",
        "types": [
            "water"
        ],
        "description": "Octillery grabs onto its foe using its tentacles. This Pokémon\ntries to immobilize it before delivering the finishing blow. If the\nfoe turns out to be too strong, Octillery spews ink to escape.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png"
    },
    {
        "id": 225,
        "name": "delibird",
        "height": 0.9,
        "weight": 16,
        "species": "Delivery Pokémon",
        "types": [
            "flying",
            "ice"
        ],
        "description": "It has a generous habit of sharing its food with\npeople and Pokémon, so it’s always scrounging\naround for more food.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png"
    },
    {
        "id": 226,
        "name": "mantine",
        "height": 2.1,
        "weight": 220,
        "species": "Kite Pokémon",
        "types": [
            "flying",
            "water"
        ],
        "description": "On sunny days, schools of Mantine can be seen elegantly\nleaping over the sea’s waves. This Pokémon is not bothered\nby the Remoraid that hitches rides.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png"
    },
    {
        "id": 227,
        "name": "skarmory",
        "height": 1.7,
        "weight": 50.5,
        "species": "Armor Bird Pokémon",
        "types": [
            "flying",
            "steel"
        ],
        "description": "Its metal body is sturdy, but it does rust rather\neasily. So on rainy days, this Pokémon prefers\nto stay put in its nest.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png"
    },
    {
        "id": 228,
        "name": "houndour",
        "height": 0.6,
        "weight": 10.8,
        "species": "Dark Pokémon",
        "types": [
            "fire",
            "dark"
        ],
        "description": "Houndour hunt as a coordinated pack. They communicate\nwith each other using a variety of cries to corner their prey.\nThis Pokémon’s remarkable teamwork is unparalleled.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png"
    },
    {
        "id": 229,
        "name": "houndoom",
        "height": 1.4,
        "weight": 35,
        "species": "Dark Pokémon",
        "types": [
            "fire",
            "dark"
        ],
        "description": "In a Houndoom pack, the one with its horns raked sharply\ntoward the back serves a leadership role. These Pokémon\nchoose their leader by fighting among themselves.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png"
    },
    {
        "id": 229,
        "name": "houndoom-mega",
        "height": 1.9,
        "weight": 49.5,
        "species": "Dark Pokémon",
        "types": [
            "fire",
            "dark"
        ],
        "description": "In a Houndoom pack, the one with its horns raked sharply\ntoward the back serves a leadership role. These Pokémon\nchoose their leader by fighting among themselves.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10048.png"
    },
    {
        "id": 230,
        "name": "kingdra",
        "height": 1.8,
        "weight": 152,
        "species": "Dragon Pokémon",
        "types": [
            "dragon",
            "water"
        ],
        "description": "Kingdra sleeps on the seafloor where it is otherwise devoid\nof life. When a storm arrives, the Pokémon is said to awaken\nand wander about in search of prey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png"
    },
    {
        "id": 231,
        "name": "phanpy",
        "height": 0.5,
        "weight": 33.5,
        "species": "Long Nose Pokémon",
        "types": [
            "ground"
        ],
        "description": "Phanpy uses its long nose to shower itself. When others\ngather around, they thoroughly douse each other with water.\nThese Pokémon can be seen drying their soaking-wet\nbodies at the edge of water.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png"
    },
    {
        "id": 232,
        "name": "donphan",
        "height": 1.1,
        "weight": 120,
        "species": "Armor Pokémon",
        "types": [
            "ground"
        ],
        "description": "If Donphan were to tackle with its hard body, even a house\ncould be destroyed. Using its massive strength, the Pokémon\nhelps clear rock and mud slides that block mountain trails.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png"
    },
    {
        "id": 233,
        "name": "porygon2",
        "height": 0.6,
        "weight": 32.5,
        "species": "Virtual Pokémon",
        "types": [
            "normal"
        ],
        "description": "Porygon was updated to a new version in\nreadiness for planetary development. But that\ndream remains unrealized as yet.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png"
    },
    {
        "id": 234,
        "name": "stantler",
        "height": 1.4,
        "weight": 71.2,
        "species": "Big Horn Pokémon",
        "types": [
            "normal"
        ],
        "description": "Stantler’s magnificent antlers were traded at high prices as\nworks of art. As a result, this Pokémon was hunted close to\nextinction by those who were after the priceless antlers.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png"
    },
    {
        "id": 235,
        "name": "smeargle",
        "height": 1.2,
        "weight": 58,
        "species": "Painter Pokémon",
        "types": [
            "normal"
        ],
        "description": "It draws symbols all over the place to mark its\nterritory. In towns with many Smeargle, the walls\nare covered in graffiti.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png"
    },
    {
        "id": 236,
        "name": "tyrogue",
        "height": 0.7,
        "weight": 21,
        "species": "Scuffle Pokémon",
        "types": [
            "fighting"
        ],
        "description": "Tyrogue becomes stressed out if it does not get to train every\nday. When raising this Pokémon, the Trainer must establish\nand uphold various training methods.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png"
    },
    {
        "id": 237,
        "name": "hitmontop",
        "height": 1.4,
        "weight": 48,
        "species": "Handstand Pokémon",
        "types": [
            "fighting"
        ],
        "description": "Hitmontop spins on its head at high speed, all the while\ndelivering kicks. This technique is a remarkable mix of both\noffense and defense at the same time. The Pokémon travels\nfaster spinning than it does walking.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png"
    },
    {
        "id": 238,
        "name": "smoochum",
        "height": 0.4,
        "weight": 6,
        "species": "Kiss Pokémon",
        "types": [
            "psychic",
            "ice"
        ],
        "description": "Smoochum actively runs about, but also falls quite often.\nWhenever the chance arrives, it will look for its reflection to\nmake sure its face hasn’t become dirty.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png"
    },
    {
        "id": 239,
        "name": "elekid",
        "height": 0.6,
        "weight": 23.5,
        "species": "Electric Pokémon",
        "types": [
            "electric"
        ],
        "description": "This Pokémon is constantly fighting with\nTogedemaru that try to steal its electricity.\nIt’s a pretty even match.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png"
    },
    {
        "id": 240,
        "name": "magby",
        "height": 0.7,
        "weight": 21.4,
        "species": "Live Coal Pokémon",
        "types": [
            "fire"
        ],
        "description": "A famous potter lives with a Magby.\nApparently its soft flames produce fine works.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png"
    },
    {
        "id": 241,
        "name": "miltank",
        "height": 1.2,
        "weight": 75.5,
        "species": "Milk Cow Pokémon",
        "types": [
            "normal"
        ],
        "description": "Most people raise it for its milk, but it’s quite\ntough and strong, so it’s also well suited\nfor battle.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png"
    },
    {
        "id": 242,
        "name": "blissey",
        "height": 1.5,
        "weight": 46.8,
        "species": "Happiness Pokémon",
        "types": [
            "normal"
        ],
        "description": "Its fluffy fur coat acts as a sensor, enabling it to\nread the feelings of people and Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png"
    },
    {
        "id": 243,
        "name": "raikou",
        "height": 1.9,
        "weight": 178,
        "species": "Thunder Pokémon",
        "types": [
            "electric"
        ],
        "description": "Raikou embodies the speed of lightning. The roars of\nthis Pokémon send shock waves shuddering through the\nair and shake the ground as if lightning bolts had come\ncrashing down.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png"
    },
    {
        "id": 244,
        "name": "entei",
        "height": 2.1,
        "weight": 198,
        "species": "Volcano Pokémon",
        "types": [
            "fire"
        ],
        "description": "Entei embodies the passion of magma. This Pokémon is\nthought to have been born in the eruption of a volcano.\nIt sends up massive bursts of fire that utterly consume all\nthat they touch.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png"
    },
    {
        "id": 245,
        "name": "suicune",
        "height": 2,
        "weight": 187,
        "species": "Aurora Pokémon",
        "types": [
            "water"
        ],
        "description": "Suicune embodies the compassion of a pure spring of water.\nIt runs across the land with gracefulness. This Pokémon has\nthe power to purify dirty water.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png"
    },
    {
        "id": 246,
        "name": "larvitar",
        "height": 0.6,
        "weight": 72,
        "species": "Rock Skin Pokémon",
        "types": [
            "ground",
            "rock"
        ],
        "description": "Larvitar is born deep under the ground. To come up to the\nsurface, this Pokémon must eat its way through the soil above.\nUntil it does so, Larvitar cannot see its parents.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png"
    },
    {
        "id": 247,
        "name": "pupitar",
        "height": 1.2,
        "weight": 152,
        "species": "Hard Shell Pokémon",
        "types": [
            "ground",
            "rock"
        ],
        "description": "Pupitar creates a gas inside its body that it compresses and\nforcefully ejects to propel itself like a jet. The body is very\ndurable—it avoids damage even if it hits solid steel.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png"
    },
    {
        "id": 248,
        "name": "tyranitar",
        "height": 2,
        "weight": 202,
        "species": "Armor Pokémon",
        "types": [
            "dark",
            "rock"
        ],
        "description": "Tyranitar is so overwhelmingly powerful, it can bring down a\nwhole mountain to make its nest. This Pokémon wanders about\nin mountains seeking new opponents to fight.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png"
    },
    {
        "id": 248,
        "name": "tyranitar-mega",
        "height": 2.5,
        "weight": 255,
        "species": "Armor Pokémon",
        "types": [
            "dark",
            "rock"
        ],
        "description": "Tyranitar is so overwhelmingly powerful, it can bring down a\nwhole mountain to make its nest. This Pokémon wanders about\nin mountains seeking new opponents to fight.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10049.png"
    },
    {
        "id": 249,
        "name": "lugia",
        "height": 5.2,
        "weight": 216,
        "species": "Diving Pokémon",
        "types": [
            "flying",
            "psychic"
        ],
        "description": "Lugia’s wings pack devastating power—a light fluttering of its\nwings can blow apart regular houses. As a result, this\nPokémon chooses to live out of sight deep under the sea.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png"
    },
    {
        "id": 250,
        "name": "ho-oh",
        "height": 3.8,
        "weight": 199,
        "species": "Rainbow Pokémon",
        "types": [
            "flying",
            "fire"
        ],
        "description": "Ho-Oh’s feathers glow in seven colors depending on the angle\nat which they are struck by light. These feathers are said to\nbring happiness to the bearers. This Pokémon is said to live at\nthe foot of a rainbow.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png"
    },
    {
        "id": 251,
        "name": "celebi",
        "height": 0.6,
        "weight": 5,
        "species": "Time Travel Pokémon",
        "types": [
            "grass",
            "psychic"
        ],
        "description": "This Pokémon came from the future by crossing over time.\nIt is thought that so long as Celebi appears, a bright and\nshining future awaits us.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png"
    },
    {
        "id": 252,
        "name": "treecko",
        "height": 0.5,
        "weight": 5,
        "species": "Wood Gecko Pokémon",
        "types": [
            "grass"
        ],
        "description": "Treecko is cool, calm, and collected—it never panics under\nany situation. If a bigger foe were to glare at this Pokémon,\nit would glare right back without conceding an inch of ground.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png"
    },
    {
        "id": 253,
        "name": "grovyle",
        "height": 0.9,
        "weight": 21.6,
        "species": "Wood Gecko Pokémon",
        "types": [
            "grass"
        ],
        "description": "This Pokémon adeptly flies from branch to branch in trees.\nIn a forest, no Pokémon can ever hope to catch a fleeing\nGrovyle however fast they may be.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png"
    },
    {
        "id": 254,
        "name": "sceptile",
        "height": 1.7,
        "weight": 52.2,
        "species": "Forest Pokémon",
        "types": [
            "grass"
        ],
        "description": "Sceptile has seeds growing on its back. They are said to be\nbursting with nutrients that revitalize trees. This Pokémon\nraises the trees in a forest with loving care.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png"
    },
    {
        "id": 254,
        "name": "sceptile-mega",
        "height": 1.9,
        "weight": 55.2,
        "species": "Forest Pokémon",
        "types": [
            "dragon",
            "grass"
        ],
        "description": "Sceptile has seeds growing on its back. They are said to be\nbursting with nutrients that revitalize trees. This Pokémon\nraises the trees in a forest with loving care.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10065.png"
    },
    {
        "id": 255,
        "name": "torchic",
        "height": 0.4,
        "weight": 2.5,
        "species": "Chick Pokémon",
        "types": [
            "fire"
        ],
        "description": "Torchic has a place inside its body where it keeps its flame.\nGive it a hug—it will be glowing with warmth. This Pokémon is\ncovered all over by a fluffy coat of down.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png"
    },
    {
        "id": 256,
        "name": "combusken",
        "height": 0.9,
        "weight": 19.5,
        "species": "Young Fowl Pokémon",
        "types": [
            "fighting",
            "fire"
        ],
        "description": "Combusken battles with the intensely hot flames it spews from\nits beak and with outstandingly destructive kicks. This\nPokémon’s cry is very loud and distracting.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png"
    },
    {
        "id": 257,
        "name": "blaziken",
        "height": 1.9,
        "weight": 52,
        "species": "Blaze Pokémon",
        "types": [
            "fighting",
            "fire"
        ],
        "description": "Blaziken has incredibly strong legs—it can easily clear a\n30-story building in one leap. This Pokémon’s blazing punches\nleave its foes scorched and blackened.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"
    },
    {
        "id": 257,
        "name": "blaziken-mega",
        "height": 1.9,
        "weight": 52,
        "species": "Blaze Pokémon",
        "types": [
            "fighting",
            "fire"
        ],
        "description": "Blaziken has incredibly strong legs—it can easily clear a\n30-story building in one leap. This Pokémon’s blazing punches\nleave its foes scorched and blackened.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10050.png"
    },
    {
        "id": 258,
        "name": "mudkip",
        "height": 0.4,
        "weight": 7.6,
        "species": "Mud Fish Pokémon",
        "types": [
            "water"
        ],
        "description": "In water, Mudkip breathes using the gills on its cheeks. If it is\nfaced with a tight situation in battle, this Pokémon will unleash\nits amazing power—it can crush rocks bigger than itself.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png"
    },
    {
        "id": 259,
        "name": "marshtomp",
        "height": 0.7,
        "weight": 28,
        "species": "Mud Fish Pokémon",
        "types": [
            "ground",
            "water"
        ],
        "description": "Marshtomp is much faster at traveling through mud than it is at\nswimming. This Pokémon’s hindquarters exhibit obvious\ndevelopment, giving it the ability to walk on just its hind legs.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png"
    },
    {
        "id": 260,
        "name": "swampert",
        "height": 1.5,
        "weight": 81.9,
        "species": "Mud Fish Pokémon",
        "types": [
            "ground",
            "water"
        ],
        "description": "Swampert predicts storms by sensing subtle differences in the\nsounds of waves and tidal winds with its fins. If a storm is\napproaching, it piles up boulders to protect itself.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png"
    },
    {
        "id": 260,
        "name": "swampert-mega",
        "height": 1.9,
        "weight": 102,
        "species": "Mud Fish Pokémon",
        "types": [
            "ground",
            "water"
        ],
        "description": "Swampert predicts storms by sensing subtle differences in the\nsounds of waves and tidal winds with its fins. If a storm is\napproaching, it piles up boulders to protect itself.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10064.png"
    },
    {
        "id": 261,
        "name": "poochyena",
        "height": 0.5,
        "weight": 13.6,
        "species": "Bite Pokémon",
        "types": [
            "dark"
        ],
        "description": "Poochyena is an omnivore—it will eat anything. A distinguishing\nfeature is how large its fangs are compared to its body. This\nPokémon tries to intimidate its foes by making the hair on its\ntail bristle out.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png"
    },
    {
        "id": 262,
        "name": "mightyena",
        "height": 1,
        "weight": 37,
        "species": "Bite Pokémon",
        "types": [
            "dark"
        ],
        "description": "Mightyena travel and act as a pack in the wild. The memory\nof its life in the wild compels the Pokémon to obey only\nthose Trainers that it recognizes to possess superior skill.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png"
    },
    {
        "id": 263,
        "name": "zigzagoon",
        "height": 0.4,
        "weight": 17.5,
        "species": "Tiny Raccoon Pokémon",
        "types": [
            "normal"
        ],
        "description": "The hair on Zigzagoon’s back is bristly. It rubs the hard back\nhair against trees to leave its territorial markings. This Pokémon\nmay play dead to fool foes in battle.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png"
    },
    {
        "id": 264,
        "name": "linoone",
        "height": 0.5,
        "weight": 32.5,
        "species": "Rushing Pokémon",
        "types": [
            "normal"
        ],
        "description": "When hunting, Linoone will make a beeline straight for the\nprey at a full run. While this Pokémon is capable of topping\n60 mph, it has to come to a screeching halt before it can turn.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png"
    },
    {
        "id": 265,
        "name": "wurmple",
        "height": 0.3,
        "weight": 3.6,
        "species": "Worm Pokémon",
        "types": [
            "bug"
        ],
        "description": "Wurmple is targeted by Swellow as prey. This Pokémon\nwill try to resist by pointing the spikes on its rear at the\nattacking predator. It will weaken the foe by leaking poison\nfrom the spikes.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png"
    },
    {
        "id": 266,
        "name": "silcoon",
        "height": 0.6,
        "weight": 10,
        "species": "Cocoon Pokémon",
        "types": [
            "bug"
        ],
        "description": "Silcoon was thought to endure hunger and not consume\nanything before its evolution. However, it is now thought\nthat this Pokémon slakes its thirst by drinking rainwater\nthat collects on its silk.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png"
    },
    {
        "id": 267,
        "name": "beautifly",
        "height": 1,
        "weight": 28.4,
        "species": "Butterfly Pokémon",
        "types": [
            "flying",
            "bug"
        ],
        "description": "Beautifly has a long mouth like a coiled needle, which is very\nconvenient for collecting pollen from flowers. This Pokémon\nrides the spring winds as it flits around gathering pollen.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png"
    },
    {
        "id": 268,
        "name": "cascoon",
        "height": 0.7,
        "weight": 11.5,
        "species": "Cocoon Pokémon",
        "types": [
            "bug"
        ],
        "description": "If it is attacked, Cascoon remains motionless however badly it\nmay be hurt. It does so because if it were to move, its body\nwould be weak upon evolution. This Pokémon will also not\nforget the pain it endured.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png"
    },
    {
        "id": 269,
        "name": "dustox",
        "height": 1.2,
        "weight": 31.6,
        "species": "Poison Moth Pokémon",
        "types": [
            "poison",
            "bug"
        ],
        "description": "When Dustox flaps its wings, a fine dust is scattered all over.\nThis dust is actually a powerful poison that will even make a\npro wrestler sick. This Pokémon searches for food using its\nantennae like radar.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png"
    },
    {
        "id": 270,
        "name": "lotad",
        "height": 0.5,
        "weight": 2.6,
        "species": "Water Weed Pokémon",
        "types": [
            "grass",
            "water"
        ],
        "description": "Lotad is said to have dwelled on land before. However, this\nPokémon is thought to have returned to water because the\nleaf on its head grew large and heavy. It now lives by floating\natop the water.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png"
    },
    {
        "id": 271,
        "name": "lombre",
        "height": 1.2,
        "weight": 32.5,
        "species": "Jolly Pokémon",
        "types": [
            "grass",
            "water"
        ],
        "description": "Lombre’s entire body is covered by a slippery, slimy film.\nIt feels horribly unpleasant to be touched by this Pokémon’s\nhands. Lombre is often mistaken for a human child.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png"
    },
    {
        "id": 272,
        "name": "ludicolo",
        "height": 1.5,
        "weight": 55,
        "species": "Carefree Pokémon",
        "types": [
            "grass",
            "water"
        ],
        "description": "Upon hearing an upbeat and cheerful rhythm, the cells in\nLudicolo’s body become very energetic and active. Even\nin battle, this Pokémon will exhibit an amazing amount\nof power.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png"
    },
    {
        "id": 273,
        "name": "seedot",
        "height": 0.5,
        "weight": 4,
        "species": "Acorn Pokémon",
        "types": [
            "grass"
        ],
        "description": "Seedot looks exactly like an acorn when it is dangling from a\ntree branch. It startles other Pokémon by suddenly moving.\nThis Pokémon polishes its body once a day using leaves.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png"
    },
    {
        "id": 274,
        "name": "nuzleaf",
        "height": 1,
        "weight": 28,
        "species": "Wily Pokémon",
        "types": [
            "dark",
            "grass"
        ],
        "description": "This Pokémon pulls out the leaf on its head and makes a flute\nwith it. The sound of Nuzleaf’s flute strikes fear and uncertainty\nin the hearts of people lost in a forest.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png"
    },
    {
        "id": 275,
        "name": "shiftry",
        "height": 1.3,
        "weight": 59.6,
        "species": "Wicked Pokémon",
        "types": [
            "dark",
            "grass"
        ],
        "description": "Shiftry’s large fans generate awesome gusts of wind at a\nspeed close to 100 feet per second. The whipped-up wind\nblows anything away. This Pokémon chooses to live quietly\ndeep in forests.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png"
    },
    {
        "id": 276,
        "name": "taillow",
        "height": 0.3,
        "weight": 2.3,
        "species": "Tiny Swallow Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "Taillow is young—it has only just left its nest. As a result,\nit sometimes becomes lonesome and cries at night.\nThis Pokémon feeds on Wurmple that live in forests.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png"
    },
    {
        "id": 277,
        "name": "swellow",
        "height": 0.7,
        "weight": 19.8,
        "species": "Swallow Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "Swellow is very conscientious about the upkeep of its glossy\nwings. Once two Swellow are gathered, they diligently take\ncare of cleaning each other’s wings.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png"
    },
    {
        "id": 278,
        "name": "wingull",
        "height": 0.6,
        "weight": 9.5,
        "species": "Seagull Pokémon",
        "types": [
            "flying",
            "water"
        ],
        "description": "Fishermen keep an eye out for Wingull in the\nsky, because wherever they’re circling, the\nocean is sure to be teeming with fish Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png"
    },
    {
        "id": 279,
        "name": "pelipper",
        "height": 1.2,
        "weight": 28,
        "species": "Water Bird Pokémon",
        "types": [
            "flying",
            "water"
        ],
        "description": "Gathering food is the work of young males.\nThey store food in their capacious beaks and\ncarry it back to others waiting in the nest.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png"
    },
    {
        "id": 280,
        "name": "ralts",
        "height": 0.4,
        "weight": 6.6,
        "species": "Feeling Pokémon",
        "types": [
            "fairy",
            "psychic"
        ],
        "description": "Ralts has the ability to sense the emotions of people. If its\nTrainer is in a cheerful mood, this Pokémon grows cheerful\nand joyous in the same way.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png"
    },
    {
        "id": 281,
        "name": "kirlia",
        "height": 0.8,
        "weight": 20.2,
        "species": "Emotion Pokémon",
        "types": [
            "fairy",
            "psychic"
        ],
        "description": "Kirlia uses the horns on its head to amplify its psychokinetic\npower. When the Pokémon uses its power, the air around it\nbecomes distorted, creating mirages of nonexistent scenery.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png"
    },
    {
        "id": 282,
        "name": "gardevoir",
        "height": 1.6,
        "weight": 48.4,
        "species": "Embrace Pokémon",
        "types": [
            "fairy",
            "psychic"
        ],
        "description": "Gardevoir has the psychokinetic power to distort the\ndimensions and create a small black hole. This Pokémon\nwill try to protect its Trainer even at the risk of its own life.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png"
    },
    {
        "id": 282,
        "name": "gardevoir-mega",
        "height": 1.6,
        "weight": 48.4,
        "species": "Embrace Pokémon",
        "types": [
            "fairy",
            "psychic"
        ],
        "description": "Gardevoir has the psychokinetic power to distort the\ndimensions and create a small black hole. This Pokémon\nwill try to protect its Trainer even at the risk of its own life.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10051.png"
    },
    {
        "id": 283,
        "name": "surskit",
        "height": 0.5,
        "weight": 1.7,
        "species": "Pond Skater Pokémon",
        "types": [
            "water",
            "bug"
        ],
        "description": "When this Pokémon senses danger, a sweet\nfluid oozes from the tip of its head. The taste\nof it disgusts bird Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png"
    },
    {
        "id": 284,
        "name": "masquerain",
        "height": 0.8,
        "weight": 3.6,
        "species": "Eyeball Pokémon",
        "types": [
            "flying",
            "bug"
        ],
        "description": "Its wings and antennae don’t cope well with\nmoisture. After a rain, it faces sunward to\ndry off.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png"
    },
    {
        "id": 285,
        "name": "shroomish",
        "height": 0.4,
        "weight": 4.5,
        "species": "Mushroom Pokémon",
        "types": [
            "grass"
        ],
        "description": "If Shroomish senses danger, it shakes its body and scatters\nspores from the top of its head. This Pokémon’s spores are\nso toxic, they make trees and weeds wilt.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png"
    },
    {
        "id": 286,
        "name": "breloom",
        "height": 1.2,
        "weight": 39.2,
        "species": "Mushroom Pokémon",
        "types": [
            "fighting",
            "grass"
        ],
        "description": "The seeds ringing Breloom’s tail are made of hardened toxic\nspores. It is horrible to eat the seeds. Just taking a bite of this\nPokémon’s seed will cause your stomach to rumble.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png"
    },
    {
        "id": 287,
        "name": "slakoth",
        "height": 0.8,
        "weight": 24,
        "species": "Slacker Pokémon",
        "types": [
            "normal"
        ],
        "description": "Slakoth’s heart beats just once a minute. Whatever happens,\nit is content to loaf around motionless. It is rare to see this\nPokémon in motion.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png"
    },
    {
        "id": 288,
        "name": "vigoroth",
        "height": 1.4,
        "weight": 46.5,
        "species": "Wild Monkey Pokémon",
        "types": [
            "normal"
        ],
        "description": "Vigoroth is simply incapable of remaining still. Even when it\ntries to sleep, the blood in its veins grows agitated, compelling\nthis Pokémon to run wild throughout the jungle before it can\nsettle down.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png"
    },
    {
        "id": 289,
        "name": "slaking",
        "height": 2,
        "weight": 130.5,
        "species": "Lazy Pokémon",
        "types": [
            "normal"
        ],
        "description": "Wherever Slaking live, rings of over a yard in diameter appear\nin grassy fields. They are made by the Pokémon as it eats all\nthe grass within reach while lying prone on the ground.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png"
    },
    {
        "id": 290,
        "name": "nincada",
        "height": 0.5,
        "weight": 5.5,
        "species": "Trainee Pokémon",
        "types": [
            "ground",
            "bug"
        ],
        "description": "Nincada lives underground. It uses its sharp claws to carve the\nroots of trees and absorb moisture and nutrients.\nThis Pokémon can’t withstand bright sunlight so avoids it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png"
    },
    {
        "id": 291,
        "name": "ninjask",
        "height": 0.8,
        "weight": 12,
        "species": "Ninja Pokémon",
        "types": [
            "flying",
            "bug"
        ],
        "description": "If Ninjask is not trained properly, it will refuse to obey\nthe Trainer and cry loudly continuously. Because of this\nquality, this Pokémon is said to be one that puts the\nTrainer’s abilities to the test.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png"
    },
    {
        "id": 292,
        "name": "shedinja",
        "height": 0.8,
        "weight": 1.2,
        "species": "Shed Pokémon",
        "types": [
            "ghost",
            "bug"
        ],
        "description": "Shedinja is a peculiar Pokémon. It seems to appear unsought\nin a Poké Ball after a Nincada evolves. This bizarre Pokémon\nis entirely immobile—it doesn’t even breathe.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png"
    },
    {
        "id": 293,
        "name": "whismur",
        "height": 0.6,
        "weight": 16.3,
        "species": "Whisper Pokémon",
        "types": [
            "normal"
        ],
        "description": "Whismur is very timid. If it starts to cry loudly, it becomes\nstartled by its own crying and cries even harder. When it finally\nstops crying, the Pokémon goes to sleep, all tired out.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png"
    },
    {
        "id": 294,
        "name": "loudred",
        "height": 1,
        "weight": 40.5,
        "species": "Big Voice Pokémon",
        "types": [
            "normal"
        ],
        "description": "Loudred shouts while stamping its feet. After it finishes\nshouting, this Pokémon becomes incapable of hearing\nanything for a while. This is considered to be a weak point.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png"
    },
    {
        "id": 295,
        "name": "exploud",
        "height": 1.5,
        "weight": 84,
        "species": "Loud Noise Pokémon",
        "types": [
            "normal"
        ],
        "description": "Exploud communicates its feelings to the others by emitting\nwhistle-like sounds from the tubes on its body. This Pokémon\nonly raises its voice when it is in battle.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png"
    },
    {
        "id": 296,
        "name": "makuhita",
        "height": 1,
        "weight": 86.4,
        "species": "Guts Pokémon",
        "types": [
            "fighting"
        ],
        "description": "Their daily routine consists of training together\nfirst thing in the morning, eating and napping in\nthe afternoon, and then more training afterward.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png"
    },
    {
        "id": 297,
        "name": "hariyama",
        "height": 2.3,
        "weight": 253.8,
        "species": "Arm Thrust Pokémon",
        "types": [
            "fighting"
        ],
        "description": "They love to compare their freakish strength—\nstrength enough to send a truck flying with a\nsingle slap.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png"
    },
    {
        "id": 298,
        "name": "azurill",
        "height": 0.2,
        "weight": 2,
        "species": "Polka Dot Pokémon",
        "types": [
            "fairy",
            "normal"
        ],
        "description": "Azurill’s tail is large and bouncy. It is packed full of the\nnutrients this Pokémon needs to grow. Azurill can be seen\nbouncing and playing on its big, rubbery tail.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png"
    },
    {
        "id": 299,
        "name": "nosepass",
        "height": 1,
        "weight": 97,
        "species": "Compass Pokémon",
        "types": [
            "rock"
        ],
        "description": "It uses powerful magnetism to drag its prey\ntoward it. It’s also been known to pull in metal,\nwhich it collects and uses to protect itself.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png"
    },
    {
        "id": 300,
        "name": "skitty",
        "height": 0.6,
        "weight": 11,
        "species": "Kitten Pokémon",
        "types": [
            "normal"
        ],
        "description": "Skitty is known to chase around playfully after its own tail.\nIn the wild, this Pokémon lives in holes in the trees of forests.\nIt is very popular as a pet because of its adorable looks.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png"
    },
    {
        "id": 301,
        "name": "delcatty",
        "height": 1.1,
        "weight": 32.6,
        "species": "Prim Pokémon",
        "types": [
            "normal"
        ],
        "description": "Delcatty sleeps anywhere it wants without keeping a permanent\nnest. If other Pokémon approach it as it sleeps, this Pokémon\nwill never fight—it will just move away somewhere else.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png"
    },
    {
        "id": 302,
        "name": "sableye",
        "height": 0.5,
        "weight": 11,
        "species": "Darkness Pokémon",
        "types": [
            "ghost",
            "dark"
        ],
        "description": "This Pokémon is feared. When its gemstone eyes\nbegin to glow with a sinister shine, it’s believed\nthat Sableye will steal people’s spirits away.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png"
    },
    {
        "id": 302,
        "name": "sableye-mega",
        "height": 0.5,
        "weight": 161,
        "species": "Darkness Pokémon",
        "types": [
            "ghost",
            "dark"
        ],
        "description": "This Pokémon is feared. When its gemstone eyes\nbegin to glow with a sinister shine, it’s believed\nthat Sableye will steal people’s spirits away.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10066.png"
    },
    {
        "id": 303,
        "name": "mawile",
        "height": 0.6,
        "weight": 11.5,
        "species": "Deceiver Pokémon",
        "types": [
            "fairy",
            "steel"
        ],
        "description": "Don’t be taken in by this Pokémon’s cute face—it’s very\ndangerous. Mawile fools the foe into letting down its guard,\nthen chomps down with its massive jaws. The steel jaws are\nreally horns that have been transformed.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png"
    },
    {
        "id": 303,
        "name": "mawile-mega",
        "height": 1,
        "weight": 23.5,
        "species": "Deceiver Pokémon",
        "types": [
            "fairy",
            "steel"
        ],
        "description": "Don’t be taken in by this Pokémon’s cute face—it’s very\ndangerous. Mawile fools the foe into letting down its guard,\nthen chomps down with its massive jaws. The steel jaws are\nreally horns that have been transformed.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10052.png"
    },
    {
        "id": 304,
        "name": "aron",
        "height": 0.4,
        "weight": 60,
        "species": "Iron Armor Pokémon",
        "types": [
            "rock",
            "steel"
        ],
        "description": "Aron has a body of steel. With one all-out charge, this\nPokémon can demolish even a heavy dump truck.\nThe destroyed dump truck then becomes a handy meal\nfor the Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png"
    },
    {
        "id": 305,
        "name": "lairon",
        "height": 0.9,
        "weight": 120,
        "species": "Iron Armor Pokémon",
        "types": [
            "rock",
            "steel"
        ],
        "description": "Lairon feeds on iron contained in rocks and water. It makes\nits nest on mountains where iron ore is buried. As a result,\nthe Pokémon often clashes with humans mining the iron ore.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png"
    },
    {
        "id": 306,
        "name": "aggron",
        "height": 2.1,
        "weight": 360,
        "species": "Iron Armor Pokémon",
        "types": [
            "rock",
            "steel"
        ],
        "description": "Aggron is protective of its environment. If its mountain is\nravaged by a landslide or a fire, this Pokémon will haul\ntopsoil to the area, plant trees, and beautifully restore its\nown territory.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png"
    },
    {
        "id": 306,
        "name": "aggron-mega",
        "height": 2.2,
        "weight": 395,
        "species": "Iron Armor Pokémon",
        "types": [
            "steel"
        ],
        "description": "Aggron is protective of its environment. If its mountain is\nravaged by a landslide or a fire, this Pokémon will haul\ntopsoil to the area, plant trees, and beautifully restore its\nown territory.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10053.png"
    },
    {
        "id": 307,
        "name": "meditite",
        "height": 0.6,
        "weight": 11.2,
        "species": "Meditate Pokémon",
        "types": [
            "psychic",
            "fighting"
        ],
        "description": "Meditite heightens its inner energy through meditation.\nIt survives on just one berry a day. Minimal eating is another\naspect of this Pokémon’s training.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png"
    },
    {
        "id": 308,
        "name": "medicham",
        "height": 1.3,
        "weight": 31.5,
        "species": "Meditate Pokémon",
        "types": [
            "psychic",
            "fighting"
        ],
        "description": "Through the power of meditation, Medicham developed its\nsixth sense. It gained the ability to use psychokinetic powers.\nThis Pokémon is known to meditate for a whole month\nwithout eating.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png"
    },
    {
        "id": 308,
        "name": "medicham-mega",
        "height": 1.3,
        "weight": 31.5,
        "species": "Meditate Pokémon",
        "types": [
            "psychic",
            "fighting"
        ],
        "description": "Through the power of meditation, Medicham developed its\nsixth sense. It gained the ability to use psychokinetic powers.\nThis Pokémon is known to meditate for a whole month\nwithout eating.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10054.png"
    },
    {
        "id": 309,
        "name": "electrike",
        "height": 0.6,
        "weight": 15.2,
        "species": "Lightning Pokémon",
        "types": [
            "electric"
        ],
        "description": "Electrike runs faster than the human eye can follow.\nThe friction from running is converted into electricity,\nwhich is then stored in this Pokémon’s fur.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png"
    },
    {
        "id": 310,
        "name": "manectric",
        "height": 1.5,
        "weight": 40.2,
        "species": "Discharge Pokémon",
        "types": [
            "electric"
        ],
        "description": "Manectric discharges strong electricity from its mane.\nThe mane is used for collecting electricity in the atmosphere.\nThis Pokémon creates thunderclouds above its head.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png"
    },
    {
        "id": 310,
        "name": "manectric-mega",
        "height": 1.8,
        "weight": 44,
        "species": "Discharge Pokémon",
        "types": [
            "electric"
        ],
        "description": "Manectric discharges strong electricity from its mane.\nThe mane is used for collecting electricity in the atmosphere.\nThis Pokémon creates thunderclouds above its head.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10055.png"
    },
    {
        "id": 311,
        "name": "plusle",
        "height": 0.4,
        "weight": 4.2,
        "species": "Cheering Pokémon",
        "types": [
            "electric"
        ],
        "description": "When Plusle is cheering on its partner, it flashes with electric\nsparks from all over its body. If its partner loses, this Pokémon\ncries loudly.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png"
    },
    {
        "id": 312,
        "name": "minun",
        "height": 0.4,
        "weight": 4.2,
        "species": "Cheering Pokémon",
        "types": [
            "electric"
        ],
        "description": "Minun loves to cheer on its partner in battle. It gives off sparks\nfrom its body while it is doing so. If its partner is in trouble,\nthis Pokémon gives off increasing amounts of sparks.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png"
    },
    {
        "id": 313,
        "name": "volbeat",
        "height": 0.7,
        "weight": 17.7,
        "species": "Firefly Pokémon",
        "types": [
            "bug"
        ],
        "description": "Volbeat’s tail glows like a lightbulb. With other Volbeat,\nit uses its tail to draw geometric shapes in the night sky.\nThis Pokémon loves the sweet aroma given off by Illumise.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png"
    },
    {
        "id": 314,
        "name": "illumise",
        "height": 0.6,
        "weight": 17.7,
        "species": "Firefly Pokémon",
        "types": [
            "bug"
        ],
        "description": "Illumise leads a flight of illuminated Volbeat to draw signs in\nthe night sky. This Pokémon is said to earn greater respect\nfrom its peers by composing more complex designs in the sky.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png"
    },
    {
        "id": 315,
        "name": "roselia",
        "height": 0.3,
        "weight": 2,
        "species": "Thorn Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "On extremely rare occasions, a Roselia is said to appear with\nits flowers in unusual colors. The thorns on this Pokémon’s\nhead contain a vicious poison.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png"
    },
    {
        "id": 316,
        "name": "gulpin",
        "height": 0.4,
        "weight": 10.3,
        "species": "Stomach Pokémon",
        "types": [
            "poison"
        ],
        "description": "Most of Gulpin’s body is made up of its stomach—its heart and\nbrain are very small in comparison. This Pokémon’s stomach\ncontains special enzymes that dissolve anything.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png"
    },
    {
        "id": 317,
        "name": "swalot",
        "height": 1.7,
        "weight": 80,
        "species": "Poison Bag Pokémon",
        "types": [
            "poison"
        ],
        "description": "Swalot has no teeth, so what it eats, it swallows whole, no\nmatter what. Its cavernous mouth yawns widely. An automobile\ntire could easily fit inside this Pokémon’s mouth.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png"
    },
    {
        "id": 318,
        "name": "carvanha",
        "height": 0.8,
        "weight": 20.8,
        "species": "Savage Pokémon",
        "types": [
            "dark",
            "water"
        ],
        "description": "If they scent the faintest trace of blood, they\nrush to attack en masse. When alone, they’re\nrather cowardly.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png"
    },
    {
        "id": 319,
        "name": "sharpedo",
        "height": 1.8,
        "weight": 88.8,
        "species": "Brutal Pokémon",
        "types": [
            "dark",
            "water"
        ],
        "description": "It has a sad history. In the past, its dorsal fin\nwas a treasured foodstuff, so this Pokémon\nbecame a victim of overfishing.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png"
    },
    {
        "id": 319,
        "name": "sharpedo-mega",
        "height": 2.5,
        "weight": 130.3,
        "species": "Brutal Pokémon",
        "types": [
            "dark",
            "water"
        ],
        "description": "It has a sad history. In the past, its dorsal fin\nwas a treasured foodstuff, so this Pokémon\nbecame a victim of overfishing.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10070.png"
    },
    {
        "id": 320,
        "name": "wailmer",
        "height": 2,
        "weight": 130,
        "species": "Ball Whale Pokémon",
        "types": [
            "water"
        ],
        "description": "It shows off by spraying jets of seawater from\nthe nostrils above its eyes. It eats a solid ton of\nWishiwashi every day.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png"
    },
    {
        "id": 321,
        "name": "wailord",
        "height": 14.5,
        "weight": 398,
        "species": "Float Whale Pokémon",
        "types": [
            "water"
        ],
        "description": "Its immense size is the reason for its popularity.\nWailord watching is a favorite sightseeing\nactivity in various parts of the world.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png"
    },
    {
        "id": 322,
        "name": "numel",
        "height": 0.7,
        "weight": 24,
        "species": "Numb Pokémon",
        "types": [
            "ground",
            "fire"
        ],
        "description": "Numel stores magma of almost 2,200 degrees Fahrenheit\nwithin its body. If it gets wet, the magma cools and hardens.\nIn that event, the Pokémon’s body grows heavy and its\nmovements become sluggish.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png"
    },
    {
        "id": 323,
        "name": "camerupt",
        "height": 1.9,
        "weight": 220,
        "species": "Eruption Pokémon",
        "types": [
            "ground",
            "fire"
        ],
        "description": "The humps on Camerupt’s back are formed by a transformation\nof its bones. They sometimes blast out molten magma.\nThis Pokémon apparently erupts often when it is enraged.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png"
    },
    {
        "id": 323,
        "name": "camerupt-mega",
        "height": 2.5,
        "weight": 320.5,
        "species": "Eruption Pokémon",
        "types": [
            "ground",
            "fire"
        ],
        "description": "The humps on Camerupt’s back are formed by a transformation\nof its bones. They sometimes blast out molten magma.\nThis Pokémon apparently erupts often when it is enraged.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10087.png"
    },
    {
        "id": 324,
        "name": "torkoal",
        "height": 0.5,
        "weight": 80.4,
        "species": "Coal Pokémon",
        "types": [
            "fire"
        ],
        "description": "If the fire burning within its shell goes out, it will\ndie. Those who wish to raise one in their home\nmust always keep something flammable at hand.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png"
    },
    {
        "id": 325,
        "name": "spoink",
        "height": 0.7,
        "weight": 30.6,
        "species": "Bounce Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Spoink keeps a pearl on top of its head. The pearl functions to\namplify this Pokémon’s psychokinetic powers. It is therefore on\na constant search for a bigger pearl.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png"
    },
    {
        "id": 326,
        "name": "grumpig",
        "height": 0.9,
        "weight": 71.5,
        "species": "Manipulate Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Grumpig uses the black pearls on its body to wield\nits fantastic powers. When it is doing so, it dances bizarrely.\nThis Pokémon’s black pearls are valuable as works of art.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png"
    },
    {
        "id": 327,
        "name": "spinda",
        "height": 1.1,
        "weight": 5,
        "species": "Spot Panda Pokémon",
        "types": [
            "normal"
        ],
        "description": "Each and every Spinda has a slightly different\nconfiguration of spots. There are collectors who\nenjoy the tiny differences in their spot patterns.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png"
    },
    {
        "id": 328,
        "name": "trapinch",
        "height": 0.7,
        "weight": 15,
        "species": "Ant Pit Pokémon",
        "types": [
            "ground"
        ],
        "description": "As it digs through the sand, its giant jaws\ncrush any rocks that obstruct its path. It builds\na funnel-shaped nest.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png"
    },
    {
        "id": 329,
        "name": "vibrava",
        "height": 1.1,
        "weight": 15.3,
        "species": "Vibration Pokémon",
        "types": [
            "dragon",
            "ground"
        ],
        "description": "To help make its wings grow, it dissolves\nquantities of prey in its digestive juices and\nguzzles them down every day.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png"
    },
    {
        "id": 330,
        "name": "flygon",
        "height": 2,
        "weight": 82,
        "species": "Mystic Pokémon",
        "types": [
            "dragon",
            "ground"
        ],
        "description": "This Pokémon hides in the heart of sandstorms\nit creates and seldom appears where people\ncan see it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png"
    },
    {
        "id": 331,
        "name": "cacnea",
        "height": 0.4,
        "weight": 51.3,
        "species": "Cactus Pokémon",
        "types": [
            "grass"
        ],
        "description": "The more arid and harsh the environment, the more pretty and\nfragrant a flower Cacnea grows. This Pokémon battles by\nwildly swinging its thorny arms.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png"
    },
    {
        "id": 332,
        "name": "cacturne",
        "height": 1.3,
        "weight": 77.4,
        "species": "Scarecrow Pokémon",
        "types": [
            "dark",
            "grass"
        ],
        "description": "If a traveler is going through a desert in the thick of night,\nCacturne will follow in a ragtag group. The Pokémon are\nbiding their time, waiting for the traveler to tire and become\nincapable of moving.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png"
    },
    {
        "id": 333,
        "name": "swablu",
        "height": 0.4,
        "weight": 1.2,
        "species": "Cotton Bird Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "Swablu loves to make things clean. If it spots something dirty,\nit will wipe and polish it with its cottony wings. If its wings\nbecome dirty, this Pokémon finds a stream and showers itself.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png"
    },
    {
        "id": 334,
        "name": "altaria",
        "height": 1.1,
        "weight": 20.6,
        "species": "Humming Pokémon",
        "types": [
            "flying",
            "dragon"
        ],
        "description": "Altaria sings in a gorgeous soprano. Its wings are like cotton\nclouds. This Pokémon catches updrafts with its buoyant wings\nand soars way up into the wild blue yonder.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png"
    },
    {
        "id": 334,
        "name": "altaria-mega",
        "height": 1.5,
        "weight": 20.6,
        "species": "Humming Pokémon",
        "types": [
            "fairy",
            "dragon"
        ],
        "description": "Altaria sings in a gorgeous soprano. Its wings are like cotton\nclouds. This Pokémon catches updrafts with its buoyant wings\nand soars way up into the wild blue yonder.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10067.png"
    },
    {
        "id": 335,
        "name": "zangoose",
        "height": 1.3,
        "weight": 40.3,
        "species": "Cat Ferret Pokémon",
        "types": [
            "normal"
        ],
        "description": "Zangoose usually stays on all fours, but when angered, it gets\nup on its hind legs and extends its claws. This Pokémon shares\na bitter rivalry with Seviper that dates back over generations.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png"
    },
    {
        "id": 336,
        "name": "seviper",
        "height": 2.7,
        "weight": 52.5,
        "species": "Fang Snake Pokémon",
        "types": [
            "poison"
        ],
        "description": "Seviper’s swordlike tail serves two purposes—it slashes foes\nand douses them with secreted poison. This Pokémon will not\ngive up its long-running blood feud with Zangoose.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png"
    },
    {
        "id": 337,
        "name": "lunatone",
        "height": 1,
        "weight": 168,
        "species": "Meteorite Pokémon",
        "types": [
            "psychic",
            "rock"
        ],
        "description": "Lunatone becomes active around the time of the full moon.\nInstead of walking, it moves by floating in midair.\nThe Pokémon’s intimidating red eyes cause all those who\nsee it to become transfixed with fear.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png"
    },
    {
        "id": 338,
        "name": "solrock",
        "height": 1.2,
        "weight": 154,
        "species": "Meteorite Pokémon",
        "types": [
            "psychic",
            "rock"
        ],
        "description": "Sunlight is the source of Solrock’s power. It is said to possess\nthe ability to read the emotions of others. This Pokémon gives\noff intense heat while rotating its body.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png"
    },
    {
        "id": 339,
        "name": "barboach",
        "height": 0.4,
        "weight": 1.9,
        "species": "Whiskers Pokémon",
        "types": [
            "ground",
            "water"
        ],
        "description": "Its slippery body is hard to grasp, so much so\nthat there are festivals where people compete\nto see how many they can catch barehanded.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png"
    },
    {
        "id": 340,
        "name": "whiscash",
        "height": 0.9,
        "weight": 23.6,
        "species": "Whiskers Pokémon",
        "types": [
            "ground",
            "water"
        ],
        "description": "Sighting Whiscash leaping from the water\nis believed to herald an earthquake.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png"
    },
    {
        "id": 341,
        "name": "corphish",
        "height": 0.6,
        "weight": 11.5,
        "species": "Ruffian Pokémon",
        "types": [
            "water"
        ],
        "description": "Corphish catches prey with its sharp claws. It has no\nlikes or dislikes when it comes to food—it will eat anything.\nThis Pokémon has no trouble living in filthy water.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png"
    },
    {
        "id": 342,
        "name": "crawdaunt",
        "height": 1.1,
        "weight": 32.8,
        "species": "Rogue Pokémon",
        "types": [
            "dark",
            "water"
        ],
        "description": "Crawdaunt molts (sheds) its shell regularly. Immediately after\nmolting, its shell is soft and tender. Until the shell hardens,\nthis Pokémon hides in its streambed burrow to avoid attack\nfrom its foes.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png"
    },
    {
        "id": 343,
        "name": "baltoy",
        "height": 0.5,
        "weight": 21.5,
        "species": "Clay Doll Pokémon",
        "types": [
            "psychic",
            "ground"
        ],
        "description": "As soon as it spots others of its kind, Baltoy congregates with\nthem and then begins crying noisily in unison. This Pokémon\nsleeps while cleverly balancing itself on its one foot.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png"
    },
    {
        "id": 344,
        "name": "claydol",
        "height": 1.5,
        "weight": 108,
        "species": "Clay Doll Pokémon",
        "types": [
            "psychic",
            "ground"
        ],
        "description": "Claydol is an enigma that appeared from a clay statue made by\nan ancient civilization dating back 20,000 years. This Pokémon\nshoots beams from both its hands.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png"
    },
    {
        "id": 345,
        "name": "lileep",
        "height": 1,
        "weight": 23.8,
        "species": "Sea Lily Pokémon",
        "types": [
            "grass",
            "rock"
        ],
        "description": "Lileep is an ancient Pokémon that was regenerated from a\nfossil. It remains permanently anchored to a rock. From its\nimmobile perch, this Pokémon intently scans for prey with its\ntwo eyes.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png"
    },
    {
        "id": 346,
        "name": "cradily",
        "height": 1.5,
        "weight": 60.4,
        "species": "Barnacle Pokémon",
        "types": [
            "grass",
            "rock"
        ],
        "description": "Cradily’s body serves as an anchor, preventing it from being\nwashed away in rough seas. This Pokémon secretes a strong\ndigestive fluid from its tentacles.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png"
    },
    {
        "id": 347,
        "name": "anorith",
        "height": 0.7,
        "weight": 12.5,
        "species": "Old Shrimp Pokémon",
        "types": [
            "bug",
            "rock"
        ],
        "description": "Anorith is said to be a type of Pokémon predecessor, with\neight wings at the sides of its body. This Pokémon swam in the\nprimordial sea by undulating these eight wings.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png"
    },
    {
        "id": 348,
        "name": "armaldo",
        "height": 1.5,
        "weight": 68.2,
        "species": "Plate Pokémon",
        "types": [
            "bug",
            "rock"
        ],
        "description": "Armaldo is a Pokémon species that became extinct in\nprehistoric times. This Pokémon is said to have walked\non its hind legs, which would have been more convenient\nfor life on land.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png"
    },
    {
        "id": 349,
        "name": "feebas",
        "height": 0.6,
        "weight": 7.4,
        "species": "Fish Pokémon",
        "types": [
            "water"
        ],
        "description": "Although unattractive and unpopular, this\nPokémon’s marvelous vitality has made it a\nsubject of research.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png"
    },
    {
        "id": 350,
        "name": "milotic",
        "height": 6.2,
        "weight": 162,
        "species": "Tender Pokémon",
        "types": [
            "water"
        ],
        "description": "It lives at the bottom of clear lakes. In times of\nwar, it shows itself, which soothes people’s\nminds and hearts.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png"
    },
    {
        "id": 351,
        "name": "castform",
        "height": 0.3,
        "weight": 0.8,
        "species": "Weather Pokémon",
        "types": [
            "normal"
        ],
        "description": "Its form changes on its own, due to its cells’\nsensitive reactions to temperature and humidity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png"
    },
    {
        "id": 351,
        "name": "castform-sunny",
        "height": 0.3,
        "weight": 0.8,
        "species": "Weather Pokémon",
        "types": [
            "fire"
        ],
        "description": "Its form changes on its own, due to its cells’\nsensitive reactions to temperature and humidity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10013.png"
    },
    {
        "id": 351,
        "name": "castform-rainy",
        "height": 0.3,
        "weight": 0.8,
        "species": "Weather Pokémon",
        "types": [
            "water"
        ],
        "description": "Its form changes on its own, due to its cells’\nsensitive reactions to temperature and humidity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10014.png"
    },
    {
        "id": 351,
        "name": "castform-snowy",
        "height": 0.3,
        "weight": 0.8,
        "species": "Weather Pokémon",
        "types": [
            "ice"
        ],
        "description": "Its form changes on its own, due to its cells’\nsensitive reactions to temperature and humidity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10015.png"
    },
    {
        "id": 352,
        "name": "kecleon",
        "height": 1,
        "weight": 22,
        "species": "Color Swap Pokémon",
        "types": [
            "normal"
        ],
        "description": "Kecleon alters its body coloration to blend in with its\nsurroundings, allowing it to sneak up on its prey unnoticed.\nThen it lashes out with its long, stretchy tongue to instantly\nensnare the unsuspecting target.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png"
    },
    {
        "id": 353,
        "name": "shuppet",
        "height": 0.6,
        "weight": 2.3,
        "species": "Puppet Pokémon",
        "types": [
            "ghost"
        ],
        "description": "Shuppet grows by feeding on dark emotions, such as\nvengefulness and envy, in the hearts of people. It roams\nthrough cities in search of grudges that taint people.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png"
    },
    {
        "id": 354,
        "name": "banette",
        "height": 1.1,
        "weight": 12.5,
        "species": "Marionette Pokémon",
        "types": [
            "ghost"
        ],
        "description": "A cursed energy permeated the stuffing of a discarded and\nforgotten plush doll, giving it new life as Banette.\nThe Pokémon’s energy would escape if it were to ever open\nits mouth.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png"
    },
    {
        "id": 354,
        "name": "banette-mega",
        "height": 1.2,
        "weight": 13,
        "species": "Marionette Pokémon",
        "types": [
            "ghost"
        ],
        "description": "A cursed energy permeated the stuffing of a discarded and\nforgotten plush doll, giving it new life as Banette.\nThe Pokémon’s energy would escape if it were to ever open\nits mouth.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10056.png"
    },
    {
        "id": 355,
        "name": "duskull",
        "height": 0.8,
        "weight": 15,
        "species": "Requiem Pokémon",
        "types": [
            "ghost"
        ],
        "description": "Duskull wanders lost among the deep darkness of midnight.\nThere is an oft-told admonishment given to misbehaving\nchildren that this Pokémon will spirit away bad children who\nearn scoldings from their mothers.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png"
    },
    {
        "id": 356,
        "name": "dusclops",
        "height": 1.6,
        "weight": 30.6,
        "species": "Beckon Pokémon",
        "types": [
            "ghost"
        ],
        "description": "Dusclops absorbs anything, however large the object may be.\nThis Pokémon hypnotizes its foe by waving its hands in a\nmacabre manner and by bringing its single eye to bear.\nThe hypnotized foe is made to do Dusclops’s bidding.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png"
    },
    {
        "id": 357,
        "name": "tropius",
        "height": 2,
        "weight": 100,
        "species": "Fruit Pokémon",
        "types": [
            "flying",
            "grass"
        ],
        "description": "Children of the southern tropics eat as snacks the fruit that\ngrows in bunches around the neck of Tropius. This Pokémon\nflies by flapping the leaves on its back as if they were wings.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png"
    },
    {
        "id": 358,
        "name": "chimecho",
        "height": 0.6,
        "weight": 1,
        "species": "Wind Chime Pokémon",
        "types": [
            "psychic"
        ],
        "description": "In high winds, Chimecho cries as it hangs from a tree branch or\nthe eaves of a building using a suction cup on its head. This\nPokémon plucks berries with its long tail and eats them.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png"
    },
    {
        "id": 359,
        "name": "absol",
        "height": 1.2,
        "weight": 47,
        "species": "Disaster Pokémon",
        "types": [
            "dark"
        ],
        "description": "Although it’s said to bring disaster, in actuality,\nthis Pokémon possesses a calm disposition and\nwarns people of any crises that loom.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png"
    },
    {
        "id": 359,
        "name": "absol-mega",
        "height": 1.2,
        "weight": 49,
        "species": "Disaster Pokémon",
        "types": [
            "dark"
        ],
        "description": "Although it’s said to bring disaster, in actuality,\nthis Pokémon possesses a calm disposition and\nwarns people of any crises that loom.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10057.png"
    },
    {
        "id": 360,
        "name": "wynaut",
        "height": 0.6,
        "weight": 14,
        "species": "Bright Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Wynaut gather on moonlit nights to play by squeezing up\nagainst each other. By being squeezed, this Pokémon gains\nendurance and is trained to dole out powerful counterattacks.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png"
    },
    {
        "id": 361,
        "name": "snorunt",
        "height": 0.7,
        "weight": 16.8,
        "species": "Snow Hat Pokémon",
        "types": [
            "ice"
        ],
        "description": "It can only survive in cold areas. It bounces\nhappily around, even in environments as cold as\n-150 degrees Fahrenheit.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png"
    },
    {
        "id": 362,
        "name": "glalie",
        "height": 1.5,
        "weight": 256.5,
        "species": "Face Pokémon",
        "types": [
            "ice"
        ],
        "description": "Its prey is instantaneously frozen stiff by the\ncold air it exhales from its huge mouth. While\nthey’re in that frozen state, it gobbles them up.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png"
    },
    {
        "id": 362,
        "name": "glalie-mega",
        "height": 2.1,
        "weight": 350.2,
        "species": "Face Pokémon",
        "types": [
            "ice"
        ],
        "description": "Its prey is instantaneously frozen stiff by the\ncold air it exhales from its huge mouth. While\nthey’re in that frozen state, it gobbles them up.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10074.png"
    },
    {
        "id": 363,
        "name": "spheal",
        "height": 0.8,
        "weight": 39.5,
        "species": "Clap Pokémon",
        "types": [
            "water",
            "ice"
        ],
        "description": "Spheal always travels by rolling around on its ball-like body.\nWhen the season for ice floes arrives, this Pokémon can be\nseen rolling about on ice and crossing the sea.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png"
    },
    {
        "id": 364,
        "name": "sealeo",
        "height": 1.1,
        "weight": 87.6,
        "species": "Ball Roll Pokémon",
        "types": [
            "water",
            "ice"
        ],
        "description": "Sealeo often balances and rolls things on the tip of its\nnose. While the Pokémon is rolling something, it checks\nthe object’s aroma and texture to determine whether it likes\nthe object or not.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png"
    },
    {
        "id": 365,
        "name": "walrein",
        "height": 1.4,
        "weight": 150.6,
        "species": "Ice Break Pokémon",
        "types": [
            "water",
            "ice"
        ],
        "description": "Walrein swims all over in frigid seawater while crushing\nicebergs with its grand, imposing tusks. Its thick layer of\nblubber makes enemy attacks bounce off harmlessly.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png"
    },
    {
        "id": 366,
        "name": "clamperl",
        "height": 0.4,
        "weight": 52.5,
        "species": "Bivalve Pokémon",
        "types": [
            "water"
        ],
        "description": "Clamperl grows while being protected by its rock-hard shell.\nWhen its body becomes too large to fit inside the shell, it is\nsure evidence that this Pokémon is getting close to evolution.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png"
    },
    {
        "id": 367,
        "name": "huntail",
        "height": 1.7,
        "weight": 27,
        "species": "Deep Sea Pokémon",
        "types": [
            "water"
        ],
        "description": "Huntail’s tail is shaped like a fish. It uses the tail to attract\nprey, then swallows the prey whole with its large, gaping\nmouth. This Pokémon swims by wiggling its slender body\nlike a snake.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png"
    },
    {
        "id": 368,
        "name": "gorebyss",
        "height": 1.8,
        "weight": 22.6,
        "species": "South Sea Pokémon",
        "types": [
            "water"
        ],
        "description": "Although Gorebyss is the very picture of elegance and beauty\nwhile swimming, it is also cruel. When it spots prey, this\nPokémon inserts its thin mouth into the prey’s body and drains\nthe prey of its body fluids.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png"
    },
    {
        "id": 369,
        "name": "relicanth",
        "height": 1,
        "weight": 23.4,
        "species": "Longevity Pokémon",
        "types": [
            "rock",
            "water"
        ],
        "description": "It was fortuitously discovered during a deep sea\nexpedition. Its teeth have atrophied, so it now\nsurvives on microscopic organisms it sucks up.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png"
    },
    {
        "id": 370,
        "name": "luvdisc",
        "height": 0.6,
        "weight": 8.7,
        "species": "Rendezvous Pokémon",
        "types": [
            "water"
        ],
        "description": "Loving couples have a soft spot for this\nPokémon, so honeymoon hotels often release\nthis Pokémon into their pools.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png"
    },
    {
        "id": 371,
        "name": "bagon",
        "height": 0.6,
        "weight": 42.1,
        "species": "Rock Head Pokémon",
        "types": [
            "dragon"
        ],
        "description": "With its steel-hard stone head, it headbutts\nindiscriminately. This is because of the stress\nit feels at being unable to fly.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png"
    },
    {
        "id": 372,
        "name": "shelgon",
        "height": 1.1,
        "weight": 110.5,
        "species": "Endurance Pokémon",
        "types": [
            "dragon"
        ],
        "description": "They lurk deep within caves—motionless,\nneither eating nor drinking. Why they don’t die is\nnot known.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png"
    },
    {
        "id": 373,
        "name": "salamence",
        "height": 1.5,
        "weight": 102.6,
        "species": "Dragon Pokémon",
        "types": [
            "flying",
            "dragon"
        ],
        "description": "It flies around on its wings, which have grown in\nat last. In its happiness, it gushes hot flames,\nburning up the fields it passes over.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png"
    },
    {
        "id": 373,
        "name": "salamence-mega",
        "height": 1.8,
        "weight": 112.6,
        "species": "Dragon Pokémon",
        "types": [
            "flying",
            "dragon"
        ],
        "description": "It flies around on its wings, which have grown in\nat last. In its happiness, it gushes hot flames,\nburning up the fields it passes over.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10089.png"
    },
    {
        "id": 374,
        "name": "beldum",
        "height": 0.6,
        "weight": 95.2,
        "species": "Iron Ball Pokémon",
        "types": [
            "psychic",
            "steel"
        ],
        "description": "With magnetic traction, it pulls its opponents in\nclose. When they’re in range, it slashes them\nwith its rear claws.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png"
    },
    {
        "id": 375,
        "name": "metang",
        "height": 1.2,
        "weight": 202.5,
        "species": "Iron Claw Pokémon",
        "types": [
            "psychic",
            "steel"
        ],
        "description": "It adores magnetic minerals, so it pursues\nNosepass at speeds exceeding 60 mph.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png"
    },
    {
        "id": 376,
        "name": "metagross",
        "height": 1.6,
        "weight": 550,
        "species": "Iron Leg Pokémon",
        "types": [
            "psychic",
            "steel"
        ],
        "description": "A linkage of two Metang, this Pokémon can\nperform any calculation in a flash by utilizing\nparallel processing in its four brains.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png"
    },
    {
        "id": 376,
        "name": "metagross-mega",
        "height": 2.5,
        "weight": 942.9,
        "species": "Iron Leg Pokémon",
        "types": [
            "psychic",
            "steel"
        ],
        "description": "A linkage of two Metang, this Pokémon can\nperform any calculation in a flash by utilizing\nparallel processing in its four brains.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png"
    },
    {
        "id": 377,
        "name": "regirock",
        "height": 1.7,
        "weight": 230,
        "species": "Rock Peak Pokémon",
        "types": [
            "rock"
        ],
        "description": "Regirock’s body is composed entirely of rocks. Recently,\na study made the startling discovery that the rocks were all\nunearthed from different locations.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png"
    },
    {
        "id": 378,
        "name": "regice",
        "height": 1.8,
        "weight": 175,
        "species": "Iceberg Pokémon",
        "types": [
            "ice"
        ],
        "description": "Regice cloaks itself with frigid air of -328 degrees Fahrenheit.\nThings will freeze solid just by going near this Pokémon.\nIts icy body is so cold, it will not melt even if it is immersed\nin magma.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png"
    },
    {
        "id": 379,
        "name": "registeel",
        "height": 1.9,
        "weight": 205,
        "species": "Iron Pokémon",
        "types": [
            "steel"
        ],
        "description": "Registeel was imprisoned by people in ancient times.\nThe metal composing its body is thought to be a curious\nsubstance that is not of this earth.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png"
    },
    {
        "id": 380,
        "name": "latias",
        "height": 1.4,
        "weight": 40,
        "species": "Eon Pokémon",
        "types": [
            "psychic",
            "dragon"
        ],
        "description": "Latias is highly intelligent and capable of understanding\nhuman speech. It is covered with a glass-like down.\nThe Pokémon enfolds its body with its down and refracts\nlight to alter its appearance.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png"
    },
    {
        "id": 380,
        "name": "latias-mega",
        "height": 1.8,
        "weight": 52,
        "species": "Eon Pokémon",
        "types": [
            "psychic",
            "dragon"
        ],
        "description": "Latias is highly intelligent and capable of understanding\nhuman speech. It is covered with a glass-like down.\nThe Pokémon enfolds its body with its down and refracts\nlight to alter its appearance.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10062.png"
    },
    {
        "id": 381,
        "name": "latios",
        "height": 2,
        "weight": 60,
        "species": "Eon Pokémon",
        "types": [
            "psychic",
            "dragon"
        ],
        "description": "Latios will only open its heart to a Trainer with a\ncompassionate spirit. This Pokémon can fly faster than a\njet plane by folding its forelegs to minimize air resistance.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png"
    },
    {
        "id": 381,
        "name": "latios-mega",
        "height": 2.3,
        "weight": 70,
        "species": "Eon Pokémon",
        "types": [
            "psychic",
            "dragon"
        ],
        "description": "Latios will only open its heart to a Trainer with a\ncompassionate spirit. This Pokémon can fly faster than a\njet plane by folding its forelegs to minimize air resistance.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10063.png"
    },
    {
        "id": 382,
        "name": "kyogre",
        "height": 4.5,
        "weight": 352,
        "species": "Sea Basin Pokémon",
        "types": [
            "water"
        ],
        "description": "Kyogre is said to be the personification of the sea itself.\nLegends tell of its many clashes against Groudon,\nas each sought to gain the power of nature.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png"
    },
    {
        "id": 382,
        "name": "kyogre-primal",
        "height": 9.8,
        "weight": 430,
        "species": "Sea Basin Pokémon",
        "types": [
            "water"
        ],
        "description": "Kyogre is said to be the personification of the sea itself.\nLegends tell of its many clashes against Groudon,\nas each sought to gain the power of nature.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10077.png"
    },
    {
        "id": 383,
        "name": "groudon",
        "height": 3.5,
        "weight": 950,
        "species": "Continent Pokémon",
        "types": [
            "ground"
        ],
        "description": "Through Primal Reversion and with nature’s full power,\nit will take back its true form. It can cause magma to\nerupt and expand the landmass of the world.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png"
    },
    {
        "id": 383,
        "name": "groudon-primal",
        "height": 5,
        "weight": 999.7,
        "species": "Continent Pokémon",
        "types": [
            "fire",
            "ground"
        ],
        "description": "Through Primal Reversion and with nature’s full power,\nit will take back its true form. It can cause magma to\nerupt and expand the landmass of the world.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10078.png"
    },
    {
        "id": 384,
        "name": "rayquaza",
        "height": 7,
        "weight": 206.5,
        "species": "Sky High Pokémon",
        "types": [
            "flying",
            "dragon"
        ],
        "description": "It flies forever through the ozone layer, consuming\nmeteoroids for sustenance. The many meteoroids\nin its body provide the energy it needs to Mega Evolve.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png"
    },
    {
        "id": 384,
        "name": "rayquaza-mega",
        "height": 10.8,
        "weight": 392,
        "species": "Sky High Pokémon",
        "types": [
            "flying",
            "dragon"
        ],
        "description": "It flies forever through the ozone layer, consuming\nmeteoroids for sustenance. The many meteoroids\nin its body provide the energy it needs to Mega Evolve.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10079.png"
    },
    {
        "id": 385,
        "name": "jirachi",
        "height": 0.3,
        "weight": 1.1,
        "species": "Wish Pokémon",
        "types": [
            "psychic",
            "steel"
        ],
        "description": "Jirachi will awaken from its sleep of a thousand years if you\nsing to it in a voice of purity. It is said to make true any wish\nthat people desire.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png"
    },
    {
        "id": 386,
        "name": "deoxys-normal",
        "height": 1.7,
        "weight": 60.8,
        "species": "DNA Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Deoxys emerged from a virus that came from space. It is highly\nintelligent and wields psychokinetic powers. This Pokémon\nshoots lasers from the crystalline organ on its chest.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png"
    },
    {
        "id": 386,
        "name": "deoxys-attack",
        "height": 1.7,
        "weight": 60.8,
        "species": "DNA Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Deoxys emerged from a virus that came from space. It is highly\nintelligent and wields psychokinetic powers. This Pokémon\nshoots lasers from the crystalline organ on its chest.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10001.png"
    },
    {
        "id": 386,
        "name": "deoxys-defense",
        "height": 1.7,
        "weight": 60.8,
        "species": "DNA Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Deoxys emerged from a virus that came from space. It is highly\nintelligent and wields psychokinetic powers. This Pokémon\nshoots lasers from the crystalline organ on its chest.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10002.png"
    },
    {
        "id": 386,
        "name": "deoxys-speed",
        "height": 1.7,
        "weight": 60.8,
        "species": "DNA Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Deoxys emerged from a virus that came from space. It is highly\nintelligent and wields psychokinetic powers. This Pokémon\nshoots lasers from the crystalline organ on its chest.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10003.png"
    },
    {
        "id": 387,
        "name": "turtwig",
        "height": 0.4,
        "weight": 10.2,
        "species": "Tiny Leaf Pokémon",
        "types": [
            "grass"
        ],
        "description": "It undertakes photosynthesis with its body, making\noxygen. The leaf on its head wilts if it is thirsty.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png"
    },
    {
        "id": 388,
        "name": "grotle",
        "height": 1.1,
        "weight": 97,
        "species": "Grove Pokémon",
        "types": [
            "grass"
        ],
        "description": "It knows where pure water wells up. It carries fellow\nPokémon there on its back.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png"
    },
    {
        "id": 389,
        "name": "torterra",
        "height": 2.2,
        "weight": 310,
        "species": "Continent Pokémon",
        "types": [
            "ground",
            "grass"
        ],
        "description": "Small Pokémon occasionally gather on its unmoving\nback to begin building their nests.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png"
    },
    {
        "id": 390,
        "name": "chimchar",
        "height": 0.5,
        "weight": 6.2,
        "species": "Chimp Pokémon",
        "types": [
            "fire"
        ],
        "description": "The gas made in its belly burns from its rear end.\nThe fire burns weakly when it feels sick.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png"
    },
    {
        "id": 391,
        "name": "monferno",
        "height": 0.9,
        "weight": 22,
        "species": "Playful Pokémon",
        "types": [
            "fighting",
            "fire"
        ],
        "description": "It uses ceilings and walls to launch aerial attacks.\nIts fiery tail is but one weapon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png"
    },
    {
        "id": 392,
        "name": "infernape",
        "height": 1.2,
        "weight": 55,
        "species": "Flame Pokémon",
        "types": [
            "fighting",
            "fire"
        ],
        "description": "It tosses its enemies around with agility. It uses all\nits limbs to fight in its own unique style.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png"
    },
    {
        "id": 393,
        "name": "piplup",
        "height": 0.4,
        "weight": 5.2,
        "species": "Penguin Pokémon",
        "types": [
            "water"
        ],
        "description": "Because it is very proud, it hates accepting food\nfrom people. Its thick down guards it from cold.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png"
    },
    {
        "id": 394,
        "name": "prinplup",
        "height": 0.8,
        "weight": 23,
        "species": "Penguin Pokémon",
        "types": [
            "water"
        ],
        "description": "It lives a solitary life. Its wings deliver wicked blows\nthat can snap even the thickest of trees.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png"
    },
    {
        "id": 395,
        "name": "empoleon",
        "height": 1.7,
        "weight": 84.5,
        "species": "Emperor Pokémon",
        "types": [
            "steel",
            "water"
        ],
        "description": "The three horns that extend from its beak attest to\nits power. The leader has the biggest horns.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png"
    },
    {
        "id": 396,
        "name": "starly",
        "height": 0.3,
        "weight": 2,
        "species": "Starling Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "They flock around mountains and fields, chasing\nafter bug Pokémon. Their singing is noisy\nand annoying.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png"
    },
    {
        "id": 397,
        "name": "staravia",
        "height": 0.6,
        "weight": 15.5,
        "species": "Starling Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "It lives in forests and fields. Squabbles over\nterritory occur when flocks collide.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png"
    },
    {
        "id": 398,
        "name": "staraptor",
        "height": 1.2,
        "weight": 24.9,
        "species": "Predator Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "When Staravia evolve into Staraptor, they leave the\nflock to live alone. They have sturdy wings.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png"
    },
    {
        "id": 399,
        "name": "bidoof",
        "height": 0.5,
        "weight": 20,
        "species": "Plump Mouse Pokémon",
        "types": [
            "normal"
        ],
        "description": "It constantly gnaws on logs and rocks to whittle\ndown its front teeth. It nests alongside water.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png"
    },
    {
        "id": 400,
        "name": "bibarel",
        "height": 1,
        "weight": 31.5,
        "species": "Beaver Pokémon",
        "types": [
            "water",
            "normal"
        ],
        "description": "It makes its nest by damming streams with bark and\nmud. It is known as an industrious worker.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png"
    },
    {
        "id": 401,
        "name": "kricketot",
        "height": 0.3,
        "weight": 2.2,
        "species": "Cricket Pokémon",
        "types": [
            "bug"
        ],
        "description": "When its antennae hit each other, it sounds like the\nmusic of a xylophone.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png"
    },
    {
        "id": 402,
        "name": "kricketune",
        "height": 1,
        "weight": 25.5,
        "species": "Cricket Pokémon",
        "types": [
            "bug"
        ],
        "description": "It signals its emotions with its melodies. Scientists\nare studying these melodic patterns.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png"
    },
    {
        "id": 403,
        "name": "shinx",
        "height": 0.5,
        "weight": 9.5,
        "species": "Flash Pokémon",
        "types": [
            "electric"
        ],
        "description": "All of its fur dazzles if danger is sensed. It flees\nwhile the foe is momentarily blinded.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png"
    },
    {
        "id": 404,
        "name": "luxio",
        "height": 0.9,
        "weight": 30.5,
        "species": "Spark Pokémon",
        "types": [
            "electric"
        ],
        "description": "Strong electricity courses through the tips of its\nsharp claws. A light scratch causes fainting in foes.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png"
    },
    {
        "id": 405,
        "name": "luxray",
        "height": 1.4,
        "weight": 42,
        "species": "Gleam Eyes Pokémon",
        "types": [
            "electric"
        ],
        "description": "Luxray’s ability to see through objects comes in\nhandy when it’s scouting for danger.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png"
    },
    {
        "id": 406,
        "name": "budew",
        "height": 0.2,
        "weight": 1.2,
        "species": "Bud Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "Over the winter, it closes its bud and endures the\ncold. In spring, the bud opens and releases pollen.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png"
    },
    {
        "id": 407,
        "name": "roserade",
        "height": 0.9,
        "weight": 14.5,
        "species": "Bouquet Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "With the movements of a dancer, it strikes with\nwhips that are densely lined with poison thorns.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png"
    },
    {
        "id": 408,
        "name": "cranidos",
        "height": 0.9,
        "weight": 31.5,
        "species": "Head Butt Pokémon",
        "types": [
            "rock"
        ],
        "description": "In rock layers where Cranidos fossils are found,\nthe fossilized trunks of trees snapped in two\nare also often found.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png"
    },
    {
        "id": 409,
        "name": "rampardos",
        "height": 1.6,
        "weight": 102.5,
        "species": "Head Butt Pokémon",
        "types": [
            "rock"
        ],
        "description": "Records exist of a revived fossil that evolved\ninto Rampardos. It proceeded to escape and\nthen destroy a skyscraper with a headbutt.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png"
    },
    {
        "id": 410,
        "name": "shieldon",
        "height": 0.5,
        "weight": 57,
        "species": "Shield Pokémon",
        "types": [
            "steel",
            "rock"
        ],
        "description": "This Pokémon lived in primeval jungles. Few\nenemies would have been willing to square off\nagainst its heavily armored face, so it’s thought.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png"
    },
    {
        "id": 411,
        "name": "bastiodon",
        "height": 1.3,
        "weight": 149.5,
        "species": "Shield Pokémon",
        "types": [
            "steel",
            "rock"
        ],
        "description": "It lived in the same environments as Rampardos.\nTheir fossils have been found together—\nseemingly from after they’d fought to the finish.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png"
    },
    {
        "id": 412,
        "name": "burmy",
        "height": 0.2,
        "weight": 3.4,
        "species": "Bagworm Pokémon",
        "types": [
            "bug"
        ],
        "description": "If its cloak is broken in battle, it quickly remakes\nthe cloak with materials nearby.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png"
    },
    {
        "id": 413,
        "name": "wormadam-plant",
        "height": 0.5,
        "weight": 6.5,
        "species": "Bagworm Pokémon",
        "types": [
            "grass",
            "bug"
        ],
        "description": "When Burmy evolved, its cloak became a part of\nthis Pokémon’s body. The cloak is never shed.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png"
    },
    {
        "id": 413,
        "name": "wormadam-trash",
        "height": 0.5,
        "weight": 6.5,
        "species": "Bagworm Pokémon",
        "types": [
            "steel",
            "bug"
        ],
        "description": "When Burmy evolved, its cloak became a part of\nthis Pokémon’s body. The cloak is never shed.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10005.png"
    },
    {
        "id": 413,
        "name": "wormadam-sandy",
        "height": 0.5,
        "weight": 6.5,
        "species": "Bagworm Pokémon",
        "types": [
            "ground",
            "bug"
        ],
        "description": "When Burmy evolved, its cloak became a part of\nthis Pokémon’s body. The cloak is never shed.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10004.png"
    },
    {
        "id": 414,
        "name": "mothim",
        "height": 0.9,
        "weight": 23.3,
        "species": "Moth Pokémon",
        "types": [
            "flying",
            "bug"
        ],
        "description": "It flutters around at night and steals honey from\nthe Combee hive.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png"
    },
    {
        "id": 415,
        "name": "combee",
        "height": 0.3,
        "weight": 5.5,
        "species": "Tiny Bee Pokémon",
        "types": [
            "flying",
            "bug"
        ],
        "description": "It collects and delivers honey to its colony.\nAt night, they cluster to form a beehive and sleep.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png"
    },
    {
        "id": 416,
        "name": "vespiquen",
        "height": 1.2,
        "weight": 38.5,
        "species": "Beehive Pokémon",
        "types": [
            "flying",
            "bug"
        ],
        "description": "Its abdomen is a honeycomb for grubs. It raises its\ngrubs on honey collected by Combee.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png"
    },
    {
        "id": 417,
        "name": "pachirisu",
        "height": 0.4,
        "weight": 3.9,
        "species": "EleSquirrel Pokémon",
        "types": [
            "electric"
        ],
        "description": "A pair may be seen rubbing their cheek pouches\ntogether in an effort to share stored electricity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png"
    },
    {
        "id": 418,
        "name": "buizel",
        "height": 0.7,
        "weight": 29.5,
        "species": "Sea Weasel Pokémon",
        "types": [
            "water"
        ],
        "description": "It inflates the flotation sac around its neck and\npokes its head out of the water to see what is\ngoing on.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png"
    },
    {
        "id": 419,
        "name": "floatzel",
        "height": 1.1,
        "weight": 33.5,
        "species": "Sea Weasel Pokémon",
        "types": [
            "water"
        ],
        "description": "Its flotation sac developed as a result of pursuing\naquatic prey. It can double as a rubber raft.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png"
    },
    {
        "id": 420,
        "name": "cherubi",
        "height": 0.4,
        "weight": 3.3,
        "species": "Cherry Pokémon",
        "types": [
            "grass"
        ],
        "description": "It evolves by sucking the energy out of the small\nball where it had been storing nutrients.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png"
    },
    {
        "id": 421,
        "name": "cherrim",
        "height": 0.5,
        "weight": 9.3,
        "species": "Blossom Pokémon",
        "types": [
            "grass"
        ],
        "description": "If it senses strong sunlight, it opens its folded\npetals to absorb the sun’s rays with its whole body.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png"
    },
    {
        "id": 422,
        "name": "shellos",
        "height": 0.3,
        "weight": 6.3,
        "species": "Sea Slug Pokémon",
        "types": [
            "water"
        ],
        "description": "Purple mucus sticks to the hands of anyone\nwho touches it. Take care, as the substance is\ntroublesome to wash off. ",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png"
    },
    {
        "id": 423,
        "name": "gastrodon",
        "height": 0.9,
        "weight": 29.9,
        "species": "Sea Slug Pokémon",
        "types": [
            "ground",
            "water"
        ],
        "description": "Plankton, invisible to the naked eye, is its main\nfood source. It comes onto the land periodically,\nbut the reason for this is not known.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png"
    },
    {
        "id": 424,
        "name": "ambipom",
        "height": 1.2,
        "weight": 20.3,
        "species": "Long Tail Pokémon",
        "types": [
            "normal"
        ],
        "description": "To eat, it deftly shucks nuts with its two tails.\nIt rarely uses its arms now.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png"
    },
    {
        "id": 425,
        "name": "drifloon",
        "height": 0.4,
        "weight": 1.2,
        "species": "Balloon Pokémon",
        "types": [
            "flying",
            "ghost"
        ],
        "description": "If for some reason its body bursts, its soul spills\nout with a screaming sound.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png"
    },
    {
        "id": 426,
        "name": "drifblim",
        "height": 1.2,
        "weight": 15,
        "species": "Blimp Pokémon",
        "types": [
            "flying",
            "ghost"
        ],
        "description": "Even while under careful observation, large\nflocks of Drifblim flying at dusk will inexplicably\ndisappear from view.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png"
    },
    {
        "id": 427,
        "name": "buneary",
        "height": 0.4,
        "weight": 5.5,
        "species": "Rabbit Pokémon",
        "types": [
            "normal"
        ],
        "description": "When it senses danger, it perks up its ears.\nOn cold nights, it sleeps with its head tucked into\nits fur.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png"
    },
    {
        "id": 428,
        "name": "lopunny",
        "height": 1.2,
        "weight": 33.3,
        "species": "Rabbit Pokémon",
        "types": [
            "normal"
        ],
        "description": "The ears appear to be delicate. If they are touched\nroughly, it kicks with its graceful legs.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png"
    },
    {
        "id": 428,
        "name": "lopunny-mega",
        "height": 1.3,
        "weight": 28.3,
        "species": "Rabbit Pokémon",
        "types": [
            "fighting",
            "normal"
        ],
        "description": "The ears appear to be delicate. If they are touched\nroughly, it kicks with its graceful legs.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10088.png"
    },
    {
        "id": 429,
        "name": "mismagius",
        "height": 0.9,
        "weight": 4.4,
        "species": "Magical Pokémon",
        "types": [
            "ghost"
        ],
        "description": "Mismagius have been known to cast spells to\nmake people fall in love, so some people search\nfor this Pokémon as if their life depended on it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png"
    },
    {
        "id": 430,
        "name": "honchkrow",
        "height": 0.9,
        "weight": 27.3,
        "species": "Big Boss Pokémon",
        "types": [
            "flying",
            "dark"
        ],
        "description": "If its Murkrow cronies fail to catch food for it,\nor if it feels they have betrayed it, it will hunt\nthem down wherever they are and punish them.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png"
    },
    {
        "id": 431,
        "name": "glameow",
        "height": 0.5,
        "weight": 3.9,
        "species": "Catty Pokémon",
        "types": [
            "normal"
        ],
        "description": "When it’s happy, Glameow demonstrates beautiful\nmovements of its tail, like a dancing ribbon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png"
    },
    {
        "id": 432,
        "name": "purugly",
        "height": 1,
        "weight": 43.8,
        "species": "Tiger Cat Pokémon",
        "types": [
            "normal"
        ],
        "description": "To make itself appear intimidatingly beefy, it tightly\ncinches its waist with its twin tails.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png"
    },
    {
        "id": 433,
        "name": "chingling",
        "height": 0.2,
        "weight": 0.6,
        "species": "Bell Pokémon",
        "types": [
            "psychic"
        ],
        "description": "There is an orb inside its mouth. When it hops,\nthe orb bounces all over and makes a\nringing sound.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png"
    },
    {
        "id": 434,
        "name": "stunky",
        "height": 0.4,
        "weight": 19.2,
        "species": "Skunk Pokémon",
        "types": [
            "dark",
            "poison"
        ],
        "description": "It protects itself by spraying a noxious fluid from its\nrear. The stench lingers for 24 hours.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png"
    },
    {
        "id": 435,
        "name": "skuntank",
        "height": 1,
        "weight": 38,
        "species": "Skunk Pokémon",
        "types": [
            "dark",
            "poison"
        ],
        "description": "It sprays a stinky fluid from its tail. The fluid smells\nworse the longer it is allowed to fester.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png"
    },
    {
        "id": 436,
        "name": "bronzor",
        "height": 0.5,
        "weight": 60.5,
        "species": "Bronze Pokémon",
        "types": [
            "psychic",
            "steel"
        ],
        "description": "Implements shaped like it were discovered in\nancient tombs. It is unknown if they are related.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png"
    },
    {
        "id": 437,
        "name": "bronzong",
        "height": 1.3,
        "weight": 187,
        "species": "Bronze Bell Pokémon",
        "types": [
            "psychic",
            "steel"
        ],
        "description": "Ancient people believed that petitioning Bronzong\nfor rain was the way to make crops grow.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png"
    },
    {
        "id": 438,
        "name": "bonsly",
        "height": 0.5,
        "weight": 15,
        "species": "Bonsai Pokémon",
        "types": [
            "rock"
        ],
        "description": "From its eyes, it can expel excess moisture from\nits body. This liquid is similar in composition to\nhuman sweat.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png"
    },
    {
        "id": 439,
        "name": "mime-jr",
        "height": 0.6,
        "weight": 13,
        "species": "Mime Pokémon",
        "types": [
            "fairy",
            "psychic"
        ],
        "description": "It habitually mimics foes. Once mimicked, the foe\ncannot take its eyes off this Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png"
    },
    {
        "id": 440,
        "name": "happiny",
        "height": 0.6,
        "weight": 24.4,
        "species": "Playhouse Pokémon",
        "types": [
            "normal"
        ],
        "description": "It’s too small to lay eggs yet. As a surrogate,\nit searches out round white stones.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png"
    },
    {
        "id": 441,
        "name": "chatot",
        "height": 0.5,
        "weight": 1.9,
        "species": "Music Note Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "It can learn and speak human words. If they gather,\nthey all learn the same saying.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png"
    },
    {
        "id": 442,
        "name": "spiritomb",
        "height": 1,
        "weight": 108,
        "species": "Forbidden Pokémon",
        "types": [
            "dark",
            "ghost"
        ],
        "description": "It was bound to a fissure in an odd keystone as\npunishment for misdeeds 500 years ago.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png"
    },
    {
        "id": 443,
        "name": "gible",
        "height": 0.7,
        "weight": 20.5,
        "species": "Land Shark Pokémon",
        "types": [
            "ground",
            "dragon"
        ],
        "description": "It skulks in caves, and when prey or an enemy\npasses by, it leaps out and chomps them. The\nforce of its attack sometimes chips its teeth.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png"
    },
    {
        "id": 444,
        "name": "gabite",
        "height": 1.4,
        "weight": 56,
        "species": "Cave Pokémon",
        "types": [
            "ground",
            "dragon"
        ],
        "description": "Shiny objects are its passion. It can be found in\nits cave, scarcely moving, its gaze fixed on the\njewels it’s amassed or Carbink it has caught.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png"
    },
    {
        "id": 445,
        "name": "garchomp",
        "height": 1.9,
        "weight": 95,
        "species": "Mach Pokémon",
        "types": [
            "ground",
            "dragon"
        ],
        "description": "The protuberances on its head serve as\nsensors. It can even detect distant prey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"
    },
    {
        "id": 445,
        "name": "garchomp-mega",
        "height": 1.9,
        "weight": 95,
        "species": "Mach Pokémon",
        "types": [
            "ground",
            "dragon"
        ],
        "description": "The protuberances on its head serve as\nsensors. It can even detect distant prey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10058.png"
    },
    {
        "id": 446,
        "name": "munchlax",
        "height": 0.6,
        "weight": 105,
        "species": "Big Eater Pokémon",
        "types": [
            "normal"
        ],
        "description": "When it finds something that looks like it might\nbe edible, it goes right ahead and swallows it\nwhole. That’s why it gets fatter day by day.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png"
    },
    {
        "id": 447,
        "name": "riolu",
        "height": 0.7,
        "weight": 20.2,
        "species": "Emanation Pokémon",
        "types": [
            "fighting"
        ],
        "description": "It’s tough enough to run right through the night,\nand it’s also a hard worker, but it’s still just\na youngster.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png"
    },
    {
        "id": 448,
        "name": "lucario",
        "height": 1.2,
        "weight": 54,
        "species": "Aura Pokémon",
        "types": [
            "steel",
            "fighting"
        ],
        "description": "They can detect the species of a living being—\nand its emotions—from over half a mile away.\nThey control auras and hunt their prey in packs.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png"
    },
    {
        "id": 448,
        "name": "lucario-mega",
        "height": 1.3,
        "weight": 57.5,
        "species": "Aura Pokémon",
        "types": [
            "steel",
            "fighting"
        ],
        "description": "They can detect the species of a living being—\nand its emotions—from over half a mile away.\nThey control auras and hunt their prey in packs.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10059.png"
    },
    {
        "id": 449,
        "name": "hippopotas",
        "height": 0.8,
        "weight": 49.5,
        "species": "Hippo Pokémon",
        "types": [
            "ground"
        ],
        "description": "It enshrouds itself with sand to protect itself from\ngerms. It does not enjoy getting wet.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png"
    },
    {
        "id": 450,
        "name": "hippowdon",
        "height": 2,
        "weight": 300,
        "species": "Heavyweight Pokémon",
        "types": [
            "ground"
        ],
        "description": "It blasts internally stored sand from ports on its\nbody to create a towering twister for attack.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png"
    },
    {
        "id": 451,
        "name": "skorupi",
        "height": 0.8,
        "weight": 12,
        "species": "Scorpion Pokémon",
        "types": [
            "bug",
            "poison"
        ],
        "description": "It burrows under the sand to lie in wait for prey.\nIts tail claws can inject its prey with a\nsavage poison.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png"
    },
    {
        "id": 452,
        "name": "drapion",
        "height": 1.3,
        "weight": 61.5,
        "species": "Ogre Scorpion Pokémon",
        "types": [
            "dark",
            "poison"
        ],
        "description": "It has the power in its clawed arms to make scrap\nof a car. The tips of its claws release poison.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png"
    },
    {
        "id": 453,
        "name": "croagunk",
        "height": 0.7,
        "weight": 23,
        "species": "Toxic Mouth Pokémon",
        "types": [
            "fighting",
            "poison"
        ],
        "description": "Inflating its poison sacs, it fills the area with an odd\nsound and hits flinching opponents with a\npoison jab.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png"
    },
    {
        "id": 454,
        "name": "toxicroak",
        "height": 1.3,
        "weight": 44.4,
        "species": "Toxic Mouth Pokémon",
        "types": [
            "fighting",
            "poison"
        ],
        "description": "Its knuckle claws secrete a toxin so vile that even a\nscratch could prove fatal.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png"
    },
    {
        "id": 455,
        "name": "carnivine",
        "height": 1.4,
        "weight": 27,
        "species": "Bug Catcher Pokémon",
        "types": [
            "grass"
        ],
        "description": "It binds itself to trees in marshes. It attracts prey\nwith its sweet-smelling drool and gulps them down.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png"
    },
    {
        "id": 456,
        "name": "finneon",
        "height": 0.4,
        "weight": 7,
        "species": "Wing Fish Pokémon",
        "types": [
            "water"
        ],
        "description": "Its double tail fins propel its energetic jumps.\nWhen it breaks the surface of the sea, Wingull\nswoop down to grab it on the fly.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png"
    },
    {
        "id": 457,
        "name": "lumineon",
        "height": 1.2,
        "weight": 24,
        "species": "Neon Pokémon",
        "types": [
            "water"
        ],
        "description": "This deep-sea Pokémon lives at the bottom of\nthe sea. Its fins haul it over the seabed in\nsearch of its favorite food—Starmie.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png"
    },
    {
        "id": 458,
        "name": "mantyke",
        "height": 1,
        "weight": 65,
        "species": "Kite Pokémon",
        "types": [
            "flying",
            "water"
        ],
        "description": "When it swims close to the surface of the ocean,\npeople aboard ships are able to observe the pattern\non its back.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png"
    },
    {
        "id": 459,
        "name": "snover",
        "height": 1,
        "weight": 50.5,
        "species": "Frost Tree Pokémon",
        "types": [
            "ice",
            "grass"
        ],
        "description": "In the spring, it grows berries with the texture of\nfrozen treats around its belly.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png"
    },
    {
        "id": 460,
        "name": "abomasnow",
        "height": 2.2,
        "weight": 135.5,
        "species": "Frost Tree Pokémon",
        "types": [
            "ice",
            "grass"
        ],
        "description": "It lives a quiet life on mountains that are perpetually\ncovered in snow. It hides itself by whipping\nup blizzards.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png"
    },
    {
        "id": 460,
        "name": "abomasnow-mega",
        "height": 2.7,
        "weight": 185,
        "species": "Frost Tree Pokémon",
        "types": [
            "ice",
            "grass"
        ],
        "description": "It lives a quiet life on mountains that are perpetually\ncovered in snow. It hides itself by whipping\nup blizzards.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10060.png"
    },
    {
        "id": 461,
        "name": "weavile",
        "height": 1.1,
        "weight": 34,
        "species": "Sharp Claw Pokémon",
        "types": [
            "ice",
            "dark"
        ],
        "description": "They dwell in cold places. This Pokémon’s main\nfood source in Alola is Vulpix and Sandshrew,\nwhich they carefully divide among their group.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png"
    },
    {
        "id": 462,
        "name": "magnezone",
        "height": 1.2,
        "weight": 180,
        "species": "Magnet Area Pokémon",
        "types": [
            "steel",
            "electric"
        ],
        "description": "As it zooms through the sky, this Pokémon\nseems to be receiving signals of unknown origin,\nwhile transmitting signals of unknown purpose.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png"
    },
    {
        "id": 463,
        "name": "lickilicky",
        "height": 1.7,
        "weight": 140,
        "species": "Licking Pokémon",
        "types": [
            "normal"
        ],
        "description": "Their saliva contains lots of components that can\ndissolve anything. The numbness caused by their\nlick does not dissipate.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png"
    },
    {
        "id": 464,
        "name": "rhyperior",
        "height": 2.4,
        "weight": 282.8,
        "species": "Drill Pokémon",
        "types": [
            "rock",
            "ground"
        ],
        "description": "It puts rocks in holes in its palms and uses its\nmuscles to shoot them. Geodude are shot at\nrare times.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png"
    },
    {
        "id": 465,
        "name": "tangrowth",
        "height": 2,
        "weight": 128.6,
        "species": "Vine Pokémon",
        "types": [
            "grass"
        ],
        "description": "Its vines grow so profusely that, in the warm\nseason, you can’t even see its eyes.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png"
    },
    {
        "id": 466,
        "name": "electivire",
        "height": 1.8,
        "weight": 138.6,
        "species": "Thunderbolt Pokémon",
        "types": [
            "electric"
        ],
        "description": "When it gets excited, it thumps its chest. With\nevery thud, thunder roars and electric sparks\nshower all around.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png"
    },
    {
        "id": 467,
        "name": "magmortar",
        "height": 1.6,
        "weight": 68,
        "species": "Blast Pokémon",
        "types": [
            "fire"
        ],
        "description": "From its arm, it launches fireballs hotter than\n3,500 degrees Fahrenheit. Its arm starts to\nmelt when it fires a whole barrage.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png"
    },
    {
        "id": 468,
        "name": "togekiss",
        "height": 1.5,
        "weight": 38,
        "species": "Jubilee Pokémon",
        "types": [
            "flying",
            "fairy"
        ],
        "description": "It shares many blessings with people who respect\none another’s rights and avoid needless strife.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png"
    },
    {
        "id": 469,
        "name": "yanmega",
        "height": 1.9,
        "weight": 51.5,
        "species": "Ogre Darner Pokémon",
        "types": [
            "flying",
            "bug"
        ],
        "description": "This six-legged Pokémon is easily capable of\ntransporting an adult in flight. The wings on its tail\nhelp it stay balanced.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png"
    },
    {
        "id": 470,
        "name": "leafeon",
        "height": 1,
        "weight": 25.5,
        "species": "Verdant Pokémon",
        "types": [
            "grass"
        ],
        "description": "The younger they are, the more they smell like\nfresh grass. With age, their fragrance takes on\nthe odor of fallen leaves.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png"
    },
    {
        "id": 471,
        "name": "glaceon",
        "height": 0.8,
        "weight": 25.9,
        "species": "Fresh Snow Pokémon",
        "types": [
            "ice"
        ],
        "description": "It freezes its fur into icicles, spiky and sharp,\nand tackles its prey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png"
    },
    {
        "id": 472,
        "name": "gliscor",
        "height": 2,
        "weight": 42.5,
        "species": "Fang Scorpion Pokémon",
        "types": [
            "flying",
            "ground"
        ],
        "description": "Its flight is soundless. It uses its lengthy tail to\ncarry off its prey... Then its elongated fangs do\nthe rest.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png"
    },
    {
        "id": 473,
        "name": "mamoswine",
        "height": 2.5,
        "weight": 291,
        "species": "Twin Tusk Pokémon",
        "types": [
            "ground",
            "ice"
        ],
        "description": "Its impressive tusks are made of ice. The population\nthinned when it turned warm after the ice age.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png"
    },
    {
        "id": 474,
        "name": "porygon-z",
        "height": 0.9,
        "weight": 34,
        "species": "Virtual Pokémon",
        "types": [
            "normal"
        ],
        "description": "Its program was modified to facilitate\nextra-dimensional activities, but that led to\nnoticeably strange behavior.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png"
    },
    {
        "id": 475,
        "name": "gallade",
        "height": 1.6,
        "weight": 52,
        "species": "Blade Pokémon",
        "types": [
            "fighting",
            "psychic"
        ],
        "description": "A master of courtesy and swordsmanship, it fights\nusing extending swords on its elbows.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png"
    },
    {
        "id": 475,
        "name": "gallade-mega",
        "height": 1.6,
        "weight": 56.4,
        "species": "Blade Pokémon",
        "types": [
            "fighting",
            "psychic"
        ],
        "description": "A master of courtesy and swordsmanship, it fights\nusing extending swords on its elbows.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10068.png"
    },
    {
        "id": 476,
        "name": "probopass",
        "height": 1.4,
        "weight": 340,
        "species": "Compass Pokémon",
        "types": [
            "steel",
            "rock"
        ],
        "description": "The main body controls three mobile units called\nMini-Noses, which it maneuvers to catch prey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png"
    },
    {
        "id": 477,
        "name": "dusknoir",
        "height": 2.2,
        "weight": 106.6,
        "species": "Gripper Pokémon",
        "types": [
            "ghost"
        ],
        "description": "The antenna on its head captures radio waves from\nthe world of spirits that command it to take\npeople there.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png"
    },
    {
        "id": 478,
        "name": "froslass",
        "height": 1.3,
        "weight": 26.6,
        "species": "Snow Land Pokémon",
        "types": [
            "ghost",
            "ice"
        ],
        "description": "The soul of a woman lost on a snowy mountain\npossessed an icicle, becoming this Pokémon.\nThe food it most relishes is the souls of men.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png"
    },
    {
        "id": 479,
        "name": "rotom",
        "height": 0.3,
        "weight": 0.3,
        "species": "Plasma Pokémon",
        "types": [
            "ghost",
            "electric"
        ],
        "description": "Its body is composed of plasma. It is known to\ninfiltrate electronic devices and wreak havoc.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png"
    },
    {
        "id": 479,
        "name": "rotom-heat",
        "height": 0.3,
        "weight": 0.3,
        "species": "Plasma Pokémon",
        "types": [
            "fire",
            "electric"
        ],
        "description": "Its body is composed of plasma. It is known to\ninfiltrate electronic devices and wreak havoc.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10008.png"
    },
    {
        "id": 479,
        "name": "rotom-frost",
        "height": 0.3,
        "weight": 0.3,
        "species": "Plasma Pokémon",
        "types": [
            "ice",
            "electric"
        ],
        "description": "Its body is composed of plasma. It is known to\ninfiltrate electronic devices and wreak havoc.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10010.png"
    },
    {
        "id": 479,
        "name": "rotom-wash",
        "height": 0.3,
        "weight": 0.3,
        "species": "Plasma Pokémon",
        "types": [
            "water",
            "electric"
        ],
        "description": "Its body is composed of plasma. It is known to\ninfiltrate electronic devices and wreak havoc.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10009.png"
    },
    {
        "id": 479,
        "name": "rotom-fan",
        "height": 0.3,
        "weight": 0.3,
        "species": "Plasma Pokémon",
        "types": [
            "flying",
            "electric"
        ],
        "description": "Its body is composed of plasma. It is known to\ninfiltrate electronic devices and wreak havoc.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10011.png"
    },
    {
        "id": 479,
        "name": "rotom-mow",
        "height": 0.3,
        "weight": 0.3,
        "species": "Plasma Pokémon",
        "types": [
            "grass",
            "electric"
        ],
        "description": "Its body is composed of plasma. It is known to\ninfiltrate electronic devices and wreak havoc.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10012.png"
    },
    {
        "id": 480,
        "name": "uxie",
        "height": 0.3,
        "weight": 0.3,
        "species": "Knowledge Pokémon",
        "types": [
            "psychic"
        ],
        "description": "It is said that its emergence gave humans the\nintelligence to improve their quality of life.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png"
    },
    {
        "id": 481,
        "name": "mesprit",
        "height": 0.3,
        "weight": 0.3,
        "species": "Emotion Pokémon",
        "types": [
            "psychic"
        ],
        "description": "It sleeps at the bottom of a lake. Its spirit is said to\nleave its body to fly on the lake’s surface.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png"
    },
    {
        "id": 482,
        "name": "azelf",
        "height": 0.3,
        "weight": 0.3,
        "species": "Willpower Pokémon",
        "types": [
            "psychic"
        ],
        "description": "It is thought that Uxie, Mesprit, and Azelf all came\nfrom the same egg.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png"
    },
    {
        "id": 483,
        "name": "dialga",
        "height": 5.4,
        "weight": 683,
        "species": "Temporal Pokémon",
        "types": [
            "dragon",
            "steel"
        ],
        "description": "It has the power to control time. It appears in\nSinnoh-region myths as an ancient deity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png"
    },
    {
        "id": 484,
        "name": "palkia",
        "height": 4.2,
        "weight": 336,
        "species": "Spatial Pokémon",
        "types": [
            "dragon",
            "water"
        ],
        "description": "It has the ability to distort space. It is described as\na deity in Sinnoh-region mythology.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png"
    },
    {
        "id": 485,
        "name": "heatran",
        "height": 1.7,
        "weight": 430,
        "species": "Lava Dome Pokémon",
        "types": [
            "steel",
            "fire"
        ],
        "description": "Boiling blood, like magma, circulates through its\nbody. It makes its dwelling place in volcanic caves.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png"
    },
    {
        "id": 486,
        "name": "regigigas",
        "height": 3.7,
        "weight": 420,
        "species": "Colossal Pokémon",
        "types": [
            "normal"
        ],
        "description": "There is an enduring legend that states this\nPokémon towed continents with ropes.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png"
    },
    {
        "id": 487,
        "name": "giratina-altered",
        "height": 4.5,
        "weight": 750,
        "species": "Renegade Pokémon",
        "types": [
            "dragon",
            "ghost"
        ],
        "description": "It was banished for its violence. It silently gazed\nupon the old world from the Distortion World.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png"
    },
    {
        "id": 487,
        "name": "giratina-origin",
        "height": 6.9,
        "weight": 650,
        "species": "Renegade Pokémon",
        "types": [
            "dragon",
            "ghost"
        ],
        "description": "It was banished for its violence. It silently gazed\nupon the old world from the Distortion World.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10007.png"
    },
    {
        "id": 488,
        "name": "cresselia",
        "height": 1.5,
        "weight": 85.6,
        "species": "Lunar Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Those who sleep holding Cresselia’s feather are\nassured of joyful dreams. It is said to represent\nthe crescent moon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png"
    },
    {
        "id": 489,
        "name": "phione",
        "height": 0.4,
        "weight": 3.1,
        "species": "Sea Drifter Pokémon",
        "types": [
            "water"
        ],
        "description": "It drifts in warm seas. It always returns to where it\nwas born, no matter how far it may have drifted.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png"
    },
    {
        "id": 490,
        "name": "manaphy",
        "height": 0.3,
        "weight": 1.4,
        "species": "Seafaring Pokémon",
        "types": [
            "water"
        ],
        "description": "It starts its life with a wondrous power that permits\nit to bond with any kind of Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png"
    },
    {
        "id": 491,
        "name": "darkrai",
        "height": 1.5,
        "weight": 50.5,
        "species": "Pitch-Black Pokémon",
        "types": [
            "dark"
        ],
        "description": "It can lull people to sleep and make them dream.\nIt is active during nights of the new moon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png"
    },
    {
        "id": 492,
        "name": "shaymin-land",
        "height": 0.2,
        "weight": 2.1,
        "species": "Gratitude Pokémon",
        "types": [
            "grass"
        ],
        "description": "The blooming of Gracidea flowers confers the\npower of flight upon it. Feelings of gratitude are\nthe message it delivers.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png"
    },
    {
        "id": 492,
        "name": "shaymin-sky",
        "height": 0.4,
        "weight": 5.2,
        "species": "Gratitude Pokémon",
        "types": [
            "flying",
            "grass"
        ],
        "description": "The blooming of Gracidea flowers confers the\npower of flight upon it. Feelings of gratitude are\nthe message it delivers.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10006.png"
    },
    {
        "id": 493,
        "name": "arceus",
        "height": 3.2,
        "weight": 320,
        "species": "Alpha Pokémon",
        "types": [
            "normal"
        ],
        "description": "It is told in mythology that this Pokémon was born\nbefore the universe even existed.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png"
    },
    {
        "id": 494,
        "name": "victini",
        "height": 0.4,
        "weight": 4,
        "species": "Victory Pokémon",
        "types": [
            "fire",
            "psychic"
        ],
        "description": "When it shares the infinite energy it creates,\nthat being’s entire body will be overflowing\nwith power.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png"
    },
    {
        "id": 495,
        "name": "snivy",
        "height": 0.6,
        "weight": 8.1,
        "species": "Grass Snake Pokémon",
        "types": [
            "grass"
        ],
        "description": "They photosynthesize by bathing their tails in\nsunlight. When they are not feeling well, their\ntails droop.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png"
    },
    {
        "id": 496,
        "name": "servine",
        "height": 0.8,
        "weight": 16,
        "species": "Grass Snake Pokémon",
        "types": [
            "grass"
        ],
        "description": "When it gets dirty, its leaves can’t be used in\nphotosynthesis, so it always keeps itself clean.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png"
    },
    {
        "id": 497,
        "name": "serperior",
        "height": 3.3,
        "weight": 63,
        "species": "Regal Pokémon",
        "types": [
            "grass"
        ],
        "description": "It can stop its opponents’ movements with just a\nglare. It takes in solar energy and boosts\nit internally.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png"
    },
    {
        "id": 498,
        "name": "tepig",
        "height": 0.5,
        "weight": 9.9,
        "species": "Fire Pig Pokémon",
        "types": [
            "fire"
        ],
        "description": "It loves to eat roasted berries, but sometimes it\ngets too excited and burns them to a crisp.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png"
    },
    {
        "id": 499,
        "name": "pignite",
        "height": 1,
        "weight": 55.5,
        "species": "Fire Pig Pokémon",
        "types": [
            "fighting",
            "fire"
        ],
        "description": "When its internal fire flares up, its movements grow\nsharper and faster. When in trouble, it emits smoke.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png"
    },
    {
        "id": 500,
        "name": "emboar",
        "height": 1.6,
        "weight": 150,
        "species": "Mega Fire Pig Pokémon",
        "types": [
            "fighting",
            "fire"
        ],
        "description": "It has mastered fast and powerful fighting moves.\nIt grows a beard of fire.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png"
    },
    {
        "id": 501,
        "name": "oshawott",
        "height": 0.5,
        "weight": 5.9,
        "species": "Sea Otter Pokémon",
        "types": [
            "water"
        ],
        "description": "It fights using the scalchop on its stomach.\nIn response to an attack, it retaliates immediately\nby slashing.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png"
    },
    {
        "id": 502,
        "name": "dewott",
        "height": 0.8,
        "weight": 24.5,
        "species": "Discipline Pokémon",
        "types": [
            "water"
        ],
        "description": "As a result of strict training, each Dewott learns\ndifferent forms for using the scalchops.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png"
    },
    {
        "id": 503,
        "name": "samurott",
        "height": 1.5,
        "weight": 94.6,
        "species": "Formidable Pokémon",
        "types": [
            "water"
        ],
        "description": "One swing of the sword incorporated in its armor\ncan fell an opponent. A simple glare from one of\nthem quiets everybody.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png"
    },
    {
        "id": 504,
        "name": "patrat",
        "height": 0.5,
        "weight": 11.6,
        "species": "Scout Pokémon",
        "types": [
            "normal"
        ],
        "description": "Extremely cautious, one of them will always be on\nthe lookout, but it won’t notice a foe coming\nfrom behind.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png"
    },
    {
        "id": 505,
        "name": "watchog",
        "height": 1.1,
        "weight": 27,
        "species": "Lookout Pokémon",
        "types": [
            "normal"
        ],
        "description": "When they see an enemy, their tails stand high,\nand they spit the seeds of berries stored in their\ncheek pouches.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png"
    },
    {
        "id": 506,
        "name": "lillipup",
        "height": 0.4,
        "weight": 4.1,
        "species": "Puppy Pokémon",
        "types": [
            "normal"
        ],
        "description": "The long fur surrounding its face functions as\nradar, enabling it to probe the condition of its\nbattle opponents.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png"
    },
    {
        "id": 507,
        "name": "herdier",
        "height": 0.9,
        "weight": 14.7,
        "species": "Loyal Dog Pokémon",
        "types": [
            "normal"
        ],
        "description": "This Pokémon obeys its master’s orders\nfaithfully. However, it refuses to listen to\nanything said by a person it doesn’t respect.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png"
    },
    {
        "id": 508,
        "name": "stoutland",
        "height": 1.2,
        "weight": 61,
        "species": "Big-Hearted Pokémon",
        "types": [
            "normal"
        ],
        "description": "With this wise Pokémon, there could be no\nconcern that it would ever attack people. Some\nparents even trust it to babysit.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png"
    },
    {
        "id": 509,
        "name": "purrloin",
        "height": 0.4,
        "weight": 10.1,
        "species": "Devious Pokémon",
        "types": [
            "dark"
        ],
        "description": "They steal from people for fun, but their victims\ncan’t help but forgive them. Their deceptively cute\nact is perfect.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png"
    },
    {
        "id": 510,
        "name": "liepard",
        "height": 1.1,
        "weight": 37.5,
        "species": "Cruel Pokémon",
        "types": [
            "dark"
        ],
        "description": "Stealthily, it sneaks up on its target, striking from\nbehind before its victim has a chance to react.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png"
    },
    {
        "id": 511,
        "name": "pansage",
        "height": 0.6,
        "weight": 10.5,
        "species": "Grass Monkey Pokémon",
        "types": [
            "grass"
        ],
        "description": "It’s good at finding berries and gathers them from\nall over. It’s kind enough to share them\nwith friends.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png"
    },
    {
        "id": 512,
        "name": "simisage",
        "height": 1.1,
        "weight": 30.5,
        "species": "Thorn Monkey Pokémon",
        "types": [
            "grass"
        ],
        "description": "Ill tempered, it fights by swinging its barbed tail\naround wildly. The leaf growing on its head is\nvery bitter.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png"
    },
    {
        "id": 513,
        "name": "pansear",
        "height": 0.6,
        "weight": 11,
        "species": "High Temp Pokémon",
        "types": [
            "fire"
        ],
        "description": "This Pokémon lives in caves in volcanoes.\nThe fire within the tuft on its head can reach\n600 degrees Fahrenheit.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png"
    },
    {
        "id": 514,
        "name": "simisear",
        "height": 1,
        "weight": 28,
        "species": "Ember Pokémon",
        "types": [
            "fire"
        ],
        "description": "When it gets excited, embers rise from its head\nand tail and it gets hot. For some reason, it\nloves sweets.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png"
    },
    {
        "id": 515,
        "name": "panpour",
        "height": 0.6,
        "weight": 13.5,
        "species": "Spray Pokémon",
        "types": [
            "water"
        ],
        "description": "The water stored inside the tuft on its head is full of\nnutrients. Plants that receive its water grow large.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png"
    },
    {
        "id": 516,
        "name": "simipour",
        "height": 1,
        "weight": 29,
        "species": "Geyser Pokémon",
        "types": [
            "water"
        ],
        "description": "It prefers places with clean water. When its tuft runs\nlow, it replenishes it by siphoning up water with\nits tail.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png"
    },
    {
        "id": 517,
        "name": "munna",
        "height": 0.6,
        "weight": 23.3,
        "species": "Dream Eater Pokémon",
        "types": [
            "psychic"
        ],
        "description": "It eats the dreams of people and Pokémon. When it\neats a pleasant dream, it expels pink-colored mist.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png"
    },
    {
        "id": 518,
        "name": "musharna",
        "height": 1.1,
        "weight": 60.5,
        "species": "Drowsing Pokémon",
        "types": [
            "psychic"
        ],
        "description": "The dream mist coming from its forehead changes\ninto many different colors depending on the dream\nthat was eaten.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png"
    },
    {
        "id": 519,
        "name": "pidove",
        "height": 0.3,
        "weight": 2.1,
        "species": "Tiny Pigeon Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "These Pokémon live in cities. They are accustomed\nto people. Flocks often gather in parks and plazas.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png"
    },
    {
        "id": 520,
        "name": "tranquill",
        "height": 0.6,
        "weight": 15,
        "species": "Wild Pigeon Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "No matter where in the world it goes, it knows\nwhere its nest is, so it never gets separated from\nits Trainer.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png"
    },
    {
        "id": 521,
        "name": "unfezant",
        "height": 1.2,
        "weight": 29,
        "species": "Proud Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "Males have plumage on their heads. They will never\nlet themselves feel close to anyone other than\ntheir Trainers.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png"
    },
    {
        "id": 522,
        "name": "blitzle",
        "height": 0.8,
        "weight": 29.8,
        "species": "Electrified Pokémon",
        "types": [
            "electric"
        ],
        "description": "Its mane shines when it discharges electricity.\nThey use the frequency and rhythm of these flashes\nto communicate.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png"
    },
    {
        "id": 523,
        "name": "zebstrika",
        "height": 1.6,
        "weight": 79.5,
        "species": "Thunderbolt Pokémon",
        "types": [
            "electric"
        ],
        "description": "They have lightning-like movements.\nWhen Zebstrika run at full speed, the sound of\nthunder reverberates.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png"
    },
    {
        "id": 524,
        "name": "roggenrola",
        "height": 0.4,
        "weight": 18,
        "species": "Mantle Pokémon",
        "types": [
            "rock"
        ],
        "description": "The hexagonal cavity is its ear. It walks in the\ndirection of sounds it hears, but if the sounds\ncease, it panics and topples over.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png"
    },
    {
        "id": 525,
        "name": "boldore",
        "height": 0.9,
        "weight": 102,
        "species": "Ore Pokémon",
        "types": [
            "rock"
        ],
        "description": "It explores caves in search of underground\nwater. It’s not comfortable around water, so\nthis Pokémon takes great care in lapping it up.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png"
    },
    {
        "id": 526,
        "name": "gigalith",
        "height": 1.7,
        "weight": 260,
        "species": "Compressed Pokémon",
        "types": [
            "rock"
        ],
        "description": "Known for its hefty horsepower, this Pokémon\nis a popular partner for construction workers.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png"
    },
    {
        "id": 527,
        "name": "woobat",
        "height": 0.4,
        "weight": 2.1,
        "species": "Bat Pokémon",
        "types": [
            "flying",
            "psychic"
        ],
        "description": "The heart-shaped mark left on a body after a\nWoobat has been attached to it is said to bring\ngood fortune.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png"
    },
    {
        "id": 528,
        "name": "swoobat",
        "height": 0.9,
        "weight": 10.5,
        "species": "Courting Pokémon",
        "types": [
            "flying",
            "psychic"
        ],
        "description": "Anyone who comes into contact with the ultrasonic\nwaves emitted by a courting male experiences a\npositive mood shift.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png"
    },
    {
        "id": 529,
        "name": "drilbur",
        "height": 0.3,
        "weight": 8.5,
        "species": "Mole Pokémon",
        "types": [
            "ground"
        ],
        "description": "By spinning its body, it can dig straight through the\nground at a speed of 30 mph.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png"
    },
    {
        "id": 530,
        "name": "excadrill",
        "height": 0.7,
        "weight": 40.4,
        "species": "Subterrene Pokémon",
        "types": [
            "steel",
            "ground"
        ],
        "description": "More than 300 feet below the surface, they build\nmazelike nests. Their activity can be destructive to\nsubway tunnels.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png"
    },
    {
        "id": 531,
        "name": "audino",
        "height": 1.1,
        "weight": 31,
        "species": "Hearing Pokémon",
        "types": [
            "normal"
        ],
        "description": "It touches others with the feelers on its ears, using\nthe sound of their heartbeats to tell how they\nare feeling.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png"
    },
    {
        "id": 531,
        "name": "audino-mega",
        "height": 1.5,
        "weight": 32,
        "species": "Hearing Pokémon",
        "types": [
            "fairy",
            "normal"
        ],
        "description": "It touches others with the feelers on its ears, using\nthe sound of their heartbeats to tell how they\nare feeling.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10069.png"
    },
    {
        "id": 532,
        "name": "timburr",
        "height": 0.6,
        "weight": 12.5,
        "species": "Muscular Pokémon",
        "types": [
            "fighting"
        ],
        "description": "Always carrying squared logs, they help out with\nconstruction. As they grow, they carry bigger logs.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png"
    },
    {
        "id": 533,
        "name": "gurdurr",
        "height": 1.2,
        "weight": 40,
        "species": "Muscular Pokémon",
        "types": [
            "fighting"
        ],
        "description": "This Pokémon is so muscular and strongly built that\neven a group of wrestlers could not make it budge\nan inch.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png"
    },
    {
        "id": 534,
        "name": "conkeldurr",
        "height": 1.4,
        "weight": 87,
        "species": "Muscular Pokémon",
        "types": [
            "fighting"
        ],
        "description": "Rather than rely on force, they master moves that\nutilize the centrifugal force of spinning concrete.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png"
    },
    {
        "id": 535,
        "name": "tympole",
        "height": 0.5,
        "weight": 4.5,
        "species": "Tadpole Pokémon",
        "types": [
            "water"
        ],
        "description": "By vibrating its cheeks, it emits sound waves\nimperceptible to humans. It uses the rhythm of\nthese sounds to talk.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png"
    },
    {
        "id": 536,
        "name": "palpitoad",
        "height": 0.8,
        "weight": 17,
        "species": "Vibration Pokémon",
        "types": [
            "ground",
            "water"
        ],
        "description": "It lives in the water and on land. It uses its long,\nsticky tongue to immobilize its opponents.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png"
    },
    {
        "id": 537,
        "name": "seismitoad",
        "height": 1.5,
        "weight": 62,
        "species": "Vibration Pokémon",
        "types": [
            "ground",
            "water"
        ],
        "description": "They shoot paralyzing liquid from their head bumps.\nThey use vibration to hurt their opponents.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png"
    },
    {
        "id": 538,
        "name": "throh",
        "height": 1.3,
        "weight": 55.5,
        "species": "Judo Pokémon",
        "types": [
            "fighting"
        ],
        "description": "When it encounters a foe bigger than itself, it wants\nto throw it. It changes belts as it gets stronger.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png"
    },
    {
        "id": 539,
        "name": "sawk",
        "height": 1.4,
        "weight": 51,
        "species": "Karate Pokémon",
        "types": [
            "fighting"
        ],
        "description": "Tying their belts gets them pumped and makes their\npunches more destructive. Disturbing their training\nangers them.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png"
    },
    {
        "id": 540,
        "name": "sewaddle",
        "height": 0.3,
        "weight": 2.5,
        "species": "Sewing Pokémon",
        "types": [
            "grass",
            "bug"
        ],
        "description": "Since this Pokémon makes its own clothes out of\nleaves, it is a popular mascot for fashion designers.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png"
    },
    {
        "id": 541,
        "name": "swadloon",
        "height": 0.5,
        "weight": 7.3,
        "species": "Leaf-Wrapped Pokémon",
        "types": [
            "grass",
            "bug"
        ],
        "description": "It protects itself from the cold by wrapping up in\nleaves. It stays on the move, eating leaves\nin forests.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png"
    },
    {
        "id": 542,
        "name": "leavanny",
        "height": 1.2,
        "weight": 20.5,
        "species": "Nurturing Pokémon",
        "types": [
            "grass",
            "bug"
        ],
        "description": "It keeps its eggs warm with heat from fermenting\nleaves. It also uses leaves to make warm wrappings\nfor Sewaddle.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png"
    },
    {
        "id": 543,
        "name": "venipede",
        "height": 0.4,
        "weight": 5.3,
        "species": "Centipede Pokémon",
        "types": [
            "poison",
            "bug"
        ],
        "description": "Its bite injects a potent poison, enough to paralyze\nlarge bird Pokémon that try to prey on it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png"
    },
    {
        "id": 544,
        "name": "whirlipede",
        "height": 1.2,
        "weight": 58.5,
        "species": "Curlipede Pokémon",
        "types": [
            "poison",
            "bug"
        ],
        "description": "It is usually motionless, but when attacked,\nit rotates at high speed and then crashes into\nits opponent.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png"
    },
    {
        "id": 545,
        "name": "scolipede",
        "height": 2.5,
        "weight": 200.5,
        "species": "Megapede Pokémon",
        "types": [
            "poison",
            "bug"
        ],
        "description": "With quick movements, it chases down its foes,\nattacking relentlessly with its horns until it prevails.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png"
    },
    {
        "id": 546,
        "name": "cottonee",
        "height": 0.3,
        "weight": 0.6,
        "species": "Cotton Puff Pokémon",
        "types": [
            "fairy",
            "grass"
        ],
        "description": "Pillows and beds stuffed with cotton exhaled\nby Cottonee are soft and puffy, light and airy—\naltogether top quality.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png"
    },
    {
        "id": 547,
        "name": "whimsicott",
        "height": 0.7,
        "weight": 6.6,
        "species": "Windveiled Pokémon",
        "types": [
            "fairy",
            "grass"
        ],
        "description": "This Pokémon appears, riding upon the wind.\nBut if the wind gusts up, it’ll blow the cotton on\nthis Pokémon’s head clean off.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png"
    },
    {
        "id": 548,
        "name": "petilil",
        "height": 0.5,
        "weight": 6.6,
        "species": "Bulb Pokémon",
        "types": [
            "grass"
        ],
        "description": "By pruning the leaves on its head with\nregularity, this Pokémon can be grown into a\nfine plump shape.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png"
    },
    {
        "id": 549,
        "name": "lilligant",
        "height": 1.1,
        "weight": 16.3,
        "species": "Flowering Pokémon",
        "types": [
            "grass"
        ],
        "description": "As soon as it finds a male to be its partner,\nthe beautiful flower on its head darkens,\ndroops, and withers away.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png"
    },
    {
        "id": 550,
        "name": "basculin-red-striped",
        "height": 1,
        "weight": 18,
        "species": "Hostile Pokémon",
        "types": [
            "water"
        ],
        "description": "Red and blue Basculin usually do not get along,\nbut sometimes members of one school mingle with\nthe other’s school.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png"
    },
    {
        "id": 550,
        "name": "basculin-blue-striped",
        "height": 1,
        "weight": 18,
        "species": "Hostile Pokémon",
        "types": [
            "water"
        ],
        "description": "Red and blue Basculin usually do not get along,\nbut sometimes members of one school mingle with\nthe other’s school.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10016.png"
    },
    {
        "id": 551,
        "name": "sandile",
        "height": 0.7,
        "weight": 15.2,
        "species": "Desert Croc Pokémon",
        "types": [
            "dark",
            "ground"
        ],
        "description": "It conceals itself in the sand and chomps down\non the legs of any prey that unwarily walk over\nit. Its favorite food is Trapinch.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png"
    },
    {
        "id": 552,
        "name": "krokorok",
        "height": 1,
        "weight": 33.4,
        "species": "Desert Croc Pokémon",
        "types": [
            "dark",
            "ground"
        ],
        "description": "Thanks to the special membrane covering its\neyes, it can see its surroundings clearly, even in\nthe middle of the night.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png"
    },
    {
        "id": 553,
        "name": "krookodile",
        "height": 1.5,
        "weight": 96.3,
        "species": "Intimidation Pokémon",
        "types": [
            "dark",
            "ground"
        ],
        "description": "After clamping down with its powerful jaws,\nit twists its body around to rip its prey in half.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png"
    },
    {
        "id": 554,
        "name": "darumaka",
        "height": 0.6,
        "weight": 37.5,
        "species": "Zen Charm Pokémon",
        "types": [
            "fire"
        ],
        "description": "When it sleeps, it pulls its limbs into its\nbody and its internal fire goes down to\n1,100 degrees Fahrenheit.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png"
    },
    {
        "id": 555,
        "name": "darmanitan-standard",
        "height": 1.3,
        "weight": 92.9,
        "species": "Blazing Pokémon",
        "types": [
            "fire"
        ],
        "description": "Its internal fire burns at 2,500 degrees Fahrenheit,\nmaking enough power that it can destroy a dump\ntruck with one punch.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png"
    },
    {
        "id": 555,
        "name": "darmanitan-zen",
        "height": 1.3,
        "weight": 92.9,
        "species": "Blazing Pokémon",
        "types": [
            "psychic",
            "fire"
        ],
        "description": "Its internal fire burns at 2,500 degrees Fahrenheit,\nmaking enough power that it can destroy a dump\ntruck with one punch.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10017.png"
    },
    {
        "id": 556,
        "name": "maractus",
        "height": 1,
        "weight": 28,
        "species": "Cactus Pokémon",
        "types": [
            "grass"
        ],
        "description": "Arid regions are their habitat. They move\nrhythmically, making a sound similar to maracas.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png"
    },
    {
        "id": 557,
        "name": "dwebble",
        "height": 0.3,
        "weight": 14.5,
        "species": "Rock Inn Pokémon",
        "types": [
            "rock",
            "bug"
        ],
        "description": "When it finds a stone of a suitable size, it secretes\na liquid from its mouth to open up a hole to\ncrawl into.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png"
    },
    {
        "id": 558,
        "name": "crustle",
        "height": 1.4,
        "weight": 200,
        "species": "Stone Home Pokémon",
        "types": [
            "rock",
            "bug"
        ],
        "description": "Competing for territory, Crustle fight viciously.\nThe one whose boulder is broken is the loser of\nthe battle.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png"
    },
    {
        "id": 559,
        "name": "scraggy",
        "height": 0.6,
        "weight": 11.8,
        "species": "Shedding Pokémon",
        "types": [
            "fighting",
            "dark"
        ],
        "description": "Proud of its sturdy skull, it suddenly headbutts\neverything, but its weight makes it unstable, too.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png"
    },
    {
        "id": 560,
        "name": "scrafty",
        "height": 1.1,
        "weight": 30,
        "species": "Hoodlum Pokémon",
        "types": [
            "fighting",
            "dark"
        ],
        "description": "It can smash concrete blocks with its kicking\nattacks. The one with the biggest crest is the\ngroup leader.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png"
    },
    {
        "id": 561,
        "name": "sigilyph",
        "height": 1.4,
        "weight": 14,
        "species": "Avianoid Pokémon",
        "types": [
            "flying",
            "psychic"
        ],
        "description": "The guardians of an ancient city, they always fly\nthe same route while keeping watch for invaders.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png"
    },
    {
        "id": 562,
        "name": "yamask",
        "height": 0.5,
        "weight": 1.5,
        "species": "Spirit Pokémon",
        "types": [
            "ghost"
        ],
        "description": "Each of them carries a mask that used to be its face\nwhen it was human. Sometimes they look at it\nand cry.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png"
    },
    {
        "id": 563,
        "name": "cofagrigus",
        "height": 1.7,
        "weight": 76.5,
        "species": "Coffin Pokémon",
        "types": [
            "ghost"
        ],
        "description": "Grave robbers who mistake them for real coffins and\nget too close end up trapped inside their bodies.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png"
    },
    {
        "id": 564,
        "name": "tirtouga",
        "height": 0.7,
        "weight": 16.5,
        "species": "Prototurtle Pokémon",
        "types": [
            "rock",
            "water"
        ],
        "description": "Reputed to be the ancestor of most turtle\nPokémon, it lived in warm seas approximately\na hundred million years ago.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png"
    },
    {
        "id": 565,
        "name": "carracosta",
        "height": 1.2,
        "weight": 81,
        "species": "Prototurtle Pokémon",
        "types": [
            "rock",
            "water"
        ],
        "description": "Active both on land and in the sea, this\nPokémon drags its land-based prey into the\nwater to finish it off.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png"
    },
    {
        "id": 566,
        "name": "archen",
        "height": 0.5,
        "weight": 9.5,
        "species": "First Bird Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "To all appearances flightless, it was able to\nglide down from tall treetops to snag its prey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png"
    },
    {
        "id": 567,
        "name": "archeops",
        "height": 1.4,
        "weight": 32,
        "species": "First Bird Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "They hunted in flocks. When one Archeops had\nthe prey cornered, another would swoop on it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png"
    },
    {
        "id": 568,
        "name": "trubbish",
        "height": 0.6,
        "weight": 31,
        "species": "Trash Bag Pokémon",
        "types": [
            "poison"
        ],
        "description": "It gorges on trash until its stomach is full. Then\nit belches toxic gas. An unlucky whiff of gas will\nput a person in the hospital.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png"
    },
    {
        "id": 569,
        "name": "garbodor",
        "height": 1.9,
        "weight": 107.3,
        "species": "Trash Heap Pokémon",
        "types": [
            "poison"
        ],
        "description": "For a time, their numbers increased explosively\nin Alola. Since the arrival of Grimer, their\npopulation has decreased dramatically.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png"
    },
    {
        "id": 570,
        "name": "zorua",
        "height": 0.7,
        "weight": 12.5,
        "species": "Tricky Fox Pokémon",
        "types": [
            "dark"
        ],
        "description": "To protect themselves from danger, they hide their\ntrue identities by transforming into people\nand Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png"
    },
    {
        "id": 571,
        "name": "zoroark",
        "height": 1.6,
        "weight": 81.1,
        "species": "Illusion Fox Pokémon",
        "types": [
            "dark"
        ],
        "description": "Bonds between these Pokémon are very strong.\nIt protects the safety of its pack by tricking\nits opponents.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png"
    },
    {
        "id": 572,
        "name": "minccino",
        "height": 0.4,
        "weight": 5.8,
        "species": "Chinchilla Pokémon",
        "types": [
            "normal"
        ],
        "description": "These Pokémon prefer a tidy habitat. They are\nalways sweeping and dusting, using their tails\nas brooms.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png"
    },
    {
        "id": 573,
        "name": "cinccino",
        "height": 0.5,
        "weight": 7.5,
        "species": "Scarf Pokémon",
        "types": [
            "normal"
        ],
        "description": "Cinccino’s body is coated in a special oil that helps\nit deflect attacks, such as punches.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png"
    },
    {
        "id": 574,
        "name": "gothita",
        "height": 0.4,
        "weight": 5.8,
        "species": "Fixation Pokémon",
        "types": [
            "psychic"
        ],
        "description": "They intently observe both Trainers and Pokémon.\nApparently, they are looking at something that only\nGothita can see.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png"
    },
    {
        "id": 575,
        "name": "gothorita",
        "height": 0.7,
        "weight": 18,
        "species": "Manipulate Pokémon",
        "types": [
            "psychic"
        ],
        "description": "According to many old tales, it creates friends for\nitself by controlling sleeping children on\nstarry nights.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png"
    },
    {
        "id": 576,
        "name": "gothitelle",
        "height": 1.5,
        "weight": 44,
        "species": "Astral Body Pokémon",
        "types": [
            "psychic"
        ],
        "description": "They can predict the future from the placement and\nmovement of the stars. They can see Trainers’\nlife spans.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png"
    },
    {
        "id": 577,
        "name": "solosis",
        "height": 0.3,
        "weight": 1,
        "species": "Cell Pokémon",
        "types": [
            "psychic"
        ],
        "description": "They drive away attackers by unleashing psychic\npower. They can use telepathy to talk with others.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png"
    },
    {
        "id": 578,
        "name": "duosion",
        "height": 0.6,
        "weight": 8,
        "species": "Mitosis Pokémon",
        "types": [
            "psychic"
        ],
        "description": "When their two divided brains think the same\nthoughts, their psychic power is maximized.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png"
    },
    {
        "id": 579,
        "name": "reuniclus",
        "height": 1,
        "weight": 20.1,
        "species": "Multiplying Pokémon",
        "types": [
            "psychic"
        ],
        "description": "When Reuniclus shake hands, a network forms\nbetween their brains, increasing their\npsychic power.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png"
    },
    {
        "id": 580,
        "name": "ducklett",
        "height": 0.5,
        "weight": 5.5,
        "species": "Water Bird Pokémon",
        "types": [
            "flying",
            "water"
        ],
        "description": "They are better at swimming than flying, and they\nhappily eat their favorite food, peat moss, as they\ndive underwater.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png"
    },
    {
        "id": 581,
        "name": "swanna",
        "height": 1.3,
        "weight": 24.2,
        "species": "White Bird Pokémon",
        "types": [
            "flying",
            "water"
        ],
        "description": "Swanna start to dance at dusk. The one dancing in\nthe middle is the leader of the flock.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png"
    },
    {
        "id": 582,
        "name": "vanillite",
        "height": 0.4,
        "weight": 5.7,
        "species": "Fresh Snow Pokémon",
        "types": [
            "ice"
        ],
        "description": "It feels pleasantly cool when embraced. This\nPokémon is treasured by households in\nwarm regions.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png"
    },
    {
        "id": 583,
        "name": "vanillish",
        "height": 1.1,
        "weight": 41,
        "species": "Icy Snow Pokémon",
        "types": [
            "ice"
        ],
        "description": "This Pokémon has existed since the Ice Age. It\ncontrols particles of ice, freezes its opponents,\nand then shatters them with a headbutt.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png"
    },
    {
        "id": 584,
        "name": "vanilluxe",
        "height": 1.3,
        "weight": 57.5,
        "species": "Snowstorm Pokémon",
        "types": [
            "ice"
        ],
        "description": "Even if it loses one of its heads, it can live\nrelatively problem-free. It makes snow clouds\ninside its body.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png"
    },
    {
        "id": 585,
        "name": "deerling",
        "height": 0.6,
        "weight": 19.5,
        "species": "Season Pokémon",
        "types": [
            "grass",
            "normal"
        ],
        "description": "The turning of the seasons changes the color and\nscent of this Pokémon’s fur. People use it to mark\nthe seasons.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png"
    },
    {
        "id": 586,
        "name": "sawsbuck",
        "height": 1.9,
        "weight": 92.5,
        "species": "Season Pokémon",
        "types": [
            "grass",
            "normal"
        ],
        "description": "They migrate according to the seasons, so some\npeople call Sawsbuck the harbingers of spring.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png"
    },
    {
        "id": 587,
        "name": "emolga",
        "height": 0.4,
        "weight": 5,
        "species": "Sky Squirrel Pokémon",
        "types": [
            "flying",
            "electric"
        ],
        "description": "It grills berries and bug Pokémon with electric\nshocks and makes a meal of them. It usually\nnests in the holes gouged in trees by Pikipek.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png"
    },
    {
        "id": 588,
        "name": "karrablast",
        "height": 0.5,
        "weight": 5.9,
        "species": "Clamping Pokémon",
        "types": [
            "bug"
        ],
        "description": "For some reason they evolve when they receive\nelectrical energy while they are attacking Shelmet.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png"
    },
    {
        "id": 589,
        "name": "escavalier",
        "height": 1,
        "weight": 33,
        "species": "Cavalry Pokémon",
        "types": [
            "steel",
            "bug"
        ],
        "description": "These Pokémon evolve by wearing the shell\ncovering of a Shelmet. The steel armor protects\ntheir whole body.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png"
    },
    {
        "id": 590,
        "name": "foongus",
        "height": 0.2,
        "weight": 1,
        "species": "Mushroom Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "It lures Pokémon with its pattern that looks just like\na Poké Ball, then releases poison spores.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png"
    },
    {
        "id": 591,
        "name": "amoonguss",
        "height": 0.6,
        "weight": 10.5,
        "species": "Mushroom Pokémon",
        "types": [
            "poison",
            "grass"
        ],
        "description": "It lures prey close by dancing and waving its\narm caps, which resemble Poké Balls, in a\nswaying motion.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png"
    },
    {
        "id": 592,
        "name": "frillish",
        "height": 1.2,
        "weight": 33,
        "species": "Floating Pokémon",
        "types": [
            "ghost",
            "water"
        ],
        "description": "If its veil-like arms stun and wrap a foe, that foe will\nbe dragged miles below the surface, never\nto return.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png"
    },
    {
        "id": 593,
        "name": "jellicent",
        "height": 2.2,
        "weight": 135,
        "species": "Floating Pokémon",
        "types": [
            "ghost",
            "water"
        ],
        "description": "The fate of the ships and crew that wander into\nJellicent’s habitat: all sunken, all lost, all vanished.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png"
    },
    {
        "id": 594,
        "name": "alomomola",
        "height": 1.2,
        "weight": 31.6,
        "species": "Caring Pokémon",
        "types": [
            "water"
        ],
        "description": "They float upon the open sea. Many water\nPokémon gather in the area around Alomomola.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png"
    },
    {
        "id": 595,
        "name": "joltik",
        "height": 0.1,
        "weight": 0.6,
        "species": "Attaching Pokémon",
        "types": [
            "electric",
            "bug"
        ],
        "description": "They attach themselves to large-bodied Pokémon\nand absorb static electricity, which they store in an\nelectric pouch.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png"
    },
    {
        "id": 596,
        "name": "galvantula",
        "height": 0.8,
        "weight": 14.3,
        "species": "EleSpider Pokémon",
        "types": [
            "electric",
            "bug"
        ],
        "description": "When attacked, they create an electric barrier by\nspitting out many electrically charged threads.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png"
    },
    {
        "id": 597,
        "name": "ferroseed",
        "height": 0.6,
        "weight": 18.8,
        "species": "Thorn Seed Pokémon",
        "types": [
            "steel",
            "grass"
        ],
        "description": "It absorbs the iron it finds in the rock while clinging\nto the ceiling. It shoots spikes when in danger.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png"
    },
    {
        "id": 598,
        "name": "ferrothorn",
        "height": 1,
        "weight": 110,
        "species": "Thorn Pod Pokémon",
        "types": [
            "steel",
            "grass"
        ],
        "description": "They attach themselves to cave ceilings, firing steel\nspikes at targets passing beneath them.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png"
    },
    {
        "id": 599,
        "name": "klink",
        "height": 0.3,
        "weight": 21,
        "species": "Gear Pokémon",
        "types": [
            "steel"
        ],
        "description": "The two minigears that mesh together are\npredetermined. Each will rebound from other\nminigears without meshing.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png"
    },
    {
        "id": 600,
        "name": "klang",
        "height": 0.6,
        "weight": 51,
        "species": "Gear Pokémon",
        "types": [
            "steel"
        ],
        "description": "A minigear and big gear comprise its body. If the\nminigear it launches at a foe doesn’t return, it\nwill die.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png"
    },
    {
        "id": 601,
        "name": "klinklang",
        "height": 0.6,
        "weight": 81,
        "species": "Gear Pokémon",
        "types": [
            "steel"
        ],
        "description": "Its red core functions as an energy tank. It fires the\ncharged energy through its spikes into an area.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png"
    },
    {
        "id": 602,
        "name": "tynamo",
        "height": 0.2,
        "weight": 0.3,
        "species": "EleFish Pokémon",
        "types": [
            "electric"
        ],
        "description": "One alone can emit only a trickle of electricity,\nso a group of them gathers to unleash a powerful\nelectric shock.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png"
    },
    {
        "id": 603,
        "name": "eelektrik",
        "height": 1.2,
        "weight": 22,
        "species": "EleFish Pokémon",
        "types": [
            "electric"
        ],
        "description": "These Pokémon have a big appetite. When they\nspot their prey, they attack it and paralyze it\nwith electricity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png"
    },
    {
        "id": 604,
        "name": "eelektross",
        "height": 2.1,
        "weight": 80.5,
        "species": "EleFish Pokémon",
        "types": [
            "electric"
        ],
        "description": "They crawl out of the ocean using their arms.\nThey will attack prey on shore and immediately drag\nit into the ocean.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png"
    },
    {
        "id": 605,
        "name": "elgyem",
        "height": 0.5,
        "weight": 9,
        "species": "Cerebral Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Rumors of its origin are linked to a UFO crash site\nin the desert 50 years ago.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png"
    },
    {
        "id": 606,
        "name": "beheeyem",
        "height": 1,
        "weight": 34.5,
        "species": "Cerebral Pokémon",
        "types": [
            "psychic"
        ],
        "description": "It uses psychic power to control an opponent’s\nbrain and tamper with its memories.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png"
    },
    {
        "id": 607,
        "name": "litwick",
        "height": 0.3,
        "weight": 3.1,
        "species": "Candle Pokémon",
        "types": [
            "fire",
            "ghost"
        ],
        "description": "Litwick shines a light that absorbs the life energy of\npeople and Pokémon, which becomes the fuel that\nit burns.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png"
    },
    {
        "id": 608,
        "name": "lampent",
        "height": 0.6,
        "weight": 13,
        "species": "Lamp Pokémon",
        "types": [
            "fire",
            "ghost"
        ],
        "description": "It arrives near the moment of death and steals spirit\nfrom the body.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png"
    },
    {
        "id": 609,
        "name": "chandelure",
        "height": 1,
        "weight": 34.3,
        "species": "Luring Pokémon",
        "types": [
            "fire",
            "ghost"
        ],
        "description": "The spirits burned up in its ominous flame lose their\nway and wander this world forever.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png"
    },
    {
        "id": 610,
        "name": "axew",
        "height": 0.6,
        "weight": 18,
        "species": "Tusk Pokémon",
        "types": [
            "dragon"
        ],
        "description": "They mark their territory by leaving gashes in trees\nwith their tusks. If a tusk breaks, a new one grows\nin quickly.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png"
    },
    {
        "id": 611,
        "name": "fraxure",
        "height": 1,
        "weight": 36,
        "species": "Axe Jaw Pokémon",
        "types": [
            "dragon"
        ],
        "description": "A broken tusk will not grow back, so it diligently\nsharpens its tusks on river rocks after the end of\na battle.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png"
    },
    {
        "id": 612,
        "name": "haxorus",
        "height": 1.8,
        "weight": 105.5,
        "species": "Axe Jaw Pokémon",
        "types": [
            "dragon"
        ],
        "description": "Their sturdy tusks will stay sharp even if used to cut\nsteel beams. These Pokémon are covered in\nhard armor.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png"
    },
    {
        "id": 613,
        "name": "cubchoo",
        "height": 0.5,
        "weight": 8.5,
        "species": "Chill Pokémon",
        "types": [
            "ice"
        ],
        "description": "Their snot is a barometer of health. When healthy,\ntheir snot is sticky and the power of their ice\nmoves increases.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png"
    },
    {
        "id": 614,
        "name": "beartic",
        "height": 2.6,
        "weight": 260,
        "species": "Freezing Pokémon",
        "types": [
            "ice"
        ],
        "description": "It freezes its breath to create fangs and claws of ice\nto fight with. Cold northern areas are its habitat.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png"
    },
    {
        "id": 615,
        "name": "cryogonal",
        "height": 1.1,
        "weight": 148,
        "species": "Crystallizing Pokémon",
        "types": [
            "ice"
        ],
        "description": "They are composed of ice crystals. They capture\nprey with chains of ice, freezing the prey at\n-148 degrees Fahrenheit.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png"
    },
    {
        "id": 616,
        "name": "shelmet",
        "height": 0.4,
        "weight": 7.7,
        "species": "Snail Pokémon",
        "types": [
            "bug"
        ],
        "description": "It evolves when bathed in an electric-like energy\nalong with Karrablast. The reason is still unknown.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png"
    },
    {
        "id": 617,
        "name": "accelgor",
        "height": 0.8,
        "weight": 25.3,
        "species": "Shell Out Pokémon",
        "types": [
            "bug"
        ],
        "description": "When its body dries out, it weakens. So, to prevent\ndehydration, it wraps itself in many layers of\nthin membrane.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png"
    },
    {
        "id": 618,
        "name": "stunfisk",
        "height": 0.7,
        "weight": 11,
        "species": "Trap Pokémon",
        "types": [
            "electric",
            "ground"
        ],
        "description": "It conceals itself in the mud of the seashore.\nThen it waits. When prey touch it, it delivers a jolt\nof electricity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png"
    },
    {
        "id": 619,
        "name": "mienfoo",
        "height": 0.9,
        "weight": 20,
        "species": "Martial Arts Pokémon",
        "types": [
            "fighting"
        ],
        "description": "In fights, they dominate with onslaughts of flowing,\ncontinuous attacks. With their sharp claws, they\ncut enemies.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png"
    },
    {
        "id": 620,
        "name": "mienshao",
        "height": 1.4,
        "weight": 35.5,
        "species": "Martial Arts Pokémon",
        "types": [
            "fighting"
        ],
        "description": "Using the long fur on its arms like whips, it\nlaunches into combo attacks that, once started,\nno one can stop.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png"
    },
    {
        "id": 621,
        "name": "druddigon",
        "height": 1.6,
        "weight": 139,
        "species": "Cave Pokémon",
        "types": [
            "dragon"
        ],
        "description": "It warms its body by absorbing sunlight with its\nwings. When its body temperature falls, it can no\nlonger move.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png"
    },
    {
        "id": 622,
        "name": "golett",
        "height": 1,
        "weight": 92,
        "species": "Automaton Pokémon",
        "types": [
            "ghost",
            "ground"
        ],
        "description": "Ancient science fashioned this Pokémon from clay.\nIt’s been active for thousands of years.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png"
    },
    {
        "id": 623,
        "name": "golurk",
        "height": 2.8,
        "weight": 330,
        "species": "Automaton Pokémon",
        "types": [
            "ghost",
            "ground"
        ],
        "description": "It flies across the sky at Mach speeds. Removing\nthe seal on its chest makes its internal energy go\nout of control.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png"
    },
    {
        "id": 624,
        "name": "pawniard",
        "height": 0.5,
        "weight": 10.2,
        "species": "Sharp Blade Pokémon",
        "types": [
            "steel",
            "dark"
        ],
        "description": "Ignoring their injuries, groups attack by sinking\nthe blades that cover their bodies into their prey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png"
    },
    {
        "id": 625,
        "name": "bisharp",
        "height": 1.6,
        "weight": 70,
        "species": "Sword Blade Pokémon",
        "types": [
            "steel",
            "dark"
        ],
        "description": "Bisharp pursues prey in the company of a large\ngroup of Pawniard. Then Bisharp finishes off\nthe prey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png"
    },
    {
        "id": 626,
        "name": "bouffalant",
        "height": 1.6,
        "weight": 94.6,
        "species": "Bash Buffalo Pokémon",
        "types": [
            "normal"
        ],
        "description": "Their fluffy fur absorbs damage, even if they strike\nfoes with a fierce headbutt.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png"
    },
    {
        "id": 627,
        "name": "rufflet",
        "height": 0.5,
        "weight": 10.5,
        "species": "Eaglet Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "With its sharp claws, this Pokémon pierces its\nprey, and then it pecks at them. Although it also\nconsumes berries, it’s a carnivore at heart.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png"
    },
    {
        "id": 628,
        "name": "braviary",
        "height": 1.5,
        "weight": 41,
        "species": "Valiant Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "It’s thought that people disturbed their habitats\nin the past, so Braviary banded together to\nfight back.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png"
    },
    {
        "id": 629,
        "name": "vullaby",
        "height": 0.5,
        "weight": 9,
        "species": "Diapered Pokémon",
        "types": [
            "flying",
            "dark"
        ],
        "description": "It can’t fly yet and must wait until its wings have\ndeveloped more. Since it’s still at a playful age,\nit hops around friskily.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png"
    },
    {
        "id": 630,
        "name": "mandibuzz",
        "height": 1.2,
        "weight": 39.5,
        "species": "Bone Vulture Pokémon",
        "types": [
            "flying",
            "dark"
        ],
        "description": "It circles in the sky, keeping a keen eye out for\nPokémon in a weakened state. Its choicest food\nis Cubone.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png"
    },
    {
        "id": 631,
        "name": "heatmor",
        "height": 1.4,
        "weight": 58,
        "species": "Anteater Pokémon",
        "types": [
            "fire"
        ],
        "description": "It draws in air through its tail, transforms it into fire,\nand uses it like a tongue. It melts Durant and\neats them.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png"
    },
    {
        "id": 632,
        "name": "durant",
        "height": 0.3,
        "weight": 33,
        "species": "Iron Ant Pokémon",
        "types": [
            "steel",
            "bug"
        ],
        "description": "They attack in groups, covering themselves in steel\narmor to protect themselves from Heatmor.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png"
    },
    {
        "id": 633,
        "name": "deino",
        "height": 0.8,
        "weight": 17.3,
        "species": "Irate Pokémon",
        "types": [
            "dragon",
            "dark"
        ],
        "description": "Lacking sight, it’s unaware of its surroundings,\nso it bumps into things and eats anything\nthat moves.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png"
    },
    {
        "id": 634,
        "name": "zweilous",
        "height": 1.4,
        "weight": 50,
        "species": "Hostile Pokémon",
        "types": [
            "dragon",
            "dark"
        ],
        "description": "After it has eaten up all the food in its territory,\nit moves to another area. Its two heads do not\nget along.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png"
    },
    {
        "id": 635,
        "name": "hydreigon",
        "height": 1.8,
        "weight": 160,
        "species": "Brutal Pokémon",
        "types": [
            "dragon",
            "dark"
        ],
        "description": "It responds to movement by attacking. This scary,\nthree-headed Pokémon devours everything in\nits path!",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png"
    },
    {
        "id": 636,
        "name": "larvesta",
        "height": 1.1,
        "weight": 28.8,
        "species": "Torch Pokémon",
        "types": [
            "fire",
            "bug"
        ],
        "description": "The base of volcanoes is where they make their\nhomes. They shoot fire from their five horns to repel\nattacking enemies.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png"
    },
    {
        "id": 637,
        "name": "volcarona",
        "height": 1.6,
        "weight": 46,
        "species": "Sun Pokémon",
        "types": [
            "fire",
            "bug"
        ],
        "description": "When volcanic ash darkened the atmosphere, it is\nsaid that Volcarona’s fire provided a replacement\nfor the sun.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png"
    },
    {
        "id": 638,
        "name": "cobalion",
        "height": 2.1,
        "weight": 250,
        "species": "Iron Will Pokémon",
        "types": [
            "fighting",
            "steel"
        ],
        "description": "It has a body and heart of steel. It worked with its\nallies to punish people when they hurt Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png"
    },
    {
        "id": 639,
        "name": "terrakion",
        "height": 1.9,
        "weight": 260,
        "species": "Cavern Pokémon",
        "types": [
            "fighting",
            "rock"
        ],
        "description": "Spoken of in legend, this Pokémon used its\nphenomenal power to destroy a castle in its effort\nto protect Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png"
    },
    {
        "id": 640,
        "name": "virizion",
        "height": 2,
        "weight": 200,
        "species": "Grassland Pokémon",
        "types": [
            "fighting",
            "grass"
        ],
        "description": "Legends say this Pokémon confounded opponents\nwith its swift movements.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png"
    },
    {
        "id": 641,
        "name": "tornadus-incarnate",
        "height": 1.5,
        "weight": 63,
        "species": "Cyclone Pokémon",
        "types": [
            "flying"
        ],
        "description": "Tornadus expels massive energy from its tail,\ncausing severe storms. Its power is great enough\nto blow houses away.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png"
    },
    {
        "id": 641,
        "name": "tornadus-therian",
        "height": 1.4,
        "weight": 63,
        "species": "Cyclone Pokémon",
        "types": [
            "flying"
        ],
        "description": "Tornadus expels massive energy from its tail,\ncausing severe storms. Its power is great enough\nto blow houses away.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10019.png"
    },
    {
        "id": 642,
        "name": "thundurus-incarnate",
        "height": 1.5,
        "weight": 61,
        "species": "Bolt Strike Pokémon",
        "types": [
            "flying",
            "electric"
        ],
        "description": "As it flies around, it shoots lightning all over\nthe place and causes forest fires. It is\ntherefore disliked.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png"
    },
    {
        "id": 642,
        "name": "thundurus-therian",
        "height": 3,
        "weight": 61,
        "species": "Bolt Strike Pokémon",
        "types": [
            "flying",
            "electric"
        ],
        "description": "As it flies around, it shoots lightning all over\nthe place and causes forest fires. It is\ntherefore disliked.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10020.png"
    },
    {
        "id": 643,
        "name": "reshiram",
        "height": 3.2,
        "weight": 330,
        "species": "Vast White Pokémon",
        "types": [
            "fire",
            "dragon"
        ],
        "description": "When Reshiram’s tail flares, the heat energy moves\nthe atmosphere and changes the world’s weather.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png"
    },
    {
        "id": 644,
        "name": "zekrom",
        "height": 2.9,
        "weight": 345,
        "species": "Deep Black Pokémon",
        "types": [
            "electric",
            "dragon"
        ],
        "description": "Concealing itself in lightning clouds, it flies\nthroughout the Unova region. It creates electricity\nin its tail.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png"
    },
    {
        "id": 645,
        "name": "landorus-incarnate",
        "height": 1.5,
        "weight": 68,
        "species": "Abundance Pokémon",
        "types": [
            "flying",
            "ground"
        ],
        "description": "From the forces of lightning and wind, it creates\nenergy to give nutrients to the soil and make the\nland abundant.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png"
    },
    {
        "id": 645,
        "name": "landorus-therian",
        "height": 1.3,
        "weight": 68,
        "species": "Abundance Pokémon",
        "types": [
            "flying",
            "ground"
        ],
        "description": "From the forces of lightning and wind, it creates\nenergy to give nutrients to the soil and make the\nland abundant.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10021.png"
    },
    {
        "id": 646,
        "name": "kyurem",
        "height": 3,
        "weight": 325,
        "species": "Boundary Pokémon",
        "types": [
            "ice",
            "dragon"
        ],
        "description": "It generates a powerful, freezing energy inside\nitself, but its body became frozen when the energy\nleaked out.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png"
    },
    {
        "id": 646,
        "name": "kyurem-white",
        "height": 3.6,
        "weight": 325,
        "species": "Boundary Pokémon",
        "types": [
            "ice",
            "dragon"
        ],
        "description": "It generates a powerful, freezing energy inside\nitself, but its body became frozen when the energy\nleaked out.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10023.png"
    },
    {
        "id": 646,
        "name": "kyurem-black",
        "height": 3.3,
        "weight": 325,
        "species": "Boundary Pokémon",
        "types": [
            "ice",
            "dragon"
        ],
        "description": "It generates a powerful, freezing energy inside\nitself, but its body became frozen when the energy\nleaked out.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10022.png"
    },
    {
        "id": 647,
        "name": "keldeo-ordinary",
        "height": 1.4,
        "weight": 48.5,
        "species": "Colt Pokémon",
        "types": [
            "fighting",
            "water"
        ],
        "description": "When it is resolute, its body fills with power and it\nbecomes swifter. Its jumps are then too fast\nto follow.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png"
    },
    {
        "id": 647,
        "name": "keldeo-resolute",
        "height": 1.4,
        "weight": 48.5,
        "species": "Colt Pokémon",
        "types": [
            "fighting",
            "water"
        ],
        "description": "When it is resolute, its body fills with power and it\nbecomes swifter. Its jumps are then too fast\nto follow.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10024.png"
    },
    {
        "id": 648,
        "name": "meloetta-aria",
        "height": 0.6,
        "weight": 6.5,
        "species": "Melody Pokémon",
        "types": [
            "psychic",
            "normal"
        ],
        "description": "Its melodies are sung with a special vocalization\nmethod that can control the feelings of those who\nhear it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png"
    },
    {
        "id": 648,
        "name": "meloetta-pirouette",
        "height": 0.6,
        "weight": 6.5,
        "species": "Melody Pokémon",
        "types": [
            "fighting",
            "normal"
        ],
        "description": "Its melodies are sung with a special vocalization\nmethod that can control the feelings of those who\nhear it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10018.png"
    },
    {
        "id": 649,
        "name": "genesect",
        "height": 1.5,
        "weight": 82.5,
        "species": "Paleozoic Pokémon",
        "types": [
            "steel",
            "bug"
        ],
        "description": "This Pokémon existed 300 million years ago. Team\nPlasma altered it and attached a cannon to its back.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png"
    },
    {
        "id": 650,
        "name": "chespin",
        "height": 0.4,
        "weight": 9,
        "species": "Spiny Nut Pokémon",
        "types": [
            "grass"
        ],
        "description": "Such a thick shell of wood covers its head and back\nthat even a direct hit from a truck wouldn’t faze it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png"
    },
    {
        "id": 651,
        "name": "quilladin",
        "height": 0.7,
        "weight": 29,
        "species": "Spiny Armor Pokémon",
        "types": [
            "grass"
        ],
        "description": "They strengthen their lower bodies by\nrunning into one another. They are very\nkind and won’t start fights.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png"
    },
    {
        "id": 652,
        "name": "chesnaught",
        "height": 1.6,
        "weight": 90,
        "species": "Spiny Armor Pokémon",
        "types": [
            "fighting",
            "grass"
        ],
        "description": "When it takes a defensive posture with its fists\nguarding its face, it could withstand a bomb blast.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png"
    },
    {
        "id": 653,
        "name": "fennekin",
        "height": 0.4,
        "weight": 9.4,
        "species": "Fox Pokémon",
        "types": [
            "fire"
        ],
        "description": "As it walks, it munches on a twig in place\nof a snack. It intimidates opponents\nby puffing hot air out of its ears.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png"
    },
    {
        "id": 654,
        "name": "braixen",
        "height": 1,
        "weight": 14.5,
        "species": "Fox Pokémon",
        "types": [
            "fire"
        ],
        "description": "When the twig is plucked from its tail,\nfriction sets the twig alight. The flame\nis used to send signals to its allies.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png"
    },
    {
        "id": 655,
        "name": "delphox",
        "height": 1.5,
        "weight": 39,
        "species": "Fox Pokémon",
        "types": [
            "psychic",
            "fire"
        ],
        "description": "Using psychic power, it generates a\nfiery vortex of 5,400 degrees Fahrenheit,\nincinerating foes swept into this whirl of flame.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png"
    },
    {
        "id": 656,
        "name": "froakie",
        "height": 0.3,
        "weight": 7,
        "species": "Bubble Frog Pokémon",
        "types": [
            "water"
        ],
        "description": "It protects its skin by covering its body in\ndelicate bubbles. Beneath its happy-go-lucky air,\nit keeps a watchful eye on its surroundings.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png"
    },
    {
        "id": 657,
        "name": "frogadier",
        "height": 0.6,
        "weight": 10.9,
        "species": "Bubble Frog Pokémon",
        "types": [
            "water"
        ],
        "description": "Its swiftness is unparalleled.\nIt can scale a tower of more\nthan 2,000 feet in a minute’s time.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png"
    },
    {
        "id": 658,
        "name": "greninja",
        "height": 1.5,
        "weight": 40,
        "species": "Ninja Pokémon",
        "types": [
            "dark",
            "water"
        ],
        "description": "It appears and vanishes with a ninja’s grace.\nIt toys with its enemies using swift movements, while\nslicing them with throwing stars of sharpest water.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png"
    },
    {
        "id": 658,
        "name": "greninja-battle-bond",
        "height": 1.5,
        "weight": 40,
        "species": "Ninja Pokémon",
        "types": [
            "dark",
            "water"
        ],
        "description": "It appears and vanishes with a ninja’s grace.\nIt toys with its enemies using swift movements, while\nslicing them with throwing stars of sharpest water.",
        "sprite": null
    },
    {
        "id": 658,
        "name": "greninja-ash",
        "height": 1.5,
        "weight": 40,
        "species": "Ninja Pokémon",
        "types": [
            "dark",
            "water"
        ],
        "description": "It appears and vanishes with a ninja’s grace.\nIt toys with its enemies using swift movements, while\nslicing them with throwing stars of sharpest water.",
        "sprite": null
    },
    {
        "id": 659,
        "name": "bunnelby",
        "height": 0.4,
        "weight": 5,
        "species": "Digging Pokémon",
        "types": [
            "normal"
        ],
        "description": "It has ears like shovels. Digging holes\nstrengthens its ears so much that they\ncan sever thick roots effortlessly.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png"
    },
    {
        "id": 660,
        "name": "diggersby",
        "height": 1,
        "weight": 42.4,
        "species": "Digging Pokémon",
        "types": [
            "ground",
            "normal"
        ],
        "description": "As powerful as an excavator, its ears\ncan reduce dense bedrock to rubble.\nWhen it’s finished digging, it lounges lazily.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png"
    },
    {
        "id": 661,
        "name": "fletchling",
        "height": 0.3,
        "weight": 1.7,
        "species": "Tiny Robin Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "When it’s excited, its temperature can double,\nspiking hormone production in its body.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png"
    },
    {
        "id": 662,
        "name": "fletchinder",
        "height": 0.7,
        "weight": 16,
        "species": "Ember Pokémon",
        "types": [
            "flying",
            "fire"
        ],
        "description": "It will not tolerate other Fletchinder entering its\nterritory, which has a radius of several miles.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png"
    },
    {
        "id": 663,
        "name": "talonflame",
        "height": 1.2,
        "weight": 24.5,
        "species": "Scorching Pokémon",
        "types": [
            "flying",
            "fire"
        ],
        "description": "It zooms directly at its prey at flight speeds of\nclose to 310 mph, while fiery embers scatter\nfrom gaps in its feathers.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png"
    },
    {
        "id": 664,
        "name": "scatterbug",
        "height": 0.3,
        "weight": 2.5,
        "species": "Scatterdust Pokémon",
        "types": [
            "bug"
        ],
        "description": "The powder that covers its body\nregulates its temperature, so it\ncan live in any region or climate.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png"
    },
    {
        "id": 665,
        "name": "spewpa",
        "height": 0.3,
        "weight": 8.4,
        "species": "Scatterdust Pokémon",
        "types": [
            "bug"
        ],
        "description": "The beaks of bird Pokémon can’t begin\nto scratch its stalwart body.\nTo defend itself, it spews powder.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png"
    },
    {
        "id": 666,
        "name": "vivillon",
        "height": 1.2,
        "weight": 17,
        "species": "Scale Pokémon",
        "types": [
            "flying",
            "bug"
        ],
        "description": "The patterns on this Pokémon’s wings\ndepend on the climate and topography\nof its habitat. It scatters colorful scales.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png"
    },
    {
        "id": 667,
        "name": "litleo",
        "height": 0.6,
        "weight": 13.5,
        "species": "Lion Cub Pokémon",
        "types": [
            "normal",
            "fire"
        ],
        "description": "They set off on their own from their pride\nand live by themselves to become stronger.\nThese hot-blooded Pokémon are quick to fight.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png"
    },
    {
        "id": 668,
        "name": "pyroar",
        "height": 1.5,
        "weight": 81.5,
        "species": "Royal Pokémon",
        "types": [
            "normal",
            "fire"
        ],
        "description": "With fiery breath of more than 10,000 degrees\nFahrenheit, they viciously threaten any challenger.\nThe females protect the pride’s cubs.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png"
    },
    {
        "id": 669,
        "name": "flabebe",
        "height": 0.1,
        "weight": 0.1,
        "species": "Single Bloom Pokémon",
        "types": [
            "fairy"
        ],
        "description": "When it finds a flower it likes, it dwells on\nthat flower its whole life long. It floats in the\nwind’s embrace with an untroubled heart.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png"
    },
    {
        "id": 670,
        "name": "floette",
        "height": 0.2,
        "weight": 0.9,
        "species": "Single Bloom Pokémon",
        "types": [
            "fairy"
        ],
        "description": "When the flowers of a well-tended flower bed bloom,\nit appears and celebrates with an elegant dance.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png"
    },
    {
        "id": 670,
        "name": "floette-eternal",
        "height": 0.2,
        "weight": 0.9,
        "species": "Single Bloom Pokémon",
        "types": [
            "fairy"
        ],
        "description": "When the flowers of a well-tended flower bed bloom,\nit appears and celebrates with an elegant dance.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10061.png"
    },
    {
        "id": 671,
        "name": "florges",
        "height": 1.1,
        "weight": 10,
        "species": "Garden Pokémon",
        "types": [
            "fairy"
        ],
        "description": "In times long past, governors of castles\nwould invite Florges to create flower gardens\nto embellish the castle domains.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png"
    },
    {
        "id": 672,
        "name": "skiddo",
        "height": 0.9,
        "weight": 31,
        "species": "Mount Pokémon",
        "types": [
            "grass"
        ],
        "description": "If it has sunshine and water, it doesn’t\nneed to eat, because it can generate\nenergy from the leaves on its back.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png"
    },
    {
        "id": 673,
        "name": "gogoat",
        "height": 1.7,
        "weight": 91,
        "species": "Mount Pokémon",
        "types": [
            "grass"
        ],
        "description": "They inhabit mountainous regions.\nThe leader of the herd is decided by\na battle of clashing horns.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png"
    },
    {
        "id": 674,
        "name": "pancham",
        "height": 0.6,
        "weight": 8,
        "species": "Playful Pokémon",
        "types": [
            "fighting"
        ],
        "description": "There’s no point to the leaf in its mouth, aside\nfrom an effort to look cool. It’s mischievous,\nso it’s not well suited to inexperienced Trainers.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png"
    },
    {
        "id": 675,
        "name": "pangoro",
        "height": 2.1,
        "weight": 136,
        "species": "Daunting Pokémon",
        "types": [
            "dark",
            "fighting"
        ],
        "description": "From the slight twitches of its bamboo leaf, it\ndeduces its opponent’s movements. It’s eager to\ntussle but kindhearted toward its companions.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png"
    },
    {
        "id": 676,
        "name": "furfrou",
        "height": 1.2,
        "weight": 28,
        "species": "Poodle Pokémon",
        "types": [
            "normal"
        ],
        "description": "Historically, in the Kalos region, these Pokémon\nwere the designated guardians of the king.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png"
    },
    {
        "id": 677,
        "name": "espurr",
        "height": 0.3,
        "weight": 3.5,
        "species": "Restraint Pokémon",
        "types": [
            "psychic"
        ],
        "description": "It has enough psychic energy to blast\neverything within 300 feet of itself,\nbut it has no control over its power.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png"
    },
    {
        "id": 678,
        "name": "meowstic-male",
        "height": 0.6,
        "weight": 8.5,
        "species": "Constraint Pokémon",
        "types": [
            "psychic"
        ],
        "description": "The eyeball patterns on the interior of its ears\nemit psychic energy. It keeps the patterns tightly\ncovered because that power is too immense.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png"
    },
    {
        "id": 678,
        "name": "meowstic-female",
        "height": 0.6,
        "weight": 8.5,
        "species": "Constraint Pokémon",
        "types": [
            "psychic"
        ],
        "description": "The eyeball patterns on the interior of its ears\nemit psychic energy. It keeps the patterns tightly\ncovered because that power is too immense.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10025.png"
    },
    {
        "id": 679,
        "name": "honedge",
        "height": 0.8,
        "weight": 2,
        "species": "Sword Pokémon",
        "types": [
            "ghost",
            "steel"
        ],
        "description": "If anyone dares to grab its hilt, it wraps\na blue cloth around that person’s arm and\ndrains that person’s life energy completely.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png"
    },
    {
        "id": 680,
        "name": "doublade",
        "height": 0.8,
        "weight": 4.5,
        "species": "Sword Pokémon",
        "types": [
            "ghost",
            "steel"
        ],
        "description": "The complex attack patterns of its two swords\nare unstoppable, even for an opponent\ngreatly accomplished at swordplay.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png"
    },
    {
        "id": 681,
        "name": "aegislash-shield",
        "height": 1.7,
        "weight": 53,
        "species": "Royal Sword Pokémon",
        "types": [
            "ghost",
            "steel"
        ],
        "description": "Apparently, it can detect the innate qualities\nof leadership. According to legend, whoever it\nrecognizes is destined to become king.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png"
    },
    {
        "id": 681,
        "name": "aegislash-blade",
        "height": 1.7,
        "weight": 53,
        "species": "Royal Sword Pokémon",
        "types": [
            "ghost",
            "steel"
        ],
        "description": "Apparently, it can detect the innate qualities\nof leadership. According to legend, whoever it\nrecognizes is destined to become king.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10026.png"
    },
    {
        "id": 682,
        "name": "spritzee",
        "height": 0.2,
        "weight": 0.5,
        "species": "Perfume Pokémon",
        "types": [
            "fairy"
        ],
        "description": "In the past, rather than using perfume,\nroyal ladies carried a Spritzee\nthat would waft a fragrance they liked.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png"
    },
    {
        "id": 683,
        "name": "aromatisse",
        "height": 0.8,
        "weight": 15.5,
        "species": "Fragrance Pokémon",
        "types": [
            "fairy"
        ],
        "description": "Its scent is so overpowering that, unless a Trainer\nhappens to really enjoy the smell, he or she will\nhave a hard time walking alongside it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png"
    },
    {
        "id": 684,
        "name": "swirlix",
        "height": 0.4,
        "weight": 3.5,
        "species": "Cotton Candy Pokémon",
        "types": [
            "fairy"
        ],
        "description": "Because it eats nothing but sweets,\nits fur is as sticky sweet as cotton candy.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png"
    },
    {
        "id": 685,
        "name": "slurpuff",
        "height": 0.8,
        "weight": 5,
        "species": "Meringue Pokémon",
        "types": [
            "fairy"
        ],
        "description": "Its sense of smell is 100 million times better than\na human’s, so even the faintest scent tells it about\neverything in the area. It’s like it can see with its nose!",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png"
    },
    {
        "id": 686,
        "name": "inkay",
        "height": 0.4,
        "weight": 3.5,
        "species": "Revolving Pokémon",
        "types": [
            "psychic",
            "dark"
        ],
        "description": "It flashes the light-emitting spots on its body,\nwhich drains its opponent’s will to fight.\nIt takes the opportunity to scuttle away and hide.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png"
    },
    {
        "id": 687,
        "name": "malamar",
        "height": 1.5,
        "weight": 47,
        "species": "Overturning Pokémon",
        "types": [
            "psychic",
            "dark"
        ],
        "description": "It lures its prey close with hypnotic motions,\nthen wraps its tentacles around it before\nfinishing it off with digestive fluids.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png"
    },
    {
        "id": 688,
        "name": "binacle",
        "height": 0.5,
        "weight": 31,
        "species": "Two-Handed Pokémon",
        "types": [
            "water",
            "rock"
        ],
        "description": "They stretch and then contract, yanking their\nrocks along with them in bold hops. They eat\nseaweed that washes up on the shoreline.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png"
    },
    {
        "id": 689,
        "name": "barbaracle",
        "height": 1.3,
        "weight": 96,
        "species": "Collective Pokémon",
        "types": [
            "water",
            "rock"
        ],
        "description": "Barbaracle’s legs and hands have minds\nof their own, and they will move independently.\nBut they usually follow the head’s orders.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png"
    },
    {
        "id": 690,
        "name": "skrelp",
        "height": 0.5,
        "weight": 7.3,
        "species": "Mock Kelp Pokémon",
        "types": [
            "water",
            "poison"
        ],
        "description": "It looks just like rotten kelp. It hides from foes\nwhile storing up power for its evolution.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png"
    },
    {
        "id": 691,
        "name": "dragalge",
        "height": 1.8,
        "weight": 81.5,
        "species": "Mock Kelp Pokémon",
        "types": [
            "dragon",
            "poison"
        ],
        "description": "Tales are told of ships that wander into\nseas where Dragalge live, never to return.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png"
    },
    {
        "id": 692,
        "name": "clauncher",
        "height": 0.5,
        "weight": 8.3,
        "species": "Water Gun Pokémon",
        "types": [
            "water"
        ],
        "description": "Through controlled explosions of internal gas,\nit can expel water like a pistol shot.\nAt close distances, it can shatter rock.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png"
    },
    {
        "id": 693,
        "name": "clawitzer",
        "height": 1.3,
        "weight": 35.3,
        "species": "Howitzer Pokémon",
        "types": [
            "water"
        ],
        "description": "By expelling water from the nozzle in the back\nof its claw, it can move at a speed of 60 knots.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png"
    },
    {
        "id": 694,
        "name": "helioptile",
        "height": 0.5,
        "weight": 6,
        "species": "Generator Pokémon",
        "types": [
            "normal",
            "electric"
        ],
        "description": "The frills on either side of its head have cells\nthat generate electricity when exposed to sunlight.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png"
    },
    {
        "id": 695,
        "name": "heliolisk",
        "height": 1,
        "weight": 21,
        "species": "Generator Pokémon",
        "types": [
            "normal",
            "electric"
        ],
        "description": "It stimulates its muscles with electricity,\nboosting the strength in its legs and enabling\nit to run 100 yards in five seconds.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png"
    },
    {
        "id": 696,
        "name": "tyrunt",
        "height": 0.8,
        "weight": 26,
        "species": "Royal Heir Pokémon",
        "types": [
            "dragon",
            "rock"
        ],
        "description": "Its immense jaws have enough destructive\nforce that it can chew up an automobile.\nIt lived 100 million years ago.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png"
    },
    {
        "id": 697,
        "name": "tyrantrum",
        "height": 2.5,
        "weight": 270,
        "species": "Despot Pokémon",
        "types": [
            "dragon",
            "rock"
        ],
        "description": "Nothing could stop this Pokémon\n100 million years ago,\nso it behaved like a king.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png"
    },
    {
        "id": 698,
        "name": "amaura",
        "height": 1.3,
        "weight": 25.2,
        "species": "Tundra Pokémon",
        "types": [
            "ice",
            "rock"
        ],
        "description": "This calm Pokémon lived in a cold land where\nthere were no violent predators like Tyrantrum.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png"
    },
    {
        "id": 699,
        "name": "aurorus",
        "height": 2.7,
        "weight": 225,
        "species": "Tundra Pokémon",
        "types": [
            "ice",
            "rock"
        ],
        "description": "Using its diamond-shaped crystals,\nit can instantly create a wall of\nice to block an opponent’s attack.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png"
    },
    {
        "id": 700,
        "name": "sylveon",
        "height": 1,
        "weight": 23.5,
        "species": "Intertwining Pokémon",
        "types": [
            "fairy"
        ],
        "description": "When this Pokémon sights its prey, it swirls its\nribbonlike feelers as a distraction. A moment\nlater, it pounces.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png"
    },
    {
        "id": 701,
        "name": "hawlucha",
        "height": 0.8,
        "weight": 21.5,
        "species": "Wrestling Pokémon",
        "types": [
            "flying",
            "fighting"
        ],
        "description": "With its wings, it controls its position in the air.\nIt likes to attack from above, a maneuver that\nis difficult to defend against.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png"
    },
    {
        "id": 702,
        "name": "dedenne",
        "height": 0.2,
        "weight": 2.2,
        "species": "Antenna Pokémon",
        "types": [
            "fairy",
            "electric"
        ],
        "description": "It uses its tail to absorb electricity from\npower plants or from outlets in houses,\nand then it fires the electricity from its whiskers.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png"
    },
    {
        "id": 703,
        "name": "carbink",
        "height": 0.3,
        "weight": 5.7,
        "species": "Jewel Pokémon",
        "types": [
            "fairy",
            "rock"
        ],
        "description": "Although this Pokémon is not especially rare,\nits glittering, jewel-draped body draws\nattention from people.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png"
    },
    {
        "id": 704,
        "name": "goomy",
        "height": 0.3,
        "weight": 2.8,
        "species": "Soft Tissue Pokémon",
        "types": [
            "dragon"
        ],
        "description": "Its source of protection is its slimy, germ-laden\nmucous membrane. Anyone who touches it\nneeds some thorough hand-washing.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png"
    },
    {
        "id": 705,
        "name": "sliggoo",
        "height": 0.8,
        "weight": 17.5,
        "species": "Soft Tissue Pokémon",
        "types": [
            "dragon"
        ],
        "description": "This Pokémon’s mucous can dissolve anything.\nToothless, it sprays mucous on its prey. Once\nthey’re nicely dissolved, it slurps them up.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png"
    },
    {
        "id": 706,
        "name": "goodra",
        "height": 2,
        "weight": 150.5,
        "species": "Dragon Pokémon",
        "types": [
            "dragon"
        ],
        "description": "It gets picked on because it’s meek. But then,\nwhoever teased it gets to feel the full force of\nits horns and a good swatting from its thick tail.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png"
    },
    {
        "id": 707,
        "name": "klefki",
        "height": 0.2,
        "weight": 3,
        "species": "Key Ring Pokémon",
        "types": [
            "fairy",
            "steel"
        ],
        "description": "It inserts its horn into chinks in metal, absorbing\nmetal ions. For some reason, it collects keys.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png"
    },
    {
        "id": 708,
        "name": "phantump",
        "height": 0.4,
        "weight": 7,
        "species": "Stump Pokémon",
        "types": [
            "grass",
            "ghost"
        ],
        "description": "According to legend, medicine to cure any illness\ncan be made by plucking the green leaves on its\nhead, brewing them, and boiling down the liquid.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png"
    },
    {
        "id": 709,
        "name": "trevenant",
        "height": 1.5,
        "weight": 71,
        "species": "Elder Tree Pokémon",
        "types": [
            "grass",
            "ghost"
        ],
        "description": "Through its roots, it exerts control over other\ntrees. A deadly curse falls upon anyone cutting\ndown trees in forests where Trevenant dwell.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png"
    },
    {
        "id": 710,
        "name": "pumpkaboo-average",
        "height": 0.4,
        "weight": 5,
        "species": "Pumpkin Pokémon",
        "types": [
            "grass",
            "ghost"
        ],
        "description": "It is said to carry wandering spirits\nto the place where they belong\nso they can move on.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png"
    },
    {
        "id": 710,
        "name": "pumpkaboo-small",
        "height": 0.3,
        "weight": 3.5,
        "species": "Pumpkin Pokémon",
        "types": [
            "grass",
            "ghost"
        ],
        "description": "It is said to carry wandering spirits\nto the place where they belong\nso they can move on.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10027.png"
    },
    {
        "id": 710,
        "name": "pumpkaboo-super",
        "height": 0.8,
        "weight": 15,
        "species": "Pumpkin Pokémon",
        "types": [
            "grass",
            "ghost"
        ],
        "description": "It is said to carry wandering spirits\nto the place where they belong\nso they can move on.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10029.png"
    },
    {
        "id": 710,
        "name": "pumpkaboo-large",
        "height": 0.5,
        "weight": 7.5,
        "species": "Pumpkin Pokémon",
        "types": [
            "grass",
            "ghost"
        ],
        "description": "It is said to carry wandering spirits\nto the place where they belong\nso they can move on.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10028.png"
    },
    {
        "id": 711,
        "name": "gourgeist-average",
        "height": 0.9,
        "weight": 12.5,
        "species": "Pumpkin Pokémon",
        "types": [
            "grass",
            "ghost"
        ],
        "description": "It enwraps its prey in its hairlike arms.\nIt sings joyfully as it observes the\nsuffering of its prey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png"
    },
    {
        "id": 711,
        "name": "gourgeist-small",
        "height": 0.7,
        "weight": 9.5,
        "species": "Pumpkin Pokémon",
        "types": [
            "grass",
            "ghost"
        ],
        "description": "It enwraps its prey in its hairlike arms.\nIt sings joyfully as it observes the\nsuffering of its prey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10030.png"
    },
    {
        "id": 711,
        "name": "gourgeist-large",
        "height": 1.1,
        "weight": 14,
        "species": "Pumpkin Pokémon",
        "types": [
            "grass",
            "ghost"
        ],
        "description": "It enwraps its prey in its hairlike arms.\nIt sings joyfully as it observes the\nsuffering of its prey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10031.png"
    },
    {
        "id": 711,
        "name": "gourgeist-super",
        "height": 1.7,
        "weight": 39,
        "species": "Pumpkin Pokémon",
        "types": [
            "grass",
            "ghost"
        ],
        "description": "It enwraps its prey in its hairlike arms.\nIt sings joyfully as it observes the\nsuffering of its prey.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10032.png"
    },
    {
        "id": 712,
        "name": "bergmite",
        "height": 1,
        "weight": 99.5,
        "species": "Ice Chunk Pokémon",
        "types": [
            "ice"
        ],
        "description": "Using air of -150 degrees Fahrenheit, they\nfreeze opponents solid. They live in herds\nabove the snow line on mountains.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png"
    },
    {
        "id": 713,
        "name": "avalugg",
        "height": 2,
        "weight": 505,
        "species": "Iceberg Pokémon",
        "types": [
            "ice"
        ],
        "description": "The way several Bergmite huddle\non its back makes it look like\nan aircraft carrier made of ice.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png"
    },
    {
        "id": 714,
        "name": "noibat",
        "height": 0.5,
        "weight": 8,
        "species": "Sound Wave Pokémon",
        "types": [
            "dragon",
            "flying"
        ],
        "description": "Even a robust wrestler will become\ndizzy and unable to stand when exposed\nto its 200,000-hertz ultrasonic waves.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png"
    },
    {
        "id": 715,
        "name": "noivern",
        "height": 1.5,
        "weight": 85,
        "species": "Sound Wave Pokémon",
        "types": [
            "dragon",
            "flying"
        ],
        "description": "The ultrasonic waves it emits from its ears\ncan reduce a large boulder to pebbles.\nIt swoops out of the dark to attack.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png"
    },
    {
        "id": 716,
        "name": "xerneas",
        "height": 3,
        "weight": 215,
        "species": "Life Pokémon",
        "types": [
            "fairy"
        ],
        "description": "When the horns on its head shine\nin seven colors, it is said to be\nsharing everlasting life.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png"
    },
    {
        "id": 717,
        "name": "yveltal",
        "height": 5.8,
        "weight": 203,
        "species": "Destruction Pokémon",
        "types": [
            "flying",
            "dark"
        ],
        "description": "When its life comes to an end, it absorbs\nthe life energy of every living thing\nand turns into a cocoon once more.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png"
    },
    {
        "id": 718,
        "name": "zygarde",
        "height": 5,
        "weight": 305,
        "species": "Order Pokémon",
        "types": [
            "ground",
            "dragon"
        ],
        "description": "It’s thought to be monitoring the ecosystem.\nThere are rumors that even greater power lies\nhidden within it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png"
    },
    {
        "id": 718,
        "name": "zygarde-50",
        "height": 5,
        "weight": 305,
        "species": "Order Pokémon",
        "types": [
            "ground",
            "dragon"
        ],
        "description": "It’s thought to be monitoring the ecosystem.\nThere are rumors that even greater power lies\nhidden within it.",
        "sprite": null
    },
    {
        "id": 718,
        "name": "zygarde-complete",
        "height": 4.5,
        "weight": 610,
        "species": "Order Pokémon",
        "types": [
            "ground",
            "dragon"
        ],
        "description": "It’s thought to be monitoring the ecosystem.\nThere are rumors that even greater power lies\nhidden within it.",
        "sprite": null
    },
    {
        "id": 718,
        "name": "zygarde-10",
        "height": 1.2,
        "weight": 33.5,
        "species": "Order Pokémon",
        "types": [
            "ground",
            "dragon"
        ],
        "description": "It’s thought to be monitoring the ecosystem.\nThere are rumors that even greater power lies\nhidden within it.",
        "sprite": null
    },
    {
        "id": 719,
        "name": "diancie",
        "height": 0.7,
        "weight": 8.8,
        "species": "Jewel Pokémon",
        "types": [
            "fairy",
            "rock"
        ],
        "description": "It can instantly create many diamonds\nby compressing the carbon in the air\nbetween its hands.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png"
    },
    {
        "id": 719,
        "name": "diancie-mega",
        "height": 1.1,
        "weight": 27.8,
        "species": "Jewel Pokémon",
        "types": [
            "fairy",
            "rock"
        ],
        "description": "It can instantly create many diamonds\nby compressing the carbon in the air\nbetween its hands.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png"
    },
    {
        "id": 720,
        "name": "hoopa",
        "height": 0.5,
        "weight": 9,
        "species": "Mischief Pokémon",
        "types": [
            "ghost",
            "psychic"
        ],
        "description": "It is said to be able to seize anything it desires\nwith its six rings and six huge arms. With its power\nsealed, it is transformed into a much smaller form.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png"
    },
    {
        "id": 720,
        "name": "hoopa-unbound",
        "height": 6.5,
        "weight": 490,
        "species": "Mischief Pokémon",
        "types": [
            "dark",
            "psychic"
        ],
        "description": "It is said to be able to seize anything it desires\nwith its six rings and six huge arms. With its power\nsealed, it is transformed into a much smaller form.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10086.png"
    },
    {
        "id": 721,
        "name": "volcanion",
        "height": 1.7,
        "weight": 195,
        "species": "Steam Pokémon",
        "types": [
            "water",
            "fire"
        ],
        "description": "It expels its internal steam from the\narms on its back. It has enough\npower to blow away a mountain.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png"
    },
    {
        "id": 722,
        "name": "rowlet",
        "height": 0.3,
        "weight": 1.5,
        "species": "Grass Quill Pokémon",
        "types": [
            "flying",
            "grass"
        ],
        "description": "Silently it glides, drawing near its targets. Before\nthey even notice it, it begins to pelt them with\nvicious kicks.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png"
    },
    {
        "id": 723,
        "name": "dartrix",
        "height": 0.7,
        "weight": 16,
        "species": "Blade Quill Pokémon",
        "types": [
            "flying",
            "grass"
        ],
        "description": "It throws sharp feathers called blade quills\nat enemies or prey. It seldom misses.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png"
    },
    {
        "id": 724,
        "name": "decidueye",
        "height": 1.6,
        "weight": 36.6,
        "species": "Arrow Quill Pokémon",
        "types": [
            "ghost",
            "grass"
        ],
        "description": "Although basically cool and cautious, when it’s\ncaught by surprise, it’s seized by panic.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png"
    },
    {
        "id": 725,
        "name": "litten",
        "height": 0.4,
        "weight": 4.3,
        "species": "Fire Cat Pokémon",
        "types": [
            "fire"
        ],
        "description": "It doesn’t allow its emotions to be easily seen.\nEarning its trust takes time. It prefers solitude.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png"
    },
    {
        "id": 726,
        "name": "torracat",
        "height": 0.7,
        "weight": 25,
        "species": "Fire Cat Pokémon",
        "types": [
            "fire"
        ],
        "description": "It boasts powerful front legs. With a single\npunch, it can bend an iron bar right over.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png"
    },
    {
        "id": 727,
        "name": "incineroar",
        "height": 1.8,
        "weight": 83,
        "species": "Heel Pokémon",
        "types": [
            "dark",
            "fire"
        ],
        "description": "After hurling ferocious punches and flinging\nfurious kicks, it finishes opponents off by\nspewing fire from around its navel.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png"
    },
    {
        "id": 728,
        "name": "popplio",
        "height": 0.4,
        "weight": 7.5,
        "species": "Sea Lion Pokémon",
        "types": [
            "water"
        ],
        "description": "This Pokémon can control water bubbles. It\npractices diligently so it can learn to make\nbig bubbles.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png"
    },
    {
        "id": 729,
        "name": "brionne",
        "height": 0.6,
        "weight": 17.5,
        "species": "Pop Star Pokémon",
        "types": [
            "water"
        ],
        "description": "It cares deeply for its companions. When its\nTrainer is feeling down, it performs a cheery\ndance to try and help.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png"
    },
    {
        "id": 730,
        "name": "primarina",
        "height": 1.8,
        "weight": 44,
        "species": "Soloist Pokémon",
        "types": [
            "fairy",
            "water"
        ],
        "description": "Its singing voice is its chief weapon in battle.\nThis Pokémon’s Trainer must prioritize the daily\nmaintenance of its throat at all costs.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png"
    },
    {
        "id": 731,
        "name": "pikipek",
        "height": 0.3,
        "weight": 1.2,
        "species": "Woodpecker Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "This Pokémon feeds on berries, whose leftover\nseeds become the ammunition for the attacks it\nfires off from its mouth.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png"
    },
    {
        "id": 732,
        "name": "trumbeak",
        "height": 0.6,
        "weight": 14.8,
        "species": "Bugle Beak Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "By bending its beak, it can produce a variety of\ncalls and brand itself a noisy nuisance for\nits neighbors.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png"
    },
    {
        "id": 733,
        "name": "toucannon",
        "height": 1.1,
        "weight": 26,
        "species": "Cannon Pokémon",
        "types": [
            "flying",
            "normal"
        ],
        "description": "Within its beak, its internal gas ignites,\nexplosively launching seeds with enough power\nto pulverize boulders.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png"
    },
    {
        "id": 734,
        "name": "yungoos",
        "height": 0.4,
        "weight": 6,
        "species": "Loitering Pokémon",
        "types": [
            "normal"
        ],
        "description": "It wanders around in a never-ending search for\nfood. At dusk, it collapses from exhaustion and\nfalls asleep on the spot.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png"
    },
    {
        "id": 735,
        "name": "gumshoos",
        "height": 0.7,
        "weight": 14.2,
        "species": "Stakeout Pokémon",
        "types": [
            "normal"
        ],
        "description": "It adores having Rattata and Raticate for dinner,\nbut as it’s diurnal, it never encounters them.\nThis Pokémon boasts incredible patience.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png"
    },
    {
        "id": 735,
        "name": "gumshoos-totem",
        "height": 1.4,
        "weight": 60,
        "species": "Stakeout Pokémon",
        "types": [
            "normal"
        ],
        "description": "It adores having Rattata and Raticate for dinner,\nbut as it’s diurnal, it never encounters them.\nThis Pokémon boasts incredible patience.",
        "sprite": null
    },
    {
        "id": 736,
        "name": "grubbin",
        "height": 0.4,
        "weight": 4.4,
        "species": "Larva Pokémon",
        "types": [
            "bug"
        ],
        "description": "They often gather near places frequented by\nelectric Pokémon in order to avoid being\nattacked by bird Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png"
    },
    {
        "id": 737,
        "name": "charjabug",
        "height": 0.5,
        "weight": 10.5,
        "species": "Battery Pokémon",
        "types": [
            "electric",
            "bug"
        ],
        "description": "From the food it digests, it generates electricity,\nand it stores this energy in its electric sac.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png"
    },
    {
        "id": 738,
        "name": "vikavolt",
        "height": 1.5,
        "weight": 45,
        "species": "Stag Beetle Pokémon",
        "types": [
            "electric",
            "bug"
        ],
        "description": "It produces electricity via an electrical organ in\nits abdomen. It overwhelms bird Pokémon with\nshocking beams of electrical energy.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png"
    },
    {
        "id": 738,
        "name": "vikavolt-totem",
        "height": 2.6,
        "weight": 147.5,
        "species": "Stag Beetle Pokémon",
        "types": [
            "electric",
            "bug"
        ],
        "description": "It produces electricity via an electrical organ in\nits abdomen. It overwhelms bird Pokémon with\nshocking beams of electrical energy.",
        "sprite": null
    },
    {
        "id": 739,
        "name": "crabrawler",
        "height": 0.6,
        "weight": 7,
        "species": "Boxing Pokémon",
        "types": [
            "fighting"
        ],
        "description": "It punches so much, its pincers often come off\nfrom overuse, but they grow back quickly. What\nlittle meat they contain is rich and delicious.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png"
    },
    {
        "id": 740,
        "name": "crabominable",
        "height": 1.7,
        "weight": 180,
        "species": "Woolly Crab Pokémon",
        "types": [
            "ice",
            "fighting"
        ],
        "description": "It just throws punches indiscriminately. In times\nof desperation, it can lop off its own pincers\nand fire them like rockets.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png"
    },
    {
        "id": 741,
        "name": "oricorio-baile",
        "height": 0.6,
        "weight": 3.4,
        "species": "Dancing Pokémon",
        "types": [
            "flying",
            "fire"
        ],
        "description": "This Oricorio has sipped red nectar. Its\npassionate dance moves cause its enemies\nto combust in both body and mind.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png"
    },
    {
        "id": 741,
        "name": "oricorio-pom-pom",
        "height": 0.6,
        "weight": 3.4,
        "species": "Dancing Pokémon",
        "types": [
            "flying",
            "electric"
        ],
        "description": "This Oricorio has sipped red nectar. Its\npassionate dance moves cause its enemies\nto combust in both body and mind.",
        "sprite": null
    },
    {
        "id": 741,
        "name": "oricorio-pau",
        "height": 0.6,
        "weight": 3.4,
        "species": "Dancing Pokémon",
        "types": [
            "flying",
            "psychic"
        ],
        "description": "This Oricorio has sipped red nectar. Its\npassionate dance moves cause its enemies\nto combust in both body and mind.",
        "sprite": null
    },
    {
        "id": 741,
        "name": "oricorio-sensu",
        "height": 0.6,
        "weight": 3.4,
        "species": "Dancing Pokémon",
        "types": [
            "flying",
            "ghost"
        ],
        "description": "This Oricorio has sipped red nectar. Its\npassionate dance moves cause its enemies\nto combust in both body and mind.",
        "sprite": null
    },
    {
        "id": 742,
        "name": "cutiefly",
        "height": 0.1,
        "weight": 0.2,
        "species": "Bee Fly Pokémon",
        "types": [
            "fairy",
            "bug"
        ],
        "description": "Myriads of Cutiefly flutter above the heads of\npeople who have auras resembling those\nof flowers.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png"
    },
    {
        "id": 743,
        "name": "ribombee",
        "height": 0.2,
        "weight": 0.5,
        "species": "Bee Fly Pokémon",
        "types": [
            "fairy",
            "bug"
        ],
        "description": "Some of Ribombee’s pollen puffs are highly\nnutritious. They are sometimes sold\nas supplements.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png"
    },
    {
        "id": 744,
        "name": "rockruff",
        "height": 0.5,
        "weight": 9.2,
        "species": "Puppy Pokémon",
        "types": [
            "rock"
        ],
        "description": "This Pokémon has lived with people since times\nlong ago. It can sense when its Trainer is in the\ndumps and will stick close by its Trainer’s side.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png"
    },
    {
        "id": 745,
        "name": "lycanroc-midday",
        "height": 0.8,
        "weight": 25,
        "species": "Wolf Pokémon",
        "types": [
            "rock"
        ],
        "description": "When properly raised from a young age, it will\nbecome a trustworthy partner that will\nabsolutely never betray its Trainer.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png"
    },
    {
        "id": 745,
        "name": "lycanroc-midnight",
        "height": 1.1,
        "weight": 25,
        "species": "Wolf Pokémon",
        "types": [
            "rock"
        ],
        "description": "When properly raised from a young age, it will\nbecome a trustworthy partner that will\nabsolutely never betray its Trainer.",
        "sprite": null
    },
    {
        "id": 746,
        "name": "wishiwashi-solo",
        "height": 0.2,
        "weight": 0.3,
        "species": "Small Fry Pokémon",
        "types": [
            "water"
        ],
        "description": "It’s awfully weak and notably tasty, so everyone\nis always out to get it. As it happens, anyone\ntrying to bully it receives a painful lesson.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png"
    },
    {
        "id": 746,
        "name": "wishiwashi-school",
        "height": 8.2,
        "weight": 78.6,
        "species": "Small Fry Pokémon",
        "types": [
            "water"
        ],
        "description": "It’s awfully weak and notably tasty, so everyone\nis always out to get it. As it happens, anyone\ntrying to bully it receives a painful lesson.",
        "sprite": null
    },
    {
        "id": 747,
        "name": "mareanie",
        "height": 0.4,
        "weight": 8,
        "species": "Brutal Star Pokémon",
        "types": [
            "water",
            "poison"
        ],
        "description": "It’s found crawling on beaches and seafloors.\nThe coral that grows on Corsola’s head is as\ngood as a five-star banquet to this Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png"
    },
    {
        "id": 748,
        "name": "toxapex",
        "height": 0.7,
        "weight": 14.5,
        "species": "Brutal Star Pokémon",
        "types": [
            "water",
            "poison"
        ],
        "description": "Those attacked by Toxapex’s poison will suffer\nintense pain for three days and three nights.\nPost-recovery, there will be some aftereffects.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png"
    },
    {
        "id": 749,
        "name": "mudbray",
        "height": 1,
        "weight": 110,
        "species": "Donkey Pokémon",
        "types": [
            "ground"
        ],
        "description": "It has a stubborn, individualistic disposition.\nEating dirt, making mud, and playing in the mire\nall form part of its daily routine.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png"
    },
    {
        "id": 750,
        "name": "mudsdale",
        "height": 2.5,
        "weight": 920,
        "species": "Draft Horse Pokémon",
        "types": [
            "ground"
        ],
        "description": "Its heavy, mud-covered kicks are its best\nmeans of attack, and it can reduce large trucks\nto scrap without breaking a sweat.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png"
    },
    {
        "id": 751,
        "name": "dewpider",
        "height": 0.3,
        "weight": 4,
        "species": "Water Bubble Pokémon",
        "types": [
            "bug",
            "water"
        ],
        "description": "When it comes across enemies or potential prey,\nthis Pokémon smashes its\nwater-bubble-covered head into them.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png"
    },
    {
        "id": 752,
        "name": "araquanid",
        "height": 1.8,
        "weight": 82,
        "species": "Water Bubble Pokémon",
        "types": [
            "bug",
            "water"
        ],
        "description": "Despite what its appearance suggests, it cares\nfor others. If it finds vulnerable, weak Pokémon,\nit protectively brings them into its water bubble.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png"
    },
    {
        "id": 753,
        "name": "fomantis",
        "height": 0.3,
        "weight": 1.5,
        "species": "Sickle Grass Pokémon",
        "types": [
            "grass"
        ],
        "description": "They give off a sweet and refreshing scent.\nCutiefly often gather near the tall grass where\nFomantis are hiding.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png"
    },
    {
        "id": 754,
        "name": "lurantis",
        "height": 0.9,
        "weight": 18.5,
        "species": "Bloom Sickle Pokémon",
        "types": [
            "grass"
        ],
        "description": "It fires beams from its sickle-shaped petals.\nThese beams are powerful enough to cleave\nthrough thick metal plates.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png"
    },
    {
        "id": 754,
        "name": "lurantis-totem",
        "height": 1.5,
        "weight": 58,
        "species": "Bloom Sickle Pokémon",
        "types": [
            "grass"
        ],
        "description": "It fires beams from its sickle-shaped petals.\nThese beams are powerful enough to cleave\nthrough thick metal plates.",
        "sprite": null
    },
    {
        "id": 755,
        "name": "morelull",
        "height": 0.2,
        "weight": 1.5,
        "species": "Illuminating Pokémon",
        "types": [
            "fairy",
            "grass"
        ],
        "description": "As it drowses the day away, it nourishes itself\nby sucking from tree roots. It wakens at the fall\nof night, wandering off in search of a new tree.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png"
    },
    {
        "id": 756,
        "name": "shiinotic",
        "height": 1,
        "weight": 11.5,
        "species": "Illuminating Pokémon",
        "types": [
            "fairy",
            "grass"
        ],
        "description": "It emits flickering spores that cause drowsiness.\nWhen its prey succumb to sleep, this Pokémon\nfeeds on them by sucking in their energy.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png"
    },
    {
        "id": 757,
        "name": "salandit",
        "height": 0.6,
        "weight": 4.8,
        "species": "Toxic Lizard Pokémon",
        "types": [
            "fire",
            "poison"
        ],
        "description": "Volcanoes or dry, craggy places are its home.\nIt emanates a sweet-smelling poisonous gas\nthat attracts bug Pokémon, then attacks them.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png"
    },
    {
        "id": 758,
        "name": "salazzle",
        "height": 1.2,
        "weight": 22.2,
        "species": "Toxic Lizard Pokémon",
        "types": [
            "fire",
            "poison"
        ],
        "description": "Filled with pheromones, its poisonous gas can\nbe diluted to use in the production of\nluscious perfumes.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png"
    },
    {
        "id": 758,
        "name": "salazzle-totem",
        "height": 2.1,
        "weight": 81,
        "species": "Toxic Lizard Pokémon",
        "types": [
            "fire",
            "poison"
        ],
        "description": "Filled with pheromones, its poisonous gas can\nbe diluted to use in the production of\nluscious perfumes.",
        "sprite": null
    },
    {
        "id": 759,
        "name": "stufful",
        "height": 0.5,
        "weight": 6.8,
        "species": "Flailing Pokémon",
        "types": [
            "fighting",
            "normal"
        ],
        "description": "A touch from anyone except a known friend\nsends it into a surging frenzy. It’s an incredibly\ndangerous Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png"
    },
    {
        "id": 760,
        "name": "bewear",
        "height": 2.1,
        "weight": 135,
        "species": "Strong Arm Pokémon",
        "types": [
            "fighting",
            "normal"
        ],
        "description": "This Pokémon has the habit of hugging its\ncompanions. Many Trainers have left this world\nafter their spines were squashed by its hug.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png"
    },
    {
        "id": 761,
        "name": "bounsweet",
        "height": 0.3,
        "weight": 3.2,
        "species": "Fruit Pokémon",
        "types": [
            "grass"
        ],
        "description": "Although it’s too sugary for human consumption,\nBounsweet’s sweat can be watered down into a\njuice with just the right amount of sweetness.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png"
    },
    {
        "id": 762,
        "name": "steenee",
        "height": 0.7,
        "weight": 8.2,
        "species": "Fruit Pokémon",
        "types": [
            "grass"
        ],
        "description": "This Pokémon is always bouncing around\nenergetically. Other Pokémon are attracted by\nits lively appearance and pleasant aroma.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png"
    },
    {
        "id": 763,
        "name": "tsareena",
        "height": 1.2,
        "weight": 21.4,
        "species": "Fruit Pokémon",
        "types": [
            "grass"
        ],
        "description": "A Pokémon known for the beauty of its\nwell-shaped legs, it sometimes appears as a\nmascot in advertisements for beauty salons.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png"
    },
    {
        "id": 764,
        "name": "comfey",
        "height": 0.1,
        "weight": 0.3,
        "species": "Posy Picker Pokémon",
        "types": [
            "fairy"
        ],
        "description": "Baths prepared with the flowers from its vine\nhave a relaxing effect, so this Pokémon\nis a hit with many people.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png"
    },
    {
        "id": 765,
        "name": "oranguru",
        "height": 1.5,
        "weight": 76,
        "species": "Sage Pokémon",
        "types": [
            "psychic",
            "normal"
        ],
        "description": "Deep in the jungle, high in the lofty canopy, this\nPokémon abides. On rare occasions, it shows up\nat the beach to match wits with Slowking.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png"
    },
    {
        "id": 766,
        "name": "passimian",
        "height": 2,
        "weight": 82.8,
        "species": "Teamwork Pokémon",
        "types": [
            "fighting"
        ],
        "description": "They battle with hard berries for weapons.\nTheir techniques are passed from the boss to\nthe group, generation upon generation.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png"
    },
    {
        "id": 767,
        "name": "wimpod",
        "height": 0.5,
        "weight": 12,
        "species": "Turn Tail Pokémon",
        "types": [
            "water",
            "bug"
        ],
        "description": "Its habitat varies from beaches to seabeds.\nA natural scavenger, it will gleefully chow down\non anything edible, no matter how rotten.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png"
    },
    {
        "id": 768,
        "name": "golisopod",
        "height": 2,
        "weight": 108,
        "species": "Hard Scale Pokémon",
        "types": [
            "water",
            "bug"
        ],
        "description": "It battles skillfully with its six arms, but spends\nmost of its time peacefully meditating in caves\ndeep beneath the sea.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png"
    },
    {
        "id": 769,
        "name": "sandygast",
        "height": 0.5,
        "weight": 70,
        "species": "Sand Heap Pokémon",
        "types": [
            "ground",
            "ghost"
        ],
        "description": "It takes control of anyone who puts a hand in its\nmouth. And so it adds to the accumulation of\nits sand-mound body.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png"
    },
    {
        "id": 770,
        "name": "palossand",
        "height": 1.3,
        "weight": 250,
        "species": "Sand Castle Pokémon",
        "types": [
            "ground",
            "ghost"
        ],
        "description": "Buried beneath the castle are masses of\ndried-up bones from those whose vitality\nit has drained.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png"
    },
    {
        "id": 771,
        "name": "pyukumuku",
        "height": 0.3,
        "weight": 1.2,
        "species": "Sea Cucumber Pokémon",
        "types": [
            "water"
        ],
        "description": "These Pokémon line the beaches. The sticky\nmucous that covers their bodies can be used to\nsoothe sunburned skin. How convenient!",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png"
    },
    {
        "id": 772,
        "name": "type-null",
        "height": 1.9,
        "weight": 120.5,
        "species": "Synthetic Pokémon",
        "types": [
            "normal"
        ],
        "description": "Due to the danger that this synthetic Pokémon\nmay go on a rampage, it wears a control mask\nto restrain its power.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png"
    },
    {
        "id": 773,
        "name": "silvally",
        "height": 2.3,
        "weight": 100.5,
        "species": "Synthetic Pokémon",
        "types": [
            "normal"
        ],
        "description": "Although its name was Type: Null at first, the\nboy who evolved it into this form gave it the\nname by which it is now known.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png"
    },
    {
        "id": 774,
        "name": "minior-red-meteor",
        "height": 0.3,
        "weight": 40,
        "species": "Meteor Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "Strong impacts can knock it out of its shell. This\nPokémon was born from mutated nanoparticles.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png"
    },
    {
        "id": 774,
        "name": "minior-yellow-meteor",
        "height": 0.3,
        "weight": 40,
        "species": "Meteor Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "Strong impacts can knock it out of its shell. This\nPokémon was born from mutated nanoparticles.",
        "sprite": null
    },
    {
        "id": 774,
        "name": "minior-orange-meteor",
        "height": 0.3,
        "weight": 40,
        "species": "Meteor Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "Strong impacts can knock it out of its shell. This\nPokémon was born from mutated nanoparticles.",
        "sprite": null
    },
    {
        "id": 774,
        "name": "minior-blue-meteor",
        "height": 0.3,
        "weight": 40,
        "species": "Meteor Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "Strong impacts can knock it out of its shell. This\nPokémon was born from mutated nanoparticles.",
        "sprite": null
    },
    {
        "id": 774,
        "name": "minior-red",
        "height": 0.3,
        "weight": 0.3,
        "species": "Meteor Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "Strong impacts can knock it out of its shell. This\nPokémon was born from mutated nanoparticles.",
        "sprite": null
    },
    {
        "id": 774,
        "name": "minior-yellow",
        "height": 0.3,
        "weight": 0.3,
        "species": "Meteor Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "Strong impacts can knock it out of its shell. This\nPokémon was born from mutated nanoparticles.",
        "sprite": null
    },
    {
        "id": 774,
        "name": "minior-violet-meteor",
        "height": 0.3,
        "weight": 40,
        "species": "Meteor Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "Strong impacts can knock it out of its shell. This\nPokémon was born from mutated nanoparticles.",
        "sprite": null
    },
    {
        "id": 774,
        "name": "minior-green-meteor",
        "height": 0.3,
        "weight": 40,
        "species": "Meteor Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "Strong impacts can knock it out of its shell. This\nPokémon was born from mutated nanoparticles.",
        "sprite": null
    },
    {
        "id": 774,
        "name": "minior-indigo-meteor",
        "height": 0.3,
        "weight": 40,
        "species": "Meteor Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "Strong impacts can knock it out of its shell. This\nPokémon was born from mutated nanoparticles.",
        "sprite": null
    },
    {
        "id": 774,
        "name": "minior-orange",
        "height": 0.3,
        "weight": 0.3,
        "species": "Meteor Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "Strong impacts can knock it out of its shell. This\nPokémon was born from mutated nanoparticles.",
        "sprite": null
    },
    {
        "id": 774,
        "name": "minior-indigo",
        "height": 0.3,
        "weight": 0.3,
        "species": "Meteor Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "Strong impacts can knock it out of its shell. This\nPokémon was born from mutated nanoparticles.",
        "sprite": null
    },
    {
        "id": 774,
        "name": "minior-green",
        "height": 0.3,
        "weight": 0.3,
        "species": "Meteor Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "Strong impacts can knock it out of its shell. This\nPokémon was born from mutated nanoparticles.",
        "sprite": null
    },
    {
        "id": 774,
        "name": "minior-blue",
        "height": 0.3,
        "weight": 0.3,
        "species": "Meteor Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "Strong impacts can knock it out of its shell. This\nPokémon was born from mutated nanoparticles.",
        "sprite": null
    },
    {
        "id": 774,
        "name": "minior-violet",
        "height": 0.3,
        "weight": 0.3,
        "species": "Meteor Pokémon",
        "types": [
            "flying",
            "rock"
        ],
        "description": "Strong impacts can knock it out of its shell. This\nPokémon was born from mutated nanoparticles.",
        "sprite": null
    },
    {
        "id": 775,
        "name": "komala",
        "height": 0.4,
        "weight": 19.9,
        "species": "Drowsing Pokémon",
        "types": [
            "normal"
        ],
        "description": "The log it holds was given to it by its parents at\nbirth. It has also been known to cling to the arm\nof a friendly Trainer.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png"
    },
    {
        "id": 776,
        "name": "turtonator",
        "height": 2,
        "weight": 212,
        "species": "Blast Turtle Pokémon",
        "types": [
            "dragon",
            "fire"
        ],
        "description": "It gushes fire and poisonous gases from its\nnostrils. Its dung is an explosive substance and\ncan be put to various uses.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png"
    },
    {
        "id": 777,
        "name": "togedemaru",
        "height": 0.3,
        "weight": 3.3,
        "species": "Roly-Poly Pokémon",
        "types": [
            "steel",
            "electric"
        ],
        "description": "The long hairs on its back act as lightning rods.\nThe bolts of lightning it attracts are stored as\nenergy in its electric sac.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png"
    },
    {
        "id": 778,
        "name": "mimikyu-disguised",
        "height": 0.2,
        "weight": 0.7,
        "species": "Disguise Pokémon",
        "types": [
            "fairy",
            "ghost"
        ],
        "description": "A lonely Pokémon, it conceals its terrifying\nappearance beneath an old rag so it can get\ncloser to people and other Pokémon.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png"
    },
    {
        "id": 778,
        "name": "mimikyu-busted",
        "height": 0.2,
        "weight": 0.7,
        "species": "Disguise Pokémon",
        "types": [
            "fairy",
            "ghost"
        ],
        "description": "A lonely Pokémon, it conceals its terrifying\nappearance beneath an old rag so it can get\ncloser to people and other Pokémon.",
        "sprite": null
    },
    {
        "id": 778,
        "name": "mimikyu-totem-disguised",
        "height": 0.4,
        "weight": 2.8,
        "species": "Disguise Pokémon",
        "types": [
            "fairy",
            "ghost"
        ],
        "description": "A lonely Pokémon, it conceals its terrifying\nappearance beneath an old rag so it can get\ncloser to people and other Pokémon.",
        "sprite": null
    },
    {
        "id": 778,
        "name": "mimikyu-totem-busted",
        "height": 0.4,
        "weight": 2.8,
        "species": "Disguise Pokémon",
        "types": [
            "fairy",
            "ghost"
        ],
        "description": "A lonely Pokémon, it conceals its terrifying\nappearance beneath an old rag so it can get\ncloser to people and other Pokémon.",
        "sprite": null
    },
    {
        "id": 779,
        "name": "bruxish",
        "height": 0.9,
        "weight": 19,
        "species": "Gnash Teeth Pokémon",
        "types": [
            "psychic",
            "water"
        ],
        "description": "It stuns its prey with psychokinesis and then\ngrinds them to mush with its strong teeth.\nEven Shellder’s shell is no match for it.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png"
    },
    {
        "id": 780,
        "name": "drampa",
        "height": 3,
        "weight": 185,
        "species": "Placid Pokémon",
        "types": [
            "dragon",
            "normal"
        ],
        "description": "This Pokémon is friendly to people and loves\nchildren most of all. It comes from deep in the\nmountains to play with children it likes in town.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png"
    },
    {
        "id": 781,
        "name": "dhelmise",
        "height": 3.9,
        "weight": 210,
        "species": "Sea Creeper Pokémon",
        "types": [
            "grass",
            "ghost"
        ],
        "description": "The soul of seaweed adrift in the waves became\nreborn as this Pokémon. It maintains itself with\nnew infusions of seabed detritus and seaweed.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png"
    },
    {
        "id": 782,
        "name": "jangmo-o",
        "height": 0.6,
        "weight": 29.7,
        "species": "Scaly Pokémon",
        "types": [
            "dragon"
        ],
        "description": "They live in mountains where no trace of\nhumans can be detected. Jangmo-o grow\nlittle by little as they battle one another.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png"
    },
    {
        "id": 783,
        "name": "hakamo-o",
        "height": 1.2,
        "weight": 47,
        "species": "Scaly Pokémon",
        "types": [
            "fighting",
            "dragon"
        ],
        "description": "It sheds and regrows its scales on a continuous\nbasis. The scales become harder and sharper\neach time they’re regrown.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png"
    },
    {
        "id": 784,
        "name": "kommo-o",
        "height": 1.6,
        "weight": 78.2,
        "species": "Scaly Pokémon",
        "types": [
            "fighting",
            "dragon"
        ],
        "description": "Its rigid scales function as offense and defense.\nIn the past, its scales were processed and used\nto make weapons and other commodities.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png"
    },
    {
        "id": 784,
        "name": "kommo-o-totem",
        "height": 2.4,
        "weight": 207.5,
        "species": "Scaly Pokémon",
        "types": [
            "fighting",
            "dragon"
        ],
        "description": "Its rigid scales function as offense and defense.\nIn the past, its scales were processed and used\nto make weapons and other commodities.",
        "sprite": null
    },
    {
        "id": 785,
        "name": "tapu-koko",
        "height": 1.8,
        "weight": 20.5,
        "species": "Land Spirit Pokémon",
        "types": [
            "fairy",
            "electric"
        ],
        "description": "It confuses its enemies by flying too quickly for\nthe eye to follow. It has a hair-trigger temper\nbut forgets what made it angry an instant later.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png"
    },
    {
        "id": 786,
        "name": "tapu-lele",
        "height": 1.2,
        "weight": 18.6,
        "species": "Land Spirit Pokémon",
        "types": [
            "fairy",
            "psychic"
        ],
        "description": "As it flutters about, it scatters its strangely\nglowing scales. Touching them is said to restore\ngood health on the spot.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png"
    },
    {
        "id": 787,
        "name": "tapu-bulu",
        "height": 1.9,
        "weight": 45.5,
        "species": "Land Spirit Pokémon",
        "types": [
            "fairy",
            "grass"
        ],
        "description": "The guardian deity of Ula’ula is a lazy Pokémon.\nIt commands plants to immobilize its foes and\nthen deals them a savage blow with its horns.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png"
    },
    {
        "id": 788,
        "name": "tapu-fini",
        "height": 1.3,
        "weight": 21.2,
        "species": "Land Spirit Pokémon",
        "types": [
            "fairy",
            "water"
        ],
        "description": "The guardian deity of Poni, it can control water.\nPeople say it can create pure water that will\nwash away any uncleanness.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png"
    },
    {
        "id": 789,
        "name": "cosmog",
        "height": 0.2,
        "weight": 0.1,
        "species": "Nebula Pokémon",
        "types": [
            "psychic"
        ],
        "description": "In ages past, it was called the child of the stars.\nIt’s said to be a Pokémon from another world,\nbut no specific details are known.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png"
    },
    {
        "id": 790,
        "name": "cosmoem",
        "height": 0.1,
        "weight": 999.9,
        "species": "Protostar Pokémon",
        "types": [
            "psychic"
        ],
        "description": "There’s something accumulating around the\nblack core within its hard shell. People think\nthis Pokémon may come from another world.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png"
    },
    {
        "id": 791,
        "name": "solgaleo",
        "height": 3.4,
        "weight": 230,
        "species": "Sunne Pokémon",
        "types": [
            "steel",
            "psychic"
        ],
        "description": "This Pokémon is said to be a male evolution of\nCosmog. At the activation of its third eye, it\ndeparts for another world.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png"
    },
    {
        "id": 792,
        "name": "lunala",
        "height": 4,
        "weight": 120,
        "species": "Moone Pokémon",
        "types": [
            "ghost",
            "psychic"
        ],
        "description": "Said to live in another world, this Pokémon\ndevours light, drawing the moonless dark veil of\nnight over the brightness of day.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png"
    },
    {
        "id": 793,
        "name": "nihilego",
        "height": 1.2,
        "weight": 55.5,
        "species": "Parasite Pokémon",
        "types": [
            "poison",
            "rock"
        ],
        "description": "One of the Ultra Beasts. It’s unclear whether or\nnot this Pokémon is sentient, but sometimes it\ncan be observed behaving like a young girl.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png"
    },
    {
        "id": 794,
        "name": "buzzwole",
        "height": 2.4,
        "weight": 333.6,
        "species": "Swollen Pokémon",
        "types": [
            "fighting",
            "bug"
        ],
        "description": "A mysterious life-form called an Ultra Beast.\nWitnesses saw it pulverize a dump truck with a\nsingle punch.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png"
    },
    {
        "id": 795,
        "name": "pheromosa",
        "height": 1.8,
        "weight": 25,
        "species": "Lissome Pokémon",
        "types": [
            "fighting",
            "bug"
        ],
        "description": "One of the Ultra Beasts. It refuses to touch\nanything, perhaps because it senses some\nuncleanness in this world.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png"
    },
    {
        "id": 796,
        "name": "xurkitree",
        "height": 3.8,
        "weight": 100,
        "species": "Glowing Pokémon",
        "types": [
            "electric"
        ],
        "description": "It appeared from the Ultra Wormhole. It raided a\npower plant, so people think it energizes itself\nwith electricity.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png"
    },
    {
        "id": 797,
        "name": "celesteela",
        "height": 9.2,
        "weight": 999.9,
        "species": "Launch Pokémon",
        "types": [
            "flying",
            "steel"
        ],
        "description": "One kind of Ultra Beast. Witnesses have seen it\nburn down a forest by expelling gas from its\ntwo arms.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png"
    },
    {
        "id": 798,
        "name": "kartana",
        "height": 0.3,
        "weight": 0.1,
        "species": "Drawn Sword Pokémon",
        "types": [
            "steel",
            "grass"
        ],
        "description": "One of the Ultra Beast life-forms, it was\nobserved cutting down a gigantic steel tower\nwith one stroke of its blade.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png"
    },
    {
        "id": 799,
        "name": "guzzlord",
        "height": 5.5,
        "weight": 888,
        "species": "Junkivore Pokémon",
        "types": [
            "dragon",
            "dark"
        ],
        "description": "A dangerous Ultra Beast, it appears to be eating\nconstantly, but for some reason its droppings\nhave never been found.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png"
    },
    {
        "id": 800,
        "name": "necrozma",
        "height": 2.4,
        "weight": 230,
        "species": "Prism Pokémon",
        "types": [
            "psychic"
        ],
        "description": "Light is apparently the source of its energy.\nIt has an extraordinarily vicious disposition\nand is constantly firing off laser beams.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png"
    },
    {
        "id": 801,
        "name": "magearna",
        "height": 1,
        "weight": 80.5,
        "species": "Artificial Pokémon",
        "types": [
            "fairy",
            "steel"
        ],
        "description": "Its mechanized body is merely a vessel. Its true\nself is its Soul-Heart, an artificial soul.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png"
    },
    {
        "id": 801,
        "name": "magearna-original",
        "height": 1,
        "weight": 80.5,
        "species": "Artificial Pokémon",
        "types": [
            "fairy",
            "steel"
        ],
        "description": "Its mechanized body is merely a vessel. Its true\nself is its Soul-Heart, an artificial soul.",
        "sprite": null
    },
    {
        "id": 802,
        "name": "marshadow",
        "height": 0.7,
        "weight": 22.2,
        "species": "Gloomdweller Pokémon",
        "types": [
            "ghost",
            "fighting"
        ],
        "description": "It lurks in the shadows of others, copying their\nmovements and powers. This Pokémon is craven\nand cowering.",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png"
    }
]

export default pokemonDataset;