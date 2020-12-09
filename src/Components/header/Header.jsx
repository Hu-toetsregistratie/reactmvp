import React, {Component} from "react";
// import CountTestResults from "../body/input/selectTest/amountOfResults/CountTestResults";
import SelectTest from "../body/SelectTest";

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1>{this.props.title}</h1>
                <SelectTest />

            </header>
        )
    }
}

export default Header