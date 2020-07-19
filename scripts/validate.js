validationObject = ({
  formSelector: '.popup__form-container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
})

//фукнция добавляет класс ошибки в поле
function showError (form, input, errorMessage, {errorClass, inputErrorClass, ...rest}) {

  const errorElement = form.querySelector(`#${input.id}-error`)

  input.classList.add(inputErrorClass)
  errorElement.classList.add(errorClass)
  errorElement.textContent = errorMessage
}

//фукнция убирает класс ошибки из поля
function hideError (form, input, {errorClass, inputErrorClass, ...rest}){

  const errorElement = form.querySelector(`#${input.id}-error`)

  input.classList.remove(inputErrorClass)
  errorElement.classList.remove (errorClass)
  errorElement.textContent = '';
 }

//функция меняет цвет и активность кнопки в зависимости от валидности полей
function toggleButtonState (form, inputList, {submitButtonSelector, inactiveButtonClass}) {
  const submitButtonActive = form.querySelector(submitButtonSelector)
  if (hasInvalidInput(inputList)) {
    disableButton (submitButtonActive, {inactiveButtonClass})
  } else {
    submitButtonActive.classList.remove(inactiveButtonClass)
    submitButtonActive.disabled = false
  }
}

//функция блокирования кнопки
function disableButton (submitButtonActive, {inactiveButtonClass}){
  submitButtonActive.classList.add(inactiveButtonClass)
  submitButtonActive.disabled = true
}

//функция проверяет есть ли хотя бы одно невалидное поле
function hasInvalidInput (inputList) {
  return inputList.some((input) => {
  return !input.validity.valid;
  })
}

//функция проверяет поля на валидность
function checkInputValidity (form, input, rest) {
  const inputIsValid = input.validity.valid
 if (inputIsValid) {
   hideError(form, input, rest)
 } else {
   const errorMessage = input.validationMessage
   showError(form, input, errorMessage, rest)
 }
}

//функция наложения обработчиков на поля форм
function setEventListeners (form, {inputSelector, ...rest}) {
  const inputList = Array.from(form.querySelectorAll(inputSelector))
  toggleButtonState(form, inputList, rest)
  inputList.forEach(input => {
    input.addEventListener('input', function () {
      checkInputValidity(form, input, rest)
      toggleButtonState(form, inputList, rest)
    })
  })
}

//функция запукает процесс валидации
function enableValidation ({formSelector, ...rest}) {
  const formList = Array.from(document.querySelectorAll(formSelector))
  formList.forEach((form) => {
    form.addEventListener('submit', function (evt){
      evt.preventDefault()
    })
    setEventListeners(form, rest)
  })
}
enableValidation(validationObject)


