import createElement from '../functional/create/create_element';
import createButton from '../functional/create/create_button';
import goToPageSelectLevel from '../functional/change_page/go_to_page_select_level';
import startRandomGame from '../functional/game/start_random_game';
import goToPageScoreTable from '../functional/change_page/go_to_page_score_table';

function createNavigation() {
  const navContainer = createElement({
    tag: 'div',
    classes: ['main__nav-container'],
  });

  createButton({
    classes: ['btn', 'nav-btn', 'nav-btn__select-level'],
    text: 'Select level',
    onClick: (e) => goToPageSelectLevel(e),
    parent: navContainer,
  });
  createButton({
    classes: ['btn', 'nav-btn', 'nav-btn__start-random'],
    text: 'Start random',
    onClick: () => startRandomGame(),
    parent: navContainer,
  });
  createButton({
    classes: ['btn', 'nav-btn', 'nav-btn__score-table'],
    text: 'Score table',
    onClick: (e) => goToPageScoreTable(e),
    parent: navContainer,
  });

  return navContainer;
}

export default createNavigation;
