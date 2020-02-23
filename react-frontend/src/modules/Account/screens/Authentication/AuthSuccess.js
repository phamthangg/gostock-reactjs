import React from "react";
class AuthSuccess extends React.Component {
    render() {
        return (
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


                                    <div className="text-center">
                                        <img src="../assets/images/auth/mail_confirm.png" alt="img" width="86"
                                             className="mx-auto d-block"/>
                                            <p className="my-3">Một tin nhắn đã được gửi đến hòm thư điện tử của bạn.
                                                Hãy kiểm tra hòm thư tới (hoặc có thể trong hòm thư rác) để hoàn tất quá
                                                trình đăng kí.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col auth-cust-bg-right"><img src="../assets/images/auth-right.png"/></div>
                    </div>
                </div>
            </div>
         </body>
        )
    }
}
export default AuthSuccess;
