const tabButton = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content');

for(let i = 0; i < tabButton.length; i++) {
  tabButton[i].addEventListener('click', function () {
    tabButton[0].classList.remove('orange');
    tabButton[1].classList.remove('orange');
    tabButton[2].classList.remove('orange');
    tabButton[i].classList.add('orange');
    tabContent[0].classList.remove('show');
    tabContent[1].classList.remove('show');
    tabContent[2].classList.remove('show');
    tabContent[i].classList.add('show');
  });
}