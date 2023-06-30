const backdrop = document.querySelector('.backdrop__contactus')
const body = document.querySelector('body')
const submitForm = document.querySelector('.modal__contactus-form')

const buttonsOpenModal = document.querySelectorAll('.getintouch__button')
const buttonCloseModal = document.querySelector('.modal__contactus-close')

buttonCloseModal.addEventListener('click', onBtnClose)
submitForm.addEventListener('submit', onSubmitForm)

for (let buttonOpenModal of buttonsOpenModal) {
    buttonOpenModal.addEventListener('click', onBtnOpenModal);
  }

function onSubmitForm (e) {
    e.preventDefault();
    e.currentTarget.reset()

    backdrop.classList.remove('is-open')
    body.classList.remove('hidden')
}

function onBtnOpenModal () {
    backdrop.classList.add('is-open')
    body.classList.add('hidden')
}

function onBtnClose () {
    backdrop.classList.remove('is-open')
    body.classList.remove('hidden')
}