const container = document.querySelector('container');
const form = document.querySelector('form');
const input = document.querySelector('input');
const task = document.getElementsByClassName('task');

// console.log(colors);
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
      //

      //

      const creatHeart = setInterval(() => {
        const emogy = document.createElement(`div`);
        emogy.innerHTML = `&hearts;`;
        header.append(emogy);
        emogy.classList.add(`heart`);
        emogy.style.left = `${Math.random() * 100}%`;
        setTimeout(() => {
          clearInterval(creatHeart);
        }, 3000);
        setTimeout(() => {
          emogy.remove();
        }, 5000);
      }, 50);

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

// let c = 0;
// let timing = () => {
//   let textheader = 'To DO List';
//   header.innerText = textheader.slice(0, c);

//   c++;
//   if (c > textheader.length) {
//     c = 0;
//   }
// };

// setInterval(timing, 300);

// let text = 'To DO List';
// let c = 1;
// let writing = () => {
//   header.innerText = text.slice(0, c);
//   c++;
//   if (c > text.length) {
//     c = 1;
//   }
// };
// setInterval(writing, 500);

// let i = 0;
// let fun = () => {
//   let colors = Math.random().toString(16).slice(2, 8);
//   header.style.color = `#${colors}`;
//   if (i < colors.length) {
//     i++;
//   }
// };
// setInterval(fun, 1000);
