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

    //文件名部分长度控制
    $(".filename-l").css("width",$(".filename-div-l").width() + "px");

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

    //文件名部分长度控制
    $(".filename-l").css("width",$(".filename-div-l").width() + "px");
});

//文件上传框

function toList() {
    var file = $("#upload");
    var f_length = file[0].files.length;
    var items = file[0].files;
    console.log("文件数量：" + f_length);
    var fragment = "";
    if (f_length > 0) {
        for (var i = 0; i < f_length; i++) {
            var fileName = items[i].name;
            var fileSize = items[i].size;
            var fileType = items[i].type;


            var type = /\.[^\.]+$/.exec(fileName);

            var td = $("#upload")[0].files;

            var ico_type = "";
            //console.log("上传的文件数量" + num);


            if(items[i] == $("#upload")[0].files[i]){
                console.log("上传的xx" + items[i].name);
                console.log(items[i]);
            }

            if (type == ".xls" || type == ".xlsx") {
                ico_type = "fa-file-excel-o"
            } else if (type == ".docx" || type == ".doc") {
                ico_type = "fa-file-word-o";
            } else if (type == ".pptx" || type == ".ppt") {
                ico_type = "fa-file-powerpoint-o";
            } else if (type == ".pdf") {
                ico_type = "fa-file-pdf-o";
            } else if (type == ".mp3" || type == ".acc") {
                ico_type = "fa-file-audio-o";
            } else if (type == ".mp4" || type == ".rmvb" || type == ".mkv" || type == ".avi") {
                ico_type = "fa-file-video-o";
            } else if (type == ".txt") {
                ico_type = "fa-file-text-o"
            } else if (type == ".jpg" || type == ".dmg" || type == "bmp") {
                ico_type = "fa-file-image-o";
            } else {
                ico_type = "fa-file-o";
            }
            fragment += "<tr class='row'><td class='col-md-1' style='text-align: center; vertical-align: middle'><i class='fa " + ico_type + " fa-lg'></i></td><td class='col-md-4'>" + fileName + "</td>"
                + "<td class='col-md-2'>" + (fileSize / 1024).toFixed(1) + "kb</td> <td class='col-md-2'>/${username}</td><td class='col-md-3'>" + "<div class='progress progress-striped active' style='margin-bottom: 0;'>"+
                        "<div id='progressBar' class='progress-bar progress-bar-info' role='progressbar' aria-valuemin='0' aria-valuenow='0' aria-valuemax='100' style='width: 0'></div></div></td></tr>";
            $("#file_list").append(fragment);

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
            });
            $("#myModal").removeClass("hidden");
       }
        console.log(fragment);
    } else {
        console.log("--------error->");
    }
}



