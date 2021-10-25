// ************************************** //
// ************************************** //
// Menu Bar DropDown  //
// ************************************** //
// ************************************** //
var menuIcon = document.querySelector(".header-menu-icon")
menuIcon.addEventListener('click', showMenuSection)

function showMenuSection() {
  document.getElementById("myDropdown").classList.toggle("show");
}


// ************************************** //
// ************************************** //
// Modal Section ********** //
// ************************************** //
// ************************************** //

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
  document.body.style.overflowY = 'hidden'
}

span.onclick = function () {
  modal.style.display = "none";
}


// ************************************** //
// ************************************** //
// Input Section Drop Down ********** //
// ************************************** //
// ************************************** //
var menuIcon = document.querySelector(".hero-input-dropdown")
menuIcon.addEventListener('click', showInputSection)

function showInputSection() {
  console.log('hello')
  document.getElementById("myDropdown2").classList.add("input-show");
}

// ************************************** //
// ************************************** //
// If user clidk outside any div event will fire and reomve classes on menu dropdowns //
// ************************************** //
// ************************************** //
 
window.onclick = function (event) {
  if (!event.target.matches('.dropdown-menu')) {
    //   var dropdowns = document.getElementsByClassName("dropdown-content");
    var dropdowns = document.getElementById("myDropdown");
    dropdowns.classList.remove('show');
  }
  if (!event.target.matches('#hero-input')) {
    //   var dropdowns = document.getElementsByClassName("dropdown-content");
    var inputdropdown = document.getElementById("myDropdown2");
    // inputdropdown.style.display = 'none'
    document.getElementById("myDropdown2").classList.remove("input-show");

    // dropdowns.classList.remove('input-show');
    console.log(event.target)
    console.log('sdfsdf')

  }
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflowY = 'unset'

  }
}