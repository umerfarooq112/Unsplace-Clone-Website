// Menu bar Section
var menuIcon = document.querySelector(".header-menu-icon")
menuIcon.addEventListener('click',showMenuSection)

function showMenuSection()
{
    document.getElementById("myDropdown").classList.toggle("show");
}


  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflowY = 'hidden'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// Menu bar Section
var menuIcon = document.querySelector(".hero-input-dropdown")
menuIcon.addEventListener('click',showInputSection)

function showInputSection()
{
    console.log('hello')
    document.getElementById("myDropdown2").classList.toggle("input-show");
}






window.onclick = function(event) {
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
