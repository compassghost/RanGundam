//Random Phrase Generator

//Bucket for all the random phrases
var randomSource = [];

//Generates the sentence
function generateRandom() {
	var output = "";
	for(var i = 0; i < randomSource.length; i++) {
		var source = randomSource[i];
		//pick a random element from a list
		if(Array.isArray(source)) {
			var index = Math.floor(Math.random() * source.length);
			output += " " + source[index]; + " ";			
		}
		else {
			output += " " + source + " ";
		}
	}
	return output;
}

//Add a text source. Takes any single value or an array of values.
function addRandomSource(source) {
	randomSource.push(source);
}

//Add a text source from a document, no delimiters, one option per line
async function addRandomSourceFromDocument(url) {
	return new Promise(function (resolve, reject) {
		var request = new XMLHttpRequest();
		request.open('GET', url);
		request.responseType = 'text';
		var data;
		request.onload = function() {
			var source = request.response.split("\n");
			source = source.filter(function(n){ return n != undefined }); 
			addRandomSource(source);
			resolve();
		};
		request.send(null);
	});
}

/** Example Usage
window.onload = async function() {
	addRandomSource("A");
	await addRandomSourceFromDocument("docs/augment.txt");
	await addRandomSourceFromDocument("docs/grade.txt");
	await addRandomSourceFromDocument("docs/kit.txt");
	addRandomSource("with");
	await addRandomSourceFromDocument("docs/tweak.txt");
	document.getElementById("random").innerHTML = generateRandom();
}

//This generates a sentence of the following format: 'A [Augment] [Grade] [Kit] with [Tweak]';
**/