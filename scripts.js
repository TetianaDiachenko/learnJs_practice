// ======================= Tasks on working with arrays from learnJs ============================

// Task 1: Enter text of the type border-left-width in borderLeftWidth

function camelize(str) {
	return str
		 .split('-') // 'background', 'color' ... '', 'webkit', 'transition' 
		 .filter(word => word !== '') // 'background', 'color' ... 'webkit', 'transition'
		 .map((word, index) => {
			  if (index === 0 && str[0] !== '-') {
					return word;
			  } else {
					return word.charAt(0).toUpperCase() + word.slice(1); // 1 letter Big + rest of the word
			  }
		 })
		 .join('')
}
console.log(camelize("background-color")); // backgroundColor
console.log(camelize("list-style-image")); // listStyleImage
console.log(camelize("-webkit-transition")); // WebkitTransition

/* Task 2: Write a function filterRange(arr, a, b) 
that takes an array arr, searches it for 
elements greater than or equal to a and 
less than or equal to b, and 
returns an array of these elements.*/

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
	return arr.filter(item => item >= a && item <= b);
}
let filtered = filterRange(arr, 1, 4);

console.log(filtered); // [ 3, 1 ]
console.log(arr); // [ 5, 3, 8, 1 ]

// Task 3: Sort descending

let arrSort = [5, 2, 1, -10, 8];

function sortDescenging(arr) {
	return arr.sort((a,b) => b - a);
	// return [...arr].sort((a, b) => b - a); 
	// if we want to creat a new arr and don't change our arrSort
} 
console.log(sortDescenging(arrSort)); // [ 8, 5, 2, 1, -10 ]