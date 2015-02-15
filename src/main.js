import d3 from 'd3';

//Width and height
const width = 600;
const height = 400;

var dataset = [
	[{ x: 0, y: 2 }],
	[{ x: 0, y: 8 }],
	[{ x: 0, y: 2 }],
	[{ x: 0, y: 1 }]
];

// color range (ordinal scale)
var colors = d3.scale.category20();

// create svg container
var svg = d3.select("#app")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

var group = svg.append('g');

var stack = d3.layout.stack();

var randomInt = (max) => { return 0 | Math.random() * max + 1; };



var update = (newData, count) => {

	const offset = 50;
	const colWith = 100;

	stack(newData); // set data
	// scales
	let xScale = d3.scale.ordinal()
		.domain(d3.range(newData.length))
		.rangeRoundBands([0,width], 0.5);

	let yScale = d3.scale.linear()
		.domain([0,
			d3.max(newData, (d) => {
				console.log(d);
				return d3.max(d, (d) => d.y0 + d.y);
			})
		])
		.range([0, height]);

	let rects = group.selectAll('rect')
		.data(newData);
		//.data(newData, (d) => d);

	rects.attr("class", "update")
		.style('fill', (d,i) => colors(i))
		.transition()
		.duration(750)
		.attr("x", width/3 + offset)
		.attr("y", (d) => yScale(d[0].y0))
		.attr("height", (d) => yScale(d[0].y))
		.attr("width", colWith);


	rects.enter().append('rect')
		.attr("y", (d, i) => i * 32)
		.transition()


	rects
		.exit()
		.attr("class", "exit")
		.transition()
		.duration(750)
		.attr("y", 60)
		.style("fill-opacity", 1e-6)
		.remove();

};


// run
update(dataset);

var newset = dataset.slice();
var count = 0;

//update
setInterval(() => {
	let r = randomInt(8);
	console.log(`i ran update ::  ${r}`);
	dataset.shift();
	dataset.unshift([{x:0,y:r}]);
	console.log(dataset.length);
	update(dataset, count++);
}, 1500);

