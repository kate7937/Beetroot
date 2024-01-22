let button = document.querySelector(`button`);
let form = document.querySelector(`form`);
let userName = document.forms.myform.elements.name;
let age = document.forms.myform.elements.age;
let message = document.forms.myform.elements.message;

button.addEventListener(`click`, function (event){
    event.preventDefault();
    if (userName.value && age.value && message.value) {
        alert(`Name: ${userName.value} \n Age: ${age.value} \n Message: ${message.value}`);
    } else {
        alert('Please fill out the form completely.');
    };
});
