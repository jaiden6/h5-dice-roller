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

function increasePool(){
	pool.innerText = parseInt(pool.innerText) + 1;
}

function decreasePool(){
	if(parseInt(pool.innerText) != 1){
		pool.innerText = parseInt(pool.innerText) - 1;
	}
}

function increaseDesperation(){
	if(parseInt(desperation.innerText) != 5){
		desperation.innerText = parseInt(desperation.innerText) + 1;
	}
}

function decreaseDesperation(){
	if(parseInt(desperation.innerText) != 1){
		desperation.innerText = parseInt(desperation.innerText) - 1;
	}
}