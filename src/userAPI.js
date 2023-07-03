const USER_KEY = "user";
const TIMEOUT = 1500;
const SUCCESS_STATUS = "OK";

const readUser = () => JSON.parse(localStorage.getItem(USER_KEY));
const saveUser = (user) => localStorage.setItem(USER_KEY, JSON.stringify(user));

const simulateRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

export const getUser = () =>
  new Promise((resolve) => {
    let user = readUser();
    if (user === null) {
      user = {};
    }
    simulateRequest(user)(resolve);
  });
