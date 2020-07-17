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
    popupsOpen(popupEditProfile)
}

popupEditButton.addEventListener ('click', function () {
  openProfilePopup()
})
popupCloseProfile.addEventListener ('click', function () {
  popupsClose(popupEditProfile)
})


//функция открытия попапов
function popupsOpen (popup) {
  popup.classList.add('popup_opened')
    document.addEventListener('keydown', escapeClose)
  }

//функция зарытия попапов
function popupsClose (popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', escapeClose)
}


//функция закрытия попапов нажатием на escape
function escapeClose (evt){
  if(evt.key === 'Escape') {
    popupsClose(document.querySelector('.popup_opened'));
  }
}

popupAddButton.addEventListener ('click', function () {
  placeNameInput.value = ''
  placeLinkInput.value = ''
  popupsOpen (popupNewPlace)
})

popupCloseNewPlace.addEventListener ('click', function () {
  popupsClose(popupNewPlace)
})

popupClosePhotoZoom.addEventListener ('click', function () {
  popupsClose(popupPhotoZoom)
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

  popupsOpen (popupPhotoZoom)
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

  popupsClose(popupNewPlace)
}
placeFormElement.addEventListener('submit', handlerAddElementSubmit);

//функция сохранения профайла
function formSubmitHandler (evt) {
    evt.preventDefault();

// Вставьте новые значения с помощью textContent
  profileName.textContent = nameInput.value
  profileJob.textContent = jobInput.value
  popupsOpen(popupEditProfile)
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler)

//функция закрытия попапов на оверлей

function overlayClose() {
  const popupList = document.querySelectorAll('.popup')
  popupList.forEach (function (popup) {
    popup.addEventListener ('click', function(evt) {
      if(evt.target !== evt.currentTarget) {return}
      popupsClose(popup)
    })
  })
}
overlayClose()


