

// Parameter declaration, the height and width of our viz.
var width = 1200;
var height = 1800;
var margin = {
  top: 5, 
  bottom: 50, 
  left: 0, 
  right: 75
};

// Colour scale for node colours.
var color = d3.scaleOrdinal(d3.schemeCategory10);


// We select the < div> we created earlier and add an 
// SVG = Scalable Vector Graphics
//var svg = d3.select("#d3-container").select("svg")
//if (svg.empty()) {
	//svg = d3.select("#d3-container").append("svg")
		//		.attr("width", width)
			//	.attr("height", height);
//}

  var svg = d3.select('#d3-container')
              .attr('width', width + margin.left + margin.right)
              .attr('height', height + margin.top + margin.bottom);
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  function buildChart() {
var data = [80, 120, 60, 150,200];
var svgWidth = 500, svgHeight = 200, barPadding = 5;
var barWidth = (svgWidth / data.length);

var svg = d3.select('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight);
svg.selectAll("rect")
      .data(data)
      .enter()
      .append('rect')
      .attr("y", function(d){
        return svgHeight - d
      })
      .attr("height", function(d) {
        return d
      })
      .attr("width", barWidth - barPadding)
      .attr("fill", "red")
      .attr("transform", function(d, i){
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
      })
}
buildChart();

// We load the JSON network file.
d3.json("/static/json/graph.json")
  .then(function(graph) {
    // Code from your callback goes here...
		// Within this block, the network has been loaded
	// and stored in the 'graph' object.
 //extracting the nodes and links from the dataset
  var data_nodes = graph.nodes;
  var data_links = graph.links;
  
  //Creating force layout simulation object
  var simulation = d3.forceSimulation(data_nodes)
                .force('link', d3.forceLink())
                .force('charge', d3.forceManyBody())
                .force('center', d3.forceCenter(width / 2, height / 2));
  
  
  //creating a variable for the links where the data will be stored
  var link = svg.selectAll('.link')
                .append('g')
                .data(data_links)
                .enter().append('line')
                .attr('class', 'link')
  .attr("stroke","black")
             .attr('stroke-width', 1)
 
  //creating a variable for the nodes where the data will be stored
  var node = svg.selectAll('.node')
                 .append('g')
                 .data(data_nodes)
                 .enter().append('circle')
                 .attr('r', 5)
                 .attr('class', 'node')
  
  simulation
      .nodes(data_nodes);
  
  simulation.force('link')
            .links(link);
			
			console.log("DONE DONELONDON");
			
			console.log(data_links);
						console.log(data_nodes);
  
  function ticked(){
    link.attr('x1', function(d){ return data_nodes[d.source].x; })
        .attr('y1', function(d){ return data_nodes[d.source].y; })
        .attr('x2', function(d){ return data_nodes[d.target].x; })
        .attr('y2', function(d){ return data_nodes[d.target].y; });
    
    node.attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; })
        .on('mouseover', function(d){
           console.log("OLA?");
        })
  }
  


  })
  .catch(function(error) {
    // Do some error handling.
	console.log(error);
  });
