const toggleButton = document.getElementsByClassName('jsmenu')[0];
const navbarLinks = document.getElementsByClassName('ul-div')[0];
const text = document.getElementsByClassName('name')[0];
const x = document.querySelector('.cancel-img');
const navitems = document.querySelectorAll('.navi-item');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.add('active');
  text.style.display = 'none';
  toggleButton.style.display = 'none';
  x.style.display = 'block';
});

function closer() {
  x.style.display = 'none';
  navbarLinks.classList.remove('active');
  text.style.display = 'inline';
  toggleButton.style.display = 'block';
}
x.addEventListener('click', closer);

navitems.forEach((navelement) => {
  navelement.addEventListener('click', closer);
});

const form = document.querySelector('.form');
const email = document.querySelector('#email');
const error = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  const Emailtext = email.value;
  if (Emailtext !== Emailtext.toLowerCase()) {
    e.preventDefault();
    error.style.color = 'red';
    error.style.gridColumn = '2/3';
    error.textContent = 'Please Enter your Email in Lowercase';
  } else {
    error.textContent = '';
  }
});