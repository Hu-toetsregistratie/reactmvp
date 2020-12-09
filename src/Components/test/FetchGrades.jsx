import React, { Component } from "react";

//TODO: Make it look nice and user-friendly....
// @WHY: WIP
// @WHAT: Fetches all the results from all the tests of every student and renders it in a couple of divs with text.
// @ALTERNATIVES:
// This is the first attempt and alternatives have not been looked into yet.


export default class FetchGrades extends Component {
    state = {
        loading: true,
        grades: [],
        result: null
    }

    // Asynchronous fetch call to hu-toetsregistratie.nl/api
    async componentDidMount() {
        const url = "https://hu-toetsregistratie.nl/api/cijferid.json";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({grades: data, loading: false})

        // @WHAT
        // An 'if' check for the value of the voldoende attribute (datatype: boolean).
        // @WHY
        // So that the (invisible) result isn't 'true' or 'false' but a visible string.
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.grades.length) {
            return <div>couldn't find any grades...</div>
        }

        return (
            <div>
                {this.state.grades.map(grade => (

                    <div>
                        <div> Naam toets/ID van de toets: {grade.toets_naam} </div>
                        <div> Resultaat: { grade.voldoende }</div>
                        <div> Student (die het resultaat heeft behaald): {grade.student} </div>
                    </div>
                ))}
            </div>
        );
    }
}