emailjs.init("eI5S_AmDumP3sRZTg");

// Handle form submission
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Send the form data using emailjs
    emailjs.sendForm('service_nad513c', 'template_jcfvch2', this)
        .then(function () {
            alert('Sent successfully!');
        }, function (error) {
            alert('Failed to send the message. ' + error.message);
        });
});

