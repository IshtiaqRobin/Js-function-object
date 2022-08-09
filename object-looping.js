// array vs object

var shoppingCard = {
    book: 5,
    sunglass: 1,
    keybord: 2,
    mouse: 1,
    pen: 8,
    bottle: 10
}

const keys = Object.keys(shoppingCard);
console.log(keys);

const values = Object.values(shoppingCard);
console.log(values);

//var keys [ 'book', 'sunglass', 'keybord', 'mouse', 'pen', 'bottle' ]
for (var i = 0; i < keys.length; i++) {
    // console.log(keys[i]);
    var propertyName = keys[i];
    var propertyValue = shoppingCard[propertyName];
    // console.log(propertyName, propertyValue);
}

// for in loop
for (var propertyName in shoppingCard) {
    const value = shoppingCard[propertyName];
    console.log(propertyName, value);
}