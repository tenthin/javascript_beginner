var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree)



// Record Collection   (Object of record collection)(each record has an id)
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jobi",
        "tracts": [
            "let it rokc",
            "you guve love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Price",
        "tracts": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert",
        "tract": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop]
    } else if ( prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else {
        collection[id][prop] = value;
    }
    return collection;

}

console.log(updateRecords(5439, "artist", "ABBA"));