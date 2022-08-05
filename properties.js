var shoppingCard = {
    book: 5,
    sunglass: 1,
    keybord: 2,
    mouse: 1,
    pen: 8
}

//when you know to specific property name, use do not notation to get the property values
var penCount = shoppingCard.pen;
//alternative system
//when you know to specific property name, use do not notation to get the property values
var penCount = shoppingCard['pen'];

var propertyName = 'mouse';

var propertyValue = shoppingCard[propertyName]
console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCard);
var propertyValues = Object.values(shoppingCard);
// console.log(properties);
// console.log(propertyValues);
console.log(shoppingCard);

//set property values
shoppingCard.mouse = 15;
console.log(shoppingCard);

shoppingCard["mouse"] = 30;
console.log(shoppingCard);

shoppingCard[propertyName] = 90;
console.log(shoppingCard);