import React from "react";


//TODO:
// Make a component with a variable 'toets_code' so that this component can be used to get all the results of every test.
// Split the fetch to a general component that fetches the passed and failed results based on parameter input.

// @WHAT: A component that fetches the data from test with id=1 and renders two lines of text with the amount of passed- and failed grades.
// @WHY: To show the user the amount of passed and failed grades for a test.

export default class FetchStudentNames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentData:props.studentData
        }
    }
    static defaultProps = {
        loading: true,
        givenName: null,
        familyName: null,
        studentId: null
    }

    // state = {
    //     loading: true,
    //     givenName: null,
    //     familyName: null,
    //     studentId: null
    // }

    // Asynchronous fetch call to hu-toetsregistratie.nl/api
    async componentDidMount() {
        const url = "https://hu-toetsregistratie.nl/api/student/"
        const response = await fetch(url, {headers: {"Authorization":("token 3ee90f9c89fbc67c1de8ced4d2bda1b2092cb95a")}})
        const data = await response.json();
        // TODO: Add a selection screen? @WHAT: Fetches studentData. @WHY: To display a list of students.

        this.setState({
            givenName: data[0].voornaam,
            familyName: data[0].achternaam,
            studentId: data[0].student_nummer,
            loading: false})
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.givenName) {
            return <div>Er staan geen studenten in de database?? What wen wrong...</div>
        }
        return (
            <div>
                <div>Naam: {this.state.givenName}</div>
                <div>Achternaam: {this.state.familyName}</div>
                <div>StudentenNummer: {this.state.studentId}</div>
            </div>
        );
    }
}