import {
  popup, formElement, nameInput, jobInput, profileName, profileJob, popupEditProfile, popupNewPlace, popupPhotoZoom,
  popupEditButton, popupAddButton, popupCloseProfile, popupCloseNewPlace, popupClosePhotoZoom, placeNameInput, placeLinkInput,
  placeFormElement, buttonCreate, elementsList, formPlace, formProfile } from './constants.js'
import { initialCards } from './arrayInitialCards.js'
import { Card } from './Сard.js'
import { FormValidator } from './FormValidator.js'
import { Section } from './Section.js'
import { PopupWithImage } from './PopupWithImage.js'
import {UserInfo} from './UserInfo.js'
import { PopupWithForm } from './PopupWithForm.js'

const validationObject = ({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
})

//создание экземпляра класса для валидации формы "редактировать профиль"
const formProfileValidation = new FormValidator(validationObject, formProfile)
formProfileValidation.enableValidation()

//создание экземпляра класса для валидации формы "новое место"
const formPlaceValidation = new FormValidator(validationObject, formPlace)
formPlaceValidation.enableValidation()

//создание экземпляра класса для отрисовки карточек на странице
const cardList = new Section ({
  items: initialCards,
  renderer: (data) => {
    const card = new Card({data, handleCardClick: () => {
      popupWithImage.open(data)
      }
    }, '.elements__template')
    const element = card.generateCard()
    cardList.addItem(element)
    }
  }, elementsList)

  cardList.renderItems()

  //создание экземпляра класса для попапа "новое место"
const newPlace = new PopupWithForm ('.popup_new-place', {
  handleFormSubmit: (data) => {
    const card = new Card({data, handleCardClick: () => {
      popupWithImage.open(data)
      }
    }, '.elements__template')
    const element = card.generateCard()
    cardList.addItem(element)
    newPlace.close()
  }
})
newPlace.setEventListeners()

//создание экмепляра класса для отображения информации о пользователе
const userInfo = new UserInfo ({nameElement: profileName, jobElement: profileJob})

//создание экземпляра класса для попапа "редактировать профиль"
const editProfile = new PopupWithForm ('.popup_edit-profile', {
  handleFormSubmit: ({name, job}) => {
    userInfo.setUserInfo({name, job})
    editProfile.close()
  }
})
editProfile.setEventListeners()

//обработчик открытия попапа "редактировать профиль"
popupEditButton.addEventListener('click', () => {
  const currentUserInfo = userInfo.getUserInfo()
  nameInput.value = currentUserInfo.name
  jobInput.value = currentUserInfo.job
  editProfile.open()
})

//создание экземпляра класса для попапа "зум фото"
const popupWithImage = new PopupWithImage ('.popup_photo-zoom')
popupWithImage.setEventListeners()
popupWithImage.close()


//обработчик открытия попапа "Созадние карточки"
popupAddButton.addEventListener('click', () => {
  placeNameInput.value = ''
  placeLinkInput.value = ''
  formPlaceValidation.disableButton()
  newPlace.open()
})
