$(window).ready(function () {
    $("#scolls").css({ "max-height": ($(window).height() - 101 - $("#md12").height() - $("#hidden-sm").height()) + "px" });

    console.log("表区域高度-1->", $(window).height());
    console.log("表区域高度-scrolls->", $(window).height() - 101 - $("#md12").height());

    console.log("ready-->获取小屏幕用户栏高度-->",$("#hidden-sm").height());

    var ua = window.navigator.userAgent;
    console.log("ready-->获取浏览器类型-->",ua);

    //解决ie，edge scroll的兼容问题
    if(!!window.ActiveXObject || "ActiveXObject" in window || navigator.userAgent.indexOf("Edge") > -1){
        $("#scolls").css("-ms-overflow-style", "none")       
    }

});


$(window).resize(function () {
    //顶部距离
    $("#scolls").css({ "max-height": ($(window).height() - 101 - $("#md12").height() - $("#hidden-sm").height()) + "px" });
    console.log("resize-->获取小屏幕用户栏高度-->",$("#hidden-sm").height())

});