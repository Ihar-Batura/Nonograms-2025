import createElement from '../functional/create/create_element';
import createLevel from '../components/level';

function createSectionSelectLevel() {
  const selectLevelContainer = createElement({
    tag: 'div',
    classes: ['select-level__container'],
  });

  const easyLevel = createLevel(1, 'Easy (5x5)');
  const mediumLevel = createLevel(6, 'Medium (10x10)');
  const hardLevel = createLevel(11, 'Hard (15x15)');

  selectLevelContainer.append(easyLevel, mediumLevel, hardLevel);

  return selectLevelContainer;
}

export default createSectionSelectLevel;
