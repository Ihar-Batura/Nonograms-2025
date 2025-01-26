import './sass/style.scss';
import createHeader from './layout/header';
import createMain from './layout/main';
import createFooter from './layout/footer';
import getRandomNumber from './functional/get/get_random_number';
import goToPlayPage from './functional/change_page/go_to_play_page';

const body = document.querySelector('body');
const header = createHeader();
const main = createMain();
const footer = createFooter();

body.append(header, main, footer);

const startRound = getRandomNumber(1, 5);
goToPlayPage(startRound);
