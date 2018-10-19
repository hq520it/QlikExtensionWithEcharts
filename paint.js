define(['jquery','./echarts.min'], function($,echarts) {
    return function($element, layout) {
		
							$element.html("");
							var echartsDiv = document.createElement("div");
							echartsDiv.id="newDivId"; 
							//echartsDiv.style.width = "100%";
							echartsDiv.style.height = "100%";
						
						var textColor = layout.textColor;

							 $element.append(echartsDiv);
							
							 
							 //x轴的分类名称
							 var titleAry = [];
							 var valueAry = [];
							 var dimAry = layout.qHyperCube.qDataPages[0].qMatrix;
							 for(var i =0;i<dimAry.length;i++){
								 titleAry[i]=dimAry[i][0].qText;
							 }
							 
							 //每个分类的值
							 for(var i =0;i<dimAry.length;i++){
								 valueAry[i]=dimAry[i][1].qText;
							 }
							 
							 //console.log(titleAry);
							  // 基于准备好的dom，初始化echarts实例
							myEcharts = echarts.init(echartsDiv);

							// 指定图表的配置项和数据
							var option = {
								
								title: {
									text: 'ECharts 入门示例',
									textStyle: {
										color:textColor
									}
								},
								tooltip: {},
								legend: {
									data:['销量']
								},
								xAxis: {
									color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8'],
									data: titleAry
								},
								yAxis: {},
								series: [{
									name: '销量',
									type: 'bar',
									data: valueAry,
									color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8'],
								}]
							};

							// 使用刚指定的配置项和数据显示图表。
							myEcharts.setOption(option,true);
		
        
    };
});