import React from "react";
import { Route } from 'react-router-dom'

import {CijfersView} from "./Components/Containers/CijfersView";
import {StudentView} from "./Components/Containers/StudentView"
import {BarChartView} from "./Components/Containers/BarChartView"


const BaseRouter = () => (
<div>
    <Route Exact path='/CijferView' component={CijfersView} />
    <Route Exact path='/StudentView' component={StudentView} />
    <Route Exact path='/BarChartView' component={BarChartView} />

</div>

);



export { BaseRouter };