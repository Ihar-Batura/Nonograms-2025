import saveWinResultToLS from './save_win_result_to_LS';
import showWinCongratulation from './show_win_congratulation';

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
    saveWinResultToLS();
    showWinCongratulation();
  }
}

export default checkWin;
