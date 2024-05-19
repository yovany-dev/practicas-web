const circle1 = document.getElementById('circle-user-1');
const time1 = document.getElementById('time-user-1');
const data1 = document.getElementById('data-user-1');

const circle2 = document.getElementById('circle-user-2');
const time2 = document.getElementById('time-user-2');
const data2 = document.getElementById('data-user-2');

const circle3 = document.getElementById('circle-user-3');
const data3 = document.getElementById('data-user-3');

window.onkeydown = function(e) {
  const key = e.key;

  if (key == 1) {
    circle1.classList.remove('pending');
    time1.classList.remove('pending');
    data1.classList.remove('data-pending');
  } else if (key == 2) {
    circle2.classList.remove('pending');
    time2.classList.remove('pending');
    data2.classList.remove('data-pending');
  } else if (key == 3) {
    circle3.classList.remove('pending');
    data3.classList.remove('data-pending');
  }
}
