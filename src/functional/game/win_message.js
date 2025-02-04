import createElement from '../create/create_element';
import createButton from '../create/create_button';
import goToPlayPage from '../change_page/go_to_play_page';

function createWinMessage(id, name, timerMinutes, timerSeconds) {
  const mainContentContainer = document.querySelector('.main-content');

  const winMessageContainer = createElement({
    tag: 'div',
    classes: ['win-message__container'],
    parent: mainContentContainer,
  });

  createElement({
    tag: 'h2',
    classes: ['win-message__container-text'],
    text: `"Great! You have solved the nonogram in ${timerMinutes * 60 + +timerSeconds} seconds!"`,
    parent: winMessageContainer,
  });

  createElement({
    tag: 'div',
    classes: [
      'win-message__container-picture',
      'level-card__img',
      `level-card__img-${name}`,
    ],
    parent: winMessageContainer,
  });

  createButton({
    classes: ['btn', 'play-btn', 'play-btn__play-again'],
    text: 'Play again',
    onClick: () => goToPlayPage(id),
    parent: winMessageContainer,
  });
}

export default createWinMessage;
