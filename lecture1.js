/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the best practise
 */

var 1stCar = 'Doge'; //he declared a variable using a number
var firstCar = 'Doge';


var var = 'variable'; // a variable name cannot be used to 
var nameOfObject = 'variable'


var first name = 'Jerry'; // a pace is not acceptable in declaring a variable
var firstName = 'Jerry';


var Sch00lName = 'MEST'; // the variable does not agree with the standard practice of small letters and no number declaration
var schoolName = 'MEST';


var totalnumber = 100; // it doesnt agree with camel rule of variable declaration.
var totalNumber = 100;


/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  'It's nice to me you today!';' //it is not correct because the apostrophe in the sentence was not properly indented
var greeting = 'It\'s nice to meet you today';


var response = "Ashwin said, "Yes Sir!""; // the indentation is thesame and hence couldnt properly differentiate the words
var response = 'Ashwin said, "Yes Sir!"';


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */
 var summation = 0.3 + 0.1;
 /*this programme takes two (2) float variables and performs an 
 operation using the (+) symbol for addition and brings out the result.
*/

/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */

var pepperoniPizza = new Pizza("triangle", "square", 12, "vegetarian");
 	console.log (pepperoniPizza);
 
 
 var pizza = { 															//using object.create
 	sliceShape: "triangle",
 	boxShape: "square",
 	sliceNum: 12,
 	calorieSpec: "vegeterian"
 	};
 var firstPizza = Object.create(pizza);
console.log (firstPizza.sliceNum);

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
this.ears = ears;
     this.legs = legs;
     this.mouth = mouth;
 	}
 
  Animal.prototype.hear = function() {
     console.log (this.name + " uses it's ears to hear");
  };
   Animal.prototype.see = function() {
     console.log (this.name + " uses it's eyes to see");
  };
  
  	lion = new Animal("Lion");
  	console.log(lion.name);
  	console.log(lion.hear());
 
  
  	cat = new Animal("Cat");
  	console.log(cat.name);
console.log(cat.see());

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
function orderBeer(choice) { 		//using if-else
	console.log("----Menu----");
	var menuDrinks = [ "Palm Wine", "Star", "Gulder", "More Larger Beer", "Smirnoff Ice", "Others"];
	
	for (var i = 0; i < menu.length; ++i) {
		console.log(i + 1 + " - " + menu[i]);
	}
	
	if (choice === 1) {

var prompt = prompt("Select 1 for Palm Wine, 2 for Star, 3 for Gulder, 4 for More Larger Beer, 5 for Smirnoff Ice, 6 for Others");
	if(prompt == "1")
 		console.log("Palm Wine");
	} else if (choice === 2) {
	else if(prompt == "2")
 		console.log("Star");
	} else if (choice === 3) {
	else if(prompt == "3")
 		console.log("Gulder");
	} else if (choice === 4) {
	else if(prompt == "4")
 		console.log("More Larger Beer");
	} else if (choice === 5) {
	else if(prompt == "5")
 		console.log("Smirnoff Ice");
	}
	else if (choice === 6) {
	else if(prompt == "6")
 		console.log("Others");
	}
}
	else
		console.log("Enter a valid number from 1 to 6");
 
function make_order(orderNo) { 																	
	switch
	console.log("----Menu----");
	var menuDrinks = [ "Palm Wine", "Star", "Gulder", "More Larger Beer", "Smirnoff Ice", "Others"];
	
	for (var i = 0; i < menu.length; i++) {
		console.log(i + 1 + " - " + menu[i]);
	}
	
	switch(orderNo) {
		case 1:

switch(prompt("Select 1 for Palm Wine, 2 for Star, 3 for Gulder, 4 for More Larger Beer, 5 for Smirnoff Ice, 6 for Others")){
		case "1":
			console.log("Palm Wine");
 			break;
		case 2:
		
			console.log("Star");
 			break;
		case 3:
		
 			console.log("Gulder");
 			break;
		case 4:
		
			console.log("Star");
 			break;
		case 5:
		
			console.log("Star");
 			break;
		case 6:
		
			console.log("Star");
 			break;
		default:
			console.log("Enter a valid number from 1 to 6");
			break;
 	}
}

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]
 for (var i = 0; i < studentScores.length; i++) {
 	if (studentScores[i] > 70) {
 		console.log("Student with score " + studentScores[i] + " is above average");
 	} else {
 		console.log("Student with score " + studentScores[i] + " is below average");
 	}
 }
 /*
  * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
  */
 
  var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]
 	studentScores.forEach(function(score, index) {
 	if (score > 70)  {
 		console.log("Student with " + score + " marks did great");
 	} else {
 		console.log("Studen with " + score+ " marks can do better");
}

