// const dateString = "2024-06-25T23:20:49.427Z";
// const date = new Date();

// console.log(date)

// const timeZoneOffset = date.getTimezoneOffset(); // Diferença em minutos do UTC
// console.log(`Fuso horário local (diferença do UTC em minutos): ${timeZoneOffset}`);

const dateString = "2024-06-25T23:20:49.427Z";
const date = new Date(dateString);

const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    fractionalSecondDigits: 3,
    timeZoneName: 'short'
};

const localDateString = new Intl.DateTimeFormat('pt-BR', options).format(date);
console.log(`Data e hora local: ${localDateString}`);

