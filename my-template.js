define(["./initialProperties", "./definition", "./paint", "./support", "./resize", "text!./style.css"], function(myProps, myDefinition, myPaint, mySupport, myResize, cssText) {
    // Create a style element
	var style = document.createElement("style");
	// Set the style element content
	style.innerHTML = cssText;
	// Add the style to the header of the page
	document.querySelector("head").appendChild(style);
	
	//声明全局变量echarts，在qlik的resize方法里调用echarts.resize 可以让echart自适应
	var myEcharts;
	
	
	return {
		initialProperties: myProps,		
		definition: myDefinition,		
        paint: myPaint,
        support: mySupport,
        resize: myResize
	};
});

