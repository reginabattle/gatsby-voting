export async function fetchAPI(path) {
  const response = await fetch(path, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  })
  const data = await response.json()
  return data
}
