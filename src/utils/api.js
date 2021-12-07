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

export async function updateCount(id, count) {
  fetch(`${process.env.API_URL}/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + process.env.JWT_TOKEN,
    },
    body: JSON.stringify({
      acf: {
        count: count + 1,
      },
    }),
  }).then(res => {
    console.log("res", res)
  })
}
