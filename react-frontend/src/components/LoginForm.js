import React from "react";
import * as yup from "yup";
import {Formik} from 'formik'
import axios from "axios";
import {redirectPage} from "../services/utils";
import {HOME_URL} from "../setting";

const schema = yup.object({
    emailAddress: yup.string().notRequired(),
    password: yup.string().notRequired(),

});
const initValues ={
    emailAddress: '',
    password: '',
};

class LoginForm extends React.Component {
    formikForm = React.createRef();
    handleLogin = (data) => {
        var formData = new FormData();
        formData.append("email", data.emailAddress);
        formData.append("password", data.password);
        axios
            .post("http://localhost:8000/api/user/login",formData)
            .then(response => {
                console.log(response);
                return response;
            })
            .then(json => {
                if (json.data.success) {
                    const { name, id, email } = json.data.data;
                    let userData = {
                        name,
                        id,
                        email,
                    };
                    let appState = {
                        isLoggedIn: true,
                        user: userData
                    };
                    localStorage["appState"] = JSON.stringify(appState);
                    this.setState({
                        isLoggedIn: appState.isLoggedIn,
                        user: appState.user
                    });
                    redirectPage(HOME_URL)
                } else {
                    alert(`Registration Failed!`);
                }
            })
            .catch(error => {
                alert("An Error Occured!" + error);
            });
    };
    render() {
        return (
            <>
                <body
                    className="light-version authentication-bg authentication-bg-pattern d-flex align-items-center authentication-page">
                    <div className="account-pages w-100 mt-5 mb-5">
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-center flex-row auth-cust-bg">
                                <div className="col auth-cust-bg-left"><img src="../assets/images/gs-left.png"/></div>
                                <div className="col">
                                    <a href="index.html"
                                       className="logo bg-transparent d-flex justify-content-center ml-auto mr-auto mb-2">
                                <span className="logo-auth">
                                    <img src="../assets/images/logo-dark.png" alt="" height="22"/>
                                </span>
                                    </a>
                                    <div className="card">

                                        <div className="card-body p-4">

                                            <div className="text-center mb-4">
                                                <h4 className="text-uppercase mt-3">Đăng nhập với tài khoản</h4>
                                                <p className="mt-3">Vui lòng nhập thông tin tài khoản của bạn</p>
                                            </div>
                                            <Formik
                                                initialValues={initValues}
                                                validateOnChange={false}
                                                ref={this.formikForm}
                                                validationSchema={schema}
                                                onSubmit={ values => {
                                                    return this.handleLogin(values);
                                                }}
                                            >
                                                {({
                                                      handleSubmit,
                                                      handleChange,
                                                      values,
                                                      isValid,
                                                      errors,
                                                  }) => (
                                            <form noValidate action="" method="post" onSubmit={handleSubmit} className="pt-1">

                                                <div className="form-group mb-3">
                                                    <label htmlFor="emailAddress">Email</label>
                                                    <input className="form-control"
                                                           type="email"
                                                           id="emailAddress"
                                                           value={values.emailAddress}
                                                           onChange={handleChange}
                                                           placeholder="Email"/>
                                                </div>

                                                <div className="form-group mb-3">
                                                    <label htmlFor="password">Mật khẩu</label>
                                                    <input className="form-control"
                                                           type="password"
                                                           required id="password"
                                                           value={values.password}
                                                           onChange={handleChange}
                                                           placeholder="Mật khẩu"/>
                                                </div>

                                                <div className="form-group mb-3 text-center">
                                                    <div className="button-list d-flex">
                                                        <button
                                                            className="flex-fill btn btn-success waves-effect waves-light"
                                                            type="submit"> Đăng nhập
                                                        </button>
                                                        <button type="button"
                                                                className="flex-fill btn btn-primary waves-effect waves-light">
                                                            <i className="mdi mdi-facebook mr-1"></i> <span>Facebook</span>
                                                        </button>
                                                        <button type="button"
                                                                className="flex-fill btn btn-danger waves-effect waves-light">
                                                            <i className="mdi mdi-google mr-1"></i> <span>Google</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <div className="d-flex justify-content-between">
                                                        <a href="auth-recoverpassword.html"
                                                           className="float-right text-info text-underline">Quên mật
                                                            khẩu?</a>
                                                        <div className="checkbox">
                                                            <input type="checkbox" className="custom-control-input"
                                                                   id="checkbox-signin" checked />
                                                                <label className="custom-control-label"
                                                                       htmlFor="checkbox-signin">Ghi nhớ</label>
                                                        </div>
                                                    </div>
                                                </div>


                                            </form>
                                                )}
                                            </Formik>
                                            <div className="row mt-3">
                                                <div className="col-12 text-center">
                                                    <a href="auth-register.html"
                                                       className="btn btn-outline-light waves-effect btn-block">Đăng ký tài
                                                        khoản mới</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col auth-cust-bg-right"><img src="../assets/images/auth-right.png"/></div>
                            </div>
                        </div>
                    </div>
                    </body>
                </>
        );
    }
}
export default LoginForm;