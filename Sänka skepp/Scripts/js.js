var counter = 0;
var traffar = 0;

$(document).ready(function () {

    $("#small").click(AddBoat5x5);
    $("#medium").click(AddBoat10x10);
    $("#large").click(AddBoat15x15);

    $(".antalTraffar").hide();
    $(".antalSkott").hide();

   
});


function AddBoat5x5() {
    $(".antalTraffar").hide();
    $(".antalSkott").show();

    var table = $('.divTable');

    for (var i = 0; i < 5; i++) {

        $(table).append('<tr>');

        for (var j = 0; j < 5; j++) {
            $(table).find('tr').eq(i).append('<td id=' + i + j + '>&nbsp;</td>');
        }

    } 

    var coordinateX = Math.floor((Math.random() * 4) + 1);
    var coordinateY = Math.floor((Math.random() * 4) + 1);

    var boat = [coordinateX, coordinateY];

    $('td').click(function () {

        counter++;
        $("#antalSkott").html(counter);
        

        var click = this.getAttribute('id');
        var click2 = boat[0].toString();
        var click3 = boat[1].toString();
        var click4 = click2.concat(click3);


       
        if (click4 == click)
        {
            
            $(this).css("background-color", "green");
           

        }

        else
        {
            $(this).css("background-color", "red");

        }


    })
    
};

function AddBoat10x10() {

    $(".antalTraffar").show();
    $(".antalSkott").show();

    var table = $('.divTable');

    for (var i = 0; i < 10; i++) {

        $(table).append('<tr>');

        for (var j = 0; j < 10; j++) {
            $(table).find('tr').eq(i).append('<td id=' + i + j + '>&nbsp;</td>');
        }

    } 

    var coordinateX = Math.floor((Math.random() * 9) + 1);
    var coordinateY = Math.floor((Math.random() * 9) + 1);
    var coordinateZ = Math.floor((Math.random() * 9) + 1);
    var coordinateA = Math.floor((Math.random() * 9) + 1);

    var boat1 = [coordinateX, coordinateX];
    var boat2 = [coordinateZ, coordinateA];

    $('td').click(function () {
        
        counter++;
        $("#antalSkott").html(counter);



        var click = this.getAttribute('id');

        var click2 = boat1[0].toString();
        var click3 = boat1[1].toString();
        var boatPosition = click2.concat(click3);

        var click5 = boat2[0].toString();
        var click6 = boat2[1].toString();
        var boat2Position = click5.concat(click6);

     


        if (boatPosition == click || boat2Position == click) {
            alert("Träff!")
            $(this).css("background-color", "green");
            traffar++;

        }

        else {
            $(this).css("background-color", "red");
        }

        $("#antalTraffar").html(traffar);
    })
    
};

function AddBoat15x15() {
    $(".antalTraffar").show();
    $(".antalSkott").show();

    var table = $('.divTable');

    for (var i = 0; i < 10; i++) {

        $(table).append('<tr>');

        for (var j = 0; j < 10; j++) {
            $(table).find('tr').eq(i).append('<td id=' + i + j + '>&nbsp;</td>');
        }

    } 

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

    $('td').click(function () {

        counter++;

        var click = this.getAttribute('id');

        var click2 = boat1[0].toString();
        var click3 = boat1[1].toString();
        var boatPosition = click2.concat(click3);

        var click5 = boat2[0].toString();
        var click6 = boat2[1].toString();
        var boat2Position = click5.concat(click6);

        var click7 = boat3[0].toString();
        var click8 = boat3[1].toString();
        var boat3Position = click7.concat(click8);

        var click9 = boat4[0].toString();
        var click10 = boat4[1].toString();
        var boat4Position = click9.concat(click10);

        var click11 = boat5[0].toString();
        var click12 = boat5[1].toString();
        var boat5Position = click11.concat(click12);




        if (boatPosition == click || boat2Position == click || boat3Position == click || boat4Position == click || boat5Position == click) {
            alert("Träff!")
            $(this).css("background-color", "green");
            traffar++;
        }

        else {
            $(this).css("background-color", "red");
        }
        $("#antalTraffar").html(traffar);
    })

};
