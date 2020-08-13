/*export {openPopups, closePopups, closeByEscape}

//функция открытия попапов
function openPopups (popup) {
  popup.classList.add('popup_opened')
    document.addEventListener('keydown', closeByEscape)
  }

//функция зарытия попапов
function closePopups (popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closeByEscape)
}

//функция закрытия попапов нажатием на escape
function closeByEscape (evt){
  if(evt.key === 'Escape') {
    closePopups(document.querySelector('.popup_opened'))
  }
}
*/
