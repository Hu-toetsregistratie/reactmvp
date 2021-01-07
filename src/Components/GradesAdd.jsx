import React from 'react';

class ResultaatInvoeren extends React.Component {
    state = {
        selectOptions: [],
        selectOptionsA: [],
        selectOptionsB: [],
        student: '1',
        voornaam: '1',
        achternaam: '1',
        blok: '1',
        toetscode: '1',
        toetsnaam: '1',
        resultaat: 'true',
        datum: '',
    }

    async componentDidMount() {
        const blok = await fetch('https://hu-toetsregistratie.nl/api/blok.json');
        const toets = await fetch('https://hu-toetsregistratie.nl/api/toets.json');
        const student = await fetch('https://hu-toetsregistratie.nl/api/student.json', {
            headers: {
                'Authorization':("token 74b3873bb95d80d4218104d99468529fb40ff8bd")
            }
        });
        const dataBlok = await blok.json();
        const dataToets = await toets.json();
        const dataStudent = await student.json()

        const optionsBlok = dataBlok.map(function (entry) {
            return {
                valueBlok: entry.id,
                blok: entry.blok,
                jaar: entry.jaar,
            }
        })

        const optionsToets = dataToets.map(function (entry) {
            return {
                value: entry.id,
                toetscode: entry.toets_code,
                toetsnaam: entry.toets_naam,
            }
        })

        const optionsStudent = dataStudent.map(function (entry) {
            return {
                value: entry.id,
                voornaam: entry.voornaam,
                achternaam: entry.achternaam,
            }
        })

        this.setState({selectOptions: optionsBlok, selectOptionsA: optionsToets, selectOptionsB: optionsStudent})
    };

    // async toets() {
    //     const response = await fetch('https://hu-toetsregistratie.nl/api/toets.json');
    //     const data = await response.json();
    //
    //     const options = data.map(function (entry) {
    //         return {
    //             value: entry.id,
    //             toetscode: entry.toets_code,
    //             toetsnaam: entry.toets_naam,
    //         }
    //     })
    //     this.setState({selectOptions: options})
    // };

    invoeren(e) {
        e.preventDefault()
        this.PostToets();
    }


    async PostToets() {

        let data = {
            'student': Number(this.state.student),
            'blok': Number(this.state.blok),
            'toets_code': Number(this.state.toetscode),
            'toets_naam': Number(this.state.toetsnaam),
            'voldoende': this.state.resultaat,
            'datum_toets': this.state.datum
        };

        try {
            await fetch('https://hu-toetsregistratie.nl/api/cijferid/', {
                method: 'post',
                headers: {
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
                        <label htmlFor="student-dropdown">Student: </label>
                        <select id="student" value={this.state.student}
                                onChange={(event) => {
                                    this.setState({student: event.target.value})
                                }} required>
                            {this.state.selectOptionsB.map(select => <option
                                value={select.value} key={select.value}>{select.voornaam} {select.achternaam}</option>)}</select>
                        <br/>
                        <label htmlFor="blok-dropdown">Blok: </label>
                        <select id="blok-dropdown" value={this.state.blok}
                                onChange={(event) => {
                                    this.setState({blok: event.target.value})
                                }} required>
                            {this.state.selectOptions.map(select => <option
                                value={select.valueBlok}
                                key={select.valueBlok}>Jaar {select.jaar} {select.blok}</option>)}</select>
                        <br/>
                        <label htmlFor="toets-dropdown">Toets: </label>
                        <select id="toets-dropdown" value={this.state.toetsnaam} onChange={(event) => {
                            this.setState({toetsnaam: event.target.value, toetscode: event.target.value})
                        }} required>
                            {this.state.selectOptionsA.map(select => <option
                                value={select.value} key={select.value}>{select.toetsnaam} {select.toetscode}</option>)}</select>
                        <br/>
                        <label htmlFor="resultaat-dropdown">Resultaat: </label>
                        <select id="resultaat-dropdown" value={this.state.resultaat} onChange={(event) => {
                            this.setState({resultaat: event.target.value})
                        }} required>
                            <option value='true' key='true'>Voldoende</option>
                            <option value='false' key='false'>Onvoldoende</option>
                        </select>
                        <br/>
                        <label htmlFor="datum">Datum van assessment: </label>
                        <input type="date" id="datum" value={this.state.datum} onChange={(event) => {
                            this.setState({datum: event.target.value})
                        }} required/>
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


export default ResultaatInvoeren;