document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pizza-order-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally
        alert('Form submitted!');
    });
});
