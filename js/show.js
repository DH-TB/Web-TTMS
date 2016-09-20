    $(document).ready(function () {
    $("#table1").show();
    $("#table2").hide();
    $("#table3").hide();
    $("#table4").hide();
    $("#li1").click(function () {
    $("#table1").show();
    $("#table2").hide();
    $("#table3").hide();
    $("#table4").hide();
});
    $("#li2").click(function () {
    $("#table1").hide();
    $("#table2").show();
    $("#table3").hide();
    $("#table4").hide();
});
    $("#li3").click(function () {
    $("#table1").hide();
    $("#table2").hide();
    $("#table3").show();
    $("#table4").hide();
});
    $("#li4").click(function () {
    $("#table1").hide();
    $("#table2").hide();
    $("#table3").hide();
    $("#table4").show();
});
});
