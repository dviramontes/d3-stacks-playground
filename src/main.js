import d3 from 'd3';
import $ from 'jquery';
import _ from 'lodash';

/*===================================
 * 1. IMPLEMENT A STACK (PUSH AND POP)
===================================*/

// Note : this one is a d3 visualization
// you can play with in your browser
// press push and pop to add and remove
// items from the stack

const width  = 600;
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
		.attr("y", (d, i) => i * colHeight);

	rects// create new elements
		.enter()// enter selection
		.append('rect')
		.style('fill', "white")
		.attr("x", width/2 - colWidth/2)
		.attr("y", colHeight)
		.attr("height", colHeight)
		.attr("width", colWidth)
		.transition()
		.duration(550)
		.style('fill', (d,i) => colors(count%20))
		.attr("y", (d, i) => i * 32);

	rects// remove old elements
		.exit() // exit selection
		.transition()
		.delay(300)
		.duration(750)
		.attr("y", (d,i)=> i * 32)
		.style("fill-opacity", 1e-6)
		.remove();
};

// run
update(dataset);

// update
setInterval(() => {
	dataset.pop();
	dataset.unshift([{x:0,y:5}]);
	update(dataset, count++);
}, 1500);

/*================================
 * 2. REVERSE AN ARRAY OF N ITEMS
=================================*/

console.log("2.");

// NOTE : ES5 has a reverse array method
// Array.prototype.reverse
// and we would have to have a very good reason
// for trying to roll our own, but say we had
// no choice ...

// when primitive types
var test = _.range(10);
// when complex types i.e. {objects}
var test2 = dataset.slice(); // clone the dataset above

var reverse = (arr) => {
	let len = arr.length;
	return arr.map((e,i,a) => {
		return a[--len];
	});
};

console.log(reverse(test));
console.log(reverse(test2));

/*================================
 * 3. PRINT OUT THE EVEN NUMBERS
 *    FROM 0 to 100
 =================================*/

console.log("3.");
var oneHundred = _.range(100);
var evens = (coll) => coll.filter((e)=> e % 2 === 0 ? e : null);
console.log(evens(oneHundred));

export {reverse,evens}


