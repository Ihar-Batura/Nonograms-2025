import createElement from '../functional/create/create_element';
import createTimer from '../components/timer';
import createButton from '../functional/create/create_button';

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
    parent: controlContainer,
  });
  createButton({
    classes: ['btn', 'play-btn', 'play-btn__reset-game'],
    text: 'Reset game',
    parent: controlContainer,
  });
  createButton({
    classes: ['btn', 'play-btn', 'play-btn__show-solution'],
    text: 'Show solution',
    parent: controlContainer,
  });
  createButton({
    classes: ['btn', 'play-btn', 'play-btn__continue-game'],
    text: 'Continue last game',
    parent: controlContainer,
  });

  return controlContainer;
}

export default createPlayControl;
