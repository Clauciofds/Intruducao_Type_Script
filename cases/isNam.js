const test = '2'


const possibleNumberString = '94a66';
if (isNaN(possibleNumberString)) {
    console.log('É NaN')
} else {
    console.log( 'É um número')
}

function isNumber(value) {
    return (
        value != null &&
        value !== '' &&
        !isNaN(Number(value.toString()))
    );
}

console.log(isNumber(test))