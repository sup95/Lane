function clockClock() {

  var clockElement = document.getElementById( "clock" );


  function updateClock (clock) {
    clock.innerHTML = new Date().toLocaleTimeString();
  }

  setInterval(function () {
      updateClock( clockElement );
      clockElement.style.backgroundColor = "#111";
  }, 1000);
}

clockClock();
