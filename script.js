const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const boardBlack = '#B38762';
const boardWhite = '#F2DAB6';
const pixelSize = canvas.width / 8;

function constrImg(pieceName) {
	return `https://images.chesscomfiles.com/chess-themes/pieces/neo/150/${pieceName}.png`;
}

function coord(x, y, mode = 'coord') {
	if (mode = 'coord') {
		return [x * pixelSize, (canvas.height - pixelSize) - (y * pixelSize)];
	}
}

function drawSquare(x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(...coord(x, y), pixelSize, pixelSize);
}

function drawBoard() {
	let colorBool = false;
	for (let i = 0; i < 64; i++) {
		const x = i % 8;
		const y = Math.floor(i / 8);
		drawSquare(x, y, colorBool ? boardWhite : boardBlack);
		if (x != 7) {
			colorBool = !colorBool;
		}
	}
}

function drawPiece(pieceName, x, y) {
	const img = new Image();
	img.src = constrImg(pieceName);
	img.onload = () => ctx.drawImage(img, ...coord(x, y), pixelSize, pixelSize);
}

function movePiece(pieceName, x, y) {

}

drawBoard();

