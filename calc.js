const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	// This splits the string between each word. .split('') would split string between each character.
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	console.log("mathSymbol", mathSymbol);
	console.log ("num1", num1);
	console.log("num2", num2);

	if (mathSymbol === "+"){
		console.log(num1 + num2);
	}	else if (mathSymbol === "-"){
		console.log(num1 - num2)
	}	else if (mathSymbol === "*"){
		console.log(num1 * num2)
	}	else if (mathSymbol === "/"){
		console.log(num1 / num2)
	}	else if (mathSymbol === "sqrt"){
		console.log(Math.sqrt(num1))
	}	else if (mathSymbol === "sq"){
		console.log(Math.pow(num1, 2))
	}	else if (mathSymbol === "cube"){
		console.log(Math.pow(num1, 3))
	}	else if (mathSymbol === "pow"){
		console.log(Math.pow(num1, num2))
	}	else if (mathSymbol === "%"){
		console.log(num1 % num2)
	} else {
		console.log("Incorrect Input. Follow this format: mathSymbol num1 num2")
		console.log("+ to add, - to subtract, * to multiply, / to divide, sqrt for square root")
		console.log("sq to square, cube to cube, pow for num1 ^ num2, % for remainder")
	}
	

	// This line closes the connection to the command line interface.
	reader.close()

});
