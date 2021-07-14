const HOURHAND = document.querySelector('.hour');
const MINUTEHAND = document.querySelector('.minute');
const SECONDHAND = document.querySelector('.second');

setInterval(setClock, 1000);
function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio =(secondsRatio+currentDate.getMinutes())/ 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(SECONDHAND, secondsRatio);
    setRotation(MINUTEHAND, minutesRatio);
    setRotation(HOURHAND, hoursRatio);
}
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio*360)
}
setClock();