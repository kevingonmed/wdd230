fetch('data/rental-prices.json')
    .then(response => response.json())
    .then(data => {
        const rentalTypes = data.Rental_Types;

        if (rentalTypes && rentalTypes.length > 0) {
            const tableBody = document.getElementById('rental-prices-body');

            rentalTypes.forEach(rental => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${rental['Rental Type']}</td>
                    <td>${rental['Max. Persons']}</td>
                    <td>${rental['Half Day (3 hrs)']}</td>
                    <td>${rental['Full Day']}</td>
                    <td>${rental['Half Day (3 hrs)']}</td>
                    <td>${rental['Full Day']}</td>
                `;
                tableBody.appendChild(row);
            });
        } else {
            console.log('No rental types found.');
        }
    })
    .catch(error => console.error('Error fetching rental types:', error));
