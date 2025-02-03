import createElement from '../functional/create/create_element';
import createButton from '../functional/create/create_button';
import { turnSound } from '../functional/game/sound';
import changeTheme from '../functional/game/change_theme';

function createSoundAndThemeBtns() {
  const btnsContainer = createElement({
    tag: 'div',
    classes: ['btns-container__sound-theme'],
  });

  const btnSound = createButton({
    classes: ['header-btns', 'btn-sound'],
    onClick: () => turnSound(),
    parent: btnsContainer,
  });
  btnSound.setAttribute('aria-label', 'turn off/on sound');

  const btnTheme = createButton({
    classes: ['header-btns', 'btn-theme'],
    onClick: () => changeTheme(),
    parent: btnsContainer,
  });

  btnTheme.setAttribute('aria-label', 'change theme');

  return btnsContainer;
}

export default createSoundAndThemeBtns;
