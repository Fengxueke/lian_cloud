$(window).ready(function () {
    $("#scolls").css({ "max-height": ($(window).height() - 101 - $("#md12").height()) + "px" });
    //$("#theader").css("width", $("#scolls").width() - gdtkd + "px");
    $("#md12").css("width", $(".md-scroll").width() + "px");
    //console.log("滚动条大小-->", gdtkd);
    console.log("滚动区域宽度-scolls->", $("#scolls").width());
    console.log("表头区域宽度-md12->", $("#md12").width());
    console.log("表头区域宽度-md-scroll->", $(".md-scroll").width());
    // console.log("滚动区域宽度scollswidth-->", scollswidth);
    // console.log("滚动区域宽度rowswidth-->", rowswidth);
    
    // //计算用户区域上
    // var userarea_top_h = $("#user_area_top").height();
    // var uerarea_icon_h = $("#user_area_icon").height();
    // var uerarea_text_h = $("#user_area_text").height();
    // var userarea_down_h = $("#user_area_down").height();

    // //设置高度比例
    // $("#user_area_top").css("height", ($(window).height()*0.35) + "px");
    // $("#user_area_down").css("height", ($(window).height()*0.5) + "px");
    // //$("#user_area_icon").css("height", ($(window).height*0.3)*0.8 + "px");

});


$(window).resize(function () {
    //顶部距离
    $("#scolls").css({ "max-height": ($(window).height() - 101 - $("#md12").height()) + "px" });
   // $("#user_area").css({ "height": ($(window).height() - 101 - $("#md12").height()) + "px" });
    //让表头宽度与有滚动条的内容部分的宽度保持一致
    $("#md12").css("width", $(".md-scroll").width() + "px");
    // console.log("滚动条大小-->", gdtkd);
    // console.log("滚动区域宽度-scolls->", $("#scolls").width());
    // console.log("表头区域宽度-md12->", $("#md12").width());
    // console.log("表头区域宽度-md-scroll->", $(".md-scroll").width());
    // console.log("滚动区域宽度scollswidth-->", scollswidth);
    // console.log("滚动区域宽度rowswidth-->", rowswidth)
    // //计算用户区域上
    // var userarea_top_h = $("#user_area_top").height();
    // var uerarea_icon_h = $("#user_area_icon").height();
    // var uerarea_text_h = $("#user_area_text").height();
    // var userarea_down_h = $("#user_area_down").height();

    // //设置高度比例
    // $("#user_area_top").css("height", ($(window).height()*0.35) + "px");
    // $("#user_area_down").css("height", ($(window).height()*0.5) + "px");
});


//layer活动窗口控制
$("#dpage").on("click", function () {
    layer.open({
        title: '文件上传', content: $('#myModal'),
        fixed: true,
        anim: 2,
        offset: 'b',
        shade: 0,
        type: 1,
        maxmin: true,
        move: false,
        resize: false,
        area: ['1000px', '200px']
    }),
        $("#myModal").removeClass("hidden");
})


