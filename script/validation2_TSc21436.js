// VALIDATION FOR REGISTRATION

function runValidate(form){

    if(validateName(form) && validateID(form) && validateAge(form) && validatePhone(form)
        && validateemail(form) && validatefielD(form) && validateDate(form)
         && validatepayM(form)){
        return true;
    }
    else
        return false;
}

// Validation name
function validateName(form){
    var name1 = form.elements["SName"];

    if(name1.validity.valueMissing){
        name1.setCustomValidity("Please enter your name");
        return false;
    }
    else{
        
        name1.setCustomValidity("");
        return true;
    }    
} // end validateName function

function validateID(form){
    var iden = form.elements["ID"];

    if(iden.validity.valueMissing){
        iden.setCustomValidity("Please enter your identification (ID) number");
        return false;
    }
    else if(iden.validity.patternMismatch){       
        iden.setCustomValidity("Please enter your 8-digit identification");
        return false;
    }
    else{
        iden.setCustomValidity("");
        return true;
    } 
    
}

// Validation age for registration
function validateAge2(form){
    var age2 = form.elements["age2"];
    
    if(age2.validity.valueMissing){
        age2.setCustomValidity("Please enter your age in number");
        return false;
    }
    else if(age2.validity.rangeUnderflow || age2.validity.rangeOverflow){
        age2.setCustomValidity("Please enter your age between 10 to 25");
        return false;
    }
    else{
        age2.setCustomValidity("");
        return true;
    }
}

// Validation phone for reservation
function validatePhone(form){

    var phoNe = form.elements["phone"];

    if(phoNe.validity.valueMissing){
        phoNe.setCustomValidity("Please enter your phone number");
        return false;
    }
    else if(phoNe.validity.patternMismatch){       
        phoNe.setCustomValidity("Please enter your 10-digit numbers of your phone");
        return false;
    }
    else{
        phoNe.setCustomValidity("");
        return true;
    } 
}

// Validation email for reservation
function validateemail(form){

    var emaiL = form.elements["SEmail"];

    if(emaiL.validity.valueMissing){
        emaiL.setCustomValidity("Please, enter your personal email address");
        return false;
    } 
    else if(emaiL.validity.typeMismatch) {
        emaiL.setCustomValidity("The email is not in a correct format");
        return false;
    }
    else{
        emaiL.setCustomValidity("");
        return true;
    }
}
