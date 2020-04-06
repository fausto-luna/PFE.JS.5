//---------------------- SEARCH FORM VALIDATION ------------------------- // 
function ValidateSearch(){
    var searchWord = document.getElementById('searchWordID');
    searchWord.classList.remove('is-invalid');
     if (searchWord.value == ''){
         searchWord.classList.add("is-invalid");
         document.getElementById('searchWord_text_result').textContent = 'Please type something.';
         return false;
     }else if(searchWord.value.length < 3){
         searchWord.classList.add("is-invalid");
         document.getElementById('searchWord_text_result').textContent = 'Please insert word at least 3 characters long.'
         return false;
     }else{
         return true;
     }
}
//---------------------- SIGN UP FORM VALIDATION ------------------------- // 
function ValidateSignUp(){
    var firstName = document.getElementById('firstNameID');
    var lastName = document.getElementById('lastNameID');
    var address = document.getElementById('addressID');
    var city = document.getElementById('cityID');
    var province = document.getElementById('provinceID');
    var zip = document.getElementById('zipID');
    var email = document.getElementById('emailSignUpID');
    var passwordSignUp = document.getElementById('passwordSignUpID');
    var confirmPasswordSignUp = document.getElementById('confirmPasswordSignUpID');
    var checkBox = document.getElementById('invalidCheck');
    var errors = 0;

    // remove .is-ivalid from failed form submit fields
    firstName.classList.remove('is-invalid');
    lastName.classList.remove('is-invalid');
    address.classList.remove('is-invalid');
    city.classList.remove('is-invalid');
    province.classList.remove('is-invalid');
    zip.classList.remove('is-invalid');
    email.classList.remove('is-invalid');
    passwordSignUp.classList.remove('is-invalid');
    confirmPasswordSignUp.classList.remove('is-invalid');
    checkBox.classList.remove('is-invalid');

    // First Name validation
    if( firstName.value == ''){
        firstName.classList.add("is-invalid");
        document.getElementById('firstNameError').textContent = 'Name is required.';
        errors ++;
    }else if(firstName.value.length < 2){
        firstName.classList.add("is-invalid");
        document.getElementById('firstNameError').textContent = 'First name must be at least 2 characters long.';
        errors ++;
    }
    // Last Name validation
    if(lastName.value == ''){
        lastName.classList.add('is-invalid');
        document.getElementById('lastNameError').textContent = 'Last Name is required.';
        errors ++;
    }else if( lastName.value.length < 2){
        lastName.classList.add('is-invalid');
        document.getElementById('lastNameError').textContent = 'Last Name must be at least 2 characters long.';
        errors ++;
    }
    // Addres validation
    if(address.value == ''){
        address.classList.add('is-invalid');
        document.getElementById('addressError').textContent = 'Address is required.';
        errors ++;
    }
    // City validation
    if(city.value == ''){
        city.classList.add('is-invalid');
        document.getElementById('cityError').textContent = 'City is required';
        errors ++;
    }
    // Province validation
    if(province.value == ''){
        province.classList.add('is-invalid');
        document.getElementById('provinceError').textContent = 'Province is required.';
        errors ++;
    }
    // Zip validation
    if(zip.value == ''){
        zip.classList.add('is-invalid');
        document.getElementById('zipError').textContent = 'Zip is required.';
        errors ++;
    }else if(zip.value.length != 5){
        zip.classList.add('is-invalid');
        document.getElementById('zipError').textContent = 'Zip must be 5 characters long.';
        errors ++;
    }
    // Email validation
    var regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email.value == ''){
        email.classList.add('is-invalid');
        document.getElementById('emailError').textContent = 'Email is required.';
        errors ++;
    }else if(regexEmail.test(email.value) == false){
        email.classList.add('is-invalid');
        document.getElementById('emailError').textContent = 'Email contains illegal characters.';
        errors ++;
    }
    // Password validation
    if(passwordSignUp.value == ''){
        passwordSignUp.classList.add('is-invalid');
        document.getElementById('passwordSignUpError').textContent = 'Password is required.';
        errors ++;
    }
    else if(passwordSignUp.value.length < 6){
        passwordSignUp.classList.add('is-invalid');
        document.getElementById('passwordSignUpError').textContent = 'Password must be at least 6 characters long.';
        errors ++;
    }
    // Confirm password validation
    if(confirmPasswordSignUp.value == ''){
        confirmPasswordSignUp.classList.add('is-invalid');
        document.getElementById('confirmPasswordSignUpError').textContent = 'Please confirm password.';
        errors ++;
    }else if(confirmPasswordSignUp.value != passwordSignUp.value){
        confirmPasswordSignUp.classList.add('is-invalid');
        document.getElementById('confirmPasswordSignUpError').textContent = 'Password was not confirmed.';
        errors ++;
    }
    // CheckBox validation
    if(!checkBox.checked){
        checkBox.classList.add('is-invalid');
        document.getElementById('checkboxError').textContent = 'You must agree before submitting.';
        errors ++;
    }
    // errors result for final validation
    if (errors > 0){
        return false;
    }else{
        return true;
    }
}
//---------------------- LOG IN FORM VALIDATION ------------------------- //
function ValidateLogIn(){
    let emailLogIn = document.getElementById('InputEmailLogIn');
    let passwordLogIn = document.getElementById('InputPasswordLogIn');
    emailLogIn.classList.remove('is-invalid');
    passwordLogIn.classList.remove('is-invalid');
    let errors = 0;
    let regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // email validation
    if (emailLogIn.value == ''){
        emailLogIn.classList.add('is-invalid');
        document.getElementById('errorEmailLogIn').textContent = 'Email is required.';
        errors ++;
    }else if(regexEmail.test(emailLogIn.value) == false){
        emailLogIn.classList.add('is-invalid');
        document.getElementById('errorEmailLogIn').textContent = 'Email contains illegal characters.';
        errors ++;
    }

    // password validation
    if (passwordLogIn.value == ''){
        passwordLogIn.classList.add('is-invalid');
        document.getElementById('errorPasswordLogIn').textContent = 'Password is required.';
        errors ++;
    }else if(passwordLogIn.value.length < 6){
        passwordLogIn.classList.add('is-invalid');
        document.getElementById('errorPasswordLogIn').textContent = 'Password must be at least 6 characters long.';
        errors ++;
    }

    // errors result for final validation
    if(errors > 0){
        return false;
    }else{
        return true;
    }
}
