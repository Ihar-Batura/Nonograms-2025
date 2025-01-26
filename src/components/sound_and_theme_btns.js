import createElement from '../functional/create/create_element';
import createButton from '../functional/create/create_button';
import { turnSound } from '../functional/game/sound';

function createSoundAndThemeBtns() {
  const btnsContainer = createElement({
    tag: 'div',
    classes: ['btns-container__sound-theme'],
  });

  createButton({
    classes: ['header-btns', 'btn-sound'],
    onClick: () => turnSound(),
    parent: btnsContainer,
  });
  createButton({
    classes: ['header-btns', 'btn-theme'],
    parent: btnsContainer,
  });

  return btnsContainer;
}

export default createSoundAndThemeBtns;
