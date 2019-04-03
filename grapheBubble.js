var graph;
d3.json("\\TERbubble\\dataBubble.json").then(function(data){
  graph = data;

	var canvas = d3.select("#network"),
		width = canvas.attr("width"),
		height = canvas.attr("height"),
		r = 20,
		ctx = canvas.node().getContext("2d");

		simulation = d3.forceSimulation()
			.force("x", d3.forceX(width/2))
			.force("y", d3.forceY(height/2))
			.force("collide", d3.forceCollide(r+5))
			.force("charge", d3.forceManyBody()
				.strength(-2000))
			.force("link", d3.forceLink()
				.id(function(d) {return d.name;}))
			.on("tick", update);

	graph.nodes.forEach(function (d){
		d.x = Math.random() * width;
		d.y = Math.random() * height;

	});

	simulation.nodes(graph.nodes);
	simulation.force("link")
		.links(graph.links);


	function update() {
		ctx.clearRect(0,0, width, height);

		ctx.beginPath();
		graph.links.forEach(drawLink); //pas un mot clé
		ctx.stroke();

		ctx.beginPath();
		graph.nodes.forEach(drawNode);
		ctx.fill();
	}

	function drawNode(d) {
		ctx.moveTo(d.x, d.y);
		ctx.arc(d.x, d.y, r, 0, 2* Math.PI);
	}

	function drawLink(l) {
		ctx.moveTo(l.source.x, l.source.y);
		ctx.lineTo(l.target.x, l.target.y); //pas un mot clé
	}


	update();

});