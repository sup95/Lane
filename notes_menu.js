function openNotesMenu() {
    document.getElementById("notesSideNav").style.width = "400px";
    document.getElementById("overflow_menu").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("notesSideNav").style.width = "0";
    document.getElementById("overflow_menu").style.visibility = "visible";
}

$(document).ready(
  function() {
    $("notes_body").niceScroll();
  }
);
