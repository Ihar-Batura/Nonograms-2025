import checkWin from './chech_win';

function fillGameCell() {
  const cells = document.querySelectorAll('.cell');

  cells.forEach((cell) =>
    cell.addEventListener('click', () => {
      cell.classList.remove('cross');
      cell.classList.toggle('fill');
      checkWin();

      if (cell.classList.value.includes('fill')) {
        //playSoundFillCell(); // звук при закрашивании
      } else {
        //playSoundClearCell(); // звук при очистки ячейки
      }
    })
  );
}

export default fillGameCell;
