import React from "react";

//TODO: Formatting json data


export default class CountTestResults extends React.Component {
    state = {
        loading: true,
        countVold: null,
        countOnv: null
    }

    // Asynchronous fetch call to hu-toetsregistratie.nl/api
    async componentDidMount() {
        const urlPassed = "https://hu-toetsregistratie.nl/api/cijferid/?toets_code=1&voldoende=true";
        const responsePassed = await fetch(urlPassed);
        const dataPassed = await responsePassed.json();
        const countPassed = Object.keys(dataPassed).length
        console.log(countPassed)

        this.setState({countVold: countPassed})


        const urlFailed = "https://hu-toetsregistratie.nl/api/cijferid/?toets_code=1&voldoende=false"
        const responseFailed = await fetch(urlFailed);
        const dataFailed = await responseFailed.json();
        const countFailed = Object.keys(dataFailed).length
        console.log(countFailed)
        this.setState({countOnv: countFailed})
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
                <div> Aantal voldoendes: {this.state.countVold}</div>
                <div> Aantal Onvoldoendes: {this.state.countOnv}</div>
            </div>
        );
    }
}