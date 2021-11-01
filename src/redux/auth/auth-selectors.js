const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrentUser,
};
export default authSelectors;
