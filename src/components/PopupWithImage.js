import {Popup} from './Popup.js'

export class PopupWithImage extends Popup {
  constructor (popupSelector, {popupImage, popupName}) {
    super(popupSelector)
    this._popupImage = popupImage
    this._popupName = popupName
  }

  open(data) {
    const image = data.link
    const place = data.name
    const alt = data.alt

    this._popupImage.src = image
    this._popupName.textContent = place
    this._popupImage.alt = alt
    super.open()

  }
}
