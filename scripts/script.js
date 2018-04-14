window.onload = async function() {
	addRandomSource("A");
	await addRandomSourceFromDocument("docs/augment.txt");
	await addRandomSourceFromDocument("docs/grade.txt");
	await addRandomSourceFromDocument("docs/kit.txt");
	//addRandomSource("with");
	await addRandomSourceFromDocument("docs/tweak.txt");
	document.getElementById("random").innerHTML = generateRandom();
}