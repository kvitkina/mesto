import {openPopups} from './utils.js'
import {popupPhotoZoom, popupImage, popupName} from './constants.js'

export class Card {
  constructor(data, elementsTemplate) {
    this._link = data.link
    this._name = data.name
    this._alt = data.alt
    this._elementsTemplate = elementsTemplate
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
    popupOpenPhotoZoom.alt = this._alt
    popupOpenPhotoZoom.src = this._link

    return this._element
  }

  //функция открытия попапа с фоткой
  _openPhotoZoomPopup () {
    const image = this._link
    const place = this._name

    popupImage.src = image
    popupName.textContent = place

    openPopups (popupPhotoZoom)
  }

  // Удалить элемент
  _deleteElement = () => {
    this._element.remove()
  }

  // Поставить лайк
  _handleLikeButton (evt) {
    const like = evt.target.closest('.element__like')
    like.classList.toggle('element__like_theme_black')
  }

  _setEventListeners () {
    this._element.querySelector('.element__image').addEventListener('click', () => this._openPhotoZoomPopup())
    this._element.querySelector('.element__trash').addEventListener('click', this._deleteElement)
    this._element.querySelector('.element__like').addEventListener('click', this._handleLikeButton)
  }
}
