let players = () => {

};

let gameBoard = (() => {
	let board = ["x", "o", "o", "x", "x", "x", "o", "o", "o"];
	let htmlBoard = Array.from(document.querySelectorAll(".cell"));
	function mark() {
		for (i = 0; i < board.length; i++) {
			htmlBoard[i].textContent = board[i];
		}
	}

	mark();
})();

let displayController = (()=> {

})();