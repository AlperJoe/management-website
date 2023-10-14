
let eventsArr = [];
let eventsArr2 = [];

let eventsTable = document.getElementById("eventsTable");

let trElems = eventsTable.getElementsByTagName("tr");

let colors = ["green", "blue", "purple", "orange"];
let i = 0;
for (let tr of trElems) {

    let tdElems = tr.getElementsByTagName("td");
    let eventObj = {
        id: tdElems[0].innerText,
        start: new Date(tdElems[1].innerText),
        title: tdElems[2].innerText,
        description: tdElems[3].innerText,
        url: tdElems[4].innerText,
        end: new Date(tdElems[5].innerText),
        color: colors[i]
    }
    let eventObj2 = {
        start: new Date(tdElems[1].innerText),
        color: colors[i]
    }
    i++;
    eventsArr.push(eventObj);
    eventsArr2.push(eventObj2);
    
}

let calendarEl = document.getElementById('calendar');
let calendarEl2 = document.getElementById('calendar2');



var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

var close = document.getElementById("close-btn");

close.onclick = function () {
    modal.style.display = "none";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


let calendar = new FullCalendar.Calendar(calendarEl, {


    initialView: 'timeGridWeek',
    allDaySlot: false,
    slotDuration: '01:00',
    slotMinTime: '09:00',
    slotMaxTime: '20:00',
    height: 850,
    expandRows: true,

    themeSystem: 'bootstrap5',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events

    headerToolbar: {
        left: 'title',
        center: 'prev,next',
        right: ''
    },
    

    events: eventsArr,

    eventClick: function (info) {
        console.log(info);
        document.getElementById("txtTitle").innerText = info.event.title;
        document.getElementById("txtDescription").innerText = info.event.extendedProps["description"];
        document.getElementById("startDate").innerText = info.event.start;
        document.getElementById("endDate").innerText = info.event.end;
        modal.style.display = "block";
    },
});


calendar.render();

let calendar2 = new FullCalendar.Calendar(calendarEl2, {
    initiaView: 'dayGridMonth',
    headerToolbar: {
        left: 'title',
        right: 'prev,next'
    },
    events: eventsArr2,
});

calendar2.render();