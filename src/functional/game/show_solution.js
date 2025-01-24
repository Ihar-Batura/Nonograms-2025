function showSolution() {
  const gameCells = document.querySelectorAll('.cell');
  gameCells.forEach((cell) => {
    if (cell.innerText === '1') {
      cell.classList.add('fill');
      cell.classList.remove('cross');
    } else {
      cell.classList.remove('fill');
      cell.classList.remove('cross');
    }
  });
}

export default showSolution;
