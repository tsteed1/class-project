
// var response = prompt('Do you live around Seattle?');
// var message;

// if (response === 'yes') {
// message = 'Great! You will love it here!';
// }
// else if (response === 'no') {
//     message = 'Welcome visitor!;
// }
// else {
//     message = 'Wrong page';
// }

// document.write('<h3>' + message + '</h3>');

function getInfo() {
    var response = prompt('Do you live around Seattle?');
    var message;

    if (response === 'yes') {
    message = 'Great! You will love it here';
    }
    else if (response === 'no') {
        message = 'Welcome Visitor!';
    }
    else {
        message = "Wrong page";
    }

    return document.write('<h3>' + message + '</h3>');
}

getInfo();