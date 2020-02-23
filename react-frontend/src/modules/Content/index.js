import React from "react";
import urls from './urls';
import MarketStatistics from "./screens/ContentMain/MarketStatistics";
import TechnicalAnalysis from "./screens/ContentMain/TechnicalAnalysis";
import SignalsFilters from "./screens/ContentMain/SignalsFilters";
import Recommendations from "./screens/ContentMain/Recommendations";
import CatalogManagement from "./screens/ContentMain/CatalogManagement";
import Filter from "./screens/ContentMain/Filter";
import PhilTown from "./screens/ContentMain/PhilTown";
import DetailsCharts from "./screens/ContentMain/DetailsCharts";
import CreateReport from "./screens/ContentMain/CreateReport";
import Manual from "./screens/ContentMain/Manual";
import UpgradeAccount from "./screens/ContentMain/UpgradeAccount";

import {AnonymousRoute} from '../../components/Route';


class Content extends React.Component {
    render() {
        return <div>
            <AnonymousRoute exact path={urls.marketStatistics} component={MarketStatistics}/>
            <AnonymousRoute exact path={urls.technicalAnalysis} component={TechnicalAnalysis}/>
            <AnonymousRoute exact path={urls.signalsFilters} component={SignalsFilters}/>
            <AnonymousRoute exact path={urls.recommendations} component={Recommendations}/>
            <AnonymousRoute exact path={urls.catalogManagement} component={CatalogManagement}/>
            <AnonymousRoute exact path={urls.filter} component={Filter}/>
            <AnonymousRoute exact path={urls.philTown} component={PhilTown}/>
            <AnonymousRoute exact path={urls.detailsCharts} component={DetailsCharts}/>
            <AnonymousRoute exact path={urls.createReport} component={CreateReport}/>
            <AnonymousRoute exact path={urls.manual} component={Manual}/>
            <AnonymousRoute exact path={urls.upgradeAccount} component={UpgradeAccount}/>
        </div>
    }
}

export default Content