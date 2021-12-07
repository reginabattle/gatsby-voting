export async function updateCount(id, count) {
  fetch(`${process.env.GATSBY_API_URL}/charities/${id}`, {
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

export async function updateVisits(addresses, ip) {
  fetch(`${process.env.GATSBY_API_URL}/pages/2`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + process.env.JWT_TOKEN,
    },
    body: JSON.stringify({
      acf: {
        ip_addresses: `${addresses}, ${ip}`,
      },
    }),
  }).then(res => {
    console.log("res", res)
  })
}
