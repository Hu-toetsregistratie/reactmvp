import React from "react";

//TODO: Formatting json data
// @WHY
// Current data cannot be parsed properly by chartjs charts.
// @WHAT:
// Code that makes sure to fetch+format the data correctly for use by the chartjs charts.
// @ALTERNATIVES:
// This is the first attempt and alternatives have not been looked into yet.


export default class FetchStudentData extends React.Component {
    state = {
        loading: true,
        grade: null,
        result: null
    }

    // Asynchronous fetch call to hu-toetsregistratie.nl/api
    async componentDidMount() {
        const url = "https://hu-toetsregistratie.nl/api/cijferid/?toets_code=1";
        const response = await fetch(url);
        const data = await response.json();

        this.setState({grade: data[0], loading: false})

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
        if (!this.state.grade) {
            return <div>didn't find any grades...</div>
        }
        return (
        <div>
            <div> Naam toets/ID van de toets: {this.state.grade.toets_naam} </div>

            <div> Resultaat: {this.state.result}</div>

            <div> Student (die het resultaat heeft behaald): {this.state.grade.student} </div>
        </div>
        );
    }
}