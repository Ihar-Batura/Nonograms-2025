import createPlayField from '../../layout/play_field';
import fillGameCell from '../game/fill_game_cell';
import markGameCell from '../game/mark_game_cell';
import createPlayControl from '../../layout/play_control';

function goToPlayPage(gameId) {
  const mainContentContainer = document.querySelector('.main-content');
  const playField = createPlayField(gameId);
  const playControl = createPlayControl();
  mainContentContainer.append(playField, playControl);

  fillGameCell();
  markGameCell();
}

export default goToPlayPage;
