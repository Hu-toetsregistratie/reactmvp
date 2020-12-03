import React from "react";

//TODO: Formatting json data
// @WHY
//


export default class FetchStudentData extends React.Component {
    state = {
        loading: true,
        grade: null,
    }

    // Asynchronous fetch call to hu-toetsregistratie.nl/api
    async componentDidMount() {
        const url = "https://hu-toetsregistratie.nl/api/cijferid.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({grade: data[0], loading: false})
        console.log(data[0]);
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
            <div> Naam toets: {this.state.grade.toets_naam} </div>
            <div> Resultaat (false=onvoldoende, true=voldoende): {this.state.grade.voldoende} </div>
            <div> Student: {this.state.grade.student} </div>
            <div> resultaatId: {this.state.grade.id} </div>
        </div>
        );
    }
}