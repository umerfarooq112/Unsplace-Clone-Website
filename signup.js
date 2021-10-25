var signupForm = document.getElementById('SignupForm')
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

signupForm.addEventListener('submit',validateForm)

function validateForm(event)
{
    event.preventDefault()

    console.log(signupForm.elements)
    var InputForms = signupForm.elements;
    var firstName = InputForms[0].value;
    var lastName = InputForms[1].value;
    var password = InputForms[4].value;
    var username = InputForms[3].value;
    var email = InputForms[2].value;

    console.log(lastName+'-'+password+'-'+username+'-'+email)
    if(firstName =='' )
    {
        InputForms[0].style.border =emptyInput()
    }
    if(InputForms[0].value.length > 0)
    {
        InputForms[0].style.border =validInput()
    }
    if(InputForms[1].value.length > 0)
    {
        InputForms[1].style.border =validInput()
    }
    if(InputForms[2].value.length > 0)
    {
        InputForms[2].style.border =validInput()
    }
    if(InputForms[3].value.length > 0)
    {
        InputForms[3].style.border =validInput()
    }
    if(InputForms[4].value.length > 0)
    {
        InputForms[4].style.border =validInput()
    }
    if(lastName=='')
    {
        InputForms[1].style.border =emptyInput()
    }
    if(password=='')
    {
        InputForms[4].style.border =emptyInput()
    }
    if(username=='')
    {
        InputForms[3].style.border =emptyInput()
    }
    if(email=='')
    {
        InputForms[2].style.border =emptyInput()
    }
    if(InputForms[2].value.match(mailformat))
    {
        console.log('he')
        InputForms[2].style.border = validEmail()
    }

    
}
function emptyInput()
{
    var color = '1px solid red'
    return color;
}
function validEmail()
{
    var color = '2px solid green'
    return color;
}
function validInput()
{
    var color = '2px solid green'
    return color;
}