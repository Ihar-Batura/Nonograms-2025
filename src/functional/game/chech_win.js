import saveWinResultToLS from './save_win_result_to_LS';

function checkWin() {
  const cells = document.querySelectorAll('.cell');
  let count = 0;
  cells.forEach((cell) => {
    if (cell.textContent === '1') {
      count += 1;
      if (cell.textContent === '1' && cell.classList.value.includes('fill')) {
        count -= 1;
      }
    }
    if (cell.textContent === '0' && cell.classList.value.includes('fill')) {
      count += 1;
    }
  });
  if (count === 0) {
    console.log('you win');
    saveWinResultToLS();
  }
}

export default checkWin;
