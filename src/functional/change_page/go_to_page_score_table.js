import cleanMainContent from '../clean/clean_main_content';
import removeClassFromAllElements from '../clean/remove_class_from_all_elements';
import createScoreTable from '../../layout/score_table';
import getFiveBestResultsForTable from '../get/get_five_best_results';

function goToPageScoreTable(event) {
  const element = event.target;
  removeClassFromAllElements('nav-btn', 'active');
  element.classList.add('active');
  cleanMainContent();
  const mainContentContainer = document.querySelector('.main-content');
  const scoreTable = createScoreTable();

  mainContentContainer.append(scoreTable);
  getFiveBestResultsForTable();
}

export default goToPageScoreTable;
