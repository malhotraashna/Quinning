const reducer = (state: any, action: any) => {
  const currentState = { ...state };
  switch (action.type) {
    case 'START_LOADING': {
      currentState.isLoading = true;
      return currentState;
    }
    case 'LAUNCH_DATA': {
      currentState.launches = action.data;
      currentState.currentLaunch = action.data[0];
      currentState.isLoading = false;
      return currentState;
    }
    case 'CURRENT_LAUNCH': {
      currentState.currentLaunch = action.data;
      currentState.isLoading = false;
      return currentState;
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;