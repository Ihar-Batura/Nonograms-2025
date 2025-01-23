function markGameCell() {
  const cells = document.querySelectorAll('.cell');

  cells.forEach((cell) =>
    cell.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      cell.classList.remove('fill');
      cell.classList.toggle('cross');
      if (cell.classList.value.includes('cross')) {
        //playSoundCrossCell(); // звук при перечеркивании ячейки
      } else {
        //playSoundClearCell(); // звук при очистки ячейки
      }
    })
  );
}

export default markGameCell;
