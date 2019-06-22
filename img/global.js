//链接跳转
function qgurl(url,target)
{
    if(target==1)
    {
        window.open(url);
    }
    else
    {
        window.location.href=url;
    }
}

//鼠标经过
function mover(cname)
{
    document.getElementById(cname).onmouseover=function(ev){
        var oEvent=ev||event;
        var oFrom=oEvent.fromElement||oEvent.relatedTarget;
        //其中oEvent.fromElement兼容IE，chrome
        //oEvent.relatedTarget;兼容FF。
        if(this.contains(oFrom)) return; //判断div是不是包含oFrom,如果包含就返回
        {
            $("."+cname).css("transform","scale(1) rotate("+ranger()+"deg)");
        }
    }
}

//鼠标移除
function mout(cname)
{
    $("."+cname).css("transform","");
}

//随机函数
function ranger()
{
    arr = ["-3","-2","-1","1","2","3"];
    var index = Math.floor((Math.random()*arr.length));
    return arr[index];
}

//分享
function share()
{
    document.getElementById("sharemax").style.display="block";
}

//关闭分享
function share_close()
{
    document.getElementById("sharemax").style.display="none";
}

//关灯效果
$(document).ready(function(){
    $(".com_light").click(function(){
        if($(this).hasClass("com_close"))
        {
            $(this).removeClass("com_close");
            $(this).addClass("com_open");
        }
        else
        {
            $(this).removeClass("com_open");
            $(this).addClass("com_close");
        }
        if($("body").hasClass("light_close"))
        {
            $("body").removeClass("light_close");
            $("body").addClass("light_open");
        }
        else
        {
            $("body").addClass("light_close");
            $("body").removeClass("light_open");
        }
    });

    $(".comic_inshow").click(function(){
        $(".comic_index").toggle();
    });
});

//错误提示
function tip_bak(popTipTxt,time){
    var body = $('body');
    if(!time || time=="" || time==null){time=6;}
    if(body.attr('name')!=='hasPopTip'){
        body.attr('name','hasPopTip').append('<div class="popTipBg"></div>');
        $('.popTipBg').fadeIn(500);
        var c=time;
        var t;
        tipstime='(<span class="time">'+c+'</span>)';
        var popTipBox='<div class="tc popTip">';
        popTipBox+='<div class="popTipP">'+popTipTxt+'</div>';
        popTipBox+='<span class="popTipBtn">确定'+tipstime+'</span></div>';
        body.append(popTipBox);
        var obj = $('.popTip');
        var objMLW= Math.floor(obj.outerWidth()/2);
        var objMLH= Math.floor(obj.outerHeight()/2);
        obj.css({'top':'0%','margin-left':-objMLW,'margin-top':-objMLH}).animate({'top':'50%'},500,function(){
            $(this).addClass('skewAnimate');
        });
        //点击关闭
        $('.popTipBtn,.popTipBg').click(function(){
            obj.animate({'top':'150%'},500,function(){
                $(this).remove();
                body.attr('name','');
                clearTimeout(t);
            });
            $('.popTipBg').fadeOut(500,function(){
                $(this).remove();
                $('.masterWrap').removeClass("blurIng");
            });
        });
        //定时关闭
        function ptime(){
            c=c-1;
            if(c==0){
                $('.popTipBtn').click();
            }else{
                $('.time').html(c);
                t=setTimeout(ptime,1000);
            }
        }
        ptime();
    }

}

//倒数提示
function tip(tip,time)
{
	if(!time)
	{
		time = 3;
	}
	times = time*1000;
	layer.open({
		type: 1,
		title: false,
		closeBtn: false,
		//time : times,
		time : 0,
		skin: 'layui-layer-mandao',
		area: ['350px'], //宽高
		shadeClose: true, //开启遮罩关闭
		shade: [0.5,"#fff"],
		content: '<div class="layer-mandao-pad"><div class="layer-mandao-tit">'+tip+'</div><div class="layer-mandao-btn"><p>确定(<span class="layui-layer-time">'+time+'</span>)</p></div></div>',
		success: function(layero, index){
			$(".layer-mandao-btn").click(function(){
				layer.close(index);
			});
			var i = time;
			var timer = null;
			var fn = function() {
				layero.find(".layui-layer-time").html(i);
				if(!i) {
					layer.close(index);
					clearInterval(timer);
				} 
				i--;
			};
			timer = setInterval(fn, 1000);
			fn();
  		}
	});
}

function layer_close()
{
	layer.close(index);
}

//选择提示
function ifconfirm(popTipTxt,url)
{
    var body = $('body');
    if(body.attr('name')!=='hasPopTip'){
        body.attr('name','hasPopTip').append('<div class="popTipBg"></div>');
        $('.popTipBg').fadeIn(500);
        var t;
        var popTipBox='<div class="tc popTip">';
        popTipBox+='<div class="popTipP">'+popTipTxt+'</div>';
        popTipBox+='<span class="popTipBtn popTipBtn_qd">确定</span>';
        popTipBox+='<span class="popTipBtn popTipBtn_qx">取消</span></div>';
        body.append(popTipBox);
        var obj = $('.popTip');
        var objMLW= Math.floor(obj.outerWidth()/2);
        var objMLH= Math.floor(obj.outerHeight()/2);
        obj.css({'top':'0%','margin-left':-objMLW,'margin-top':-objMLH}).animate({'top':'50%'},500,function(){
            $(this).addClass('skewAnimate');
        });
        //点击关闭
        $('.popTipBtn_qd').click(function(){
            qgurl(url);
        });

        $('.popTipBtn_qx,.popTipBg').click(function(){
            obj.animate({'top':'150%'},500,function(){
                $(this).remove();
                body.attr('name','');
            });
            $('.popTipBg').fadeOut(500,function(){
                $(this).remove();
                $('.masterWrap').removeClass("blurIng");
            });
        });
    }
}

//季度冠军提示
function tip_comic(popTipTxt,url)
{
    var body = $('body');
    if(body.attr('name')!=='hasPopTip'){
        body.attr('name','hasPopTip').append('<div class="popTipBg"></div>');
        $('.popTipBg').fadeIn(500);
        var t;
        var popTipBox='<div class="comicTip"><div class="comicTipclose">×</div>';
        popTipBox+='<div class="comicTip_in"><div class="comicTipP">'+popTipTxt+'</div>';
        popTipBox+='<span class="comicTipBtn comicTipBtn_qx">好，我已经知道了</span>';
        popTipBox+='<span class="comicTipBtn comicTipBtn_qd">去了解比赛规则</span></div></div>';
        body.append(popTipBox);
        var obj = $('.comicTip');
        var objMLW= Math.floor(obj.outerWidth()/2);
        var objMLH= Math.floor(obj.outerHeight()/2);
        obj.css({'top':'0%','margin-left':-objMLW,'margin-top':-objMLH}).animate({'top':'50%'},500,function(){
            $(this).addClass('skewAnimate');
        });
        //点击关闭
        $('.comicTipBtn_qd').click(function(){
            qgurl(url);
        });

        $('.comicTipBtn_qx,.popTipBg,.comicTipclose').click(function(){
            obj.animate({'top':'150%'},500,function(){
                $(this).remove();
                body.attr('name','');
            });
            $('.popTipBg').fadeOut(500,function(){
                $(this).remove();
                $('.masterWrap').removeClass("blurIng");
            });
        });
    }
}

//渐出提示
function tipfade(popTipTxt,time){
    var body = $('body');
    if(!time || time=="" || time==null){time=2;}
    if(body.attr('name')!=='hasPopTip'){
        var c=time;
        var t;
        var popTipBox='<div class="tipfade">';
        popTipBox+='<div class="tipfade_p">'+popTipTxt+'</div>';
        body.append(popTipBox);
        var obj = $('.tipfade');
        var objMLW= Math.floor(obj.outerWidth()/2);
        var objMLH= Math.floor(obj.outerHeight()/2);
        obj.css({'opacity':'0','margin-left':-objMLW,'margin-top':-objMLH}).animate({'opacity':'1'},500,function(){
            $(this).addClass('fadeAnimate');
        });
        function closetip()
        {
            $('.tipfade').remove();
            body.attr('name', '');
        }
        //定时关闭
        function ptime(){
            c=c-1;
            if(c==0){
                $('.tipfade').fadeOut(500);
                setTimeout(closetip,1000);
            }else{
                t=setTimeout(ptime,1000);
            }
        }
        ptime();
    }

}

//返回顶部
$('.retop').click(function(){$("body,html").animate({scrollTop:$('body').offset().top},400);});

//下拉导航
/*$(document).ready(function(){
    $(".nav ul li").mousemove(function(){
        $(".nav ul li").removeClass("nav_on2");
        $(".nav_downmax").hide();
        $(".nav_down_part").hide();
    });

    $(".nav_forum").mousemove(function(){
        $(this).addClass("nav_on2");
        $(".nav_downmax").show();
        $(".nav_down_forum").show();
    });
	
	$(".nav_match").mousemove(function(){
        $(this).addClass("nav_on2");
        $(".nav_downmax").show();
        $(".nav_down_match").show();
     });

    $(".nav_shequ").mousemove(function(){
        $(this).addClass("nav_on2");
        $(".nav_downmax").show();
        $(".nav_down_shequ").show();
     });

    $(".nav_downmax").mouseleave(function(){
        $(this).hide();
        $(".nav ul li").removeClass("nav_on2");
        $(".nav_down_part").hide();
    });
});*/
$(document).ready(function(){
	$(".nav ul li").hover(function(){
		$(this).find(".navdl").show();
	},function(){
		$(this).find(".navdl").hide();
	});
});

//删除div
function closediv(divid)
{
    $("#"+divid).remove();
}

//切换标签
function setTab(m,n)
{
    var tli=document.getElementById("tabmenu"+m).getElementsByTagName("li");
    var mli=document.getElementById("tabmain"+m).getElementsByTagName("dl");
    for(i=0;i<tli.length;i++)
    {
        tli[i].className=i==n?"hover":"";
        mli[i].className=i==n?"block":"";
    }
}

//切换标签
function setTab2(m,n)
{
    var tli=document.getElementById("tabmenu"+m).getElementsByTagName("li");
    var mli=document.getElementById("tabmain"+m).getElementsByTagName("dl");
    for(i=0;i<tli.length;i++)
    {
        tli[i].className=i==n?"hover":"";
        mli[i].className=i==n?"block":"";
    }
}

//显示隐藏
function toggle(divid)
{
    $("#"+divid).toggle();
}

//显示
function toggle_show(divid)
{
    $(divid).show();
}

//隐藏
function toggle_hide(divid)
{
    $(divid).hide();
}

//渐现
function fade_toggle(divid)
{
    $("#"+divid).fadeToggle();
}

//上拉下拉
function slideToggle(divid)
{
	$(divid).slideToggle();
}

function fade_out(divid)
{
    $(divid).fadeOut();
}

//插入html代码
function insert_html(divid,str,act)
{
	if(!act)
	{
		$(divid).append(str);
	}
	else if(act=="prepend")
	{
		$(divid).prepend(str);
	}
	else if(act=="before")
	{
		$(divid).before(str);
	}
	else if(act=="after")
	{
		$(divid).after(str);
	}
}

//刷新验证码
function refreshimg()
{
	document.getElementById('imagecode').src='class/imagecode.php?code=' + Math.random();
	return false;
}

//判断有无安装flash插件
function flashChecker()
{
    var hasFlash = 0;　　　　 //是否安装了flash
    var flashVersion = 0;　　 //flash版本
    if(document.all) {
        var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if(swf) {
            hasFlash = 1;
            VSwf = swf.GetVariable("$version");
            flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
        }
    } else {
        if(navigator.plugins && navigator.plugins.length > 0) {
            var swf = navigator.plugins["Shockwave Flash"];
            if(swf) {
                hasFlash = 1;
                var words = swf.description.split(" ");
                for(var i = 0; i < words.length; ++i) {
                    if(isNaN(parseInt(words[i]))) continue;
                    flashVersion = parseInt(words[i]);
                }
            }
        }
    }
    return {
        f: hasFlash,
        v: flashVersion
    };
}

//背景蒙版
//bclose=2时 点击背景不关闭蒙版
function mbback(act,html,bclose,color)
{
	var body = $('body');
	if(!bclose)
	{
		bclose = "1";
	}
	if(!color)
	{
		color = "black";
	}
	csscolor = "mbback_"+color;
	
	if(act=="open")
	{
		if(bclose==1)
		{
			var mbhtml='<div class="mbback"><div class="mbback_bg '+csscolor+'" onclick="mbback(\'close\');"></div>';
		}
		else if(bclose==2)
		{
			var mbhtml='<div class="mbback"><div class="mbback_bg '+csscolor+'"></div>';
		}
		mbhtml += html;
		mbhtml += '</div>';
		body.append(mbhtml);
		$('.mbback').animate({'opacity':'1'},500);
	}
	else if(act=="close")
	{
		$('.mbback').animate({'opacity':'0'},500,function(){
			$(this).remove();
		});
	}
}