/*  Creer une zone de "dessin" */

var widthMax = 1200;
var heightMax = 1200;
var strokeWidthCircle = 5;

var svgContainer = d3.select("body").append("svg") 
	.attr("width", widthMax)
	.attr("height",heightMax);
/*	
var line = svgContainer.append("line")
	.attr("x1", 0)
	.attr("y1", 0)
	.attr("x2", widthMax)
	.attr("y2", heightMax)
	.attr("stroke-width", 2)
	.attr("stroke", "black");
	*/

	
var circle1 = svgContainer.append("circle")
	.attr("cx", widthMax/2)
	.attr("cy", heightMax/2)
	.attr("r", widthMax/2-100-strokeWidthCircle)
	.attr("stroke", "black")
	.attr("stroke-width", strokeWidthCircle)
	.attr("fill", "#b0b2b1");
	
var circle2 = svgContainer.append("circle")
	.attr("cx", widthMax/2)
	.attr("cy", heightMax/2)
	.attr("r", widthMax/2-200-strokeWidthCircle)
	.attr("stroke", "black")
	.attr("stroke-width", strokeWidthCircle)
	.attr("fill", "#959996");
	
var circle3 = svgContainer.append("circle")
	.attr("cx", widthMax/2)
	.attr("cy", heightMax/2)
	.attr("r", widthMax/2-300-strokeWidthCircle)
	.attr("stroke", "black")
	.attr("stroke-width", strokeWidthCircle)
	.attr("fill", "#838784");
	
var circle4 = svgContainer.append("circle")
	.attr("cx", widthMax/2)
	.attr("cy", heightMax/2)
	.attr("r", widthMax/2-400-strokeWidthCircle)
	.attr("stroke", "black")
	.attr("stroke-width", strokeWidthCircle)
	.attr("fill", "#6a706c");
	
var circle5 = svgContainer.append("circle")
	.attr("cx", widthMax/2)
	.attr("cy", heightMax/2)
	.attr("r", widthMax/2-500-strokeWidthCircle)
	.attr("stroke", "black")
	.attr("stroke-width", strokeWidthCircle)
	.attr("fill", "#595e5b");
	
var line2 = svgContainer.append("line")
	.attr("x1",widthMax/2)  
	.attr("y1",heightMax/2)  
	.attr("x2",widthMax/2)  
	.attr("y2",heightMax/2-100+strokeWidthCircle/2)  
	.attr("stroke","red")  
	.attr("stroke-width",2)  
	
var line2 = svgContainer.append("line")
	.attr("x1",widthMax/2)  
	.attr("y1",heightMax/2)  
	.attr("x2",widthMax/2+150)  
	.attr("y2",heightMax/2-200+strokeWidthCircle/2)  
	.attr("stroke","red")  
	.attr("stroke-width",2)  
	
var line3 = svgContainer.append("line")
	.attr("x1",widthMax/2)  
	.attr("y1",heightMax/2)  
	.attr("x2",widthMax/2-150)  
	.attr("y2",heightMax/2 +300)  
	.attr("stroke","red")  
	.attr("stroke-width",2)  
	
	
