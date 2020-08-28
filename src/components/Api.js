export class Api {
  constructor ({ baseUrl, headers}) {
    this.baseUrl = baseUrl
    this.headers = headers
  }

  getAllInfo () {
    return Promise.all([ this.getInitialCards(), this.getUserInfo() ])
  }

  getInitialCards () {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-14/cards', {
      headers: {
        authorization: 'e63db112-531a-4c6f-ae02-ccc048d1696b'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`)
    })
  }

  addCard (item) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-14/cards', {
      method: "POST",
      headers: {
        authorization: 'e63db112-531a-4c6f-ae02-ccc048d1696b',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`)
    })
  }

  deleteCard (id) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-14/cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: 'e63db112-531a-4c6f-ae02-ccc048d1696b'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`)
    })
  }

  getUserInfo () {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-14/users/me', {
      headers: {
        authorization: 'e63db112-531a-4c6f-ae02-ccc048d1696b'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`)
    })
  }

  setUserInfo (item) {
    return fetch ('https://mesto.nomoreparties.co/v1/cohort-14/users/me', {
      method: "PATCH",
      headers: {
        authorization: 'e63db112-531a-4c6f-ae02-ccc048d1696b',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`)
    })
  }

  editAvatar (item) {
    return fetch ('https://mesto.nomoreparties.co/v1/cohort-14/users/me/avatar', {
      method: "PATCH",
      headers: {
        authorization: 'e63db112-531a-4c6f-ae02-ccc048d1696b',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`)
    })
  }

  putLike (id) {
    return fetch (`https://mesto.nomoreparties.co/v1/cohort-14/cards/likes/${id}`, {
      method: "PUT",
      headers: {
        authorization: 'e63db112-531a-4c6f-ae02-ccc048d1696b',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`)
    })
  }

  removeLike (id) {
    return fetch (`https://mesto.nomoreparties.co/v1/cohort-14/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'e63db112-531a-4c6f-ae02-ccc048d1696b',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`)
    })
  }

}
