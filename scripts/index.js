import {popup, formElement, nameInput, jobInput, profileName, profileJob, popupEditProfile, popupNewPlace, popupPhotoZoom,
  popupEditButton, popupAddButton, popupCloseProfile, popupCloseNewPlace, popupClosePhotoZoom, placeNameInput, placeLinkInput,
  placeFormElement, buttonCreate, elementsList} from './constants.js'

import {initialCards} from './array.js'

import {Card} from './card.js'

import {popupsOpen, popupsClose} from './utils.js'

import {FormValidator} from './FormValidator.js'

const validationObject = ({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
})

//функция для попапа "редактировать профиль"
const openProfilePopup = function() {
  if (!popupEditProfile.classList.contains('popup_opened')) {
      nameInput.value = profileName.textContent
      jobInput.value = profileJob.textContent
    }
    popupsOpen(popupEditProfile)
}

popupEditButton.addEventListener ('click', function () {
  openProfilePopup()
})
popupCloseProfile.addEventListener ('click', function () {
  popupsClose(popupEditProfile)
})


//функция неактивной кнопки
function disableButton(buttonCreate){
  buttonCreate.disabled = true
  buttonCreate.classList.add('popup__button_inactive')}

//обработчик открытия попапа "Созадние карточки"
popupAddButton.addEventListener ('click', function () {
  placeNameInput.value = ''
  placeLinkInput.value = ''
  disableButton(buttonCreate)
  popupsOpen (popupNewPlace)
})

popupCloseNewPlace.addEventListener ('click', function () {
  popupsClose(popupNewPlace)
})

popupClosePhotoZoom.addEventListener ('click', function () {
  popupsClose(popupPhotoZoom)
})

//функция выводит карточки на страницу
function renderCard (item){
  const card = new Card (item, '.elements__template')
  const element = card.generateCard()
  elementsList.prepend(element)
}

initialCards.forEach (function (item) {
  renderCard (item)
})

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

  renderCard (item)
  popupsClose(popupNewPlace)
}

placeFormElement.addEventListener('submit', handlerAddElementSubmit);

//функция сохранения профайла
function formSubmitHandler (evt) {
    evt.preventDefault();
// Вставьте новые значения с помощью textContent
  profileName.textContent = nameInput.value
  profileJob.textContent = jobInput.value
  popupsClose(popupEditProfile)
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler)


//функция закрытия попапов на оверлей
function overlayListeners() {
  const popupList = document.querySelectorAll('.popup')
  popupList.forEach (function (popup) {
    popup.addEventListener ('click', function(evt) {
      if(evt.target !== evt.currentTarget) {return}
      popupsClose(popup)
    })
  })
}
overlayListeners()

// создание экземпляра класса для валидации формы "редактировать профиль"
const formProfile = popupEditProfile.querySelector('.popup__form-container')
const formProfileValidation = new FormValidator (validationObject, formProfile)
formProfileValidation.enableValidation()

// создание экземпляра класса для валидации формы "новое место"
const formPlace = popupNewPlace.querySelector('.popup__form-container')
const formPlaceValidation = new FormValidator (validationObject, formPlace)
formPlaceValidation.enableValidation()


