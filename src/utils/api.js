export async function updateCount(id, count) {
  fetch(`${process.env.WP_API_URL}/charities/${id}`, {
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
