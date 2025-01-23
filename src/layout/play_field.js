import createElement from '../functional/create/create_element';
import { nonograms } from '../data/nonograms';

function createPlayField(id) {
  const playField = createElement({ tag: 'div', classes: ['play-field'] });
  const game = nonograms[id - 1].matrix;

  if (game.length === 5) {
    playField.classList.add('small-field');
  }
  if (game.length === 10) {
    playField.classList.add('medium-field');
  }
  if (game.length > 10) {
    playField.classList.add('big-field');
  }
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

    if (i === 5 || i === 10) {
      cellTopPrompt.classList.add('cell-border'); // добавление толстой линии
    }

    let counterTop = 0;

    for (let j = 0; j < game.length; j += 1) {
      const prompt = createElement({ tag: 'span', classes: ['prompt'] }); // каждую подсказку оборачиваем в спан что бы выстроить их в колонку

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
    if (i === 5 || i === 10) {
      rowCells.classList.add('row-border'); // добавление толстой линии
    }

    const rowPrompt = createElement({ tag: 'div', classes: ['row-prompt'] }); // ряд с подсказками слева
    rowCells.append(rowPrompt);

    let counter = 0; // счеткик подсказок слева

    for (let j = 0; j < game[i].length; j += 1) {
      const cell = createElement({ tag: 'div', classes: ['cell'] }); // создание новой игровой клетки
      if (j === 5 || j === 10) {
        cell.classList.add('cell-border'); // добавление толстой линии
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
