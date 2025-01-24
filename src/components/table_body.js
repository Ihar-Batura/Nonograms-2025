import createElement from '../functional/create/create_element';

function createTableBody() {
  const tableBody = createElement({
    tag: 'tbody',
    classes: ['table-body'],
  });

  for (let i = 0; i < 5; i += 1) {
    const tableBodyRow = createElement({
      tag: 'tr',
      classes: ['table-body__row', 'table-row'],
    });

    createElement({
      tag: 'td',
      classes: ['table-body__cell'],
      parent: tableBodyRow,
    });

    createElement({
      tag: 'td',
      classes: ['table-body__cell'],
      parent: tableBodyRow,
    });

    createElement({
      tag: 'td',
      classes: ['table-body__cell'],
      parent: tableBodyRow,
    });

    tableBody.append(tableBodyRow);
  }

  return tableBody;
}

export default createTableBody;
