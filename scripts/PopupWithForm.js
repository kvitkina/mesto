import {Popup} from "./Popup.js"

export class PopupWithForm extends Popup {
  constructor (popupSelector, {handleFormSubmit} ) {
    super(popupSelector)
    this._handleFormSubmit = handleFormSubmit
  }

  _getInputValues () {
  this._inputList = Array.from(this._popupElement.querySelectorAll('.popup__input')) //достаём все элементы полей
  this._formValues = {}  //создаём пустой объект

  this._inputList.forEach(input => {
    this._formValues[input.name] = input.value  //добавляем в этот объект значения всех полей
  })
  return this._formValues  //возвращаем объект значений
  }

  setEventListeners () {
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    const data = this._getInputValues()
    this._handleFormSubmit(data)
    })
    super.setEventListeners()
  }

  close () {
    super.close()
    this._popupElement.querySelector('.popup__form-container').reset()
  }s
}
