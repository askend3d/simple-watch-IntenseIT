const deg = 6;

const clock = document.querySelector(".clock");

const hr = clock.children[0];
const mn = clock.children[1];
const sc = clock.children[2];

const dt = document.querySelector(".dt");

function updateTimer() {
    const currentDate = new Date();

    const hh = currentDate.getHours() * 30;
    const mm = currentDate.getMinutes() * deg;
    const ss = currentDate.getSeconds() * deg;
    
    hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    dt.innerHTML = currentDate.toLocaleDateString('default', {month: "numeric", day: "numeric"})
}

setInterval(() => updateTimer(), 1000);   
updateTimer()