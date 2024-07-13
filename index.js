// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then((response) => response.json())
    .then((object) => {
      const idTextNode = document.createTextNode(object.id);
      document.querySelector("body").appendChild(idTextNode);
    })
    .catch((error) => {
      const { message } = error;
      const messageTextNode = document.createTextNode(message);
      document.querySelector("body").appendChild(messageTextNode);
    });
}
