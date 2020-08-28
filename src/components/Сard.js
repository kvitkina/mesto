export class Card {
  constructor({data, dataUser, handleCardClick, handleLikeClick, handleDeleteIconClick}, elementsTemplate) {
    this._link = data.link
    this._name = data.name
    this._cardId = data._id
    this._ownerId = data.owner._id
    this._userId = dataUser
    this._likes = data.likes
    this._elementsTemplate = elementsTemplate
    this._handleCardClick = handleCardClick
    this._handleLikeClick = handleLikeClick
    this._handleDeleteIconClick = handleDeleteIconClick
  }

  _getTemplate () {
    const cardElement = document.querySelector(this._elementsTemplate).content.querySelector('.element').cloneNode(true)
    return cardElement
  }

  generateCard () {
    this._element = this._getTemplate()
    this._setEventListeners()

    const popupOpenPhotoZoom = this._element.querySelector('.element__image')
    this._element.querySelector('.element__title').textContent = this._name
    popupOpenPhotoZoom.alt = this._name
    popupOpenPhotoZoom.src = this._link

    const trashIcon = this._element.querySelector('.element__trash')
    if (this._ownerId === this._userId) {
      trashIcon.style.display = 'block'
    } else {
      trashIcon.style.display = 'none'
    }
    return this._element
  }

   // Удалить элемент
  removeElement() {
    this._element.remove()
    this._element = null
  }

  _setEventListeners () {
    this._element.querySelector('.element__image').addEventListener('click', () => this._handleCardClick(this._name, this._link))
    this._element.querySelector('.element__trash').addEventListener('click', () => this._handleDeleteIconClick(this._cardId))
    this._element.querySelector('.element__like').addEventListener('click', () => this._handleLikeClick(this._likes))
  }
}
