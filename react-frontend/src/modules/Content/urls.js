import {MODULE} from "../../setting";
import Recommendations from "./screens/ContentMain/Recommendations";

const CONTENT_MODULE = MODULE.content;

const CONTENT_URLS = {
    index: CONTENT_MODULE,
    marketStatistics: `${CONTENT_MODULE}/marketStatistics`,
    technicalAnalysis: `${CONTENT_MODULE}/technicalAnalysis`,
    signalsFilters: `${CONTENT_MODULE}/signalsFilters`,
    recommendations: `${CONTENT_MODULE}/recommendations`,
    catalogManagement: `${CONTENT_MODULE}/catalogManagement`,
    filter: `${CONTENT_MODULE}/filter`,
    philTown: `${CONTENT_MODULE}/philTown`,
};

export default CONTENT_URLS;
