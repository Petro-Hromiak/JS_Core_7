// Task 1


document.querySelector(`.color-block`).addEventListener(`click`, function() {
    document.querySelector(`.main-container`).setAttribute(`style`, `display: table`)
    document.querySelector(`.main-container-img`).setAttribute(`style`, `display: none`)

})
document.querySelector(`.img-block`).addEventListener(`click`, function() {
    document.querySelector(`.main-container-img`).setAttribute(`style`, `display: table`)
    document.querySelector(`.main-container`).setAttribute(`style`, `display: none`)

})
document.querySelector(`.main-container`).addEventListener(`click`, function() {
    document.body.style.backgroundColor = event.target.style.backgroundColor
    document.body.style.backgroundImage = null;
})
document.querySelector(`.main-container-img`).addEventListener(`click`, function() {
    document.body.style.backgroundImage = event.target.style.backgroundImage
    document.body.style.backgroundColor = null;

})