var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

var myDog = {
    "name": "maz",
    "legs": 3,
    "tails": 2,
    "friends": []
};
console.log(myDog)


// Accessing object properties with dot notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

console.log(hatValue);
console.log(shirtValue);

// Accessing object properties with Bracket notation
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

console.log(entreeValue);
console.log(drinkValue);


// Accessing object properties with variables
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player)

// UPdating Object properties
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};
ourDog.name = "happy"
console.log(ourDog);

// Add New Properties to an object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};

ourDog.bark = "bow-wow";
ourDog['barks'] = "woof";
console.log(ourDog);

// Delete properties from objects
var ourDog = {
        "name": 'Camper',
        "legs": 4,
        "tails": 1,
        "friends": [ 'everything' ],
        "bark": 'bow-wow',
        "barks": 'woof'
};
delete ourDog.bark;
console.log(ourDog)

// Using Objects from Lookups
function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "Charlie": "Chicago",
        "delta" : "Denver"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("alpha"));


// Testing Objects for Properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {

    if (myObj.hasOwnProperty(checkProp)) {

        return myObj[checkProp];
    } else {

        return "not found";
}
}

console.log(checkObj("hello"));


// Manipulating complex Objects
var myMusic = [
{
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
        "CD",
        "8T",
        "LP"
    ],
    "gold": true
},

{
    "artist": "Beau Carnes",
    "title": "Cereal Man",
    "release_year": 2003,
    "formats": [
        "YouTube Video",
    ]
}

]
console.log(myMusic)

// Accessing Nested Objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passanger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContent = myStorage.car.inside["glove box"];
console.log(gloveBoxContent)