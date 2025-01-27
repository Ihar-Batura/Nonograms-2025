function changeTheme() {
  const body = document.querySelector('body');
  const btnTheme = document.querySelector('.btn-theme');
  if (body.classList.value.includes('dark-style')) {
    body.classList.remove('dark-style');
    btnTheme.classList.remove('dark');
  } else {
    body.classList.add('dark-style');
    btnTheme.classList.add('dark');
  }
}

export default changeTheme;
