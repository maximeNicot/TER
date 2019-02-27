/*function jsonTest(){
	d3.json("users.json").then(function(error, data){
					if(error){
						console.warn("erreur");
						console.warn(error);
						return;
					}
					d=data;
			});
			return "OK";
}
jsonTest();*/

var width = 600;
var height = 500;
var radius = 200;
var colors = d3.scaleOrdinal(d3.schemeAccent);

var svg = d3.select("body").append("svg") 
	.attr("width", width)
	.attr("height",height);
	
/*Le fichier json*/
var details = [{id:"A", number:8}, {id:"C", number:21},
	{id:"B", number:15}, {id:"E", number:2},
	{id:"D", number:11}, {id:"F", number:6}];
				
var data = d3.pie().sort(null).value(function(d){return d.number;})
(details);

var arc = d3.arc()
	.innerRadius(radius - 100) /*Ici pour transformer en pie ou anneau*/
	.outerRadius(radius)
	.padAngle(.05)
	.padRadius(50);
	

var sections = svg.append("g")
	.attr("transform", "translate(250 , 250)")
	.selectAll("path").data(data);

sections.enter()
	.append("path")
	.attr("d",arc)
	.on("mouseover",function(d){
		d3.select(this).style("stroke", "black");
	})
	.on("mouseleave",function(d){
		d3.select(this).style("stroke", "white");
	})
	.attr("fill", function(d){return colors (d.data.number);});
	
	
	
/*Pour afficher les number dedans*/
var content = d3.select("g").selectAll("text").data(data);

content.enter().append("text").each(function(d){
	var center = arc.centroid(d);
	d3.select(this).attr("x", center[0]).attr("y", center[1])
					.text(d.data.number);
	})
	
