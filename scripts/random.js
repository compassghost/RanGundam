var randomSource = [];

function generateRandom() {
	var output = "";
	for(var i = 0; i < randomSource.length; i++) {
		var source = randomSource[i];
		//pick random
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

function addRandomSource(source) {
	randomSource.push(source);
}

async function addRandomSourceFromDocument(url) {
	return new Promise(function (resolve, reject) {
		var request = new XMLHttpRequest();
		request.open('GET', url);
		request.responseType = 'text';
		var data;
		request.onload = function() {
			addRandomSource(request.response.split("\r\n"));
			resolve();
		};
		request.send(null);
	});
}