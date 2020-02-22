import React from "react";

class Topbar extends React.Component {
    state = {
        name: JSON.parse(localStorage["appState"]).user.name ? JSON.parse(localStorage["appState"]).user.name : "Trần Dần"
    };
    logoutUser = () => {
        let appState = {
            isLoggedIn: false,
            user: {}
        };
        localStorage["appState"] = JSON.stringify(appState);
        window.location.reload();
    };
    render() {
        return (
            <>
                <div className="navbar-custom">
                    <ul className="list-unstyled topnav-menu float-right mb-0">
                        <li className="d-none d-lg-block cust-clock">
                            <div>
                                <i className="dripicons-clock text-muted"></i> <span
                                className="text-dark mr-1 ml-1"><b>08:00</b></span> <span
                                className="text-muted">11/11/2019</span>
                            </div>
                        </li>
                        <li className="d-none d-sm-block">
                            <a href="javascript:void(0);" className="nav-link ">
                                <button type="button"
                                        className="btn btn-success btn-rounded waves-effect waves-light width-md">
                                    <i className="fa fa-plus mr-1"></i> <span
                                    className="font-semibold">Hợp tác</span></button>
                            </a>
                        </li>
                        <li className="dropdown d-none d-lg-block">
                            <a className="nav-link dropdown-toggle mr-0 waves-effect waves-light"
                               data-toggle="dropdown" href="javascript:void(0);" role="button"
                               aria-haspopup="false" aria-expanded="false">
                                <img src="../assets/images/flags/vietnam.svg" alt="user-image" height="24"/> <span
                                className="align-middle"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <img src="../assets/images/flags/united-kingdom.svg" alt="user-image"
                                         className="mr-1" height="24"/> <span
                                    className="align-middle">English</span>
                                </a>
                            </div>
                        </li>
                        <li className="dropdown notification-list notification-are">
                            <a className="nav-link dropdown-toggle waves-effect waves-light"
                               data-toggle="dropdown" href="javascript:void(0);" role="button"
                               aria-haspopup="false" aria-expanded="false">
                                <i className="mdi mdi-bell noti-icon text-muted"></i>
                                <span className="badge badge-info noti-icon-badge">21</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-lg">
                                <div className="dropdown-item noti-title">
                                    <h5 className="m-0 d-flex">
                                        <form>
                                            <ul className="nav nav-tabs nav-bordered nav-justified">
                                                <li className="nav-item">
                                                    <a href="#home-b1" data-toggle="tab" aria-expanded="false"
                                                       className="nav-link active">
                                                        Cơ bản
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#profile-b1" data-toggle="tab" aria-expanded="true"
                                                       className="nav-link">
                                                        Sự kiện
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#messages-b1" data-toggle="tab"
                                                       aria-expanded="false" className="nav-link">
                                                        Kỹ thuật
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="text-info nav-link">
                                                        Cài đặt
                                                    </a>
                                                </li>
                                            </ul>
                                        </form>
                                    </h5>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="home-b1">
                                        <div className="noti-slimscroll noti-scroll scrollbar-inner">
                                            <a href="#" className="notify-item active">
                                                <div className="notify-icon bg-secondary">STG</div>
                                                <div className="noti-right">
                                                    <p className="notify-details">
                                                        <span>Bứt phá lợi nhuận (quý)</span>
                                                        <small className="text-muted">2 giờ trước</small>
                                                    </p>
                                                    <p className="text-muted mb-0 user-msg">
                                                        <small>Có lợi nhuận tăng 52.25% trong Quý 3 2019</small>
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="#" className="notify-item active">
                                                <div className="notify-icon bg-secondary">STG</div>
                                                <div className="noti-right">
                                                    <p className="notify-details">
                                                        <span>Bứt phá lợi nhuận (quý)</span>
                                                        <small className="text-muted">2 giờ trước</small>
                                                    </p>
                                                    <p className="text-muted mb-0 user-msg">
                                                        <small>Có lợi nhuận tăng 52.25% trong Quý 3 2019</small>
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="#" className="notify-item active">
                                                <div className="notify-icon bg-secondary">STG</div>
                                                <div className="noti-right">
                                                    <p className="notify-details">
                                                        <span>Bứt phá lợi nhuận (quý)</span>
                                                        <small className="text-muted">2 giờ trước</small>
                                                    </p>
                                                    <p className="text-muted mb-0 user-msg">
                                                        <small>Có lợi nhuận tăng 52.25% trong Quý 3 2019</small>
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="#" className="notify-item active">
                                                <div className="notify-icon bg-secondary">STG</div>
                                                <div className="noti-right">
                                                    <p className="notify-details">
                                                        <span>Bứt phá lợi nhuận (quý)</span>
                                                        <small className="text-muted">2 giờ trước</small>
                                                    </p>
                                                    <p className="text-muted mb-0 user-msg">
                                                        <small>Có lợi nhuận tăng 52.25% trong Quý 3 2019</small>
                                                    </p>
                                                </div>
                                            </a>
                                            <a href="#" className="notify-item active">
                                                <div className="notify-icon bg-secondary">STG</div>
                                                <div className="noti-right">
                                                    <p className="notify-details">
                                                        <span>Bứt phá lợi nhuận (quý)</span>
                                                        <small className="text-muted">2 giờ trước</small>
                                                    </p>
                                                    <p className="text-muted mb-0 user-msg">
                                                        <small>Có lợi nhuận tăng 52.25% trong Quý 3 2019</small>
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="profile-b1">
                                        <a href="#" className="notify-item active">
                                            <div className="notify-icon bg-secondary">STG</div>
                                            <div className="noti-right">
                                                <p className="notify-details">
                                                    <span>Bứt phá lợi nhuận (quý)</span>
                                                    <small className="text-muted">2 giờ trước</small>
                                                </p>
                                                <p className="text-muted mb-0 user-msg">
                                                    <small>Có lợi nhuận tăng 52.25% trong Quý 3 2019</small>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tab-pane" id="messages-b1">
                                        <a href="#" className="notify-item active">
                                            <div className="notify-icon bg-secondary">STG</div>
                                            <div className="noti-right">
                                                <p className="notify-details">
                                                    <span>Bứt phá lợi nhuận (quý)</span>
                                                    <small className="text-muted">2 giờ trước</small>
                                                </p>
                                                <p className="text-muted mb-0 user-msg">
                                                    <small>Có lợi nhuận tăng 52.25% trong Quý 3 2019</small>
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown notification-list">
                            <a className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light"
                               data-toggle="dropdown" href="javascript:void(0);" role="button"
                               aria-haspopup="false" aria-expanded="false">
                                <img src="../assets/images/users/avatar-4.jpg" alt="user-image"
                                     className="rounded-circle"/>
                                <span className="pro-user-name ml-1 text-muted">
                           {this.state.name} <i className="mdi mdi-chevron-down"></i>
                        </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                                <a href="javascript:void(0);" className="dropdown-item notify-item"
                                   data-toggle="modal" data-target="#user-info">
                                    <i className="dripicons-user"></i>
                                    <span>Thông tin tài khoản</span>
                                </a>
                                <a href="17.Nâng cấp tài khoản.html" className="dropdown-item notify-item">
                                    <i className="dripicons-gear"></i>
                                    <span>Đăng ký và gia hạn dịch vụ</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a onClick={this.logoutUser} className="dropdown-item notify-item">
                                    <i className="dripicons-power"></i>
                                    <span>Đăng xuất</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <ul className="list-unstyled menu-left mb-0 d-flex">
                        <li className="float-left">
                            <a href="index.html" className="logo">
                        <span className="logo-lg">
                            <img src="../assets/images/logo-dark.png" alt="" height="22"/>
                        </span>
                                <span className="logo-sm">
                            <img src="../assets/images/logo-sm.png" alt="" height="24"/>
                        </span>
                            </a>
                        </li>
                        <li className="float-left">
                            <a className="button-menu-mobile navbar-toggle">
                                <div className="lines">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.909" height="16.607"
                                         viewBox="0 0 24.909 16.607">
                                        <defs fill="#677285">

                                        </defs>
                                        <g transform="translate(0 0)">
                                            <path className="menu-a"
                                                  d="M3.546,91.561H15.571a1.038,1.038,0,1,0,0-2.076H3.546l2.38-2.38a1.038,1.038,0,0,0-1.468-1.468L.306,89.789c-.024.024-.047.05-.069.076S.219,89.89.21,89.9s-.023.029-.033.045-.018.03-.027.045-.017.028-.025.042-.015.031-.023.047-.014.03-.021.045-.011.031-.017.047-.012.033-.017.049-.008.031-.012.047-.009.034-.013.051-.006.037-.008.055-.005.03-.007.045a1.044,1.044,0,0,0,0,.2c0,.015,0,.03.007.045s0,.037.008.055.008.034.013.051.007.032.012.047.011.033.017.049.011.031.017.047.014.03.021.045.014.032.023.047.016.028.025.042.018.031.027.045.022.03.033.045.018.025.028.037.044.052.068.076h0l4.152,4.152a1.038,1.038,0,1,0,1.468-1.468Z"
                                                  transform="translate(-0.002 -85.334)"/>
                                            <path className="menu-a"
                                                  d="M187.038,219.184c.01-.012.018-.025.028-.037s.022-.029.033-.044.018-.03.028-.045.017-.027.025-.042.015-.031.023-.047.014-.03.021-.045.011-.031.017-.047.012-.033.017-.049.008-.031.012-.047.009-.034.013-.051.006-.037.008-.055.005-.03.007-.045a1.047,1.047,0,0,0,0-.2c0-.015,0-.03-.007-.045s0-.037-.008-.055-.008-.034-.013-.051-.007-.032-.012-.047-.011-.033-.017-.049-.011-.031-.017-.047-.014-.03-.021-.045-.014-.032-.023-.047-.016-.028-.025-.042-.018-.031-.028-.045-.022-.03-.033-.044-.018-.025-.028-.037-.044-.051-.068-.075h0l-4.152-4.152a1.038,1.038,0,0,0-1.468,1.468l2.38,2.38H171.7a1.038,1.038,0,1,0,0,2.076H183.73l-2.38,2.38a1.038,1.038,0,0,0,1.468,1.468l4.152-4.152h0Q187.006,219.223,187.038,219.184Z"
                                                  transform="translate(-162.364 -207.109)"/>
                                        </g>
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li className="float-left d-none d-md-block flex-grow-1">
                            <div className="poit-scroll">
                                <div className="poit-scroll-marquee">
                                    <marquee onmouseover="this.stop();" onmouseout="this.start();">
                                        <div className="poit-scroll-items">
                                            <div className="poit-scroll-item d-flex align-items-center">
                                                <span>VN-INDEX</span>
                                                <div className="d-flex align-items-center poit-scroll-up">
                                                    <img src="../assets/svg/point-up.svg" alt="Go Stock Poitn"/>
                                                    <span>234,43</span>
                                                </div>
                                                <div className="d-flex align-items-center poit-scroll-down">
                                                    <img src="../assets/svg/point-down.svg" alt="Go Stock Poitn"/>
                                                    <span>2,43 %</span>
                                                </div>
                                            </div>
                                            <div className="poit-scroll-item d-flex align-items-center">
                                                <span>HN-INDEX</span>
                                                <div className="d-flex align-items-center poit-scroll-up">
                                                    <img src="../assets/svg/point-up.svg" alt="Go Stock Poitn"/>
                                                    <span>234,43</span>
                                                </div>
                                                <div className="d-flex align-items-center poit-scroll-down">
                                                    <img src="../assets/svg/point-down.svg" alt="Go Stock Poitn"/>
                                                    <span>2,43 %</span>
                                                </div>
                                            </div>
                                            <div className="poit-scroll-item d-flex align-items-center">
                                                <span>QN-INDEX</span>
                                                <div className="d-flex align-items-center poit-scroll-up">
                                                    <img src="../assets/svg/point-up.svg" alt="Go Stock Poitn"/>
                                                    <span>234,43</span>
                                                </div>
                                                <div className="d-flex align-items-center poit-scroll-down">
                                                    <img src="../assets/svg/point-down.svg" alt="Go Stock Poitn"/>
                                                    <span>2,43 %</span>
                                                </div>
                                            </div>
                                            <div className="poit-scroll-item d-flex align-items-center">
                                                <span>DN-INDEX</span>
                                                <div className="d-flex align-items-center poit-scroll-up">
                                                    <img src="../assets/svg/point-up.svg" alt="Go Stock Poitn"/>
                                                    <span>234,43</span>
                                                </div>
                                                <div className="d-flex align-items-center poit-scroll-down">
                                                    <img src="../assets/svg/point-down.svg" alt="Go Stock Poitn"/>
                                                    <span>2,43 %</span>
                                                </div>
                                            </div>
                                        </div>
                                    </marquee>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Topbar;
