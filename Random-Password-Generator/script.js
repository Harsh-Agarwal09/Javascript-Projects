const passwordBox = document.querySelector('#password')
const button = document.querySelector('#myButton')
const copy = document.querySelector('#copyPassword')
const length = 12

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbol = '"!#$%&()*+,-./:;<=>?@[\]^_`{|}~'

const allChars = uppercase + lowercase + number + symbol

button.addEventListener('click', () => {
  let password = ''
  password += uppercase[Math.floor(Math.random() * uppercase.length)]
  password += lowercase[Math.floor(Math.random() * lowercase.length)]
  password += number[Math.floor(Math.random() * number.length)]
  password += symbol[Math.floor(Math.random() * symbol.length)]

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)]
  }
  passwordBox.value = password
});

copyPassword.addEventListener('click', () => {
  passwordBox.select()
  document.execCommand('copy')
  alert('PASSWORD COPIED')
  passwordBox.value = ''
})