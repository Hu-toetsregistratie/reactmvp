import React from 'react';

const StudentInvoeren = () => {
    async function PostStudent() {
        let selVoor = document.getElementById('voornaam').value;
        let selAchter = document.getElementById('achternaam').value;
        let selNummer = document.getElementById('nummer').value;

        let data = {
            'voornaam': selVoor,
            'achternaam': selAchter,
            'student_nummer': selNummer,
        };
        try {
            await fetch('https://hu-toetsregistratie.nl/api/student/', {
                method: 'post',
                headers: {
                    'Authorization':("token 74b3873bb95d80d4218104d99468529fb40ff8bd"),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    function invoeren(e) {
        e.preventDefault()
        PostStudent();
    }

    return (
        <form id="myForm" onSubmit={invoeren}>
            <div className="form">
                <label htmlFor="voornaam">Voornaam: </label>
                <input id="voornaam" name="voornaam" type="text" required/>
                <br/>
                <label htmlFor="achternaam">Achternaam: </label>
                <input id="achternaam" name="achternaam" type="text" required/>
                <br/>
                <label htmlFor="nummer">Studentnummer: </label>
                <input id="nummer" name="student_nummer" type="number" required/>
                <br/>
                <br/>
                <br/>
                <button id="submit" type="submit">Toevoegen</button>
            </div>
        </form>
    );
}

export default StudentInvoeren