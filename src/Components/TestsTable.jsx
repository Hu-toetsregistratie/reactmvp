import React from 'react';
import { TablePages } from "./Table";
import {Spinner} from "@instructure/ui-spinner";
import {ColumnsTests} from "./TableColumns";

export class TestsTable extends React.Component {
    constructor() {
        super();
        this.state = {
            Tests: [],
            err: null,
            loading: false
        }
    }
    async componentDidMount(){
        this.setState({loading:true})
        let api= 'https://hu-toetsregistratie.nl/api/toets.json'
        await fetch(api)
            .then(res => res.json())
            .then(Tests =>{
                this.setState({
                    Tests,
                    loading:false
                }, err=>{
                    this.setState({
                        err,
                        loading:false
                    })
                })
            });
        console.log(this.state.Tests)
    }
    render(){
        if (this.state.loading) {
            return <div style={{height: "20em", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Spinner renderTitle="Loading" variant="inverse"/>
            </div>
        }
        return <TablePages
            caption = 'Toetsen'
            headers={ColumnsTests}
            rows={this.state.Tests}
            perPage={20}
        />
    }
}
