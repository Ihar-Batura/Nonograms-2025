import cleanMainContent from '../clean/clean_main_content';
import createPlayField from '../../layout/play_field';
import fillGameCell from '../game/fill_game_cell';
import markGameCell from '../game/mark_game_cell';
import createPlayControl from '../../layout/play_control';
import startTimer from '../game/timer';

function goToPlayPage(gameId, timerMinutes, timerSeconds) {
  cleanMainContent();
  const mainContentContainer = document.querySelector('.main-content');
  const playField = createPlayField(gameId);
  const playControl = createPlayControl();
  mainContentContainer.append(playField, playControl);

  fillGameCell();
  markGameCell();
  startTimer(timerMinutes, timerSeconds);
}

export default goToPlayPage;
