
let Player = (name) => {
	this.name = name;
	return {
		name
	}
}

let gameboard = (() =>{
	let board = ["", "", "", "", "", "", "", "", ""];
	let grid = document.querySelectorAll(".cell");
	let htmlBoard = document.querySelector(".gameboard");
	let message = document.querySelector(".message");
	let playAgain = document.querySelector(".playAgain");

	let PlayerX = Player("x");
	let PlayerO = Player("O");
	let currentPlayer = PlayerO;
	let PlayerXId = [];
	let PlayerOId = [];

	function activePalyer() {
		if (currentPlayer == PlayerO) {
			message.textContent = `Player ${currentPlayer.name}'s turn`;
			currentPlayer = PlayerX;
		}else {
			message.textContent = `Player ${currentPlayer.name}'s turn`;
			currentPlayer = PlayerO;
		}
	}

	//render the content of the board on webpage;
	grid.forEach((cell) => {
		cell.addEventListener("click", ()=> {
			if (cell.textContent == "") {
				activePalyer();
				board[cell.id] = currentPlayer.name;
				cell.textContent = board[cell.id];

				if (currentPlayer == PlayerX) {
					PlayerXId.push(Number(cell.id));
				}else {
					PlayerOId.push(Number(cell.id));
				}
			}

			winnerChecker();
		});
	}); 

	function winnerChecker() {
		
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

      	function checker(arr1, arr2) {
			return arr1.every(elem => arr2.includes(elem));
		}

		for (i = 0; i < winningSequences.length; i++) {
			let isWon;			
			if (PlayerXId.length >= 3 || PlayerOId.length >= 3) {
				isWon = checker(winningSequences[i], PlayerXId) || checker(winningSequences[i], PlayerOId);

				if (isWon) {	
					message.textContent = `Player ${currentPlayer.name} is the Winner`;
					htmlBoard.classList.add("removeBoard");
				}else if (!isWon && (PlayerXId.length + PlayerOId.length) == 9) {
					message.textContent = "it was a draw";
				}
			}
		}
	}

	playAgain.addEventListener("click", () => {
		board = ["", "", "", "", "", "", "", "", ""];
		currentPlayer = PlayerO;
		PlayerXId = [];
		PlayerOId = [];
		htmlBoard.classList.remove("removeBoard");

		grid.forEach(cell => {
			cell.textContent = "";
		});
	});

})(); 
 


