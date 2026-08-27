function slideRight(id, delay) {
  let pos = -600;
  const elem = document.getElementById(id);
  let intervalId = setInterval(frame, 1);

  function frame() {
    if (pos >= 0) {
      clearInterval(intervalId);
    } else {
      pos += 3;
      elem.style.left = pos + 'px';
    }
  }
}

function slideLeft(id, delay) {
  let pos = 600;
  const elem = document.getElementById(id);
  let intervalId = setInterval(frame, 1);

  function frame() {
    if (pos <= 0) {
      clearInterval(intervalId);
    } else {
      pos -= 3;
      elem.style.left = pos + 'px';
    }
  }
}

window.onload = function () {
  slideRight("personal-info");
  slideRight("experience");
  slideLeft("languages");
};