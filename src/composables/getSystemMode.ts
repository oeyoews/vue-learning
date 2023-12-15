export const getSystemMode = () => {
  if (window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
};

export const isDarkMode = getSystemMode();
