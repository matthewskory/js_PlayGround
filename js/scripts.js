//JS File

function add(x,y){
	console.log(x+y);
}

console.log("hello world");
/*

//array
var	classmates = ["Matt", "Tara", "Daniel", "Evan"];

//loop through using a for loop
for(var j=0; j<classmates.length;j++){
	console.log(classmates[j]);
}

//loop through using for in(for each) USE THIS ONE
for (var i in classmates){
	console.log(classmates[i]);
}

//array constructor
var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "IBC Root Beer";
typesOfSoda[2] = "Tab";
typesOfSoda[3] = "Faygo";

console.log(typesOfSoda);

document.getElementById("js-playground").innerHTML = typesOfSoda;

var mixedTypeArray = ["elephant", 100, (4<2), true, 0];


//silver 

var random = [];
for (var i=0; i <10; i++){
	random.push(Math.floor(Math.random()*100));
}
var randomCopy = random;

for(var i = 0; i <random.length; i++){
	for(var j = i+1; j<random.length; j++){
	if(random[i] === random[j]){
		console.log("duplicate! "+ "the duplicate number is " + random[i]);
	}else{
		console.log(random[i] + "is not a duplicate")
	}
}
}


//gold

var alphabet = ["a","b","c","d","e","f"];

var alphabetString = alphabet.join("");
console.log(alphabetString);

var alphabetReverse = alphabet.reverse();
console.log(alphabetReverse);

var abcLength = alphabet.length;
for(var g = abcLength-1; g=0;g--){
	console.log(alphabet[g]);
}

*/

/*************DO NOT LOOK UP********************************/
//object literal

var friend = {
	//properties
	fullname 			: "",
	age 	 			: 0,
	married	 			: true,
	vocation 			: "",
	closeLikeABro		: true,
	yearsknown			: 10,
	birthmonth			: 5,
	
	//Method
	printVocation		: function(){
		return this.vocation;
	},
	
	introduceToSister	: function(){
		if(this.yearsknown >= 5 && this.closeLikeABro == true && this.married == false){
			return"I want you to meet my sister";
		}else{
			return"Have you tried Tender?";
		}
		},

	birthMonthAlert		: function(){
		var date = new Date();
		var month = date.getMonth()+1;

		if(this.birthmonth === month){
			return "Say Happy Birth Month!";
		}else{
			console.log(date);
			console.log (month);
			return "Wait till next year";
			

		}
	}
}


var mike = Object.create(friend); 
mike.fullname = "Mike";
mike.age = 28;
mike.married = false;

var andrea = Object.create(friend);
andrea.fullname = "Andrea";
andrea.age = 30;
andrea.married = true;

var dan = Object.create(friend);
dan.fullname = "dan";
dan.age = 35;
dan.married = true;

mike.vocation = "Engineer";
andrea.vocation = "Writer";
dan.vocation = "Radio Man";

