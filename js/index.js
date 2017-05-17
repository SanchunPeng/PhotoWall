$(function(){
	//添加17个img
	addImg(17);
	var imgLen = $("img").length;
	var index = Math.floor(imgLen/2);//放置在中间的图片的index
	var imgLeft = [];
	
	for(var i=0;i<imgLen;i++){
		if(i<index){
			$("img").eq(i).addClass("front");
		}else if(i>index){
			$("img").eq(i).addClass("back");
		}else{
			$("img").eq(i).addClass("now");
		}
	}

	mid();
	
	function addImg(n){
		for(var i=1;i<=n;i++){
			var img="<img src='img/"+i+".jpg'>";
			$(".pic").append(img);
		}
	}
	
	function mid(){
		var midIndex = $(".now").index();
		var winWid = $(window).width();//当前屏幕的宽度
		$(".now").css("left",winWid/2-150+"px");
		for(var i=0;i<imgLen;i++){
			$("img").eq(i).css("left",winWid/2-150-100*(midIndex-i)+"px");
			imgLeft[i] = parseInt($("img").eq(i).css("left"));//保存每个img的left值
		};
	};
	
	$("img").click(function(){
		var nowIndex = $(this).index();
		for(var i=0;i<imgLen;i++){
			imgLeft[i] -= 100*(nowIndex-index);//将点击的照片放到最中间
			$("img").eq(i).css("left",imgLeft[i]);
		};
		for(var i=0;i<imgLen;i++){
			if(i<nowIndex){
				$("img").eq(i).removeClass().addClass("front");
			}else if(i>nowIndex){
				$("img").eq(i).removeClass().addClass("back");
			};
		};
		index = nowIndex;
		$(this).removeClass().addClass("now").siblings().removeClass("now");
	});
})
