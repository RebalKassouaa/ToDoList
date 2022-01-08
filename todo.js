const container = document.querySelector('container');
const form = document.querySelector('form');
const input = document.querySelector('input');
const task = document.getElementsByClassName('task');

form.addEventListener('submit', (eo) => {
  eo.preventDefault();
  const task = `<div class="task">
        <div class="star">
          <span class="icon-star icon"></span>
        </div>
        <p class="paragraph">${input.value}</p>
        <div>
          <div class="trash">
            <span class="icon-trash-o icon"></span>
          </div>
          <div class="angry">
            <span class="icon-angry icon"></span>
          </div>
        </div>
      </div>`;
  container.innerHTML += task;
  input.value = '';
});

// control task icons:
// 1- remove task
// 2- remove angry icon
// 3- replace angry with heart

container.addEventListener('click', (eo) => {
  switch (eo.target.className) {
    case 'icon-trash-o icon':
      eo.target.parentElement.parentElement.parentElement.remove();
      break;

    case 'icon-angry icon':
      eo.target.classList.add('dn');
      const heart = `<span class="icon-heart icon"></span>`;
      eo.target.parentElement.parentElement.parentElement
        .getElementsByClassName('paragraph')[0]
        .classList.add('finish');
      eo.target.parentElement.innerHTML = heart;

      break;

    case 'icon-heart icon':
      eo.target.classList.add('dn');
      eo.target.parentElement.parentElement.parentElement
        .getElementsByClassName('paragraph')[0]
        .classList.remove('finish');
      const angry = `<span class="icon-angry icon"></span>`;
      eo.target.parentElement.innerHTML = angry;

      break;

    case 'icon-star icon':
      container.prepend(eo.target.parentElement.parentElement);
      eo.target.classList.add('onclick');
      break;

    case 'icon-star icon onclick':
      eo.target.classList.remove('onclick');
      break;

    default:
      document.getElementsByName('input')[0].placeholder =
        'Please insert your task in here';
      break;
  }
});

// if (eo.target.className == 'icon-trash-o icon') {
//   eo.target.parentElement.parentElement.parentElement.remove();
// } else if (eo.target.className == 'icon-angry icon') {
//   eo.target.classList.add('dn');
//   const heart = `<div class="icon-heart icon"></div>`;
//   eo.target.parentElement.innerHTML += heart;
// } else if (eo.target.className == 'icon-heart icon') {
//   eo.target.classList.add('dn');
//   const angry = `<span class="icon-angry icon"></span>`;
//   eo.target.parentElement.innerHTML = angry;
// } else if (eo.target.className == 'icon-star icon') {
//   container.prepend(eo.target.parentElement.parentElement);
//   eo.target.classList.add('onclick');
// } else if (eo.target.className == 'icon-star icon onclick') {
//   eo.target.classList.remove('onclick');
// }
