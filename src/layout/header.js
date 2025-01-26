import createElement from '../functional/create/create_element';
import createSoundAndThemeBtns from '../components/sound_and_theme_btns';

function createHeader() {
  const header = createElement({ tag: 'header', classes: ['header'] });
  const wrapper = createElement({
    tag: 'div',
    classes: ['wrapper', 'header-wrapper'],
    parent: header,
  });

  createElement({
    tag: 'h1',
    classes: ['header-logo'],
    text: 'Nonograms',
    parent: wrapper,
  });

  const soundAndThemeBtns = createSoundAndThemeBtns();
  wrapper.append(soundAndThemeBtns);

  return header;
}

export default createHeader;
