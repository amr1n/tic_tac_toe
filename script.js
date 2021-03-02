
let Player = (name) => {
	this.name = name;
	return {name};
}

let gameboard = (() =>{
	let board = ["", "", "", "", "", "", "", "", ""];
	let grid = document.querySelectorAll(".cell");
	let PlayerX = Player("x");
	let PlayerO = Player("O");
	let currentPlayer = PlayerX;
	function activePalyer() {
		currentPlayer = currentPlayer == PlayerX ? PlayerO: PlayerX;
	}

	//render the content of the board on webpage;
	grid.forEach((cell) => {
		cell.addEventListener("click", ()=> {
			if (cell.textContent == "") {
				activePalyer();
				board[cell.id] = currentPlayer.name;
				cell.textContent = board[cell.id];
			}
		});
	});
 
})(); 




