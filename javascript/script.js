document.addEventListener('DOMContentLoaded', function() {
    let skjema = document.getElementById('ticketForm');
    let billettListe = document.getElementById('ticketList');
    let slettAlleKnapp = document.getElementById('deleteAll');

    let billetter = [];

    skjema.addEventListener('submit', function(event) {
        event.preventDefault();

        // Hent verdier fra skjemaet
        let film = document.getElementById('film').value;
        let antallBilletter = document.getElementById('tickets').value;
        let fornavn = document.getElementById('firstname').value;
        let etternavn = document.getElementById('surname').value;
        let epost = document.getElementById('email').value;
        let telefon = document.getElementById('phone').value;

        // utfører validering av skjemaet og gir feilmelding om noe er feil
        if (!antallBilletter.trim() || isNaN(antallBilletter) || antallBilletter < 1 || antallBilletter > 10) {
            alert('Vennligst skriv inn et gyldig antall billetter (1-10).');
            return;
        }

        if (!fornavn.trim()) {
            alert('Vennligst skriv inn fornavnet ditt.');
            return;
        }

        if (!etternavn.trim()) {
            alert('Vennligst skriv inn etternavnet ditt.');
            return;
        }

        if (!epost.trim()) {
            alert('Vennligst skriv inn en gyldig e-postadresse.');
            return;
        }

        if (!telefon.trim() || telefon.length !== 8 || isNaN(telefon)) {
            alert('Vennligst skriv inn et gyldig telefonnummer (8 sifre).');
            return;
        }

        // Oppretter en billettliste
        let billett = {
            film: film,
            antallBilletter: antallBilletter,
            fornavn: fornavn,
            etternavn: etternavn,
            epost: epost,
            telefon: telefon
            // Legg til andre egenskaper her om nødvendig
        };

        // Legg til billetten i arrayet
        billetter.push(billett);

        // Tømmer skjemaet
        skjema.reset();

        // Oppdater visningen av billetter
        visBilletter();
    });

    slettAlleKnapp.addEventListener('click', function() {
        // Tøm alle billetter
        billetter.length = 0;
        visBilletter();
    });

    function visBilletter() {
        // Fjerner eksisterende liste
        billettListe.innerHTML = '';

        // Vis hver billett
        billetter.forEach(function(billett, indeks) {
            let li = document.createElement('li');
            li.textContent = `Film: ${billett.film},  Antall: ${billett.antallBilletter},  Fornavn: ${billett.fornavn},  Etternavn: ${billett.etternavn},  E-post: ${billett.epost},  Telefon: ${billett.telefon}`;
            // Informasjonen om valgte billetter kommer ut
            billettListe.appendChild(li);
        });
    }
});
