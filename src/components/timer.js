import createElement from '../functional/create/create_element';

function createTimer() {
  const timer = createElement({ tag: 'div', classes: ['timer'] });

  createElement({
    tag: 'span',
    classes: ['timer-minutes'],
    text: '00',
    parent: timer,
  });
  createElement({
    tag: 'span',
    classes: ['timer-dots'],
    text: ':',
    parent: timer,
  });
  createElement({
    tag: 'span',
    classes: ['timer-seconds'],
    text: '00',
    parent: timer,
  });

  return timer;
}

export default createTimer;
