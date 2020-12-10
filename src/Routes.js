import React from "react";
import { Route } from 'react-router-dom'
import component_voorbeeld from "./component/component_voorbeeld";
import {layout_voorbeeld} from "./container/layout_voorbeeld";
import {CijfersView} from "./Container/CijfersView";
import {CijfersView2} from "./Container/CijfersView";
import {StudentView} from "./Container/StudentView"
import {StudentView2} from "./Container/StudentView"
import {BarChartView} from "./Container/BarChartView"


const BaseRouter = () => (
<div>
    <Route Exact path='/CijferView' component={CijfersView} />
    <Route Exact path='/CijferView2' component={CijfersView2} />
    <Route Exact path='/StudentView' component={StudentView} />
    <Route Exact path='/StudentView2' component={StudentView2} />
    <Route Exact path='/BarChartView' component={BarChartView} />

</div>

);



export { BaseRouter };