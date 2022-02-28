const toggleButton = document.getElementsByClassName('jsmenu')[0]
const navbarLinks = document.getElementsByClassName('ul-div')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})