let x = "X";
let o = "O";
let player = o;

let identifyPlayerX = [];
let identifyPlayerO = [];

function activePlayer() {
	if (player == x) {
		player = o;
	}else{
		player = x;
	}
}

let gameboard = document.querySelectorAll(".cell");
gameboard.forEach(cell => {
	cell.addEventListener("click", () => {
		if (cell.textContent == "") {
			activePlayer();
			cell.textContent = player;
		}

		if (player == x) {
			identifyPlayerX.push(cell.id);
		}else {
			identifyPlayerO.push(cell.id);
		} 
	});
});

function winnerChecker() {
	let winningSequences = [
			[3,5,7],
			[1,5,9],
			[1,2,3],
			[4,5,6],
			[7,8,9],
			[1,4,7],
			[2,5,8],
			[3,6,9]
		];

	return {
		winningSequences
	};
}
