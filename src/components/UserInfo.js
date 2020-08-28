export class UserInfo {
  constructor ( {nameElement, aboutElement, avatarElement} ) {
    this._nameElement = nameElement
    this._aboutElement = aboutElement
    this._avatarElement = avatarElement
  }

  getUserInfo () {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
      avatar: this._avatarElement.style.backgroundImage
    }
  }

  setUserInfo ({ name, about, avatar }) {
    this._nameElement.textContent = name
    this._aboutElement.textContent = about
    this._avatarElement.style.backgroundImage = `url(${ avatar })`
  }
}
