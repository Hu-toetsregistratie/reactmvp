import React, { Component } from "react";


//TODO:
// Make a component with a variable 'toets_code' so that this component can be used to get all the results of every test.
// Split the fetch to a general component that fetches the passed and failed results based on parameter input.

// @WHAT: A component that fetches the data from test with id=1 and renders two lines of text with the amount of passed- and failed grades.
// @WHY: To show the user the amount of passed and failed grades for a test.

export default class CountTestResults extends Component {
    state = {
        loading: true,
        test: null,
        countVold: null,
        countOnv: null
    }


    // Asynchronous fetch call to hu-toetsregistratie.nl/api
    async componentDidMount() {
        // TODO: change toets_code=1 to toets_code={} in the urlPassed and urlFailed variables.

        console.log('De input was: ' + this.props.data.id)


        const urlPassed = `https://hu-toetsregistratie.nl/api/cijferid/?toets_code=${this.props.data.id}&voldoende=true`;
        const responsePassed = await fetch(urlPassed);
        const dataPassed = await responsePassed.json();

        // counts the amount of passed results
        const countPassed = Object.keys(dataPassed).length
        console.log("Het aantal voldoendes is: " + countPassed)

        this.setState({countVold: countPassed})

        console.log('De input was: ' + this.props.data.id)
        const urlFailed = `https://hu-toetsregistratie.nl/api/cijferid/?toets_code=${this.props.data.id}&voldoende=false`
        const responseFailed = await fetch(urlFailed);
        const dataFailed = await responseFailed.json();

        // counts the amount of failed results
        const countFailed = Object.keys(dataFailed).length
        console.log("Het aantal onvoldoendes is: " + countFailed)
        this.setState({countOnv: countFailed, loading: false})
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.countVold) {
            return <div><div>Geen voldoendes voor deze toets...</div><div> Aantal Onvoldoendes: {this.state.countOnv}</div>
            </div>
        }
        if (!this.state.countOnv) {
            return <div><div>Er zijn geen onvoldoendes voor deze toets!!</div><div> Aantal voldoendes: {this.state.countVold}</div>
            </div>
        }

        return (
            <div>
                <div> Aantal Voldoendes: {this.state.countVold}</div>
                <div> Aantal Onvoldoendes: {this.state.countOnv}</div>
            </div>
        );
    }
}