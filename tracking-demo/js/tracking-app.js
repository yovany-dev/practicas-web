const circles = document.querySelectorAll('.circle-piloto');
const stepOne = document.getElementById('step-1');
const stepTwo = document.getElementById('step-2');
const stepThree = document.getElementById('step-3');

circles.forEach((circle, index) => {
  circle.addEventListener('click', (e) => {
    // TIME
    const sibling = e.target.nextElementSibling;
    if (sibling) {
      sibling.classList.remove('pending')
    }

    // CIRCLE
    e.target.classList.remove('pending');

    // DATA
    if (index == 0) {
      stepOne.classList.remove('data-pending');
    } else if (index == 1) {
      stepTwo.classList.remove('data-pending');
    } else if (index == 2) {
      stepThree.classList.remove('data-pending');
    }
  });
})
