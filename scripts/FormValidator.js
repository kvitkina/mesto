export {FormValidator}

import { buttonCreate } from './constants.js'

class FormValidator {
  constructor (validationObject, form) {
    this._inputSelector = validationObject.inputSelector
    this._inactiveButtonClass = validationObject.inactiveButtonClass
    this._submitButtonSelector = validationObject.submitButtonSelector
    this.inputErrorClass = validationObject.inputErrorClass
    this._errorClass = validationObject.errorClass
    this._form = form
  }

  //метод добавляет класс ошибки в поле
  _showError (input, errorMessage) {
    const errorElement = this._form.querySelector(`#${input.id}-error`)
    input.classList.add(this._inputErrorClass)
    errorElement.classList.add(this._errorClass)
    errorElement.textContent = errorMessage
  }

  //метод убирает класс ошибки из поля
  _hideError (input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`)
    input.classList.remove(this._inputErrorClass)
    errorElement.classList.remove (this._errorClass)
    errorElement.textContent = '';
  }

  //метод неактивной кнопки
  disableButton () {
    const submitButtonActive = this._form.querySelector(this._submitButtonSelector)
    submitButtonActive.classList.add(this._inactiveButtonClass)
    submitButtonActive.disabled = true
}

  //метод меняет цвет и активность кнопки в зависимости от валидности полей
  _toggleButtonState () {
    const submitButtonActive = this._form.querySelector(this._submitButtonSelector)
    if (this._hasInvalidInput(this._inputList)) {
      this._disableButton()
    } else {
      submitButtonActive.classList.remove(this._inactiveButtonClass)
      submitButtonActive.disabled = false
    }
  }

  //метод проверяет есть ли хотя бы одно невалидное поле
  _hasInvalidInput () {
    return this._inputList.some((input) => {
    return !input.validity.valid;
    })
  }

  //метод проверяет поля на валидность
  _checkInputValidity (input) {
    const inputIsValid = input.validity.valid
    if (inputIsValid) {
      this._hideError(input)
    } else {
      const errorMessage = input.validationMessage
      this._showError(input, errorMessage)
    }
  }

  //метод наложения обработчиков на поля форм
  _setEventListeners () {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector))
    this._toggleButtonState()
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input)
        this._toggleButtonState()
      })
    })
  }

  //метод запукает процесс валидации
  enableValidation () {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })
      this._setEventListeners()
    }

  }
