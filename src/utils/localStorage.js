export const getLocalStorage = () => {
  try {
    const data = localStorage.getItem("state");

    if (data === null) {
      return undefined;
    }

    return JSON.parse(data);
  } catch (error) {
    console.log("Error: " + error);
    return undefined;
  }
};

export const setLocalStorage = (state) => {
  try {
    const stateToBeSaved = JSON.stringify(state);
    localStorage.setItem("state", stateToBeSaved);
  } catch (error) {
    console.log("Error: " + error);
  }
};
