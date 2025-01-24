import createElement from '../functional/create/create_element';

function createTableHead() {
  const tableHead = createElement({
    tag: 'thead',
    classes: ['table-head'],
  });

  const tableHeadRow = createElement({
    tag: 'tr',
    classes: ['table-head__row', 'table-row'],
    parent: tableHead,
  });

  createElement({
    tag: 'th',
    classes: ['table-head__header'],
    text: 'Name:',
    parent: tableHeadRow,
  });

  createElement({
    tag: 'th',
    classes: ['table-head__header'],
    text: 'Difficulty:',
    parent: tableHeadRow,
  });

  createElement({
    tag: 'th',
    classes: ['table-head__header'],
    text: 'Time:',
    parent: tableHeadRow,
  });

  return tableHead;
}

export default createTableHead;
