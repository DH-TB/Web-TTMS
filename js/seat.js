function addSeat() {
    var id = $("#studioID").val();

    for (var i = 0; i < array.length; i++) {
        if (id === array[i].studio) {
            return document.getElementById("seatRow").innerHTML = `<label class="btn bg-info btn-lg btn-block">${array[i].studio}号演出厅${array[i].seatArray}</label></br>`;
        }
    }
    return document.getElementById("seatRow").innerHTML = `<span class="glyphicon glyphicon-hand-right" style="color:red;font-size:18px"> 该演出厅没有座位</span>`;
}
