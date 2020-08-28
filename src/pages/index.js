import {
  popup, formElement, nameInput, aboutInput, profileName, profileJob, profileAvatar, popupEditProfile, popupNewPlace, popupPhotoZoom,
  popupEditButton, popupAddButton, popupCloseProfile, popupCloseNewPlace, popupClosePhotoZoom, placeNameInput, placeLinkInput,
  placeFormElement, buttonCreate, elementsList, formPlace, formDelete, formProfile, formAvatar, popupImage, popupName, SibmitButtonAvatar, SibmitButtonPlace, SibmitButtonProfile } from '../utils/constants.js'
import { preloader } from '../utils/preloader.js'
import { Card } from '../components/Сard.js'
import { FormValidator } from '../components/FormValidator.js'
import { Section } from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { UserInfo } from '../components/UserInfo.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import './index.css'
import { PopupWithSubmit } from '../components/PopupWithSubmit.js'
import { Api } from "../components/Api.js"
import { data } from 'autoprefixer'
const validationObject = ({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
})
//создание экземпляра класса для валидации формы "редактировать профиль"
const formProfileValidation = new FormValidator(validationObject, formProfile)

//создание экземпляра класса для валидации формы "новое место"
const formPlaceValidation = new FormValidator(validationObject, formPlace)

//создание экземпляра класса для валидации формы "редактировать аватар"
const formAvatarValidation = new FormValidator(validationObject, formAvatar)

//создание экземпляра класс API
const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-14',
  headers: {
    authorization: 'e63db112-531a-4c6f-ae02-ccc048d1696b',
    'Content-Type': 'application/json'
  }
})

//создание экземпляра класса для попапа "зум фото"
const popupWithImage = new PopupWithImage ('.popup_photo-zoom', {popupImage, popupName})
popupWithImage.setEventListeners()
popupWithImage.close()



api.getAllInfo()
.then(res => {
  const [dataCards, dataProfile] = res

  //создание экмепляра класса для отображения информации о пользователе
  const userInfo = new UserInfo ({nameElement: profileName, aboutElement: profileJob, avatarElement: profileAvatar})

  //подгрузка информации о пользователе
  userInfo.setUserInfo(dataProfile)

  //создание экмепляра класса для попапа "подтвердить удаление"
  const popupDeleteCard = new PopupWithSubmit ('.popup_delete', '.popup__form-container')

  //создание экземпляра класса для отрисовки карточек на странице
  const cardList = new Section ({
    items: dataCards,
    renderer: (data) => {
    const card = new Card({data, dataUser: dataProfile._id,
      handleCardClick: () => {
        popupWithImage.open(data)
      },
      handleLikeClick: (id) => {
        api.putLike (id)
        .then (res => {
          card.updateLikes(res.likes)
        })
        .catch((err) => { console.log(err) })
      },
      handleDislikeClick: (id) => {
        api.removeLike (id)
        .then(res => {
          card.updateLikes(res.likes)
        })
        .catch((err) => { console.log(err) })
      },
      handleDeleteIconClick: (id) => {
        popupDeleteCard.setSubmitAction (() => {
          api.deleteCard(id)
          .then(res => {
            card.removeElement()
            popupDeleteCard.close()
          })
          .catch((err) => { console.log(err) })
        })
        popupDeleteCard.open()
      }
    }, '.elements__template')

    const element = card.generateCard()
    cardList.addItem(element)
    }
  }, elementsList)


  //создание экземпляра класса для попапа "новое место"
  const newPlace = new PopupWithForm ('.popup_new-place', {
    handleFormSubmit: (data) => {
      preloader(true, SibmitButtonPlace)
      api.addCard({
        name: data.name,
        link: data.link
      })
      .then(data => {
      const card = new Card({data, dataUser: dataProfile._id,
        handleCardClick: () => {
          popupWithImage.open(data)
        },
        handleLikeClick: (id) => {
          api.putLike (id)
          .then (res => {
            card.updateLikes(res.likes)
          })
          .catch((err) => { console.log(err) })
        },
        handleDislikeClick: (id) => {
          api.removeLike (id)
          .then(res => {
            card.updateLikes(res.likes)
          })
          .catch((err) => { console.log(err) })
        },
        handleDeleteIconClick: (id) => {
          popupDeleteCard.setSubmitAction (() => {
            api.deleteCard(id)
            .then(res => {
              card.removeElement()
              popupDeleteCard.close()
            })
            .catch((err) => { console.log(err) })
          })
          popupDeleteCard.open()
        }
      }, '.elements__template')
      const element = card.generateCard()
      cardList.addItem(element)
      preloader(false, SibmitButtonPlace)
      newPlace.close()
      })
    }
  })

//создание экземпляра класса для попапа "редактировать профиль"
const editProfile = new PopupWithForm ('.popup_edit-profile', {
  handleFormSubmit: (data) => {
    preloader(true, SibmitButtonProfile)
    api.setUserInfo({
      name: data.name,
      about: data.about
    })
    .then(res => {
      userInfo.setUserInfo(res)
    })
    .catch((err) => { console.log(err) })
    editProfile.close()
    preloader(false, SibmitButtonProfile)
  }
})

//создание экземпляра класса для попапа "замена аватара"
const popupNewAvatar = new PopupWithForm ('.popup_new-avatar', {
  handleFormSubmit: (data) => {
    preloader(true, SibmitButtonAvatar)
    api.editAvatar({
      avatar: data.avatar
    })
    .then(res => {
      userInfo.setUserInfo(res)
    })
    .catch((err) => { console.log(err) })
    popupNewAvatar.close()
    preloader(false, SibmitButtonAvatar)
  }
})
return {
  cardList, popupNewAvatar, editProfile, newPlace, userInfo, popupDeleteCard
}
})

.then(res => {
  const { cardList, popupNewAvatar, editProfile, newPlace, userInfo, popupDeleteCard } = res
  cardList.renderItems()
  popupNewAvatar.setEventListeners()
  editProfile.setEventListeners()
  newPlace.setEventListeners()
  popupDeleteCard.setEventListeners()
  formProfileValidation.enableValidation()
  formPlaceValidation.enableValidation()
  formAvatarValidation.enableValidation()
  return { userInfo, editProfile, popupNewAvatar, newPlace }
})

.then (res => {
  const { userInfo, editProfile, popupNewAvatar, newPlace } = res

 //обработчик открытия попапа "редактировать профиль"
  popupEditButton.addEventListener('click', () => {
    const currentUserInfo = userInfo.getUserInfo()
    nameInput.value = currentUserInfo.name
    aboutInput.value = currentUserInfo.about
    editProfile.open()
  })

  //обработчик открытия попапа "замена аватара"
  profileAvatar.addEventListener('click', () => {
    const currentUserInfo = userInfo.getUserInfo()
    aboutInput.value = currentUserInfo.avatar
    popupNewAvatar.open()
  })

   //обработчик открытия попапа "Созадние карточки"
  popupAddButton.addEventListener('click', () => {
    placeNameInput.value = ''
    placeLinkInput.value = ''
    formPlaceValidation.disableButton()
    newPlace.open()
    })
})

.catch((err) => { console.log(err) })
