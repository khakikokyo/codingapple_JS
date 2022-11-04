const tabButton = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content');
const listEl = document.querySelector('.list');

// for(let i = 0; i < tabButton.length; i++) {
//   tabButton[i].addEventListener('click', function () {
//     openTab(i);
//   });
// }

// listEl.addEventListener('click', function (e) {
//   for(let i = 0; i < 3; i++) {
//     if(e.target == tabButton[i]) {
//       openTab(i);
//     }
//   }
// });

// 숨김자료를 이융
listEl.addEventListener('click', function (e) {
  openTab(e.target.dataset.id);
});

// 함수 축약 시 변수 > 파라미터
function openTab(e) {
  tabButton[0].classList.remove('orange');
  tabButton[1].classList.remove('orange');
  tabButton[2].classList.remove('orange');
  tabButton[e].classList.add('orange');
  tabContent[0].classList.remove('show');
  tabContent[1].classList.remove('show');
  tabContent[2].classList.remove('show');
  tabContent[e].classList.add('show');
}