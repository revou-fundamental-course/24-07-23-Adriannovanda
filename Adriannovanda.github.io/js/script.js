var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slider");
    if (n > imgList.length) slideIndex = 1;
    else if (n<1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display ="none";
    }

    imgList[slideIndex - 1].style.display = 'block'
}

setInterval(() => {
    plusDivs(1);
}, 3000)


var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var submitError = document.getElementById('submit-error')

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function ValidateForm(){
    if(!validateName() || !validateEmail()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Submit not completed';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}
