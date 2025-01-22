import createElement from '../functional/create/create_element';

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

  return header;
}

export default createHeader;
