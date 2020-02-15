import React from "react";
import * as yup from "yup";
import {Formik} from 'formik'
import axios from "axios";
import {redirectPage} from "../services/utils";
import {Button} from "react-bootstrap";
import loginUrls from '../modules/Account/urls';

const schema = yup.object({
    firstName: yup.string().notRequired(),
    lastName: yup.string().notRequired(),
    birthday: yup.string().notRequired(),
    emailAddress: yup.string().notRequired(),
    emailConfirm: yup.string().notRequired(),
    password: yup.string().notRequired(),
    passwordConfirm: yup.string().notRequired(),
    address: yup.string().notRequired(),
    district: yup.string().notRequired(),
    city: yup.string().notRequired(),
    country: yup.string().notRequired(),
    tel: yup.string().notRequired(),
});
const initValues ={
    firstName: '',
    lastName: '',
    birthday: '',
    emailAddress: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: '',
    address: '',
    district: '',
    city: '',
    country: '',
    tel: '',
};
class RegisterForm extends React.Component {
    formikForm = React.createRef();
    handleRegister = (data) => {
        var formData = new FormData();
        formData.append("email", data.emailAddress);
        formData.append("password", data.password);
        formData.append("first_name", data.firstName);
        formData.append("last_name", data.lastName);
        formData.append("birthday", data.birthday);
        formData.append("address", data.address);
        formData.append("district", data.district);
        formData.append("city", data.city);
        formData.append("country", data.country);
        formData.append("phone", data.tel);
        axios
            .post("http://localhost:8000/api/user/register",formData)
            .then(response => {
                console.log(response);
                return response;
            })
            .then(json => {
                if (json.data.success) {
                    redirectPage(loginUrls.login)
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
                    <div className="account-pages w-100 py-5">
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-center flex-row auth-cust-bg">
                                <div className="col auth-cust-bg-left"><img src="../assets/images/gs-left.png"/></div>
                                <div className="col">
                                    <a href="#"
                                       className="logo bg-transparent d-flex justify-content-center ml-auto mr-auto mb-2">
                                <span className="logo-auth">
                                    <img src="../assets/images/logo-dark.png" alt="" height="22"/>
                                </span>
                                    </a>
                                    <div className="card">

                                        <div className="card-body p-4">

                                            <div className="text-center mb-4">
                                                <h4 className="text-uppercase mt-3">Đăng ký tài khoản mới</h4>
                                            </div>
                                                <Formik
                                                    initialValues={initValues}
                                                    validateOnChange={false}
                                                    ref={this.formikForm}
                                                    validationSchema={schema}
                                                    onSubmit={ values => {
                                                        return this.handleRegister(values);
                                                    }}
                                                >
                                                    {({
                                                          handleSubmit,
                                                          handleChange,
                                                          values,
                                                          isValid,
                                                          errors,
                                                      }) => (
                                                    <form noValidate action="" method="post" onSubmit={handleSubmit} className="pt-2">

                                                        <div className="form-group mb-3">
                                                            <div className="row">
                                                                <div htmlFor="firstName" className="col">
                                                                    <label>Tên</label>
                                                                    <input className="form-control"
                                                                           type="text"
                                                                           id="firstName"
                                                                           placeholder="Tên"
                                                                           value={values.firstName}
                                                                           onChange={handleChange}
                                                                           />
                                                                </div>
                                                                <div className="col">
                                                                    <label htmlFor="lastName">Họ</label>
                                                                    <input className="form-control"
                                                                           type="text"
                                                                           id="lastName"
                                                                           placeholder="Họ"
                                                                           value={values.lastName}
                                                                           onChange={handleChange}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="birthday">Ngày sinh</label>
                                                            <input className="form-control"
                                                                   type="date"
                                                                   id="birthday"
                                                                   value={values.birthday}
                                                                   onChange={handleChange}
                                                                   placeholder="Ngày sinh"/>
                                                        </div>
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
                                                            <label htmlFor="emailConfirm">Xác nhận email</label>
                                                            <input className="form-control"
                                                                   type="email"
                                                                   id="emailConfirm"
                                                                   value={values.emailConfirm}
                                                                   onChange={handleChange}
                                                                   placeholder="Xác nhận email"/>
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
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="passwordConfirm">Xác nhận mật khẩu</label>
                                                            <input className="form-control"
                                                                   type="password"
                                                                   id="passwordConfirm"
                                                                   value={values.passwordConfirm}
                                                                   onChange={handleChange}
                                                                   placeholder="Xác nhận mật khẩu"/>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="address">Địa chỉ</label>
                                                            <input className="form-control"
                                                                   type="text"
                                                                   required id="address"
                                                                   value={values.address}
                                                                   onChange={handleChange}
                                                                   placeholder="Địa chỉ"/>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <label htmlFor="district">Quận</label>
                                                                    <input className="form-control"
                                                                           type="text"
                                                                           id="district"
                                                                           value={values.district}
                                                                           onChange={handleChange}
                                                                           placeholder="Quận"
                                                                           />
                                                                </div>
                                                                <div className="col">
                                                                    <label htmlFor="city">Thành phố/Tỉnh</label>
                                                                    <input className="form-control"
                                                                           type="text"
                                                                           id="city"
                                                                           value={values.city}
                                                                           onChange={handleChange}
                                                                           placeholder="Thành phố/Tỉnh"
                                                                           />
                                                                </div>
                                                                <div className="col">
                                                                    <label htmlFor="country">Quốc gia</label>
                                                                    <input className="form-control"
                                                                           type="text"
                                                                           id="country"
                                                                           placeholder="Quốc gia"
                                                                           value={values.country}
                                                                           onChange={handleChange}
                                                                           />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="tel">Số điện thoại</label>
                                                            <input className="form-control"
                                                                   type="tel"
                                                                   required id="tel"
                                                                   name="tel"
                                                                   value={values.tel}
                                                                   onChange={handleChange}
                                                                   placeholder="Số điện thoại"/>
                                                        </div>

                                                        <div className="checkbox mb-3">
                                                            <input type="checkbox" className="custom-control-input"
                                                                   id="checkbox-signup"/>
                                                                <label className="custom-control-label" htmlFor="checkbox-signup">Tôi
                                                                    đồng ý với những <a href="javascript: void(0);"
                                                                                        className="text-info text-underline"><b>Điều
                                                                        khoản</b></a> và <a href="javascript: void(0);"
                                                                                            className="text-info text-underline"><b>điều
                                                                        kiện sử dụng</b></a> cũng như <a href="javascript: void(0);"
                                                                                                         className="text-info text-underline"><b>Chính
                                                                        sách quyền riêng tư</b></a> của GoStock</label>
                                                        </div>

                                                        <div className="form-group mb-0 text-center">
                                                            <Button className="btn btn-success btn-block" type="submit"> Xác nhận
                                                            </Button>
                                                        </div>
                                                    </form>
                                                    )}
                                                </Formik>
                                            <div className="row mt-3">
                                                <div className="col-12 text-center">
                                                    <p className="mb-0">Bạn đã có tài khoản? <a href="auth-login.html"
                                                                                                className="text-dark ml-1"><b>Đăng
                                                        nhập</b></a></p>
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
        )  }
}
export default RegisterForm