import {
  popup, formElement, nameInput, jobInput, profileName, profileJob, popupEditProfile, popupNewPlace, popupPhotoZoom,
  popupEditButton, popupAddButton, popupCloseProfile, popupCloseNewPlace, popupClosePhotoZoom, placeNameInput, placeLinkInput,
  placeFormElement, buttonCreate, elementsList, formPlace, formProfile } from './constants.js'

import { initialCards } from './arrayInitialCards.js'

import { Card } from './Сard.js'

import { openPopups, closePopups } from './utils.js'

import { FormValidator } from './FormValidator.js'

const validationObject = ({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
})

//функция для попапа "редактировать профиль"
const openProfilePopup = function () {
  nameInput.value = profileName.textContent
  jobInput.value = profileJob.textContent
  openPopups(popupEditProfile)
}

//функция сохранения профайла
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value
  profileJob.textContent = jobInput.value
  closePopups(popupEditProfile)
}
formElement.addEventListener('submit', formSubmitHandler)

//Обработчик "добавления" карточки
function handlerAddElementSubmit(evt) {
  evt.preventDefault();

  const name = placeNameInput.value
  const alt = placeNameInput.value
  const link = placeLinkInput.value
  const item = {
    name: name,
    link: link,
    alt: alt
  }
  placeNameInput.value = ''
  placeLinkInput.value = ''

  renderCard(item)
  closePopups(popupNewPlace)
}

placeFormElement.addEventListener('submit', handlerAddElementSubmit);

//функция закрытия попапов на оверлей
function overlayListeners() {
  const popupList = document.querySelectorAll('.popup')
  popupList.forEach(function (popup) {
    popup.addEventListener('click', function (evt) {
      if (evt.target !== evt.currentTarget) { return }
      closePopups(popup)
    })
  })
}
overlayListeners()

//обработчики
popupEditButton.addEventListener('click', function () {
  openProfilePopup()
})
popupCloseProfile.addEventListener('click', function () {
  closePopups(popupEditProfile)
})

popupCloseNewPlace.addEventListener('click', function () {
  closePopups(popupNewPlace)
})

popupClosePhotoZoom.addEventListener('click', function () {
  closePopups(popupPhotoZoom)
})

//обработчик открытия попапа "Созадние карточки"
popupAddButton.addEventListener('click', function () {
  placeNameInput.value = ''
  placeLinkInput.value = ''
  formPlaceValidation.disableButton()
  openPopups(popupNewPlace)
})

// создание экземпляра класса для валидации формы "редактировать профиль"
const formProfileValidation = new FormValidator(validationObject, formProfile)
formProfileValidation.enableValidation()

// создание экземпляра класса для валидации формы "новое место"
const formPlaceValidation = new FormValidator(validationObject, formPlace)
formPlaceValidation.enableValidation()

//функция выводит карточки на страницу
function renderCard(item) {
  const card = new Card(item, '.elements__template')
  const element = card.generateCard()
  elementsList.prepend(element)
}

initialCards.forEach(function (item) {
  renderCard(item)
})
