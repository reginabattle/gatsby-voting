const formData = new FormData()
formData.append("username", process.env.GATSBY_JWT_USER)
formData.append("password", process.env.GATSBY_JWT_PASSWORD)

async function getToken() {
  let response = await fetch(process.env.GATSBY_TOKEN_URL, {
    method: "POST",
    body: formData,
  })
  let data = await response.json()
  return data
}

export async function updateCount(e, id, count) {
  let data = await getToken()

  fetch(`${process.env.GATSBY_API_URL}/charities/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + data.token,
    },
    body: JSON.stringify({
      acf: {
        count: count + 1,
      },
    }),
  }).then(res => {
    if (res.status === 200) {
      setTimeout(() => (e.target.innerText = "Thank you!"), 2000)
    }
  })
}
