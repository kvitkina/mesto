const popup = document.querySelector('.popup')
const popupSaveButton = popup.querySelector('.popup__button')
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
const popupOpenPhotoZoom = document.querySelector ('.element__image')

const popupCloseProfile = popupEditProfile.querySelector ('.popup__close')
const popupCloseNewPlace = popupNewPlace.querySelector ('.popup__close')
const popupClosePhotoZoom = popupPhotoZoom.querySelector ('.popup__close')

const popupPhotoContainer = popupPhotoZoom.querySelector('.popup__container')
const placeNameInput = popupNewPlace.querySelector('.popup__name_theme_place')
const placeLinkInput = popupNewPlace.querySelector('.popup__job_theme_place')
const placeFormElement = popupNewPlace.querySelector('.popup__container_theme_place')


//функция для попапа "редактировать профиль"

const openProfilePopup = function() {
  if (!popupEditProfile.classList.contains('popup_opened')) {
      nameInput.value = profileName.textContent
      jobInput.value = profileJob.textContent
    }
    popupsToggle(popupEditProfile)
}

popupEditButton.addEventListener ('click', function () {
  openProfilePopup()
})
popupCloseProfile.addEventListener ('click', function () {
  popupsToggle(popupEditProfile)
})

//функция открытия/зарытия попапов
function popupsToggle (popup) {
  popup.classList.toggle('popup_opened')
}
popupAddButton.addEventListener ('click', function () {
  placeNameInput.value = ''
  placeLinkInput.value = ''
  popupsToggle (popupNewPlace)
})

popupCloseNewPlace.addEventListener ('click', function () {
  popupsToggle(popupNewPlace)
})

popupClosePhotoZoom.addEventListener ('click', function () {
  popupsToggle(popupPhotoZoom)
})


//Функция вывода массива на страницу

const elementsList = document.querySelector('.elements__list')
const elementsTemplate = document.querySelector('.elements__template')
const elementTitle = elementsList.querySelector('.element__title')
const popupImage = popupPhotoZoom.querySelector ('.popup__image')
const popupName = popupPhotoZoom.querySelector ('.popup__place')

function addElements (item) {
  const element = elementsTemplate.content.cloneNode(true)
  element.querySelector('.element__title').textContent = item.name
  element.querySelector('.element__image').src = item.link
  element.querySelector('.element__image').addEventListener('click', () => photoZoomPopup(item))

  element.querySelector('.element__trash').addEventListener('click', deleteElement)
  element.querySelector('.element__like').addEventListener('click', likeElement)
  elementsList.prepend(element)
}

initialCards.forEach (function (item) {
  addElements(item)
})

//функция открытия попапа с фоткой
function photoZoomPopup (item) {

  const image = item.link
  const place = item.name

  popupImage.src = image
  popupName.textContent = place

  popupsToggle (popupPhotoZoom)
  }

// Удалить элемент
function deleteElement (evt) {
  const element = evt.target.closest('.element')
  element.remove()
}
// Поставить лайк
function likeElement (evt) {
  const like = evt.target.closest('.element__like')
  like.classList.toggle('element__like_theme_black')
}

//Обработчик "добавления" карточки
function handlerAddElementSubmit(evt) {
  evt.preventDefault();

  const name = placeNameInput.value
  const link = placeLinkInput.value
  const item = {
    name: name,
    link: link
  }
  placeNameInput.value = ''
  placeLinkInput.value = ''
  addElements(item)

  popupsToggle(popupNewPlace)
}
placeFormElement.addEventListener('submit', handlerAddElementSubmit);

//функция сохранения профайла
function formSubmitHandler (evt) {
    evt.preventDefault();

// Вставьте новые значения с помощью textContent
  profileName.textContent = nameInput.value
  profileJob.textContent = jobInput.value
  popupsToggle(popupEditProfile)
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
