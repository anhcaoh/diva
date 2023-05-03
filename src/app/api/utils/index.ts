
import { NEXT_PUBLIC_API } from "@/constants";

export async function fetchLogin() {
  return fetch(`${NEXT_PUBLIC_API}/login`)
  .then(res => res.json())
  .then( async ({ jwt }) => {
    return jwt;
  }).catch(error => new Error(error))
}
export async function fetchLiveness(jwt: string) {
  return fetch(`${NEXT_PUBLIC_API}/alive`,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
  })
  .then(res => res.text())
  .then((alive: string) => alive)
  .catch(error => new Error(error))
}
export async function postSlackMessage(jwt: string, text: string) {
  return fetch(`${NEXT_PUBLIC_API}/slack`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    },
    body: JSON.stringify({ text })
  })
  .then(res => res.text())
  .catch(error => new Error(error))
}