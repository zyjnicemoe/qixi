$(function() {
    //界面切换
    $(".content-wrap").animate({ "margin-left": "-1920px" }, 2000, function() {
        //小鸟飞
        $(".bird").animate({ "right": "500px" }, 5000);
        //小男孩走路
        $(".boy").animate({ "left": "960px" }, 3000, openDoor);
    });

});

function openDoor() {
    //开门
    $(".door-left").animate({ "left": "-50%" }, 800);
    $(".door-right").animate({ "right": "-50%" }, 800, function() {
        //进商店
        $(".boy").transition({ "transform": "translate(40%) scale(0.2)", "opacity": "0" }, 1000, function() {
            setTimeout(function() {
                //买花
                $(".boy").removeClass("walk").addClass("flowerWalk");
                //出商店
                $(".boy").transition({ "transform": "translate(0%) scale(1)", "opacity": "1" }, 500, closeDoor);
            }, 1000);

        });
    });
}

function closeDoor() {
    //开门
    $(".door-left").animate({ "left": "0%" }, 800);
    $(".door-right").animate({ "right": "0%" }, 800, function() {
        //界面切换
        $(".content-wrap").animate({ "margin-left": "-3840px" }, 2000, function() {
            $(".boy").removeClass("flowerWalk").addClass("stopWalk");
            $(".boy").removeClass("stopWalk").addClass("boyHoldHand");
            $(".girl").removeClass("stand").addClass("wave");
        }, 1000, function() {
            $(".content-wrap").animate(function() {
                $(".boy").removeClass("boyHoldHand").addClass("stopWalk");
                // $(".girl").removeClass("wave").addClass("stopHold");
            }, 1000);

        });
    });
}

function closeDoor() {
    $(".door-left").animate({ left: "1" }, 800);
    $(".door-right").animate({ right: "1" }, 800, function() {
        //界面切换
        $(".content-wrap").animate({ "margin-left": "-200%" }, 3000);
        $(".boy").animate({ "left": "-1%" }, 3000, function() {
            $(".boy").animate({ "left": "17%" }, 3000, function() {
                $(".boy").animate({ "left": "30%", "top": "40%" }, 3000, function() {
                    $(".boy").animate({ "left": "45%" }, 3000, function() {
                        $(".boy").removeClass("flowerWalk").addClass("boyHoldHand");
                        $(".girl").addClass("girlRound");
                        setTimeout(function() {
                            $(".logo").animate({ top: "8%" }, 1500);
                        })
                    })
                });
            });
        });
    });
}