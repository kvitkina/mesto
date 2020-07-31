export {popup, formElement, nameInput, jobInput, profileName, profileJob, popupEditProfile, popupNewPlace, popupPhotoZoom,
  popupEditButton, popupAddButton, popupCloseProfile, popupCloseNewPlace, popupClosePhotoZoom, placeNameInput, placeLinkInput,
  placeFormElement, buttonCreate, elementsList, elementsTemplate, popupImage, popupName}


const popup = document.querySelector('.popup')
const formElement = popup.querySelector('.popup__form-container')

const nameInput = formElement.querySelector('.popup__name')
const jobInput = formElement.querySelector('.popup__job')
const profileName  = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')

const popupEditProfile = document.querySelector('.popup_edit-profile')
const popupNewPlace = document.querySelector('.popup_new-place')
const popupPhotoZoom = document.querySelector('.popup_photo-zoom')

const popupEditButton = document.querySelector ('.profile__edit-button')
const popupAddButton = document.querySelector ('.profile__add-button')

const popupCloseProfile = popupEditProfile.querySelector ('.popup__close')
const popupCloseNewPlace = popupNewPlace.querySelector ('.popup__close')
const popupClosePhotoZoom = popupPhotoZoom.querySelector ('.popup__close')

const placeNameInput = popupNewPlace.querySelector('.popup__name_theme_place')
const placeLinkInput = popupNewPlace.querySelector('.popup__job_theme_place')
const placeFormElement = popupNewPlace.querySelector('.popup__container_theme_place')

const buttonCreate = placeFormElement.querySelector('.popup__button')

const elementsList = document.querySelector('.elements__list')
const elementsTemplate = document.querySelector('.elements__template')
const popupImage = popupPhotoZoom.querySelector ('.popup__image')
const popupName = popupPhotoZoom.querySelector ('.popup__place')
