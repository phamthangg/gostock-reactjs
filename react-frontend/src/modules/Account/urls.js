import {MODULE} from "../../setting";

const ACCOUNT_MODULE = MODULE.account;

const ACCOUNT_URLS = {
    index: ACCOUNT_MODULE,
    login: `${ACCOUNT_MODULE}/login`,
    register: `${ACCOUNT_MODULE}/register`,
};

export default ACCOUNT_URLS;
