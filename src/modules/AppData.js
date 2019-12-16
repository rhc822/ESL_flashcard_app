const remoteURL = "http://localhost:8088"

export default {
  getAllCategory() {
    return fetch(`${remoteURL}/category`).then(result => result.json())
  },
  getAllFlashcard() {
    return fetch(`${remoteURL}/flashcard`).then(result => result.json())
  },
  getFlashcard(id) {
    return fetch(`${remoteURL}/flashcard?categoryId=${id}`).then(result => result.json())
  },
  getIndividualFlashcard(id) {
    return fetch(`${remoteURL}/flashcard/${id}`).then(result => result.json())
  },
  post(newFlashcard) {
    return fetch(`${remoteURL}/flashcard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newFlashcard)
    }).then(data => data.json())
  },
}