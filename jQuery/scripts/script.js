$(document).ready(function(){
    // Agregar el input range dentro del div #opacity-slider
    var opacity = 1;
    $("#opacity-slider").slider({
        min: 0.1,
        max: 1,
        step: 0.1,
        value: 1,
        change: function(event, ui) {
            debugger;
            opacity = ui.value;
            $("#opacity-value").text(opacity);
            //$("#circle").css("opacity", opacity);
            
        }
    });

    var bool = false;


    $("#start").button().click(function(){ 
        debugger;
        if(bool){
            $("#circle").stop();
        }
        bool = true;
        var firstPosition = $("#positions li:first").attr('data-pos');
        var secondPosition = $("#positions li:eq(1)").attr('data-pos');
        var thrirdPosition = $("#positions li:eq(2)").attr('data-pos');
        $("#circle").animate({left: firstPosition }, 2000);
        $("#circle").css("opacity", opacity);
        $("#circle").animate({left: secondPosition}, 2000);
        $("#circle").animate({left: thrirdPosition}, 2000, function(){
            bool = false;
        });
        

    });
    $("#stop").button().click(function(){ 
        debugger;
        $("#circle").stop(true);
        bool = false;
    });

    $( "#positions" ).sortable();
});
