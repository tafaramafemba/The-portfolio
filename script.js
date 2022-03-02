const toggleButton = document.getElementsByClassName('jsmenu')[0];
const midpart = document.querySelector('.mid-part');
const navbarLinks = document.getElementsByClassName('ul-div')[0];
const text = document.getElementsByClassName('name')[0];
const x = document.querySelector('.cancel-img');
const navitems = document.querySelectorAll('.navi-item');
const jsmenu = document.querySelector('.jsmenu');
const navbar = document.querySelector('.ul-div');

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

const popup = [
{
  namepop: 'Profesional Art Printing Data',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  smalldescrip: 'A daily selection of privately personalized reads; no accounts or sign-ups required has been the industrys standard',
  carddecsrip: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  image: ['/Images/snapshot.png'],
  worksimages: ['/Images/grid-template.png'],
  technologies: ['html', 'css','ruby on rails','bootstrap', 'ruby'],
  live: ['https://tafaramafemba.github.io/The-portfolio/'],
  source: ['https://github.com/tafaramafemba/The-portfolio'],
}
];

const container = document.querySelector('.grid-container');
for(let i=0; i<6; i += 1){
  container.innerHTML = `
  <div class="multi">
  <img src="Images/balay.png" alt="placeholder" class="balay">
  <div class="stories">
      <h3 class="multipost">Multi-Post Stories</h3>
      <p class="singular-p">${popup[0].carddecsrip}</p>
      <ul class="languages">
          <li><button class="btn">${popup[0].technologies[1]}</button></li>
          <li><button class="btn">${popup[0].technologies[0]}</button></li>
          <li><button class="btn boot">${popup[0].technologies[3]}</button></li>
          <li><button class="btn">${popup[0].technologies[4]}</button></li>
      </ul>
      <button class="probtn">See Project</button>
  </div>
  </div>
  <div class="gridder">
                <div class="grid-item card5">
                    <h3 class="professional-btn card2">${popup[0].namepop}</h3>
                    <p class="multiple-p card3">${popup[0].smalldescrip}</p>
                    <ul class="languages card1">
                        <li><button class="btn">${popup[0].technologies[1]}</button></li>
                        <li><button class="btn boot">${popup[0].technologies[3]}</button></li>
                        <li><button class="btn">${popup[0].technologies[4]}</button></li>
                    </ul>
                    <button class="see pro card4">See Project</button>
                </div>
                <div class="grid-item">
                    <h3 class="professional-btn">${popup[0].namepop}</h3>
                    <p class="multiple-p">${popup[0].smalldescrip}</p>
                    <ul class="languages">
                        <li><button class="btn">${popup[0].technologies[1]}</button></li>
                        <li><button class="btn boot">${popup[0].technologies[3]}</button></li>
                        <li><button class="btn">${popup[0].technologies[4]}</button></li>
                    </ul>
                    <button class="see pro">See Project</button>
                </div>
                <div class="grid-item">
                    <h3 class="professional-btn">${popup[0].namepop}</h3>
                    <p class="multiple-p">${popup[0].smalldescrip}</p>
                    <ul class="languages">
                        <li><button class="btn">${popup[0].technologies[1]}</button></li>
                        <li><button class="btn boot">${popup[0].technologies[3]}</button></li>
                        <li><button class="btn">${popup[0].technologies[4]}</button></li>
                    </ul>
                    <button class="see pro">See Project</button>
                </div>
                <div class="grid-item">
                    <h3 class="professional-btn">${popup[0].namepop}</h3>
                    <p class="multiple-p">${popup[0].smalldescrip}</p>
                    <ul class="languages">
                        <li><button class="btn">${popup[0].technologies[1]}</button></li>
                        <li><button class="btn boot">${popup[0].technologies[3]}</button></li>
                        <li><button class="btn">${popup[0].technologies[4]}</button></li>
                    </ul>
                    <button class="see pro">See Project</button>
                </div>
                <div class="grid-item">
                    <h3 class="professional-btn">${popup[0].namepop}</h3>
                    <p class="multiple-p">${popup[0].smalldescrip}</p>
                    <ul class="languages">
                        <li><button class="btn">${popup[0].technologies[1]}</button></li>
                        <li><button class="btn boot">${popup[0].technologies[3]}</button></li>
                        <li><button class="btn">${popup[0].technologies[4]}</button></li>
                    </ul>
                    <button class="see pro">See Project</button>
                </div>
                <div class="grid-item">
                    <h3 class="professional-btn">${popup[0].namepop}</h3>
                    <p class="multiple-p">${popup[0].smalldescrip}</p>
                    <ul class="languages">
                        <li><button class="btn">${popup[0].technologies[1]}</button></li>
                        <li><button class="btn boot">${popup[0].technologies[3]}</button></li>
                        <li><button class="btn">${popup[0].technologies[4]}</button></li>
                    </ul>
                    <button class="see pro">See Project</button>
                </div>
            </div>`
  ;
}

//popupWindow
let modalContainer;
function popupWindow() {
  jsmenu.style.display = 'none';
  navbar.style.display = 'none';
  modalContainer = document.createElement('section');
  modalContainer.className = 'modalContainer';
  modalContainer.innerHTML = `
  <div class="popup-window">
    <h2 class= "multih2">Multi Post Stories</h2>
    <img src="/Images/Icon-Cancel.png" alt="Cancel" class="cancel-img">
    <ul class="languages card1">
        <li><button class="popbtn">${popup[0].technologies[1]}</button></li>
        <li><button class="popbtn boot">${popup[0].technologies[3]}</button></li>
        <li><button class="popbtn">${popup[0].technologies[4]}</button></li>
    </ul>
    <img src="/Images/snapshot.png" alt="" class="snapshot-img">
    <p>${popup[0].carddecsrip}</p>
    <button class="snapshot-btn1">See Live <img src="/Images/live.png" class="btnpng"></button>
    <button class="snapshot-btn">See Source <img src="/Images/git.png" class="btnpng"></button>

</div>`
;
midpart.appendChild(modalContainer);
}
popupWindow();