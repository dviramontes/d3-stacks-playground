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

// color range (ordinal scale)
var colors = d3.scale.category20();

// create svg container
var svg = d3.select("#viz")
	.attr("width", width)
	.attr("height", height);

var group = svg.append('g');

var stack = d3.layout.stack();

var rects = group.selectAll('rect');

var count = 0;

$("#push").on("click", () => dataset.unshift([{x:0,y:10}]));

$("#pop").on("click", () => dataset.pop());

var update = (data, count) => {
	let colWidth = 100;
	let colHeight = 20;

	stack(data); // set data

	rects = group.selectAll('rect')
		.data(data, (d,i) => d[0].y0);

	rects// update old elements
		.transition()
		.duration(550)
		.attr("y", (d, i) => i * colHeight)

	rects// create new elements
		.enter()// enter selection
		.append('rect')
		.style('fill', "white")
		.attr("x", width/2 - colWidth/2)
		.attr("y", colHeight)
		.attr("height", colHeight)
		//.attr("height", (d) => yScale(d[0].y))
		.attr("width", colWidth)
		.transition()
		.duration(550)
		.style('fill', (d,i) => colors(count))
		.attr("y", (d, i) => i * 32)

	rects// remove old elements
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

// update
setInterval(() => {
	dataset.pop()
	dataset.unshift([{x:0,y:10}])
	update(dataset, count++);
}, 1500);

// when
// primitive data types

var test = [1,2,3,4,5,6,7,8,9,9];

var checkForSimpleDataTypes = function(d){
	return typeof d === 'number'|| typeof d === 'string';
}

var reverse = (arr) => {
	if(arr.every(checkForSimpleDataTypes)){
		return arr.reverse();
	}
};

var print = reverse(test);
console.log(test2);

// when complex
// datatypes i.e. {objects}

var test2 =  [
	[{ x: 0, y: 2 }],
	[{ x: 0, y: 8 }],
	[{ x: 0, y: 4 }]
];

export default {}


