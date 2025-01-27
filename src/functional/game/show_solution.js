function showSolution() {
  const gameCells = document.querySelectorAll('.cell');
  gameCells.forEach((cell) => {
    if (cell.innerText === '1') {
      cell.classList.add('fill');
      cell.classList.remove('cross');
      cell.classList.add('solution'); // добавил класс т.к был баг, можно было нажать показать решение потом убрать и вернуть одну клеточку и всё игра выйграна!
    } else {
      cell.classList.remove('fill');
      cell.classList.remove('cross');
      cell.classList.add('solution');
    }
  });
}

export default showSolution;
