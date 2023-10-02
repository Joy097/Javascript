function validation(){
    const inpObj = document.getElementById("id1")

    if(!inpObj.validity.rangeOverflow){
        inpObj.set
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }

    if(!inpObj.checkValidity()){
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }

    if(!inpObj.checkValidity()){
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
}