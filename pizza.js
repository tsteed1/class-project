'use strict'

// var response = prompt('Do you like to eat pizza?');
// var message;

// if (response === 'yes') {
// message = 'Great! Let's show you some of the favorites in the Seattle area!';
// }
// else if (response === 'no') {
//     message = 'I am sorry to hear that!';
// }
// else {
//     message = 'bold move cotton';
// }

// document.write('<h3>' + message + '</h3>');

function getPizza() {
    var response = prompt('Do you like to eat pizza?');
    var message;

    while(response != 'yes' && response != 'no') {
        message = prompt('Do you like to eat pizza? BE SPECIFIC')
    }

    if (response === 'yes') {
    item = "<img src=../images/creepypizza.jpg">;
        item = 'Great! Let us show you some of the favorites in the Seattle area!';
    }
    else if (response === 'no') {
        message = 'I am sorry to hear that!';
    }
    else {
        message = "bold move cotton";
    }

    return document.write('<h3>' + message + '</h3>');
}

function getCount() {
    var count = ('How many slices of pizza would you like?');
    while(isNaN(count)) {
        count = prompt("PLEASE ENTER A NUMBER. How many would you like?");
    }
    return count;
}
getCount();
getPizza();

function showOrder() {
    var result = '';
    var itemType = getPizza();

    for(var i =0; i < total; i++) {
        result = result + '<p>' + itemType + '</p>'
    }

    return document.write(result);
}

showOrder();