import encryption from "../../utils/encryption";
export const ACCESS_TOKEN_KEY = "token";
export const PROFILE_KEY = "profile";

const AuthService = {
  logoutClientOnly() {
    localStorage.clear();
  },
  updateToken(token: any) {
    localStorage.setItem(ACCESS_TOKEN_KEY, encryption.encrypt(token));
  },
  getAccessToken: () =>
    encryption.decrypt(localStorage.getItem(ACCESS_TOKEN_KEY)),
  getProfile: () => encryption.decrypt(localStorage.getItem(PROFILE_KEY)),
  getRole() {
    return this.getProfile() && this.getProfile().role;
  },
  isAuthenticated: () => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return token !== null && token !== "undefined";
  },
};

export default AuthService;
