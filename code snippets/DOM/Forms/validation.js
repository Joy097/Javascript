function validateForm(){
const form = document.forms['myForm'];
const name = form['fname'].value;
const id = form['fid'].value;

    if (name === '' || id === ''){
        alert('Please enter value');
        return false
    }
    else if (id <=0 || id >=10){
        alert('Please enter a valid id');
        return false
    }
}
