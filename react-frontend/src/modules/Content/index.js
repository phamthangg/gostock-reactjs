import React from "react";
import urls from './urls';
import MarketStatistics from "./screens/ContentMain/MarketStatistics";
import TechnicalAnalysis from "./screens/ContentMain/TechnicalAnalysis";

import {AnonymousRoute} from '../../components/Route';


class Content extends React.Component {
    render() {
        return <div>
            <AnonymousRoute exact path={urls.marketStatistics} component={MarketStatistics}/>
            <AnonymousRoute exact path={urls.technicalAnalysis} component={TechnicalAnalysis}/>
        </div>
    }
}

export default Content