export const goTo = href => {
  window.open(href, '_blank');
}

export const getLastUsedTheme = () => {
  let savedTheme;
  try {
    savedTheme = window.localStorage.getItem('theme');
  } catch (e) {
    if (e.name === "SecurityError") {
      console.log('Could not read what theme was used last time. Access to localStorage was denied.');
    }
  }
  return savedTheme;
}

export const setLastUsedTheme = theme => {
  try {
    window.localStorage.setItem('theme', theme);
  } catch (e) {
    if (e.name === "SecurityError") {
      console.log('Could not update theme store. Access to localStorage was denied.');
    }
  }
}
