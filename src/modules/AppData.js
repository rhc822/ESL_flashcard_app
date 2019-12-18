const remoteURL = "http://localhost:8088"

export default {
  getAllCategory() {
    return fetch(`${remoteURL}/category`).then(result => result.json())
  },
  getAllFlashcard() {
    return fetch(`${remoteURL}/flashcard`).then(result => result.json())
  },

  /* Gets info from an individual flashcard and keeps it in an array */
  getFlashcard(id) {
    return fetch(`${remoteURL}/flashcard?categoryId=${id}`).then(result => result.json())
  },

  /* Gets the flashcard info NOT in an array */
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
  delete(id) {
    return fetch(`${remoteURL}/flashcard/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  update(editedEntry) {
    return fetch(`${remoteURL}/flashcard/${editedEntry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEntry)
    }).then(data => data.json());
  }
}