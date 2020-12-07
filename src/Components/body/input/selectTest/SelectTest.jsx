import React, {Component} from "react";
import CountTestResults from "./amountOfResults/CountTestResults";
// TAKEN DIRECTLY FROM https://reactjs.org/docs/forms.html
// @TODO: Edit for personal use.

export default class SelectTest extends Component {
    constructor(props) {
        super(props);
        this.state = {id: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('De resultaten van ToetsID: ' + this.state.value + ' worden nu geladen.');
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Voer hier de toetsID in:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                <CountTestResults data={this.state}/>
            </form>
        );
    }
}