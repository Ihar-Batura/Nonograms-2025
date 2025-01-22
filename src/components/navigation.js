import createElement from '../functional/create/create_element';
import createButton from '../functional/create/create_button';
import goToPageSelectLevel from '../functional/change_page/go_to_page_select_level';

function createNavigation() {
  const navContainer = createElement({
    tag: 'div',
    classes: ['main__nav-container'],
  });

  createButton({
    classes: ['btn', 'nav-btn', 'nav-btn__select-level', 'active'],
    text: 'Select level',
    onClick: () => goToPageSelectLevel(),
    parent: navContainer,
  });
  createButton({
    classes: ['btn', 'nav-btn', 'nav-btn__start-random'],
    text: 'Start random',
    parent: navContainer,
  });
  createButton({
    classes: ['btn', 'nav-btn', 'nav-btn__score-table'],
    text: 'Score table',
    parent: navContainer,
  });
  createButton({
    classes: ['btn', 'nav-btn', 'nav-btn__change-theme'],
    text: 'Change theme',
    parent: navContainer,
  });

  return navContainer;
}

export default createNavigation;
