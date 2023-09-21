const form = document.forms['myform'];
name = form['fname'].value;
id = form['fid'].value;

function validateForm(){
    if (name === '' || id === ''){
        alert('Please enter value');
        return false
    }
    else if (id <=0 || id >=10){
        alert('Please enter a valid id');
        return false
    }
}
