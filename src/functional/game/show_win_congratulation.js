import { nonograms } from '../../data/nonograms';
import cleanMainContent from '../clean/clean_main_content';
import createWinMessage from './win_message';
import { playSoundWin } from './sound';

function showWinCongratulation() {
  const gameContainer = document.querySelector('.play-field');
  const gameId = gameContainer.id;
  const gameName = nonograms[gameId - 1].name;
  const timerMinutes = document.querySelector('.timer-minutes').textContent;
  const timerSeconds = document.querySelector('.timer-seconds').textContent;
  const time = `${timerMinutes}:${timerSeconds}`;

  cleanMainContent();
  createWinMessage(gameId, gameName, time);
  playSoundWin();
}

export default showWinCongratulation;
