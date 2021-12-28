var contacts = [
    {
        "firstname": "Akira",
        "lastname": "Laine",
        "number": "0349089028058",
        "likes": ["pizza","coding","Brownie points"]
    },
    {
        "firstname": "Harry",
        "lastname": "Potter",
        "number": "234890534",
        "likes": ["Hogwarts","Magic","Brownie HAgrid"]
    },
    {
        "firstname": "Sherlock",
        "lastname": "Holmes",
        "number": "5256456256",
        "likes": ["Intriguing cases","Violin"]
    },
    {
        "firstname": "Kristian",
        "lastname": "Vos",
        "number": "80629386094",
        "likes": ["JS","Gaming","Foxes"]
    }
];
 function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstname === name) {
            return contacts[i][prop] || "no such property";        
        }
    }
    return "no such contact"

 }
 var data = lookUpProfile("Akira", "likes");
 console.log(data);