function getFiveBestResultsForTable() {
  const arrBestResults = JSON.parse(localStorage.getItem('NGResultsList'));
  if (arrBestResults !== null) {
    let fiveLastResults =
      arrBestResults.length < 6 ? arrBestResults : arrBestResults.slice(-5);

    let arrSortedResults = fiveLastResults.sort(function (a, b) {
      if (a.result > b.result) {
        return 1;
      }
      if (a.result < b.result) {
        return -1;
      }
      return 0;
    });

    const tableRowsList = document.querySelectorAll('.table-body__row');
    let count = 0;
    tableRowsList.forEach((row) => {
      if (arrSortedResults !== null && arrSortedResults[count] !== undefined) {
        row.children[0].textContent = arrSortedResults[count].name;
        row.children[1].textContent = arrSortedResults[count].difficulty;
        row.children[2].textContent = arrSortedResults[count].result;
      }
      count += 1;
    });
  }
}

export default getFiveBestResultsForTable;
