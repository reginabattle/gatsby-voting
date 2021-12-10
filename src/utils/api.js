const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: "Bearer " + process.env.GATSBY_JWT_TOKEN,
}

export async function updateCount(e, id, count) {
  fetch(`${process.env.GATSBY_API_URL}/charities/${id}`, {
    method: "POST",
    headers: headers,
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

export async function updateVisits(visits) {
  fetch(`${process.env.GATSBY_API_URL}/pages/2`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      acf: {
        ip_addresses: visits,
      },
    }),
  })
}

export async function resetCount(id) {
  fetch(`${process.env.GATSBY_API_URL}/charities/${id}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      acf: {
        count: 0,
      },
    }),
  })
}
