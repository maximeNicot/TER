var graph;
d3.json("\\TERTEST\\dataBubble.json").then(function(data){
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



	/*Tout ce qui est en dessous concerne le drag*/
    canvas
      .call(d3.drag()
          .container(canvas.node())
          .subject(dragsubject)
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

 	function dragsubject() {
   		return simulation.find(d3.event.x, d3.event.y); 
 	}

	function dragstarted() {
	  	if (!d3.event.active) simulation.alphaTarget(0.3).restart();
	 	 d3.event.subject.fx = d3.event.subject.x;
	 	 d3.event.subject.fy = d3.event.subject.y;
	}

	function dragged() {
	 	d3.event.subject.fx = d3.event.x;
	  	d3.event.subject.fy = d3.event.y;
	}

	function dragended() {
	  	if (!d3.event.active) simulation.alphaTarget(0);
	  	d3.event.subject.fx = null;
	  	d3.event.subject.fy = null;
	}

	update();

});

