import {MODULE} from "../../setting";

const ACCOUNT_MODULE = MODULE.account;

const ACCOUNT_URLS = {
    index: ACCOUNT_MODULE,
    login: `${ACCOUNT_MODULE}/login`,
    register: `${ACCOUNT_MODULE}/register`,
    recoverPassword: `${ACCOUNT_MODULE}/recoverPassword`,
    authSuccess: `${ACCOUNT_MODULE}/authSuccess`,
};

export default ACCOUNT_URLS;
