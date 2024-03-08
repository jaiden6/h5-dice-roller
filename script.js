function rollDice(pool){
	const result = [];
	if(applyDesperation.checked){
		pool = pool + parseInt(desperation.innerText);
	}
	for(let i = 0; i < pool; i++){
		result.push(Math.floor(Math.random() * 10));
	}
	return result;
}

function displayRoll(result){
	const cells = document.querySelectorAll("td");
	let desperationCount = 0;
	if(applyDesperation.checked){
		desperationCount = parseInt(desperation.innerText);
	}
	for(let i = 0; i < cells.length; i++){
		cells[i].remove();
	}
	for(let i = 0; i < desperationCount && result.length != 0; i++){

	}
	while(result.length != 0){

	}
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