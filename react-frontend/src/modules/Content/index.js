import React from "react";
import urls from './urls';
import MarketStatistics from "./screens/news/marketStatistics";

import {AnonymousRoute} from '../../components/Route';


class Content extends React.Component {
    render() {
        return <div>
            <AnonymousRoute exact path={urls.marketStatistics} component={MarketStatistics}/>
        </div>
    }
}

export default Content