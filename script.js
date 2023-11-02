const deg = 6;

const hr = document.querySelector(".hr");
const mn = document.querySelector(".mn");
const sc = document.querySelector(".sc");
const dt = document.querySelector(".dt")

setInterval(() => {
    let currentDate = new Date();

    let hh = currentDate.getHours() * 30;
    let mm = currentDate.getMinutes() * deg;
    let ss = currentDate.getSeconds() * deg;
    let day = currentDate.getDate();
    let month = currentDate.getMonth();

    
    hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    dt.innerHTML = `${day}.${month+1}`
}, 1000);   




console.log(new Date().getDate()) 