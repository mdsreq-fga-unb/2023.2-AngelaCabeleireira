// import indisponiveis from './client/encontrarTodos.js'
import { criarAgendamento } from './client/agendar.js'

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

let servicesList = ['Progressiva', 'Selante/Botox','Luzes','Guanid/amônia','Nutrição a laser','Hidratação a laser','Cauterização a laser', 'Cronograma']

let timeBoxList = ['08 : 00', '08 : 30', '09 : 00', '09 : 30', '10 : 00','10 : 30', '11 : 00', '11 : 30', '12 : 00', '12 : 30', '13 : 00', '13 : 30', '14 : 00','14 : 30', '15 : 00', '15 : 30', '16 : 00', '16 : 30', '17 : 00', '17 : 30', '18 : 00']

let monthAndYear = document.getElementById("monthAndYear");
// console.log(currentMonth, currentYear)
showCalendar(currentMonth, currentYear);
showService();
showTimeBox();
var cellSelected, serviceSelected, daySelected, monthSelected, yearSelected, timeSelected=0, date;


function next() {
    if (currentYear === 2024 && currentMonth === 11) return;
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    if (currentYear === 2023 && currentMonth === 0) return;
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function clickDay(evt) {
    daySelected = evt.currentTarget.innerText;
    monthSelected = monthAndYear.innerHTML.slice(0,3)
    yearSelected = monthAndYear.innerHTML.slice(-4)
    cellSelected.classList.remove("selected")
    cellSelected = evt.currentTarget;
    cellSelected.classList.add("selected")
    // toggleHideTime();
    // let dt = new Date(currentYear, currentMonth, daySelected)
    // date = dt.toLocaleDateString("pt-BR", {
    //     year:"numeric",
    //     month:"2-digit",
    //     day: "2-digit", 
    // })
    //console.log(date)
    // var agendamento = { servico: serviceSelected.innerText,
    //     data: date }
    // console.log(indisponiveis(agendamento))
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                // cell.addEventListener('click', function (e) {
                //     clickDay(e)
                // });
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                // cell.classList.add("flexbox")
                cell.classList.add("unselect")
                cell.classList.add("calendar-cell")
                cell.addEventListener('click', function (e) {
                    clickDay(e)
                });
                let cellText = document.createElement("p");
                cellText.innerText = date;
                cellText.value = date;
                
                cellText.classList.add("unselect")
                cellText.classList.add("calendar-text")
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("selected");
                    cellSelected = cell;
                    
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }

        }

        tbl.appendChild(row); // appending each row into calendar body.
    }
}

// async function verificarDisponibilidade(date, time){
//     const disp = await indisponiveis(JSON.parse(date))
//     const horariosAgendados = disp.map(agendamento => agendamento.horario)
//     console.log(disp)
//     return !horariosAgendados.includes(time)
// }

function showService () {
    
    let div = document.getElementById("services-body"); // body of the calendar
    // div.classList.add('servicos')
    servicesList.forEach(element => {
        let buttonDiv = document.createElement("div");
        let text = document.createElement("p");
    text.classList.add("service-button-text", "unselect")
        text.innerHTML = String(element);
        buttonDiv.appendChild(text);
        buttonDiv.classList.add('service-button')
        buttonDiv.addEventListener('click', function (e) {
            clickService(e)
        });
        div.appendChild(buttonDiv)
    });
}

function toggleHideCalendar(){
    var calendarDiv = document.getElementById('calendar-div');
    if (calendarDiv.classList.contains("hidden") == true){
        calendarDiv.classList.remove("hidden")
    } else {
        calendarDiv.classList.add("hidden");
    }
    var timeBoxDiv = document.getElementById('time-body');
    if (timeBoxDiv.classList.contains("hidden") === true){
        timeBoxDiv.classList.remove("hidden")
    } else {
        timeBoxDiv.classList.add("hidden");
    }
    
    var vertical_lines = document.getElementsByClassName('vertical-line');
    vertical_lines[0]
        if (vertical_lines[0].classList.contains("hidden") === true && vertical_lines[1].classList.contains("hidden") === true){
            vertical_lines[0].classList.remove("hidden");
            vertical_lines[1].classList.remove("hidden");
        } else {
            vertical_lines[0].classList.add("hidden");
            vertical_lines[1].classList.add("hidden");
        }
}

function toggleHideTime() {
    var timeBoxDiv = document.getElementById('time-body');
    if (timeBoxDiv.classList.contains("hidden") === true){
        timeBoxDiv.classList.remove("hidden")
    } else {
        timeBoxDiv.classList.add("hidden");
    }
}   

function toggleHideConfirm(){
    var submit = document.getElementById('submit');
    if (submit.classList.contains("hidden") === true){
        submit.classList.remove("hidden")
    } else {
        submit.classList.add("hidden");
    }
}

function toggleHideModal(){
    var modal = document.getElementById("modal");
    if (timeSelected === 0) return;

    if (modal.classList.contains("hidden_") === true){
        modal.classList.remove("hidden_")
    } else {}

    var submit = document.getElementById('submit');
    if (submit.classList.contains("hidden") === true){
        submit.classList.remove("hidden")
    } else {}
}


function clickService(evt) {
    if (evt.currentTarget === serviceSelected) {
        serviceSelected.classList.remove("selected");
        serviceSelected = null;
        toggleHideCalendar();
        return;
    }

    // console.log(serviceSelected)
    if (serviceSelected === undefined || serviceSelected === null) {
        toggleHideCalendar();
        serviceSelected = evt.currentTarget;
        serviceSelected.classList.add("selected");
    } else {
        serviceSelected.classList.remove("selected")
        serviceSelected = evt.currentTarget;
        serviceSelected.classList.add("selected");
    }
    
}

async function showTimeBox () {
    let div = document.getElementById("time-box-body");
    div.classList.add("unselect", "time-box-div");
    for (let element of timeBoxList) {
        let textDiv = document.createElement("div");
        // const indisponivel = await verificarDisponibilidade(date, element)
        let text = document.createElement("p");
        // if (indisponivel) {
        //     text.innerHTML = "Indisponível";
        //     textDiv.classList.add("unavailable");
        // } else {
            text.innerHTML = String(element);
        // }
        text.classList.add("calendar-text"); // "time-button-text"
        textDiv.appendChild(text);
        textDiv.classList.add("unselect", "time-box-button");
        textDiv.addEventListener('click', function (e) {
            clickTimeBox(e)
        });
        div.appendChild(textDiv);
    }
}


function clickTimeBox(evt) {
    // console.log(evt.currentTarget);
    try {
        timeSelected.classList.remove("selected")
    } catch {
        
    }
    timeSelected = evt.currentTarget;
    timeSelected.classList.add("selected")
    document.getElementById("c1").innerText = serviceSelected.innerText;

    let dt = new Date(currentYear, currentMonth, daySelected)
    date = dt.toLocaleDateString("pt-BR", {
        year:"numeric",
        month:"2-digit",
        day: "2-digit", 
    })
    toggleHideModal();
    console.log(date)
    document.getElementById("c2").innerText = date;
    document.getElementById("c3").innerText = timeSelected.innerText;
    // toggleHideConfirm();
}

window.handleConfirm = function() {
    let div = document.getElementById("modal")
    const nome = document.getElementById("name").value
    const celular = document.getElementById("phone").value
    let agendamento = { servico: serviceSelected.innerText, 
        data: date,
        horario: timeSelected.innerText,
        nome: nome,
        celular: celular }
    criarAgendamento(agendamento)
}