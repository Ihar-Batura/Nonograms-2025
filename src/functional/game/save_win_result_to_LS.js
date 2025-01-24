import { nonograms } from '../../data/nonograms';

function saveWinResultToLS() {
  const gameContainer = document.querySelector('.play-field');
  const gameId = gameContainer.id;
  const gameName = nonograms[gameId - 1].name;
  const gameDifficulty = nonograms[gameId - 1].difficulty;
  const timerMinutes = document.querySelector('.timer-minutes').textContent;
  const timerSeconds = document.querySelector('.timer-seconds').textContent;
  const time = `${timerMinutes}:${timerSeconds}`;

  const userResult = {
    name: `${gameName}`,
    difficulty: `${gameDifficulty}`,
    result: `${time}`,
  };

  // логика - делаем запрос в локал сторадж, если есть массив с результатами получаем его добавляем новый результат сохраняем снова в локал сторадж. Если  это первый результат, создаем массив и сохраняем в локал сторадж

  const resultsFromLS = JSON.parse(localStorage.getItem('NGResultsList'));

  if (resultsFromLS === null) {
    const usersResults = [];
    usersResults.push(userResult);
    localStorage.setItem('NGResultsList', JSON.stringify(usersResults));
  } else {
    let resultsArray = resultsFromLS;
    resultsArray.push(userResult);
    localStorage.setItem('NGResultsList', JSON.stringify(resultsArray));
  }
}

export default saveWinResultToLS;
