import createElement from '../functional/create/create_element';
import { nonograms } from '../data/nonograms';

function createPlayField(id) {
  const playField = createElement({
    tag: 'div',
    classes: ['play-field'],
    id: id,
  });
  const game = nonograms[id - 1].matrix;

  if (game.length === 5) {
    playField.classList.add('small-field');
  }
  if (game.length === 10) {
    playField.classList.add('medium-field');
  }
  if (game.length === 15) {
    playField.classList.add('big-field');
  }

  // строка для верхних подсказок
  const rowTopPrompt = createElement({
    tag: 'div',
    classes: ['row-top'],
    parent: playField,
  });

  // создает верхние подсказки
  for (let i = 0; i < game.length; i += 1) {
    const cellTopPrompt = createElement({
      tag: 'div',
      classes: ['top-prompt'],
    });

    if (i === 0) {
      cellTopPrompt.classList.add('hight-hint__cell-border__start-cell'); // добавление толстой линии к первой ячейке подсказок
    }

    if (i === 4 || i === 9 || i === 14) {
      cellTopPrompt.classList.add('hight-hint__cell-border__end-cell'); // добавление толстой линии к конечным и разделительным ячейкам
    }
    if (i !== 0 && i !== 4 && i !== 9 && i !== 14) {
      cellTopPrompt.classList.add('hight-hint__cell-border__medium-cell'); // добавление толстой линии к центральным ячейкам
    }

    let counterTop = 0;

    for (let j = 0; j < game.length; j += 1) {
      const prompt = createElement({ tag: 'span', classes: ['prompt'] }); // каждую подсказку оборачиваем в спан что бы встроить их в колонку

      if (game[j][i] === 1) {
        counterTop++;
        if (j === game.length - 1) {
          prompt.textContent += counterTop;
          cellTopPrompt.append(prompt);
        }
      } else {
        if (counterTop > 0) {
          prompt.textContent += counterTop;
          cellTopPrompt.append(prompt);
          counterTop = 0;
        }
      }
    }
    rowTopPrompt.append(cellTopPrompt);
  }

  // создание ячеек(клеток) для игры
  for (let i = 0; i < game.length; i += 1) {
    const rowCells = createElement({ tag: 'div', classes: ['row-cells'] }); // ряд подсказки и игровые клетки

    const rowPrompt = createElement({ tag: 'div', classes: ['row-prompt'] }); // ряд с подсказками слева
    if (i === 0) {
      rowPrompt.classList.add('row-border__top'); // добавление толстой линии
    }
    if (i === 4 || i === 9 || i === 14) {
      rowPrompt.classList.add('row-border__bottom'); // добавление толстой линии
    }
    if (i === 5 || i === 10) {
      rowPrompt.classList.add('row-border__top-none');
    }
    rowCells.append(rowPrompt);

    let counter = 0; // счеткик подсказок слева

    for (let j = 0; j < game[i].length; j += 1) {
      const cell = createElement({ tag: 'div', classes: ['cell'] }); // создание новой игровой клетки
      if (j === 0) {
        cell.classList.add('cell-border__left'); // добавление толстой линии
      }
      if (j === 4 || j === 9 || j === 14) {
        cell.classList.add('cell-border__right'); // добавление толстой линии
      }
      if (j === 5 || j === 10 || j === 15) {
        cell.classList.add('cell-border__left-none');
      }
      if (i === 5 || i === 10) {
        cell.classList.add('cell-border__top-none');
      }
      if (i === 4 || i === 9 || i === 14) {
        cell.classList.add('cell-border__bottom');
      }

      cell.textContent = game[i][j];
      if (game[i][j] === 1) {
        counter += 1;
        if (j === game.length - 1) {
          rowPrompt.textContent += ` ${counter}`;
        }
      } else {
        if (counter > 0) {
          rowPrompt.textContent += ` ${counter}`;
          counter = 0;
        }
      }

      rowCells.append(cell);
    }

    playField.append(rowCells);
  }

  return playField;
}

export default createPlayField;
