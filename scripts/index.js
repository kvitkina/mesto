const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popup = document.querySelector('.popup')
const popupSaveButton = popup.querySelector('.popup__button')
let formElement = popup.querySelector('.popup__form-container')
let nameInput = formElement.querySelector('.popup__name')
let jobInput = formElement.querySelector('.popup__job')
let profileName  = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__job')


const popupEditProfile = document.querySelector('.popup_edit-profile')
const popupNewPlace = document.querySelector('.popup_new-place')
const popupPhotoZoom = document.querySelector('.popup_photo-zoom')

const popupEditButton = document.querySelector ('.profile__edit-button')
const popupAddButton = document.querySelector ('.profile__add-button')
const popupOpenPhotoZoom = document.querySelector ('.element__image')

const popupCloseProfile = popupEditProfile.querySelector ('.popup__close')
const popupCloseNewPlace = popupNewPlace.querySelector ('.popup__close')
const popupClosePhotoZoom = popupPhotoZoom.querySelector ('.popup__close')

//функция для попапа "редактировать профиль"
const popupToggle = function() {
  if (!popupEditProfile.classList.contains('popup_opened')) {
      nameInput.value = profileName.textContent
      jobInput.value = profileJob.textContent
    }
    popupEditProfile.classList.toggle('popup_opened')
}

popupEditButton.addEventListener ('click', function () {
  popupToggle (popupEditProfile)
})
popupCloseProfile.addEventListener ('click', function () {
  popupToggle(popupEditProfile)
})

//функция для попапов "добавить" и "зум фото"
const popupsToggle = function (popup) {
  popup.classList.toggle('popup_opened')
}
popupAddButton.addEventListener ('click', function () {
  popupsToggle (popupNewPlace)
})

/*popupOpenPhotoZoom.addEventListener ('click', function () {
  popupsToggle (popupPhotoZoom)
})*/

popupCloseNewPlace.addEventListener ('click', function () {
  popupsToggle(popupNewPlace)
})

popupClosePhotoZoom.addEventListener ('click', function () {
  popupsToggle(popupPhotoZoom)
})

//Функция вывода массива на страницу
const elementsList = document.querySelector('.elements__list')
const elementsTemplate = document.querySelector('.elements__template')

function addElements (item) {
  const element = elementsTemplate.content.cloneNode(true)
  element.querySelector('.element__title').textContent = item.name
  element.querySelector('.element__image').src = item.link
  element.querySelector('.element__trash').addEventListener('click', deleteElement)
  element.querySelector('.element__like').addEventListener('click', likeElement)
  elementsList.prepend(element)
}




//Обработчик "добавления"

const placeNameInput = popupNewPlace.querySelector('.popup__name_theme_place')
const placeLinkInput = popupNewPlace.querySelector('.popup__job_theme_place')
const placeFormElement = popupNewPlace.querySelector('.popup__container_theme_place')

function handlerAddElementSubmit(evt) {
  evt.preventDefault();

  const name = placeNameInput.value
  const link = placeLinkInput.value
  let item = {
    name: name,
    link: link
  }
  placeNameInput.value = ''
  placeLinkInput.value = ''
  addElements(item)

  popupsToggle(popupNewPlace)
}
placeFormElement.addEventListener('submit', handlerAddElementSubmit);






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

//перебор массива
initialCards.forEach (function (item) {
  addElements(item)
})

//функция сохранения профайла
function formSubmitHandler (evt) {
    evt.preventDefault();

    // Находим поля формы в DOM
    let nameInput = formElement.querySelector('.popup__name')
    let jobInput = formElement.querySelector('.popup__job')

    // Получите значение полей из свойства value
    console.log(nameInput.value)
    console.log(jobInput.value)

    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName  = document.querySelector('.profile__name')
    let profileJob = document.querySelector('.profile__job')

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value
    profileJob.textContent = jobInput.value
    popupToggle()
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);


