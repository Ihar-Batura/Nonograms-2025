import cleanMainContent from '../clean/clean_main_content';
import goToPlayPage from '../change_page/go_to_play_page';

function continueLastGame() {
  const lastSaveGame = JSON.parse(localStorage.getItem('NGLastGame'));

  const levelId = +lastSaveGame[0][0];
  const timerMinutes = +lastSaveGame[1][0];
  const timerSeconds = +lastSaveGame[1][1];
  const arrStateCells = lastSaveGame[2];

  cleanMainContent();
  goToPlayPage(levelId, timerMinutes, timerSeconds);

  const gameCells = document.querySelectorAll('.cell');
  let counter = 0;
  gameCells.forEach((cell) => {
    if (arrStateCells[counter] === 1) {
      cell.innerText = '1';
    } else if (arrStateCells[counter] === 2) {
      cell.innerText = '1';
      cell.classList.add('fill');
    } else if (arrStateCells[counter] === 3) {
      cell.innerText = '1';
      cell.classList.add('cross');
    } else if (arrStateCells[counter] === 0) {
      cell.innerText = '0';
    } else if (arrStateCells[counter] === -1) {
      cell.innerText = '0';
      cell.classList.add('fill');
    } else if (arrStateCells[counter] === -2) {
      cell.innerText = '0';
      cell.classList.add('cross');
    }
    counter += 1;
  });
}

export default continueLastGame;
