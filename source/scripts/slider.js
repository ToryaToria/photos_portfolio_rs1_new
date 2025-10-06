console.log('ky!')

const slider = document.querySelector(".portfolio__slider");
const wrapper = document.querySelector(".portfolio__list");
let SPEED = 2;

const left = document.querySelector("#slider-left");
const right = document.querySelector("#slider-right");

let flag = 0;
let position = 0;


const initSlider = () => {
  if (!slider) return;

  function animate() {

    // console.log('wrapper', wrapper.scrollWidth);
    // console.log('slider', slider.offsetWidth);


    if (Math.abs(position) >= (wrapper.scrollWidth - slider.offsetWidth + 40) / 2) {
      position = 0;
      return;
    } else {

      if (flag === 0) {
        position += SPEED;
      }

      if (flag === 1) {
        position -= SPEED;
      }

      if (flag === 2) {
        return
      }

      wrapper.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }
  }
  animate();
}



left.addEventListener('mouseover', (elem) => {
  // console.log('туда!')
  flag = 0;
  console.log(elem.type);
  initSlider();
});

left.addEventListener('mouseout', () => {
  // console.log('стоп!');
  flag = 2;
})

right.addEventListener('mouseout', () => {
  // console.log('стоп!');
  flag = 2;
})

right.addEventListener('mouseover', () => {
  // console.log('сюда!');
  flag = 1;
  initSlider();
});

// =============

left.addEventListener('touchstart', (elem) => {
  console.log('туда gfktw!')
  flag = 0;
  initSlider();
});

left.addEventListener('touchend', () => {
  console.log('стоп!');
  flag = 2;
})

right.addEventListener('touchend', () => {
  console.log('стоп!');
  flag = 2;
})

right.addEventListener('touchstart', () => {
  console.log('сюда!');
  flag = 1;
  initSlider();
});