import './sass/style.scss';
import createHeader from './layout/header';
import createMain from './layout/main';
import createFooter from './layout/footer';

const body = document.querySelector('body');
const header = createHeader();
const main = createMain();
const footer = createFooter();

body.append(header, main, footer);
