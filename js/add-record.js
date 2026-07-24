const form = document.querySelector('.form-container');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameValue = document.querySelector('[name="username"]').value;
    const phoneValue = document.querySelector('[name="phone"]').value;
    const roomValue = document.querySelector('[name="room"]').value;
    const emailValue = document.querySelector('[name="email"]').value;

    const newContact = {
        name: nameValue,
        phone: phoneValue,
        room: roomValue,
        email: emailValue
    };

    let contactsArray = JSON.parse(localStorage.getItem('phoneBookData')) || [];
    contactsArray.push(newContact);
    localStorage.setItem('phoneBookData', JSON.stringify(contactsArray));

    window.location.href = 'main.html';
});