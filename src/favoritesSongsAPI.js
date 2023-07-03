const FAVORITE_SONGS_KEY = "favorite_songs";
const TIMEOUT = 500;
const SUCCESS_STATUS = "OK";

if (!JSON.parse(localStorage.getItem(FAVORITE_SONGS_KEY))) {
  localStorage.setItem(FAVORITE_SONGS_KEY, JSON.stringify([]));
}
const readFavoriteSongs = () =>
  JSON.parse(localStorage.getItem(FAVORITE_SONGS_KEY));

const saveFavoriteSongs = (favoriteSongs) =>
  localStorage.setItem(FAVORITE_SONGS_KEY, JSON.stringify(favoriteSongs));

const simulateRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

export const getFavoriteSongs = () =>
  new Promise((resolve) => {
    const favoriteSongs = readFavoriteSongs();
    simulateRequest(favoriteSongs)(resolve);
  });
