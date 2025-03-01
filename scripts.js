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