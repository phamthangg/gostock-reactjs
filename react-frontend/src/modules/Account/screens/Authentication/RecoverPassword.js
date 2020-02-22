import React from "react";
class RecoverPassword extends React.Component {
    render() {
        return (
            <body
                className="light-version authentication-bg authentication-bg-pattern d-flex align-items-center authentication-page">
                <div className="account-pages w-100 mt-5 mb-5">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center flex-row auth-cust-bg">
                            <div className="col auth-cust-bg-left"><img src="assets/images/gs-left.png"/></div>
                            <div className="col">
                                <a href="index.html"
                                   className="logo bg-transparent d-flex justify-content-center ml-auto mr-auto mb-2">
                                <span className="logo-auth">
                                    <img src="assets/images/logo-dark.png" alt="" height="22"/>
                                </span>
                                </a>
                                <div className="card">

                                    <div className="card-body p-4">

                                        <div className="text-center mb-4">
                                            <h4 className="text-uppercase mt-3">Quên mật khẩu</h4>
                                            <p className="mt-3">Xin nhập Email. Chúng tôi sẽ gửi thông báo cấp lại mật khẩu
                                                vào hòm thư của bạn</p>
                                        </div>

                                        <form action="#" className="pt-2">

                                            <div className="form-group mb-3">
                                                <label htmlFor="emailaddress">Email</label>
                                                <input className="form-control" type="email" id="emailaddress" required=""
                                                       placeholder="Nhập email tại đây"/>
                                            </div>

                                            <div className="form-group mb-0 text-center">
                                                <button className="btn btn-success btn-block" type="submit"> Xác nhận
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col auth-cust-bg-right"><img src="assets/images/auth-right.png"/></div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}
export default RecoverPassword;
