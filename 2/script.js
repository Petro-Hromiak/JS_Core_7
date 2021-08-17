// Task 2


let keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69,
    82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76,
    186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 32];
let upperCase = false;

document.addEventListener(`keydown`, function (event) {
    if (keyboard.includes(event.keyCode)) {
        document.querySelector('.' + event.code).classList.add('checked');
        switch (event.keyCode) {
            case 9:
                document.querySelector(`.text`).innerHTML += `\xa0\xa0\xa0`;
                break;
            case 16:
                upperCase = !upperCase;
                break;
            case 20:
                upperCase = !upperCase;
                break;
            case 8:
                document.querySelector(`.text`).textContent = document.querySelector(`.text`).textContent.slice(0, -1);
                break;
            case 13:
                document.querySelector(`.text`).textContent += ` \n`;
                break;
            case 32:
                document.querySelector(`.text`).textContent += `\xa0`;
                break;
            default:
                document.querySelector(`.text`).textContent += upperCase ? event.key.toUpperCase() : event.key.toLowerCase();
                break;
        }
    }
})

document.addEventListener(`keyup`, function (event) {
    if (keyboard.includes(event.keyCode)) {
        if (event.keyCode === 16) {
            upperCase = !upperCase;
        }
        document.querySelector('.' + event.code).classList.remove('checked');
    }
})
