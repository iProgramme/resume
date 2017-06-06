$(function(){
    // console.log($("#parent").height())
    $.ajax({
        type:"get",
        dataType:"text",
        url:"js/index3.json",
        beforeSend:function () {
            console.log(222)
        },
        success:function (info) {

            info = JSON.parse(info)
            // 模板部分
            console.log(info)
            var html = template('template', info);
            $(".-center").html(html);
            new DAH(document.querySelectorAll('#parent li'));
            // console.log(info)

        }
    })
    var flag = $(window).width()>992?true:false
    var bg = flag?"background2":"background"
    var ur = flag?"img/earth2.jpg":"img/earth.png"
    // console.log("#"+bg)
    $("#"+bg).css("display","block")
    run(bg,ur)
    // console.log(ur)

    var arrColor = $(window).width()>$(window).height()?
        "rgba(205,205,205,.8)" :
        "rgba(0,0,0,0)"
    $('#dowebok').fullpage({
        navigationColor:"#f0f",
        sectionsColor: ['rgba(0,0,0,0)', '#fff', '#fff', '#fff'],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        continuousVertical:true,
        navigation:true,
        navigationTooltips:["我的简介","我的项目经验","我的技能","联系我"],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        paddingTop:"51px",
        controlArrowColor:arrColor,
        afterLoad:function (a,index) {
            if (index==3) {

                $(".table-cell").height($(".d3zhuan.visible-xs-block").height())
                $(".table-cell").width($(".d3zhuan.visible-xs-block").width())
            }else{

            }
        },
        slidesNavigation:["111","222","333","444"],
        loopHorizontal:true
    });


    // canvas效果
    var config = {
        vx: 4,
        vy:  4,
        height: 2,
        width: 2,
        count: 100,
        color: "121, 162, 185",
        stroke: "80, 80, 80",
        dist: 6000,
        e_dist: 20000,
        max_conn: 10
    }
    ;
    CanvasParticle(config)
    
    // 下雨效果
    function run(id,src) {
        var image = document.getElementById(id);
        image.onload = function() {
            var engine = new RainyDay({
                image: this
            });
            engine.rain([ [2, 2, 2] ], 100);
        };
        image.crossOrigin = 'anonymous';
        image.src = src;
    }

    // console.log($(window).width())



    // 判断是横屏还是竖屏的
    if ($(window).width()>$(window).height()) {
        $(".item").height($(window).height()-55)
        $(".carousel-caption-y").css({
            "top":$(".item").height()-150,
            "bottom":"auto"
        })
    }else{
    }



    // 百度分享
    window._bd_share_config = {
        common : {
            bdText : '自定义分享内容',
            bdDesc : '自定义分享摘要',
            bdUrl : '自定义分享url地址',
            bdPic : '自定义分享图片'
        },
        share : [{
            "bdSize" : 16
        }],
        slide : [{
            bdImg : 0,
            bdPos : "left",
            bdTop : 100
        }],
        image : [{
            viewType : 'list',
            viewPos : 'top',
            viewColor : 'black',
            viewSize : '16',
            viewList : ['qzone','tsina','huaban','tqq','renren']
        }],
        selectShare : [{
            "bdselectMiniList" : ['qzone','tqq','kaixin001','bdxc','tqf']
        }]
    }
    with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];



});
