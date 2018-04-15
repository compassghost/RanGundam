window.onload = async function() {
	addArticle("A", "An");
	await addRandomSourceFromDocument("docs/grade.txt");
	await addRandomSourceFromDocument("docs/augment.txt");
	await addRandomSourceFromDocument("docs/kit.txt");
	//addRandomSource("with");
	await addRandomSourceFromDocument("docs/tweak.txt");
	document.getElementById("random").innerHTML = generateRandom();
}