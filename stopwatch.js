let hour = 0;
let mint = 0;
let sec = 0;
let mili = 0;

let myInterval;
function start() {
    
  myInterval = setInterval(function () {
    mili += 1;
    if (mili === 10) {
      sec += 1;
      mili = 0;
    }
    if (sec === 60) {
      mint += 1;
      sec = 0;
    }
    if (mint === 60) {
      hour += 1;
      mint = 0;
    }

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("mint").innerHTML = mint;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("mili").innerHTML = mili;
  }, 100);
}

function stop() {
  clearInterval(myInterval);
}

function reset() {
  stop();
  hour = 0;
  mint = 0;
  sec = 0;
  mili = 0;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("mint").innerHTML = mint;
  document.getElementById("sec").innerHTML = sec;
  document.getElementById("mili").innerHTML = mili;
}
