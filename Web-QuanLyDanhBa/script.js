document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const contactId = document.getElementById('contact-id');
    const contactsList = document.getElementById('contacts');

    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    const renderContacts = () => {
        contactsList.innerHTML = '';
        contacts.forEach(contact => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${contact.name} (${contact.email}, ${contact.phone})</span>
                <button onclick="editContact('${contact.id}')">Edit</button>
                <button onclick="deleteContact('${contact.id}')">Delete</button>
            `;
            contactsList.appendChild(li);
        });
    };

    const saveContact = (contact) => {
        contacts = contacts.filter(c => c.id !== contact.id);
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        renderContacts();
    };

    window.editContact = (id) => {
        const contact = contacts.find(c => c.id === id);
        if (contact) {
            contactId.value = contact.id;
            document.getElementById('name').value = contact.name;
            document.getElementById('email').value = contact.email;
            document.getElementById('phone').value = contact.phone;
        }
    };

    window.deleteContact = (id) => {
        contacts = contacts.filter(c => c.id !== id);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        renderContacts();
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const id = contactId.value || Date.now().toString();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        const newContact = { id, name, email, phone };
        saveContact(newContact);

        form.reset();
        contactId.value = '';
    });

    renderContacts();
});
