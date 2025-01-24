function saveGame() {
  const gameCells = document.querySelectorAll('.cell');
  const gameContainer = document.querySelector('.play-field');
  const gameId = gameContainer.id;
  const timerMinutes = document.querySelector('.timer-minutes').textContent;
  const timerSeconds = document.querySelector('.timer-seconds').textContent;

  const lastGame = [];
  const level = [gameId];
  const time = [timerMinutes, timerSeconds];
  lastGame.push(level, time);

  const array = [];
  gameCells.forEach((cell) => {
    if (
      cell.innerText === '1' &&
      !cell.classList.value.includes('fill') &&
      !cell.classList.value.includes('cross')
    ) {
      array.push(1);
    } else if (
      cell.innerText === '1' &&
      cell.classList.value.includes('fill')
    ) {
      array.push(2);
    } else if (
      cell.innerText === '1' &&
      cell.classList.value.includes('cross')
    ) {
      array.push(3);
    } else if (
      cell.innerText === '0' &&
      !cell.classList.value.includes('fill') &&
      !cell.classList.value.includes('cross')
    ) {
      array.push(0);
    } else if (
      cell.innerText === '0' &&
      cell.classList.value.includes('fill')
    ) {
      array.push(-1);
    } else if (
      cell.innerText === '0' &&
      cell.classList.value.includes('cross')
    ) {
      array.push(-2);
    }
  });

  lastGame.push(array);

  console.log(lastGame);

  localStorage.setItem('NGLastGame', JSON.stringify(lastGame));

  // логика - проходимся по ячейкам, у каждой ячейки может быть три состояния в зависимости от содержимого ячейки. Создаем массив, после при отрисовке изменяем значение и добавляем нужный класс для стилий
}

export default saveGame;
