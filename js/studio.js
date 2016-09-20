var array = [];
function addStudio() {
    const studio = document.getElementsByName("studio");
    var id = 1;
    var table = document.getElementById("studioRow");
    var seat = document.getElementsByName("seat");

    var seatArray = `<br> `;

    for (var k = 1; k <= seat[1].value; k++) {
        seatArray+=` ${k}&nbsp;&nbsp;&nbsp;&nbsp;`;
    }

    for (var i = 1; i <= seat[0].value; i++) {
        seatArray+="<br>"+`第${i}排`;
        for (var j = 1; j <= seat[1].value; j++) {
            seatArray+=`<input type='checkbox' id='checkbox${i}${j}' class='img-rounded' onclick="seatStatus('checkbox',${i}${j})"/>&nbsp;&nbsp;`;

        }
        console.log(seatArray);

    }
    array.push({studio: studio[0].value, seatArray});

    var row = table.insertRow(0);
    row.insertCell(0).innerText = id;
    row.insertCell(1).innerHTML = studio[0].value;
    row.insertCell(2).innerHTML = studio[1].value;
    row.insertCell(3).innerHTML = 'X';

    studio[0].value = '';
    studio[1].value = '';
    seat[0].value = '';
    seat[1].value = '';
    studio[0].focus();
}

function deleted() {
    document.getElementById("studioRow").deleteRow(0);
}

function seatStatus(checkbox,n) {
    if (document.getElementById(`checkbox${n}`).style.backgroundColor == "rosybrown"){
        document.getElementById(`checkbox${n}`).style.backgroundColor = "forestgreen"
    }
    else {
        document.getElementById(`checkbox${n}`).style.backgroundColor = "rosybrown";
    }

}