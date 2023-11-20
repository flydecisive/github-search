export {};

const BASE_PATH = "https://api.github.com/";
const API_PATH = `${BASE_PATH}search/users`;
const token =
  "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";

//   ${API_PATH}?q=${userName}
export function getUser(userName: string) {
  return fetch(`${API_PATH}?q=${userName}`, {
    headers: {
      Authorization: token,
    },
  }).then((response) => {
    console.log(response);
    return response.json();
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
