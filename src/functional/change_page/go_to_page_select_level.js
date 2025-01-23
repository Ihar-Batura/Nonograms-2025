import cleanMainContent from '../clean/clean_main_content';
import createSectionSelectLevel from '../../layout/select_level';
import removeClassFromAllElements from '../clean/remove_class_from_all_elements';

function goToPageSelectLevel(event) {
  const element = event.target;
  removeClassFromAllElements('nav-btn', 'active');
  element.classList.add('active');
  cleanMainContent();
  const mainContentContainer = document.querySelector('.main-content');
  const selectLevelContent = createSectionSelectLevel();

  mainContentContainer.append(selectLevelContent);
}

export default goToPageSelectLevel;
