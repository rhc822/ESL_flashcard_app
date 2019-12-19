const remoteURL = "http://localhost:8088"

export default {
  getAllCategory(userId) {
    return fetch(`${remoteURL}/category?userId=${userId}`).then(result => result.json())
  },
  getAllFlashcard(userId) {
    return fetch(`${remoteURL}/flashcard?userId=${userId}`).then(result => result.json())
  },

  /* Gets info from an individual flashcard and keeps it in an array */
  getFlashcard(categoryId, userId) {
    return fetch(`${remoteURL}/flashcard?categoryId=${categoryId}&&userId=${userId}`).then(result => result.json())
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
  },
  get(route) {
    return fetch(`${remoteURL}/${route}`).then(result => result.json())
  },
}