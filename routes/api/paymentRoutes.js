// Initiate a POST request to the server
// If the server is on a different domain than the client
// then this needs to be the full url
// http://localhost:3000/create-checkout-session
fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Send along all the information about the items
    body: JSON.stringify({
      items: [
        {
          id: 1,
          quantity: 2,
        },
        {
          id: 2,
          quantity: 1,
        },
      ],
    }),
  })
    .then(res => {
      if (res.ok) return res.json()
      // If there is an error then make sure we catch that
      return res.json().then(e => Promise.reject(e))
    })
    .then(({ url }) => {
      // On success redirect the customer to the returned URL
      window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })