import React from 'react'
import {PaginaTabel} from "../Components/Tabel";
import {ColumnsIndividual} from "../Components/Columns";
import {Spinner} from "@instructure/ui-spinner";

class getIndividualData extends React.Component {
    constructor(props) {
        super(props);
        this.getIndividual = this.getIndividual.bind(this)
        this.state = {
            individual: [],
            err: null,
            loading: false,
            s_id: ''
        }
    }
    callbackfunc = (row_id_Value) => {
        this.setState({s_id: row_id_Value})
        console.log(this.state.s_id)
    }

    async componentDidMount() {

        this.setState({loading: true})
        let api =`https://hu-toetsregistratie.nl/api/cijfer.json/?student__id=${this.state.s_id}`;
        await fetch( api,   {headers: {'Authorization': ('token 74b3873bb95d80d4218104d99468529fb40ff8bd')}} )
            .then(res => res.json())
            .then(individual => {
        this.setState({
            individual,
            loading:false
        })
            }, err=>{
                this.setState({
                    err,
                    loading:false
                })
            });
        for (var i=0;i<this.state.individual.length;i+=1){
            if (this.state.individual[i].voldoende === true){
                this.state.individual[i].voldoende = 'voldoende';
            }
            if (this.state.individual[i].voldoende === false){
                this.state.individual[i].voldoende = 'onvoldoende';
            }
        }
        console.log(this.state.individual)

    }

    getIndividual (vla){
        console.log(vla)
    }

    render() {
        if (this.state.loading) {
            return <div style={{height: "20em", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Spinner renderTitle="Loading" variant="inverse"/>
            </div>
        }
        return <PaginaTabel
            caption='Student Individueel'
            headers={ColumnsIndividual}
            rows={this.state.individual}
            perPage={5}
            individualClick = {this.getIndividual}
            callBack = {this.callbackfunc}
        />
    };
}
export {getIndividualData}