export const loadState = () => {
  //localstorage getItem can fail if user privacy mode does not allow access
  try {
    const state = localStorage.getItem('responses');
    if (state === null) {
      return undefined;
    }
    const responseList = JSON.parse(state);
    return { responseList: responseList };
    // return JSON.parse(state)
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const stateString = JSON.stringify(state.responseList);
    localStorage.setItem('responses', stateString);
  } catch (err) {
    //ignore write errors
  }
};
