function resetGame() {
  const gameCells = document.querySelectorAll('.cell');
  gameCells.forEach((cell) => {
    cell.classList.remove('fill');
    cell.classList.remove('cross');
    cell.classList.remove('solution');
  });
}

export default resetGame;
