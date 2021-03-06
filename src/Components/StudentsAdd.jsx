import React from 'react';
import { TextInput } from '@instructure/ui-text-input';
import { Button } from '@instructure/ui-buttons';


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
                <TextInput id="voornaam"
                           name="voornaam"
                           width="300px"
                           type="text" required
                           placeholder="Bas"/>
                <br/>
                <label htmlFor="achternaam">Achternaam: </label>
                <TextInput id="achternaam"
                           name="achternaam"
                           width="300px"
                           type="text" required
                           placeholder="van Houten"/>
                <br/>
                <label htmlFor="nummer">Studentnummer: </label>
                <TextInput id="nummer"
                           name="student_nummer"
                           width="300px"
                           type="number" required
                           placeholder="1234567"/>
            <br/>
                <Button
                    id="submit"
                    type="submit"
                    color="primary"
                    margin="small"> Toevoegen
                </Button>
            </div>
        </form>
    );
}

export default StudentInvoeren