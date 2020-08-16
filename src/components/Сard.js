export class Card {
  constructor({data, handleCardClick}, elementsTemplate) {
    this._link = data.link
    this._name = data.name
    this._elementsTemplate = elementsTemplate
    this._handleCardClick = handleCardClick
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
    return this._element
  }

  // Удалить элемент
  _deleteElement() {
    this._element.remove()
    this._element = null
  }

  // Поставить лайк
  _handleLikeButton () {
    const like = this._element.querySelector('.element__like')
    like.classList.toggle('element__like_theme_black')
  }

  _setEventListeners () {
    this._element.querySelector('.element__image').addEventListener('click', () => this._handleCardClick(this._name, this._link))
    this._element.querySelector('.element__trash').addEventListener('click', () => this._deleteElement())
    this._element.querySelector('.element__like').addEventListener('click', () => this._handleLikeButton())
  }
}
