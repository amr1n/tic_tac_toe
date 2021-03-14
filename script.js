let dom = (() => {
	let board = document.querySelectorAll(".cell");
	let htmlBoard = document.querySelector(".gameboard");
	let playAgain = document.querySelector(".playAgain");
	let message = document.querySelector(".message");

	return {
		board,
		htmlBoard,
		playAgain,
		message,
	};
})();

let Players = (() => {
	let playerX = "X";
	let playerO = "O";
	let playerXId = [];
	let playerOId = [];

	return {
		playerX, 
		playerO,
		playerOId,
		playerXId,
	};
	
})();

let currentPlayer = Players.playerX;
function activePlayer() {
	if (currentPlayer == Players.playerX) {
		dom.message.textContent = `Player ${currentPlayer}'s turn.`;
		currentPlayer = Players.playerO;
	}else {
		dom.message.textContent = `Player ${currentPlayer}'s turn.`;
		currentPlayer = Players.playerX; 
	}
}

let gameboard = (() => {
	let board = ["", "", "", "", "", "", "", "", ""];
	dom.board.forEach(cell => {
		cell.addEventListener("click", () => {
			if (cell.textContent == "") {
				activePlayer();
				board[cell.id] = currentPlayer;
				cell.textContent = board[cell.id];

				if (currentPlayer == Players.playerX) {
					Players.playerXId.push(Number(cell.id));
				}else {
					Players.playerOId.push(Number(cell.id));
				}
			};

			chooseWinner();
			
		});
	});

	return {
		board,
	}
})();

let chooseWinner = () => {
	let winningSequences = [
	  [0, 1, 2],  
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6], 
	];

	function checker(sequence, playerId) {
		return sequence.every(elem => playerId.includes(elem));
	}

	for (i = 0; i < winningSequences.length; i++) {
		let isWon;
		if (Players.playerXId.length >= 3 || Players.playerOId.length >= 3) {
			isWon = checker(winningSequences[i], Players.playerXId) || checker(winningSequences[i], Players.playerOId);

			if (isWon) {
				dom.message.textContent = `Player ${currentPlayer} is the Winner`;
				dom.htmlBoard.classList.add("removeBoard");
			}else if (!isWon && (Players.playerXId.length + Players.playerOId.length) == 9) {
				dom.message.textContent = `It was a draw.`;
			}
		}
	}

};

dom.playAgain.addEventListener("click", ()=> {
	gameboard.board = ["", "", "", "", "", "", "", "", ""];
	currentPlayer = Players.playerX;
	Players.playerXId = [];
	Players.playerOId = [];
	dom.htmlBoard.classList.remove("removeBoard");

	dom.board.forEach(cell => {
		cell.textContent = "";
	});
});
