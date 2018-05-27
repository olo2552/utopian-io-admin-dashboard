const userInitialState = {
  isAuthenticated: true,
  role: "editor"
};

export const user = (user = userInitialState, { type, userData }) => {
  switch (type) {
    case "SAVE_SC2_USER_DATA": {
      return {
        ...user,
        userData
      };
    }

    default:
      return user;
  }
};

export const sidebarDisplay = (isDisplayed = true, { type }) => {
  switch (type) {
    case "TOGGLE_SIDEBAR_DISPLAY":
      return !isDisplayed;

    default:
      return isDisplayed;
  }
};
