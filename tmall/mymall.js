$(function(){
    $("div.listright a").mouseenter(function(){
        var left=$(this).position().left;
        var top=$(this).position().top;
        var width=$(this).css("width");
        var desLeft=parseInt(left)+parseInt(width)/3;
        $("#catear").css("left",desLeft);
        $("#catear").css("top",top-20);
        $("#catear").fadeIn(500);
    });
    $("div.listone a").mouseleave(function(){
        $("#catear").hide();
    });

    function showProduct(cid){
        $("ul.supmenu li.productsmall[cid="+cid+"]").css("background-color","#fff");
        $("ul.supmenu li.productsmall[cid="+cid+"] a").css("color","#000");
        $("div.big-right-menu[cid="+cid+"]").show();
    }
    function hideProduct(cid){
        $("ul.supmenu li.productsmall[cid="+cid+"]").css("background-color","#969696");
        $("ul.supmenu li.productsmall[cid="+cid+"] a").css("color","#fff");
        $("div.big-right-menu[cid="+cid+"]").hide();
    }

    $("div.bigtype ul li").mouseenter(function(){
        var cid=$(this).attr("cid");
        showProduct(cid);
    });
    $("div.bigtype ul li").mouseleave(function(){
        var cid=$(this).attr("cid");
        hideProduct(cid);
    });
    $("div.big-right-menu").mouseenter(function(){
        var cid=$(this).attr("cid");
        showProduct(cid);
    });
    $("div.big-right-menu").mouseleave(function(){
        var cid=$(this).attr("cid");
        hideProduct(cid);
    });
});
