import {popupSibmitButton} from './constants.js'

export const preloader = (show, submitButton) => {
  if(show) {
    submitButton.value = 'Сохранение...'
  } else {
    submitButton.value = 'Создать'
  }
}

