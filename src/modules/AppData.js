const remoteURL = "http://localhost:8088"

export default {
  getAllCategory() {
    return fetch(`${remoteURL}/category`).then(result => result.json())
  },
  getAllFlashcard() {
    return fetch(`${remoteURL}/flashcard`).then(result => result.json())
  },
}