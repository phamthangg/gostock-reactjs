import React from "react";
import urls from './urls';
import MarketStatistics from "./screens/ContentMain/MarketStatistics";
import TechnicalAnalysis from "./screens/ContentMain/TechnicalAnalysis";
import SignalsFilters from "./screens/ContentMain/SignalsFilters";
import Recommendations from "./screens/ContentMain/Recommendations";
import CatalogManagement from "./screens/ContentMain/CatalogManagement";

import {AnonymousRoute} from '../../components/Route';


class Content extends React.Component {
    render() {
        return <div>
            <AnonymousRoute exact path={urls.marketStatistics} component={MarketStatistics}/>
            <AnonymousRoute exact path={urls.technicalAnalysis} component={TechnicalAnalysis}/>
            <AnonymousRoute exact path={urls.signalsFilters} component={SignalsFilters}/>
            <AnonymousRoute exact path={urls.recommendations} component={Recommendations}/>
            <AnonymousRoute exact path={urls.catalogManagement} component={CatalogManagement}/>
        </div>
    }
}

export default Content