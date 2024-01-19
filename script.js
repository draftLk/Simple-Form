const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const password = document.querySelector('#password')
const msg = document.querySelector('.msg')
const users = document.querySelector('#users')


myForm.addEventListener('submit', onSubmit) // podemos usar o evento submit, por ser um formulario


function onSubmit(evt) {
  evt.preventDefault()
  if (nameInput.value === "" || emailInput.value === "" || password.value == "") {
    msg.classList.add('error')
    msg.textContent = 'Please enter all fields!'
    setTimeout(() => {
      msg.classList.remove('error')
      msg.textContent = ""
    }, 2000)
  } else {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
    users.appendChild(li)

    // clear fields
    nameInput.value = ""
    emailInput.value = ""
    password.value = ""
  }
}










