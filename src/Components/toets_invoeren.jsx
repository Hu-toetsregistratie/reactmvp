import React from 'react';

class ToetsInvoeren extends React.Component {
    state = {
        selectOptions: [],
    }

    async componentDidMount() {
        const response = await fetch('https://hu-toetsregistratie.nl/api/blok.json');
        const data = await response.json();

        const opties = data.map(d => ({
            "value": d.id,
            "blok": d.blok,
            "jaar": d.jaar
        }))
        this.setState({selectOptions: opties})
    };

    render() {
        return (
            <div>
                <form id="myForm" onSubmit={invoeren}>
                    <div className="form">
                        <label htmlFor="toetscode">Toetscode: </label>
                        <input id="toetscode" name="toets_code" required/>
                        <br/>
                        <label htmlFor="toetsnaam">Naam toets: </label>
                        <input id="toetsnaam" name="toets_naam" required/>
                        {/*<br/>*/}
                        {/*<label htmlFor="jaar-dropdown">Jaar: </label>*/}
                        {/*<select id="jaar-dropdown" name="jaar" required>*/}
                        {/*    <option value="1">Jaar 1</option>*/}
                        {/*    <option value="2">Jaar 2</option>*/}
                        {/*    <option value="3">Jaar 3</option>*/}
                        {/*    <option value="4">Jaar 4</option>*/}
                        {/*</select>*/}
                        <br/>
                        <label htmlFor="blok-dropdown">Blok: </label>
                        <select id="blok-dropdown" name="blok" required>
                            {this.state.selectOptions.map(select => <option>{"Jaar " + select.jaar + " " + select.blok}</option>)}</select>
                        <br/>
                        <br/>
                        <br/>
                        <button id="submit" type="submit">Toevoegen</button>
                    </div>
                </form>
            </div>
        )
    }
}

async function PostToets() {
    let selToets = document.getElementById('toetscode').value;
    let selToetsNaam = document.getElementById('toetsnaam').value;
    // let selJaar = document.getElementById('jaar-dropdown');
    // let selectedJaar = selJaar.options[selJaar.selectedIndex];
    let selBlok = document.getElementById('blok-dropdown');
    let selectedBlok = selBlok.options[selBlok.selectedIndex];

    let data = {
        'toets_naam': selToetsNaam,
        'blok': [selectedBlok.value],
        'toets_code': selToets
        // 'jaar': selectedJaar.value
    };
    try {
        await fetch('https://hu-toetsregistratie.nl/api/toets/', {
            method: 'post',
            headers: {
                // 'Authorization': "token 3ee90f9c89fbc67c1de8ced4d2bda1b2092cb95a",
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
    PostToets();
};

export default ToetsInvoeren;