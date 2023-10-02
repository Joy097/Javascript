function validation(){
    const inpObj = document.getElementById("id1")

    if(!inpObj.validity.rangeOverflow){
        inpObj.setCustomValidity("You have made a range overflow error!")
    } else if(!inpObj.validity.rangeUnderflow){
        inpObj.setCustomValidity("You have made a range underflow error!")
    } else if(!inpObj.validity.valueMissing){
        inpObj.setCustomValidity("Value Missing!")
    }

    if(!inpObj.checkValidity()){
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }

    if(!inpObj.checkValidity()){
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
}