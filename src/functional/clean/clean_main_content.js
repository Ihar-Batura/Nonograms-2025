function cleanMainContent() {
  const mainContent = document.querySelector('.main-content');

  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
}

export default cleanMainContent;
