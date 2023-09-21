const form = document.forms['myform'];
name = form['fname'].value;
id = form['fid'].value;

if (name === '' || id === ''){
    alert('Please enter value')
}
elif (id <=0 || id >=10){
    alert('Please enter a valid ')
}