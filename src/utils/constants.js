export {popup, formElement, nameInput, aboutInput, profileName, profileJob, profileAvatar, popupEditProfile, popupNewPlace, popupPhotoZoom,
  popupEditButton, popupAddButton, popupCloseProfile, popupCloseNewPlace, popupClosePhotoZoom, placeNameInput, placeLinkInput,
  placeFormElement, buttonCreate, elementsList, popupEditAvatar, formDelete, popupCloseDelete, popupDeletePlace, elementsTemplate, popupImage, popupCloseAvatar, popupName,formPlace, SibmitButtonAvatar, SibmitButtonPlace, SibmitButtonProfile, formProfile,formAvatar}

const popup = document.querySelector('.popup')
const formElement = popup.querySelector('.popup__form-container')

const nameInput = formElement.querySelector('.popup__name')
const aboutInput = formElement.querySelector('.popup__job')
const profileName  = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const profileAvatar = document.querySelector('.profile__avatar')

const popupEditProfile = document.querySelector('.popup_edit-profile')
const popupNewPlace = document.querySelector('.popup_new-place')
const popupPhotoZoom = document.querySelector('.popup_photo-zoom')
const popupEditAvatar = document.querySelector('.popup_new-avatar')
const popupDeletePlace = document.querySelector('.popup_delete')



const popupEditButton = document.querySelector ('.profile__edit-button')
const popupAddButton = document.querySelector ('.profile__add-button')

const popupCloseProfile = popupEditProfile.querySelector ('.popup__close')
const popupCloseNewPlace = popupNewPlace.querySelector ('.popup__close')
const popupClosePhotoZoom = popupPhotoZoom.querySelector ('.popup__close')
const popupCloseAvatar = popupEditAvatar.querySelector ('.popup__close')
const popupCloseDelete = popupDeletePlace.querySelector ('.popup__close')



const placeNameInput = popupNewPlace.querySelector('.popup__name_theme_place')
const placeLinkInput = popupNewPlace.querySelector('.popup__job_theme_place')
const placeFormElement = popupNewPlace.querySelector('.popup__container_theme_place')

const buttonCreate = placeFormElement.querySelector('.popup__button')

const elementsList = document.querySelector('.elements__list')
const elementsTemplate = document.querySelector('.elements__template')
const popupImage = popupPhotoZoom.querySelector ('.popup__image')
const popupName = popupPhotoZoom.querySelector ('.popup__place')

const formPlace = popupNewPlace.querySelector('.popup__form-container')
const formProfile = popupEditProfile.querySelector('.popup__form-container')
const formAvatar = popupEditAvatar.querySelector('.popup__form-container')
const formDelete = popupDeletePlace.querySelector('.popup__form-container')



const SibmitButtonProfile = popupEditProfile.querySelector('.popup__button')
const SibmitButtonPlace = popupNewPlace.querySelector('.popup__button')
const SibmitButtonAvatar = popupEditAvatar.querySelector('.popup__button')

