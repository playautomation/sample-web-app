
const form = document.getElementById('appointmentForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(event) {

    // Prevent the browser from refreshing the page
    event.preventDefault();

    // Read values entered by the user
    const patientName = document.getElementById('patientName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const department = document.getElementById('department').value;

    // Validate mandatory fields
    if (!patientName || !appointmentDate || !department) {
        confirmation.style.color = 'red';
        confirmation.textContent = 'Please fill in all fields.';
        return;
    }

    // Display booking confirmation
    confirmation.style.color = 'green';
    confirmation.textContent =
        `Appointment booked successfully for ${patientName}!`;

    // Reset the form
    form.reset();
});
