import Cookies from "js-cookie";

export const fetchLiveness = async () => {
  return fetch("/api/liveness")
    .then((res) => res.text())
    .then((alive) => alive)
    .catch((error) => new Error(error));
};
export const fetchLogin = async () => {
  // login and set cookie jwt
  return fetch("/api/login")
    .then((res) => res.text())
    .then((jwt) => {
      Cookies.set("jwt", jwt);
      return jwt;
    });
};

export const postSlackMessage = async (text: string) => {
  const jwt = Cookies.get('jwt')
  return fetch("/api/slack", {
    method: 'POST',
    body: JSON.stringify(text)
  })
  .then((res) => res.json())
  .then(res => res)
}