import {Popup} from "./Popup.js"

export class PopupWithSubmit extends Popup {
  constructor(popupSelector, formSelector) {
    super(popupSelector)
    this._formSelector = this._popupElement.querySelector(`${formSelector}`)

  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }

  setEventListeners () {
    this._formSelector.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleSubmitCallback()
    })
    super.setEventListeners()

  }
}
