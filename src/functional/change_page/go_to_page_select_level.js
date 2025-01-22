import cleanMainContent from '../clean/clean_main_content';
import createSectionSelectLevel from '../../layout/select_level';

function goToPageSelectLevel() {
  cleanMainContent();
  const mainContentContainer = document.querySelector('.main-content');
  const selectLevelContent = createSectionSelectLevel();

  mainContentContainer.append(selectLevelContent);
}

export default goToPageSelectLevel;
