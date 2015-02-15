import d3 from 'd3';
import $ from 'jquery';

//Width and height
const width = 600;
const height = 400;

var dataset = [
	[{ x: 0, y: 2 }],
	[{ x: 0, y: 8 }],
	[{ x: 0, y: 4 }],
	[{ x: 0, y: 3 }],
	[{ x: 0, y: 5 }],
	[{ x: 0, y: 4 }],
	[{ x: 0, y: 2 }],
	[{ x: 0, y: 1 }]
];

var randomInt = (max) => { return 0 | Math.random() * max + 1; };

// color range (ordinal scale)
var colors = d3.scale.category20();

// create svg container
var svg = d3.select("#viz")
	.attr("width", width)
	.attr("height", height);

var group = svg.append('g');

var stack = d3.layout.stack();

var rects = group.selectAll('rect')

var update = (data, count) => {
	let offset = 50;
	let colWidth = 100;
	let colHeight = 20;

	stack(data); // set data

	// scale
	let yScale = d3.scale.linear()
		.domain([0,
			d3.max(data, (d) => {
				return d3.max(d, (d) => d.y0 + d.y);
			})
		])
		.range([0, height]);

	rects = group.selectAll('rect')
		.data(data, (d,i) => d[0].y0);

	// update old elements
	rects
		.attr("class", "update")
		.transition()
		.duration(550)
		.attr("y", (d, i) => i * colHeight)

	// create new elements
	rects
		.enter()// enter selection
			.append('rect')
			.style('fill', "white")
			.attr("x", width/2)
			.attr("y", (d) => yScale(d[0].y0))
			.attr("height", colHeight)
			//.attr("height", (d) => yScale(d[0].y))
			.attr("width", colWidth)
			.transition()
			.duration(550)
			.style('fill', (d,i) => colors(count))
			.attr("y", (d, i) => i * 32)

	// remove old elements
	rects
		.exit() // exit selection
		.transition()
		.delay(300)
		.duration(750)
		.attr("y", (d,i)=> i * 32)
		.style("fill-opacity", 1e-6)
		.remove()
};

// run
update(dataset);

var newset = dataset.slice();
var count = 0;

//update
setInterval(() => {
	let r = randomInt(8);
	console.log(`i ran update :: ${r} :: lenght ${newset.length}`);
	dataset.pop()
	dataset.unshift([{x:0,y:r}])
	update(dataset, count++);
}, 1500);

