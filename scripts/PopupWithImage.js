import {Popup} from './Popup.js'
import {popupImage, popupName} from './constants.js'

export class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector)
  }

  open(data) {
    const image = data.link
    const place = data.name

    popupImage.src = image
    popupName.textContent = place
    super.open()

  }
}
