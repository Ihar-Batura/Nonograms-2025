import createElement from '../functional/create/create_element';
import createButton from '../functional/create/create_button';

function createNavigation() {
  const navContainer = createElement({
    tag: 'div',
    classes: ['header__nav-container'],
  });

  createButton({
    classes: ['bnt', 'header-btn', 'header-btn__select-level'],
    text: 'Select level',
    parent: navContainer,
  });
  createButton({
    classes: ['bnt', 'header-btn', 'header-btn__start-random'],
    text: 'Start random',
    parent: navContainer,
  });
  createButton({
    classes: ['bnt', 'header-btn', 'header-btn__score-table'],
    text: 'Score table',
    parent: navContainer,
  });
  createButton({
    classes: ['bnt', 'header-btn', 'header-btn__change-theme'],
    text: 'Change theme',
    parent: navContainer,
  });

  return navContainer;
}

export default createNavigation;
