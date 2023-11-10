const pokemon = [
{
    Name: "Pikachu",
    mainColor: "Yellow",
    Generation: "Gen I",
    Types: ["fire", "steel"],
},
{
    Name: "Swampert",
    mainColor: "Blue",
    Generation: "Gen III",
    Types: ["water", "ground"],
}, 
{
    Name: "Heatran",
    mainColor: "Red",
    Generation: "Gen IV",
    Types: ["fire", "steel"],
},
{
    Name: "Nihilego",
    mainColor: "Blue",
    Generation: "Gen VII",
    Types: ["rock", "poison"],
},
]

pokemon.forEach(element => {
    console.log(element.Name);
    console.log(element.mainColor);
    console.log(element.Generation);
    console.log(element.Types);
});

pokemon.forEach((element) => {
    element.Types.forEach(function(element) {
        console.log(element.Types);
    });
});


pokemon
.filter((things) => things.mainColor.includes('Blue'))
.forEach((things) => console.log(things.Name));
