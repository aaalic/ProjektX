﻿$(document).ready(function () {

    $(".divTable").hide();
    $('.divTable2').hide();

    
    var boat = $("#small").click(AddBoat5x5);
    $("#medium").click(AddBoat10x10);
    $("#large").click(AddBoat15x15);
   
});


function AddBoat5x5() {

    var coordinateX = Math.floor((Math.random() * 4) + 1);
    var coordinateY = Math.floor((Math.random() * 4) + 1);

    var boat = [coordinateX, coordinateY];
    $(".divTable").show();
    return boat;
};

function AddBoat10x10() {

    var coordinateX = Math.floor((Math.random() * 9) + 1);
    var coordinateY = Math.floor((Math.random() * 9) + 1);
    var coordinateZ = Math.floor((Math.random() * 9) + 1);
    var coordinateA = Math.floor((Math.random() * 9) + 1);

    var boat1 = [coordinateX, coordinateX];
    var boat2 = [coordinateZ, coordinateA];

};

function AddBoat15x15() {

    var coordinateX = Math.floor((Math.random() * 14) + 1);
    var coordinateY = Math.floor((Math.random() * 14) + 1);
    var coordinateZ = Math.floor((Math.random() * 14) + 1);
    var coordinateA = Math.floor((Math.random() * 14) + 1);
    var coordinateB = Math.floor((Math.random() * 14) + 1);
    var coordinateC = Math.floor((Math.random() * 14) + 1);
    var coordinateD = Math.floor((Math.random() * 14) + 1);
    var coordinateE = Math.floor((Math.random() * 14) + 1);
    var coordinateF = Math.floor((Math.random() * 14) + 1);
    var coordinateG = Math.floor((Math.random() * 14) + 1);


    var boat1 = [coordinateX, coordinateY];
    var boat2 = [coordinateZ, coordinateA];
    var boat3 = [coordinateB, coordinateC];
    var boat4 = [coordinateD, coordinateE];
    var boat5 = [coordinateF, coordinateG];

};