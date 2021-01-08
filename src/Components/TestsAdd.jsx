import React from 'react';
import { TextInput } from '@instructure/ui-text-input';
import { Button } from '@instructure/ui-buttons';

class ToetsInvoeren extends React.Component {
    state = {
        selectOptions: [],
        toetscode: '',
        toetsnaam: '',
        blok: '1',
        jaar: '1'
    }

    async componentDidMount() {
        const response = await fetch('https://hu-toetsregistratie.nl/api/blok.json');
        const data = await response.json();

        const options = data.map(function (entry) {
            return {
                value: entry.id,
                blok: entry.blok,
                jaar: entry.jaar
            }
        })
        this.setState({selectOptions: options})
    };

    invoeren(e) {
        e.preventDefault()
        this.PostToets();
    }


    async PostToets() {

        let data = {
            'toets_naam': this.state.toetsnaam,
            'blok': Number(this.state.blok),
            'jaar': Number(this.state.jaar),
            'toets_code': this.state.toetscode
        };

        try {
            await fetch('https://hu-toetsregistratie.nl/api/toets/', {
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
    };

    render() {
        return (
            <div>
                <form id="myForm" onSubmit={(e) => this.invoeren(e)}>
                    <div className="form">
                        <label htmlFor="toetscode">Toetscode: </label>
                        <TextInput id="toetscode"
                                   width="300px"
                                   placeholder="Een getal van 7 cijfers // 7777777"
                                   value={this.state.toetscode}
                               onChange={(event) => {
                                   this.setState({toetscode: event.target.value})
                               }} required/>
                        <br/>
                        <label htmlFor="toetsnaam">Naam toets: </label>
                        <TextInput id="toetsnaam"
                                   width="300px"
                                   placeholder="Voorbeeld: 1"
                                   value={this.state.toetsnaam}
                               onChange={(event) => {
                                   this.setState({toetsnaam: event.target.value})
                               }} required/>
                        <br/>
                        <label htmlFor="blok-dropdown">Blok: </label>
                        <select id="blok-dropdown" value={this.state.blok}
                                onChange={(event) => {
                            this.setState({blok: event.target.value, jaar:event.target.value})
                        }} required>
                            {this.state.selectOptions.map(select => <option
                                value={select.value} key={select.value}>Jaar {select.jaar} {select.blok}</option>)}</select>
                        <br/>
                        <br/>
                        <br/>
                        <Button color="primary" margin="small" id="submit" type="submit">Toevoegen</Button>
                    </div>
                </form>
            </div>
        )
    }
}


export default ToetsInvoeren;