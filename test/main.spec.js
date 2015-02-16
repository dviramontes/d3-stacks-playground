import {reverse as myReverseFunction, evens} from 'src/main';

var testArray = [1,2,3,4,5];

describe('custom reverse function', ()=>{
	it('should be able to reverse an array of n elements', ()=>{
		let testColl = testArray.slice(); // need to clone the array because .reverse() mutates the array
		expect(myReverseFunction).toBeDefined();
		expect(myReverseFunction(testColl)).toEqual(testArray.reverse());
	});
});

describe('a filter evens in collection function', ()=>{
	it('should be able to filter an array', ()=>{
		let testColl = [1,2,3,4,5,6,7,8,9,10];
		expect(evens).toBeDefined();
		expect(evens(testColl)).toEqual([2,4,6,8,10]);
	})
});