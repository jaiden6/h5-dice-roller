function die(){
	return Math.floor(Math.random() * 10)
}

function rollDice(pool){
	const result = [];
	for (let i = 0; i < pool; i++) {
		result.push(die());
	}
	return result;
}