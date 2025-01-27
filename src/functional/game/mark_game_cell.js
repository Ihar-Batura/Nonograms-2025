import { playSoundCrossCell, playSoundClearCell } from './sound';

function markGameCell() {
  const cells = document.querySelectorAll('.cell');

  cells.forEach((cell) =>
    cell.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if (!cell.classList.value.includes('solution')) {
        cell.classList.remove('fill');
        cell.classList.toggle('cross');
        if (cell.classList.value.includes('cross')) {
          playSoundCrossCell();
        } else {
          playSoundClearCell();
        }
      }
    })
  );
}

export default markGameCell;
