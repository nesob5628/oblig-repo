document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ticketForm');
    const ticketList = document.getElementById('ticketList');
    const deleteAllButton = document.getElementById('deleteAll');

    const tickets = [];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form values
        const numberOfTickets = document.getElementById('tickets').value;
        const firstname = document.getElementById('firstname').value;
        const surname = document.getElementById('surname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Perform input validation
        if (!numberOfTickets.trim() || isNaN(numberOfTickets) || numberOfTickets < 1 || numberOfTickets > 10) {
            alert('Vennligst skriv inn et gyldig antall billetter (1-10).');
            return;
        }

        if (!firstname.trim()) {
            alert('Vennligst skriv inn fornavnet ditt.');
            return;
        }

        if (!surname.trim()) {
            alert('Vennligst skriv inn etternavnet ditt.');
            return;
        }

        if (!email.trim()) {
            alert('Vennligst skriv inn en gyldig e-postadresse.');
            return;
        }

        if (!phone.trim() || phone.length !== 8 || isNaN(phone)) {
            alert('Vennligst skriv inn et gyldig telefonnummer (8 sifre).');
            return;
        }

        // Create ticket object
        const ticket = {
            numberOfTickets: numberOfTickets,
            firstname: firstname,
            surname: surname,
            email: email,
            phone: phone
            // Add other properties here
        };

        // Add ticket to the array
        tickets.push(ticket);

        // Clear form fields
        form.reset();

        // Render tickets
        renderTickets();
    });

    deleteAllButton.addEventListener('click', function() {
        // Clear all tickets
        tickets.length = 0;
        renderTickets();
    });

    function renderTickets() {
        // Clear existing list
        ticketList.innerHTML = '';

        // Render each ticket
        tickets.forEach(function(ticket, index) {
            const li = document.createElement('li');
            li.textContent = `Antall: ${ticket.numberOfTickets}, Fornavn: ${ticket.firstname}, Etternavn: ${ticket.surname}, E-post: ${ticket.email}, Telefon: ${ticket.phone}`;
            // Append other ticket details as needed
            ticketList.appendChild(li);
        });
    }
});
