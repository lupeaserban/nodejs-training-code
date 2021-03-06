console.log('Client side JS loaded!');

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.getElementById('messageOne');
const messageTwo = document.getElementById('messageTwo');

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const location = search.value;

    messageOne.textContent = 'Loading!';
    messageTwo.textContent = '';

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                const { description, current, feelslike } = data.forecast;
                messageTwo.textContent = `It is ${description} outside. There are ${current} degrees Celsius, but feels it like ${feelslike}.`;
            }
        });
    });
});

