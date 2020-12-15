import React from "react";
import { Route } from 'react-router-dom'

import {CijfersView} from "./Components/Containers/CijfersView";
import {StudentView} from "./Components/Containers/StudentView"
import {BarChartView} from "./Components/Containers/BarChartView"
import {CijfersView2} from "./Components/Containers/CijfersView2";


const BaseRouter = () => (
<div>
    <Route Exact path='/GradesView' component={GradesView} />
    <Route Exact path='/StudentView' component={StudentView} />
    <Route Exact path='/BarChartView' component={BarChartView} />
    <Route Exact path = '/GradesView2' component={GradesView2} />
</div>

);



export { BaseRouter };