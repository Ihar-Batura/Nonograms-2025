import createPlayField from '../../layout/play_field';

function goToPlayPage(gameId) {
  const mainContentContainer = document.querySelector('.main-content');
  const playField = createPlayField(gameId);
  mainContentContainer.append(playField);
}

export default goToPlayPage;
