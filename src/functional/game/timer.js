function startTimer(startMinutes = 0, startSeconds = 0) {
  const timerMinutes = document.querySelector('.timer-minutes');
  const timerSeconds = document.querySelector('.timer-seconds');
  const timerStop = document.querySelector('.play-btn__show-solution');
  const timerReset = document.querySelector('.play-btn__reset-game');

  timerMinutes.textContent =
    startMinutes < 10 ? `0${startMinutes}` : startMinutes;

  timerSeconds.textContent =
    startSeconds < 10 ? `0${startSeconds}` : startSeconds;

  let minutes = startMinutes;
  let seconds = startSeconds;
  let interval;
  let flagTimer; // флаг для первого запуска таймера

  const startTime = () => {
    seconds += 1;
    timerSeconds.textContent = seconds;
    if (seconds <= 9) {
      timerSeconds.textContent = `0${seconds}`;
    }
    if (seconds > 9 && seconds <= 60) {
      timerSeconds.textContent = seconds;
    }
    if (seconds == 60) {
      timerSeconds.textContent = '00';
      minutes += 1;
      timerMinutes.textContent = `0${minutes}`;
      seconds = 0;
    }
    if (minutes > 9) {
      timerMinutes.textContent = minutes;
    }
  };

  const timerStart = document.querySelectorAll('.cell');

  // Запускает таймер
  timerStart.forEach((cell) =>
    cell.addEventListener('click', function () {
      if (!flagTimer) {
        // не затормаживает таймер при повторном клике
        clearInterval(interval); //не дает ускоряться интервалу!
        interval = setInterval(startTime, 1000);
        flagTimer = true;
      }
    })
  );

  //Останавливает таймер
  timerStop.addEventListener('click', function () {
    clearInterval(interval);
  });

  function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    timerMinutes.textContent = '00';
    timerSeconds.textContent = '00';
    flagTimer = false; // меняет флаг что бы можно было снова запустить таймер
  }

  // Сбрасывает таймер при новой игре
  timerReset.addEventListener('click', resetTimer);
}

export default startTimer;
