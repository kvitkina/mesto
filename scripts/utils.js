export {popupsOpen, popupsClose, escapeClose}

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
