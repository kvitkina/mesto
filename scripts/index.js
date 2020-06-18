const popup = document.querySelector('.popup')
const popupEditButton = document.querySelector ('.profile__edit-button')
const popupCloseButton = popup.querySelector ('.popup__close')
const popupSaveButton = popup.querySelector('.popup__button')
let formElement = popup.querySelector('.popup__form-container')
let nameInput = formElement.querySelector('.popup__name')
let jobInput = formElement.querySelector('.popup__job')
let profileName  = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__job')

const popupToggle = function() {
  if (!popup.classList.contains('popup_opened')) {
      nameInput.value = profileName.textContent
      jobInput.value = profileJob.textContent
    }
  popup.classList.toggle('popup_opened')
}
popupEditButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

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
