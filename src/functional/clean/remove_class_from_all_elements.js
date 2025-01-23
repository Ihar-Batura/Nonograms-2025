function removeClassFromAllElements(elementClassName, removeClass) {
  const elementsList = document.querySelectorAll(`.${elementClassName}`);

  elementsList.forEach((el) => {
    el.classList.remove(`${removeClass}`);
  });
}

export default removeClassFromAllElements;
