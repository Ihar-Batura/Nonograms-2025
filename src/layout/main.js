import createElement from '../functional/create/create_element';
import createNavigation from '../components/navigation';
import createSectionSelectLevel from '../layout/select_level';

function createMain() {
  const main = createElement({ tag: 'main', classes: ['main'] });

  const wrapper = createElement({
    tag: 'div',
    classes: ['wrapper', 'main-wrapper'],
    parent: main,
  });

  const navigation = createNavigation();
  const mainContent = createElement({ tag: 'div', classes: ['main-content'] });
  const sectionSelectLevel = createSectionSelectLevel();

  mainContent.append(sectionSelectLevel);
  wrapper.append(navigation, mainContent);

  return main;
}

export default createMain;
