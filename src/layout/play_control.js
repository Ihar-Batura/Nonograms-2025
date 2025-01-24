import createElement from '../functional/create/create_element';
import createTimer from '../components/timer';
import createButton from '../functional/create/create_button';
import showSolution from '../functional/game/show_solution';
import resetGame from '../functional/game/reset_game';
import saveGame from '../functional/game/save_game';
import continueLastGame from '../functional/game/continue_last_game';

function createPlayControl() {
  const controlContainer = createElement({
    tag: 'div',
    classes: ['play-control'],
  });

  const timer = createTimer();
  controlContainer.append(timer);

  createButton({
    classes: ['btn', 'play-btn', 'play-btn__save-game'],
    text: 'Save game',
    onClick: () => saveGame(),
    parent: controlContainer,
  });
  createButton({
    classes: ['btn', 'play-btn', 'play-btn__reset-game'],
    text: 'Reset game',
    onClick: () => resetGame(),
    parent: controlContainer,
  });
  createButton({
    classes: ['btn', 'play-btn', 'play-btn__show-solution'],
    text: 'Show solution',
    onClick: () => showSolution(),
    parent: controlContainer,
  });
  createButton({
    classes: ['btn', 'play-btn', 'play-btn__continue-game'],
    text: 'Continue last game',
    onClick: () => continueLastGame(),
    parent: controlContainer,
  });

  return controlContainer;
}

export default createPlayControl;
