var home = new iScroll("home",{
	

	onBeforeScrollStart:function(e){
		
		
	
		var targets = e.target.nodeName;
		
		if(targets!="IMG" && targets!="INPUT"){
			
			e.preventDefault();
			
		}
		
		home.refresh();
		
	}

})

DATAS = null;
function bindEvent(){
	
	$(".container").on("click","a",function(e){
		
		e.preventDefault();
		
		var that = $(this).attr("href");
		alert(that);
		var id = $(this).attr("id");
		$(that).css({
			transition:"all 0.3s",
			transform:"translate3d(0,0,0)"
		}).siblings().css({
			transform:"translate3d(100%,0,0)"
		})
		
		var index = $(this).index();
		
		$(".mark").animate({
			left:index*25+"%"
		})
		
		if( that == "#list"){
			
			getDateId(id);
			
		}
		
		if( that == "#home" ){
			$("#title").text("孕育宝典");
		}else if( that == "#fav"){
			$("#title").text("收藏");
		}else if(that == "#history"){
			$("#title").text("历史记录");
		}else if(that == "#config"){
			$("#title").text("设置");
		}
		
	})
}
function getDateId(id){
	
	getDateLoad(id);
	
}
function getDateLoad(type){
	
	$.ajax({
		
		"url":"data/data.json",
		"type":"get",
		"dataType":"json",
		success:function(e){
			
			DATAS=e;
			getDataContent(e,type);
	
		}
		
	})
	
}
function getDataContent(e,type){
	
	var brr = e[type]["fenlei"];
	var str = "";
	$.each(brr,function(idx,val){
	
		str+="<a href=''><dl><dt><img src='img/tu/"+val.img+"' alt='' /></dt><dd>"+val.title+"</dd></dl></a>";
	
	})

	$("#iscroll_r").html(str);
	
}
bindEvent();
