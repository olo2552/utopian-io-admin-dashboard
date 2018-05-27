export const fetchSC2UserData = access_token => ({
  type: "FETCH_SC2_USER_DATA",
  access_token
});

export const toggleSidebarDisplay = () => ({
  type: "TOGGLE_SIDEBAR_DISPLAY"
});
