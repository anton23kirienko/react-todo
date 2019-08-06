export const loadState = () => {
  // try/catch for cases when localStorage is not allowed
  try {
    const todoState = localStorage.getItem('todoState');

    if (todoState) return JSON.parse(todoState);
    return {};
  }
  catch (err) {
    return {};
  }
}

export const setState = state => {
  try {
    localStorage.setItem('todoState', JSON.stringify(state));
  }
  catch (err) {
    console.log('Can\'t write to localStorage: \n', err );
  }
}
