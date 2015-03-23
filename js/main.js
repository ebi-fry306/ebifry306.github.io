$(function(){
    var w = $(window).width();
    var h = $(window).height();
    if (w <= h){
        $("img").hide();
    }
    if (h <= w){
        $("img").show();
    }
    $("ul.menu").hide();
    $("div.category").click(function(){
        $("ul.menu").slideUp("fast");
        $("div.category").removeClass("open");
        if($("+ul",this).css("display")=="none"){
            $("+ul",this).slideDown("fast");
            $(this).addClass("open");
        }
    });
});
