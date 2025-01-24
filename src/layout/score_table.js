import createElement from '../functional/create/create_element';
import createTableHead from '../components/table_head';
import createTableBody from '../components/table_body';

function createScoreTable() {
  const table = createElement({
    tag: 'table',
    classes: ['score-table'],
  });

  const tableHead = createTableHead();
  const tableBody = createTableBody();

  table.append(tableHead, tableBody);

  return table;
}

export default createScoreTable;
