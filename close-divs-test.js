/*

	Questions / Doubts?
	- The function must return a string
	- Focus only in <div> tag, ignore others HTML tags
	- Close every other <div> tag, no need to nest it

	What is expected to return (examples):
	* <div>Hello World<div>	=>	<div>Hello</div>
	* <div><h1>New function<h1><div><div>in javascript<div>	=>	<div><h1>New function<h1></div><div>in javascript</div>
	* <div><div><div>Another test<div><div><div>	=>	<div></div><div>Another test</div><div></div>

*/

const closeDivs = (string) => {
	
	// Stores the new string after the function resolution
	let fixedString = '';
	
	// Stores the index of <div> tag
	let countDivs = 0;

	// Looping through each character of the string
	for(let i = 0; i < string.length; i++) {
		
		// Checks if "<" has "div" after it
		if(string[i] === '<' && string[i+1] === 'd' && string[i+2] === 'i'  && string[i+3] == 'v') {
			
			// Increases the counter each time "<div" appears in the string
			countDivs++;
	
			// Checks if "<div" index is odd, which means there is a "<div>" before it. In this case, this "<div" has to close the previous one.
			// Add the character to the new string. If it's the second "<div", add "<" with "/" after it.
			countDivs % 2 === 0 ? fixedString += string[i] + '/' : fixedString += string[i];

		} else {
			// Add the others characters normally to copy the entire string
			fixedString += string[i];
		};
	};

	return fixedString;
};

console.log(closeDivs("Test 1: <div><h1>The HTML tags aren't closed.<h1><div><div><p>Please, close only div tags!<p><div>"));
console.log(closeDivs("Test 2: <div>Hello World<div>"));
console.log(closeDivs("Test 3: <div><h1>New function<h1><div><div>in javascript<div>"));
console.log(closeDivs("Test 4: <div><div><div>Another test<div><div><div>"));