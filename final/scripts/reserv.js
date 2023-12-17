document.addEventListener('DOMContentLoaded', function () {
    const reservationForm = document.getElementById('reservationForm');
    const successMessage = document.getElementById('successMessage');
    const cruiseArrivalSelect = document.getElementById('cruiseArrival');
    const cruiseShipLabel = document.getElementById('cruiseShipLabel');
    const cruiseShipNameInput = document.getElementById('cruiseShipName');

    cruiseArrivalSelect.addEventListener('change', function () {
        if (this.value === 'yes') {
            cruiseShipLabel.style.display = 'block';
            cruiseShipNameInput.style.display = 'block';
        } else {
            cruiseShipLabel.style.display = 'none';
            cruiseShipNameInput.style.display = 'none';
        }
    });

    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Display success message
        successMessage.style.display = 'block';

        // Reset form fields (optional)
        reservationForm.reset();
    });
});
