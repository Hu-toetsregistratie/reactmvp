import React, {useState} from 'react';


const StudentInvoeren = () => {
    // const [voornaam, setVoornaam] = useState('');
    // const [achternaam, setAchternaam] = useState('');
    //
    // const updateVoornaam = e => {
    //     setVoornaam(e.target.value)
    // }
    // const updateAchternaam = e => {
    //     setAchternaam(e.target.value)
    // }

    // function lala(e) {
    //     e.preventDefault()
    // };

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
            let naam = await fetch('https://hu-toetsregistratie.nl/api/student/', {
                    method: 'post',
                    headers: {
                        'Authorization': "token 3ee90f9c89fbc67c1de8ced4d2bda1b2092cb95a",
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
console.log(data)
        } catch (e) {
            console.log(e)
        }
    };

    function invoeren(e) {
        e.preventDefault()
        PostStudent();
    };

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