$(function(){

    var X_RANGE = 8;
    var Y_RANGE = 8;

    init();


    $("#move").click(function(){
        var x = $("#chessman-x").val();
        var y = $("#chessman-y").val();
        moveTo({x: x, y: y});
    });

    $("#move-randomly").click(function(){
        $(".chessman").each(function(){
            var pos = getRandomPosition(X_RANGE, Y_RANGE);
            moveTo(pos, $(this));
//            $("#chessman-x").val(pos.x);
//            $("#chessman-y").val(pos.y);
        })
    });

    function getStyleByPosition(pos){
        return {
            top: (80 * pos.x - 40) + "px",
            left: (80 * pos.y - 40) + "px"
        };
    }

    function getRandomPosition(rangeX, rangeY){
        return {
            x: Math.ceil(Math.random() * rangeX),
            y: Math.ceil(Math.random() * rangeY)
        };
    }

    function moveTo(pos, $chessman){
        $chessman = $chessman || $(".chessman");
        $chessman.css(getStyleByPosition(pos));
        $chessman.data("pos-x", pos.x);
        $chessman.data("pos-y", pos.y);
    }

    function init(){
        initBoardGrids();
        initChessmans();
    }

    function initBoardGrids(){
        var $bg = $("#board-grids");
        $bg.empty();
        for (var i=X_RANGE * Y_RANGE; i!=0; i--) $bg.append('<div></div>');
    }

    function initChessmans(){
        $("#board").prepend('<div class="chessman"></div>');
    }
});