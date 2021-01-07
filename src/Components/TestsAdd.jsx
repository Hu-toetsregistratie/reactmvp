import React from 'react';

import { Button } from '@instructure/ui-buttons';
import { TextInput } from '@instructure/ui-text-input';


class ToetsInvoeren extends React.Component {
    state = {
        selectOptions: [],
        toetscode: '',
        toetsnaam: '',
        blok: '',
        jaar: ''
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

    render() {
        return (
            <div>
                <form id="myForm" onSubmit={(e) => this.invoeren(e)}>
                    <div className="form">
                        <label htmlFor="toetscode">Toetscode: </label>
                        <TextInput width="300px"
                                   id="toetscode"
                                   value={this.state.toetscode}
                                   onChange={(event) => {
                                   this.setState({toetscode: event.target.value})
                               }} required/>
                        <br/>
                        <label htmlFor="toetsnaam">Naam toets: </label>
                        <TextInput width="300px"
                                   id="toetsnaam"
                                   value={this.state.toetsnaam}
                                   onChange={(event) => {
                                   this.setState({toetsnaam: event.target.value})
                               }} required/>
                        <br/>
                        <label htmlFor="blok-dropdown">Blok: </label>
                        <select id="blok-dropdown"
                                value={this.state.blok}
                                onChange={(event) => {
                            this.setState({blok: event.target.value})
                        }} required>
                            {this.state.selectOptions.map(select => <option
                                value={select.value} key={select.value}>{select.blok}</option>)}</select>
                        <br/>
                        <label htmlFor="jaar-dropdown">Jaar: </label>
                        <select id="jaar-dropdown"
                                value={this.state.jaar}
                                onChange={(event) => {
                            this.setState({jaar: event.target.value})
                        }} required>
                            {this.state.selectOptions.map(select => <option
                                value={select.value} key={select.value}>{select.jaar}</option>)}</select>
                        <br/>
                        <br/>
                        <br/>
                        <Button id="submit"
                                type="submit"
                                color="primary"
                                margin="small"> Toevoegen</Button>
                    </div>
                </form>
            </div>
        )
    }
}


export default ToetsInvoeren;