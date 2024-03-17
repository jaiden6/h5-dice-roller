function rollDice(pool){
	const results = [];
	for(let i = 0; i < pool; i++){
		results.push(Math.floor(Math.random() * 10) + 1);
	}
	return results;
}

function convertResults(results, desperationDice){
	const convertedResults = [];
	for(let i = 0; i < desperationDice && results.length != 0; i++){
		let die = results.pop();
		if(die > 5){
			convertedResults[i] = "success";
			if(die == 10){
				convertedResults[i] = "critical";
			}
		}
		if(die < 6){
			convertedResults[i] = "failure";
			if(die == 1){
				convertedResults[i] = "despair";
			}
		}
	}
	while(results.length != 0){
		let die = results.pop();
		if(die > 5){
			if(die == 10){
				convertedResults.push("critical");
			}else{
				convertedResults.push("success");
			}
		}
		if(die < 6){
			convertedResults.push("failure");
		}
	}
	console.log(convertedResults)
	return convertedResults;
}

function displayRoll(){
	let desperationDice = 0;
	if(applyDesperation.checked){
		desperationDice = parseInt(desperation.innerText);
	}
	let cells = document.querySelectorAll("td");
	for(let i = 0; i < cells.length; i++){
		cells[i].remove();
	}
	cells = convertResults(rollDice(parseInt(pool.innerText) + desperationDice), desperationDice);
	while(cells.length != 0){
		let cell = document.createElement("td")
		cell.innerHTML = '<img class="icon" src="' + cells.pop() + '.svg">'
		resultsTable.appendChild(cell)
	}
}