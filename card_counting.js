var count = 0;

function cardgame(card) {

    switch (card) {
        case 2:
        case 3:
        case 4: 
        case 5:
        case 6:
            count++
            break;

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--
            break;
    }
    var holdbet = 'Hold';

    if (count > 0) {

        holdbet = 'Bet';
    }
    return count + " " + holdbet;

}
cardgame(2); cardgame(2); cardgame(2); cardgame(2); cardgame(2); 
console.log(cardgame(2))