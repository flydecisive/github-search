export {};

const BASE_PATH = "https://api.github.com/";
const API_PATH = `${BASE_PATH}search/users`;
const token =
  "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";

//  для информации о пользователе ${BASE_PATH}users/${userName}`
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

export function getFollowers(user: string) {
  return fetch(`${BASE_PATH}${user}/followers`)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    });
}

// export function getUserRepos(userName: string) {
//   return fetch(`${BASE_PATH}users/${userName}/repos`, {
//     headers: {
//       Authorization: token,
//     },
//   }).then((response) => {
//     console.log(response);
//     return response.json();
//   });
// }
