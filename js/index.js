const tableBody = document.querySelector('.contacts-list');
const searchInput = document.querySelector('.search-input');
const searchForm = document.querySelector('.search');

function renderContacts(contactsToRender) {

    const contactsArray = contactsToRender || JSON.parse(localStorage.getItem('phoneBookData')) || [];

    tableBody.innerHTML = '';

    contactsArray.forEach(function(contact) {
        const rowHTML = `
            <tr>
                <td>${contact.name}</td>
                <td>${contact.phone}</td>
                <td>${contact.room}</td>
                <td>${contact.email}</td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', rowHTML);
    });
}

function handleSearch() {

    const allContacts = JSON.parse(localStorage.getItem('phoneBookData')) || [];

    const query = searchInput.value.toLowerCase().trim();

    const filteredContacts = allContacts.filter(function(contact) {
        return contact.name.toLowerCase().includes(query);
    });

    renderContacts(filteredContacts);
}

searchInput.addEventListener('input', handleSearch);

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    handleSearch();
});

renderContacts();