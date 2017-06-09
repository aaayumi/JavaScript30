(function(){

function createPopup () {

	var popup = document.createElement('div');
	var heading = document.createElement('h1')
	heading.appendTo(popup);
	return popup;
    
}


var button = document.querySelector('button');
button.eventListener('click', callPopup());

})();

(function(){
	var myWindow = window.open("", "Window", "width=200,height=100");
	myWindow.document.write("<p>ahahahah</p>");
}

function openWin() {
	myWindow = window.open("", "myWindow", "width=200,height=100");
}

function closeWin() {
	myWindow.close();
}

// minimum num 

function min(a,b) {
	if ( a < b )
		return a;
	else
		 return b;
}

// recursion 

function isEven(number) {
  function find(n) {
    if (n%2=0 )
    	return true;
    else if (n%2 > 0) 
    	return false;
    else 
    	return ...;
} return find();
} 
  

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

// counting 
function countBs(b){
	for(var i=0; i < b.length; i++){
		if(b[i] === "B"){
			return n++;
		} 

	}

function countChar(word, alpha) {
	for(var i=0; i < alpha.length; i++){
		if(word[i] === alpha){
			return n++;
		}
	}
}
// * answer
function countChar(string, ch) {
	var counted = 0;
	for(var i=0; i < string.length; i++) {
		if(string.charAt(i) == ch)
		counted += 1;
	    return counted;
	}

	function countBs(string) {
		return countChar(string, "B");
	}

// sum of a range
function range(start, end, step){
	if(step == null) {
		step = 1;
	}
	var array = [];

	if ( step > 0 ) {
		for (var i = start; i <= end; i+= step){
			array.push(i);
		} else {
		for (var i = start; i >= end; i += step){
			array.push(i);
		}
		return array;
		}
	}
}

function sum(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++){
		total += array[i];
		return total;
	}
}	

// reversing array 
var newArray = []
function reverseArray(array){
  for (var i = array.length -1; i >=0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(arrayValue) {
  arrayValue.sort(function(a, b) {
    return b - a;
  })
                  }

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// a list 
var list = {};

function arrayToList(value){
	for(var i = value.length-1; i>=0; i--){
		list.push({value: value, rest: value})
	}
}

