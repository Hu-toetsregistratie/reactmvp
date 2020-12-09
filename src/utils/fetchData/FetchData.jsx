import React from "react";

// WIP!!!
//TODO: Create a component that fetches the data depending on the parameters... How do I make this though?

export default class FetchData extends React.Component {
    state = {
        loading: true,
    }

    // Asynchronous fetch call to hu-toetsregistratie.nl/api
    async componentDidMount() {
        const url = "https://hu-toetsregistratie.nl/api/cijferid/?toets_code=1&voldoende=true";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({loading: false})
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        } else {
            console.log("Loaded properly.")
        }

        return (
            <div>Hewwo</div>
        );
    }
}