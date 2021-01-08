import React, { Component } from "react";

import {Histogram} from "../Components/Histogram";
import {Spinner} from "@instructure/ui-spinner";

export class StatisticsView extends Component {
    state = {
        loading: true,
    }

    async componentDidMount() {
        this.setState({loading: false})
    }

    render() {

        if (this.state.loading) {
            return (<div style={{height:"20em",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <Spinner renderTitle="Loading" variant="inverse"/>
                </div>)
        } else {
            return (
                <div>
                    <Histogram/>
                </div>
            )
        }
    }
}