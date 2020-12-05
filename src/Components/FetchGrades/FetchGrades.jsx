import React from "react";

//TODO: Formatting json data
// @WHY
// Current data cannot be parsed properly by chartjs charts.
// @WHAT:
// Code that makes sure to fetch+format the data correctly for use by the chartjs charts.
// @ALTERNATIVES:
// This is the first attempt and alternatives have not been looked into yet.


export default class FetchGrades extends React.Component {
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
        // @ALTERNATIVES
        // ????
        if (data[0].voldoende) {
            this.setState({result: 'Voldoende'});
        } else {
            this.setState({result: 'Onvoldoende'});
        }
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.grades.length) {
            return <div>didn't find any grades...</div>
        }
        return (
        <div>
            {this.state.grades.map(grade => (
                <div>
                    <div> Naam toets/ID van de toets: {grade.toets_naam} </div>
                    <div> Resultaat: {this.state.result}</div>
                    <div> Student (die het resultaat heeft behaald): {grade.student} </div>
                </div>
            ))}

        </div>
        );
    }
}