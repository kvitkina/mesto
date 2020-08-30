export class Api {
  constructor ({ baseUrl, headers}) {
    this.baseUrl = baseUrl
    this.headers = headers
  }

  _handleOriginalResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`)
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
    .then(this._handleOriginalResponse)
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
    .then(this._handleOriginalResponse)
  }

  deleteCard (id) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-14/cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: 'e63db112-531a-4c6f-ae02-ccc048d1696b'
      }
    })
    .then(this._handleOriginalResponse)
  }

  getUserInfo () {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-14/users/me', {
      headers: {
        authorization: 'e63db112-531a-4c6f-ae02-ccc048d1696b'
      }
    })
    .then(this._handleOriginalResponse)
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
    .then(this._handleOriginalResponse)
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
    .then(this._handleOriginalResponse)
  }

  putLike (id) {
    return fetch (`https://mesto.nomoreparties.co/v1/cohort-14/cards/likes/${id}`, {
      method: "PUT",
      headers: {
        authorization: 'e63db112-531a-4c6f-ae02-ccc048d1696b',
        'Content-Type': 'application/json'
      }
    })
    .then(this._handleOriginalResponse)
  }

  removeLike (id) {
    return fetch (`https://mesto.nomoreparties.co/v1/cohort-14/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: 'e63db112-531a-4c6f-ae02-ccc048d1696b',
        'Content-Type': 'application/json'
      }
    })
    .then(this._handleOriginalResponse)
  }

}
