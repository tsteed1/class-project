
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

    if (response === 'yes') {
    message = 'Great! Let us show you some of the favorites in the Seattle area!';
    }
    else if (response === 'no') {
        message = 'I am sorry to hear that!';
    }
    else {
        message = "bold move cotton";
    }

    return document.write('<h3>' + message + '</h3>');
}

getPizza();