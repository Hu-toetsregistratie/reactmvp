import React, { Component } from "react";

export default class FetchTests extends Component {
    state = {
        loading: true,
        test: {
            Name: null,
            Code: null,
            Blok: null,
            Year: null}
    }

    // Asynchronous fetch call to hu-toetsregistratie.nl/api
    async componentDidMount() {
        const url = "https://hu-toetsregistratie.nl/api/toets/"
        const response = await fetch(url)
        const data = await response.json();

        this.setState({
            test: {
                Name: data[0].toets_naam,
                Code: data[0].toets_code,
                Blok: data[0].blok,
                Year: data[0].jaar},
            loading: false})
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.test.Name) {
            return <div>Er staan geen toetsen in de database?? What wen wrong...</div>
        }
        return (
            <div>
                <div>Toetsnaam: {this.state.test.Name}</div>
                <div>Toetscode: {this.state.test.Code}</div>
                <div>Blok: {this.state.test.Blok}</div>
                <div>Jaar: {this.state.test.Year}</div>
            </div>
        );
    }
}