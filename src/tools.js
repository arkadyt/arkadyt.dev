export const ellipsizeText = (text, length) => {
    let result = text;
    try {
        if (text.length > length) {
            result = text.slice(0, length) + '...';
        }
    } finally {
        return result;
    }
}

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

export const getPreferredTheme = () => {
  console.log('?')
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    console.log('ml')
    return "l-theme";
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('md')
    return "d-theme";
  }
}
