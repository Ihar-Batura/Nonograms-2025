import createElement from '../functional/create/create_element';
import { nonograms } from '../data/nonograms';

function createLevel(startId, description) {
  const levelContainer = createElement({ tag: 'div', classes: ['level'] });

  createElement({
    tag: 'p',
    classes: ['level-description'],
    text: `${description}`,
    parent: levelContainer,
  });

  const levelsContainer = createElement({
    tag: 'div',
    classes: ['levels-container'],
    parent: levelContainer,
  });

  for (let i = 0; i < 5; i += 1) {
    const cardId = startId + i;
    const cardName = nonograms[cardId - 1].name;

    const levelCard = createElement({
      tag: 'div',
      classes: ['level-card'],
      id: `${cardId}`,
    });

    createElement({
      tag: 'div',
      classes: ['level-card__img', `level-card__img-${cardName}`],
      parent: levelCard,
    });

    createElement({
      tag: 'p',
      classes: ['level-card__name'],
      text: `${cardName}`,
      parent: levelCard,
    });

    levelsContainer.append(levelCard);
  }

  return levelContainer;
}

export default createLevel;
