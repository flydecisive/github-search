export {};

const BASE_PATH = "https://api.github.com/";
const API_PATH = `${BASE_PATH}search/users`;

export function getUser(userName: string) {
  return fetch(
    `${API_PATH}?q=` +
      encodeURIComponent(`${userName} in:login sort:repositories`) +
      "&per_page=100"
  ).then((response) => {
    if (!response.ok && response.status === 403) {
      throw new Error("Api rate");
    }
    return response.json();
  });
}

export function getUserInfo(userName: string) {
  return fetch(`${BASE_PATH}users/${userName}`).then((response) => {
    if (!response.ok && response.status === 403) {
      throw new Error("Api rate");
    }
    return response.json();
  });
}
