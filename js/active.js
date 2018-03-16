$(function(){
	
	$('.free').click(function(){
		$('.free').removeClass("xuanzhong");
		$(this).addClass('xuanzhong');
		console.log($('.free.xuanzhong'))
	})
	$('.ming').click(function(){
		if($('.free.xuanzhong').length===1){
			$('.piao').hide();
			$('.bao').show();
		}else{
			alert('请选择想要购买的票种！')
		}
	})
	$('.reset').click(function(){
		$('.piao').show();
		$('.bao').hide();
		$('input').val('');
	})
	
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(116.417854,39.921988);
	var marker = new BMap.Marker(point);  // 创建标注
	var top_left_navigation = new BMap.NavigationControl();
	var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
	map.addOverlay(marker);              // 将标注添加到地图中
	map.centerAndZoom(point, 15);
	map.addControl(top_left_control);        
	map.addControl(top_left_navigation);     

	var opts = {
	  width : 200,     // 信息窗口宽度
	  height: 100,     // 信息窗口高度
	  title : "海底捞王府井店" , // 信息窗口标题
	  enableMessage:true,//设置允许信息窗发送短息
	  message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
	}
	var infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);  // 创建信息窗口对象 
	marker.addEventListener("click", function(){          
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	});
})
