export {};

const BASE_PATH = "https://api.github.com/";
const API_PATH = `${BASE_PATH}search/users`;
const token =
  "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";

export function getUser(userName: string) {
  return fetch(
    `${API_PATH}?q=` +
      encodeURIComponent(`${userName} in:login sort:repositories`) +
      "&per_page=100",
    {
      headers: {
        Authorization: token,
      },
    }
  ).then((response) => {
    if (!response.ok && response.status === 403) {
      throw new Error("Api rate");
    }
    return response.json();
  });
}

export function getUserInfo(userName: string) {
  return fetch(`${BASE_PATH}users/${userName}`, {
    headers: {
      Authorization: token,
    },
  }).then((response) => {
    if (!response.ok && response.status === 403) {
      throw new Error("Api rate");
    }
    return response.json();
  });
}
