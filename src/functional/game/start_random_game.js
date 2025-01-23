import cleanMainContent from '../clean/clean_main_content';
import removeClassFromAllElements from '../clean/remove_class_from_all_elements';
import getRandomNumber from '../get/get_random_number';
import goToPlayPage from '../change_page/go_to_play_page';

function startRandomGame() {
  removeClassFromAllElements('nav-btn', 'active');
  cleanMainContent();
  const gameId = getRandomNumber(1, 15);
  goToPlayPage(gameId);
}

export default startRandomGame;
