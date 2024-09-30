document.getElementById('greetForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);
    const name = formData.get('name');

    fetch('/greet', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('greeting').innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
};
