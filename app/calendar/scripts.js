let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

let servicesList = ['Progressiva', 'Selante/Botox','Luzes','Guanid/amônia','Nutrição a laser','Hidratação a laser','Cauterização a laser', 'Cronograma']

let timeBoxList = ['07 : 00', '07 : 30', '08 : 00', '08 : 30', '09 : 00', '09 : 30', '10 : 00','10 : 30', '11 : 00', '11 : 30', '12 : 00', '12 : 30', '13 : 00', '13 : 30', '14 : 00','14 : 30', '15 : 00', '15 : 30', '16 : 00', '16 : 30', '17 : 00', '17 : 30', '18 : 00','18 : 30', '19 : 00', '19 : 30', '20 : 00', '20 : 30', '21 : 00', '21 : 30', '22 : 00','22 : 30', '23 : 00', '23 : 30']

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);
showService();
showTimeBox();
var cellSelected;

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
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
    let dayOfMonth = evt.currentTarget.innerHTML
    let month = monthAndYear.innerHTML.slice(0,3)
    let year = monthAndYear.innerHTML.slice(-4)


    console.log(cellSelected);// = 
    console.log(dayOfMonth)
    console.log(month)
    console.log(year)
    cellSelected.classList.remove("selected")
    if (cellSelected.tagName === 'P') {
        cellSelected = evt.currentTarget.parentNode;
    } else {
        cellSelected = evt.currentTarget;
    }
    cellSelected.classList.add("selected")
    // console.log(`\n\n${cellSelected}`)
    // console.log(evt.currentTarget.parentNode)
    // console.log(evt.currentTarget.tagName)
    // window.alert('teste')
}

function clickService(evt) {
    console.log(evt.currentTarget);
    serviceSelected = evt.currentTarget;
}

function clickTimeBox(evt) {
    console.log(evt.currentTarget);
    timeSelected = evt.currentTarget;
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let selected = today;
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
                cell.classList.add("unselect")
                cell.addEventListener('click', function (e) {
                    clickDay(e)
                });
                let cellText = document.createElement("p");
                cellText.innerHTML = date;
                cellText.classList.add("unselect")
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

function showService () {
    
    let div = document.getElementById("services-body"); // body of the calendar
    // div.classList.add('servicos')
    servicesList.forEach(element => {
        buttonDiv = document.createElement("div");
        text = document.createElement("p");
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


function hideCalendar () {
    calDiv = document.getElementById("calendar-div");
    
    calDiv.classList
}

function showTimeBox () {
    let div = document.getElementById("time-box-body");
    timeBoxList.forEach(element => {
        timeBoxDiv = document.createElement("div");
        timeBoxDiv.classList.add("unselect");
        text = document.createElement("p");
        text.innerHTML = String(element);
        text.classList.add("time-button-text")
        timeBoxDiv.appendChild(text);
        timeBoxDiv.classList.add('time-box-button', "unselect")
        timeBoxDiv.addEventListener('click', function (e) {
            clickTimeBox(e)
        });
        div.appendChild(timeBoxDiv)
    });
}