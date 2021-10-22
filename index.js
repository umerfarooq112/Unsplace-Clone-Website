// Menu bar Section
var menuIcon = document.querySelector(".header-menu-icon")
menuIcon.addEventListener('click',showMenuSection)

function showMenuSection()
{
    document.getElementById("myDropdown").classList.add("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-menu')) {
    //   var dropdowns = document.getElementsByClassName("dropdown-content");
      var dropdowns = document.getElementById("myDropdown");
      dropdowns.classList.remove('show');
    }
  }