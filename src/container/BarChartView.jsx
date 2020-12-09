import React, { Component } from "react";
import BarChart from "../components/BarChart";

export default class BarChartView extends Component {
    state = {
        TestResults: {
            test: {
                name: '4734ghfs',
                n_passed: null,
                n_failed: null,
            }
        },
        loading: true,
    }

    async componentDidMount() {
        // URL FOR GENERAL DATA
        const url = "https://hu-toetsregistratie.nl/api/cijfer/"
        const response = await fetch(url)
        const data = await response.json();


        // URL FOR DATA PASSED TESTS TEST 1
        const urlPassed = `https://hu-toetsregistratie.nl/api/cijfer/?toets_code=1&voldoende=true`;
        const responsePassed = await fetch(urlPassed);
        const dataPassed = await responsePassed.json();

        // counts the amount of passed results
        const countPassed = Object.keys(dataPassed).length


        // URL FOR DATA FAILED TESTS TEST 1
        const urlFailed = `https://hu-toetsregistratie.nl/api/cijfer/?toets_code=1&voldoende=false`
        const responseFailed = await fetch(urlFailed);
        const dataFailed = await responseFailed.json();

        // counts the amount of failed results
        const countFailed = Object.keys(dataFailed).length

        this.setState({
            TestResults: {
                test: {
                    n_passed: countPassed,
                    n_failed: countFailed
                },
                loading: false,
            }})
        console.log(typeof data);
        console.log(data[0]);
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <BarChart labels={[this.state.TestResults.test.name]}/>
            </div>
        )
    }
}