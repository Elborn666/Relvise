const backdrop = document.querySelector('.backdrop__contactus')
const body = document.querySelector('body')
const submitForm = document.querySelector('.modal__contactus-form')

const buttonOpenModal = document.querySelector('.agency__botton')
const buttonCloseModal = document.querySelector('.modal__contactus-close')

buttonOpenModal.addEventListener('click', onBtnOpenModal)
buttonCloseModal.addEventListener('click', onBtnClose)
submitForm.addEventListener('submit', onSubmitForm)

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