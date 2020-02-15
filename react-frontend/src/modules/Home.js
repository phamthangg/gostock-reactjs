import React from "react";

class Home extends React.Component {
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
               <body className="light-version left-side-menu-dark">
                    <div id="wrapper">
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
                        <div className="left-side-menu">
                            <div className="slimscroll-menu scrollbar-inner mm-show">
                                <div id="sidebar-menu" className="mm-active">
                                    <ul className="metismenu mm-show" id="side-menu">
                                        <li className="mm-active">
                                            <a href="5.index.html" className="active">
                                                <img src="../assets/svg/left-nav-1.svg" alt="left nav img"/>
                                                    <span> Home <b className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                   aria-hidden="true" data-toggle="tooltip"
                                                                   data-html="true"
                                                                   title='<em>Giải thích ý nghĩa</em>'></b></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="6.Thống kê thị trường.html">
                                                <img src="../assets/svg/left-nav-2.svg" alt="left nav img"/>
                                                    <span> Thống kê thị trường <b
                                                        className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                        aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                        title='<em>Giải thích ý nghĩa</em>'></b></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="7.Phân tích kỹ thuật.html">
                                                <img src="../assets/svg/left-nav-3.svg" alt="left nav img"/>
                                                    <span> Phân tích kỹ thuật <b
                                                        className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                        aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                        title='<em>Giải thích ý nghĩa</em>'></b></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="8.Tín hiệu và bộ lọc.html">
                                                <img src="../assets/svg/left-nav-4.svg" alt="left nav img"/>
                                                    <span> Tín hiệu và bộ lọc <b
                                                        className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                        aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                        title='<em>Giải thích ý nghĩa</em>'></b></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="9.Khuyến nghị của Gostock.html">
                                                <img src="../assets/svg/left-nav-5.svg" alt="left nav img"/>
                                                    <span> Khuyến nghị của Gostock <b
                                                        className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                        aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                        title='<em>Giải thích ý nghĩa</em>'></b></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="10.Quản trị danh mục.html">
                                                <img src="../assets/svg/left-nav-6.svg" alt="left nav img"/>
                                                    <span> Quản trị danh mục <b
                                                        className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                        aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                        title='<em>Giải thích ý nghĩa</em>'></b></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <img src="../assets/svg/left-nav-7.svg" alt="left nav img"/>
                                                    <span> Công cụ hỗ trợ PTCB <b
                                                        className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                        aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                        title='<em>Giải thích ý nghĩa</em>'></b></span>
                                                    <span className="menu-arrow"></span>
                                            </a>
                                            <ul className="nav-second-level" aria-expanded="false">
                                                <li>
                                                    <a href="11.Bộ lọc.html">Bộ lọc <b
                                                        className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                        aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                        title='<em>Giải thích ý nghĩa</em>'></b></a>
                                                </li>
                                                <li>
                                                    <a href="12.PhilTown.html">Phương pháp 4M – Phil Town <b
                                                        className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                        aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                        title='<em>Giải thích ý nghĩa</em>'></b></a>
                                                </li>
                                                <li>
                                                    <a href="13.Chi tiết BCTC và biểu đồ.html">Chi tiết BCTC và biểu
                                                        đồ <b className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                              aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                              title='<em>Giải thích ý nghĩa</em>'></b></a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="14.Tạo Báo Cáo.html">
                                                <img src="../assets/svg/left-nav-8.svg" alt="left nav img"/>
                                                    <span> Tạo Báo Cáo <b
                                                        className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                        aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                        title='<em>Giải thích ý nghĩa</em>'></b></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="15.Hướng dẫn sử dụng.html">
                                                <img src="../assets/svg/left-nav-9.svg" alt="left nav img"/>
                                                    <span> Hướng dẫn sử dụng <b
                                                        className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                        aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                        title='<em>Giải thích ý nghĩa</em>'></b></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="17.Nâng cấp tài khoản.html">
                                                <img src="../assets/svg/left-nav-10.svg" alt="left nav img"/>
                                                    <span> Nâng cấp tài khoản <b
                                                        className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                        aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                        title='<em>Giải thích ý nghĩa</em>'></b></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="16.About Gostock.html">
                                                <img src="../assets/svg/left-nav-11.svg" alt="left nav img"/>
                                                    <span> About Gostock <b
                                                        className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                        aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                        title='<em>Giải thích ý nghĩa</em>'></b></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://facebook.com/gostock" target="_blank">
                                                <img src="../assets/svg/left-nav-12.svg" alt="left nav img"/>
                                                    <span> Cộng đồng <b
                                                        className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                        aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                        title='<em>Giải thích ý nghĩa</em>'></b></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Góp ý.html">
                                                <img src="../assets/svg/left-nav-13.svg" alt="left nav img"/>
                                                    <span> Góp ý <b className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                    aria-hidden="true" data-toggle="tooltip"
                                                                    data-html="true"
                                                                    title='<em>Giải thích ý nghĩa</em>'></b></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-fixBtn">
                                <a href="Hợp tác với chúng tôi.html">
                                    <i className="fa fa-plus mr-1"></i> <span> Hợp tác với chúng tôi </span>
                                </a>
                            </div>
                        </div>
                        <div className="content-page">
                            <div className="content py-3">
                                <div className="container-fluid">
                                    <h4 className="mb-3 text-center text-info">Go Stock - Đồng hành cùng mọi quyết định
                                        đầu tư</h4>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="owl-carousel owl-theme top-stock-owl">
                                                <div className="item">
                                                    <div className="sub-stock-item mb-2 sub-stock-bg-1"
                                                         style={{backgroundImage:"url(../assets/images/demo/stock/stock-1.jpg)"}}>
                                                        <p>Từ điểm bán ngày 17/09</p>
                                                        <div className="d-flex align-items-center">
                                                            <div className="sub-stock-sort">
                                                                C+
                                                            </div>
                                                            <div className="sub-stock-right">
                                                                <h4>NVB</h4>
                                                                <div className="sub-point-change text-down">
                                                                    +41.55%
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="sub-stock-item mb-2 sub-stock-bg-2"
                                                         style={{backgroundImage:"url(../assets/images/demo/stock/stock-2.jpg)"}}>
                                                        <p>Từ điểm mua ngày 17/09</p>
                                                        <div className="d-flex align-items-center">
                                                            <div className="sub-stock-sort">
                                                                C+
                                                            </div>
                                                            <div className="sub-stock-right">
                                                                <h4>NVB</h4>
                                                                <div className="sub-point-change text-up">
                                                                    +41.55%
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="sub-stock-item mb-2 sub-stock-bg-3"
                                                         style={{backgroundImage:"url(../assets/images/demo/stock/stock-3.jpg)"}}>
                                                        <p>Từ điểm mua ngày 17/09</p>
                                                        <div className="d-flex align-items-center">
                                                            <div className="sub-stock-sort">
                                                                C+
                                                            </div>
                                                            <div className="sub-stock-right">
                                                                <h4>NVB</h4>
                                                                <div className="sub-point-change text-up">
                                                                    +41.55%
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="sub-stock-item mb-2 sub-stock-bg-4"
                                                         style={{backgroundImage:"url(../assets/images/demo/stock/stock-4.jpg)"}}>
                                                        <p>Từ điểm mua ngày 17/09</p>
                                                        <div className="d-flex align-items-center">
                                                            <div className="sub-stock-sort">
                                                                C+
                                                            </div>
                                                            <div className="sub-stock-right">
                                                                <h4>NVB</h4>
                                                                <div className="sub-point-change text-up">
                                                                    +41.55%
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h5 className="mb-4 text-center text-muted mt-0">Thành quả các cổ phiếu
                                                GoStock đã khuyến nghị</h5>
                                        </div>
                                    </div>
                                    <div className="row equal-col">
                                        <div className="col-xl-9 order-1 order-xl-0">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="card h-100">
                                                        <div className="card-header border-bottom">
                                                            <h4 className="header-title mb-0">Nhận định thị trường theo
                                                                ngày</h4>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="w-100 thumb-ratio ratio-16-9 mb-2">
                                                                <a href=""><img src="../assets/images/demo/news/news-4.jpg"
                                                                                alt=""/></a>
                                                            </div>
                                                            <a href="" className="text-dark main-title">Sau 4 phiên chào
                                                                sàn, cổ phiếu công ty xây dựng mất gần 36% giá trị</a>
                                                            <p className="mb-0 text-muted text-line-3 mt-1">Ghi nhận
                                                                trong thời gian giao dịch buổi sáng 1/3, cổ phiếu HUB
                                                                của CTCP Xây lắp Thừa Thiên Huế tiếp tục giảm sàn xuống
                                                                còn 16.100 đồng/cp. Đáng chú ý, cổ phiếu HUB niêm yết
                                                                trên Sở Giao dịch Chứng khoán TP HCM (HOSE) ngày 26/2
                                                                với giá tham chiếu trong phiên giao dịch đầu tiên 25.000
                                                                đồng/cp.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="card h-100">
                                                        <div className="card-header border-bottom">
                                                            <h4 className="header-title mb-0">Tin mới nhất</h4>
                                                        </div>
                                                        <div className="card-body py-0">
                                                            <div className="news-list d-flex flex-column">
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Xả
                                                                            143 tỉ đồng cổ phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Có
                                                                            nên học các khóa đào tọa chứng khoán hay
                                                                            không?</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 order-0 order-xl-1">
                                            <div className="row h-100">
                                                <div className="col-12 d-flex flex-column">
                                                    <div className="card">
                                                        <div className="card-header border-bottom">
                                                            <h4 className="header-title mb-0">Tra cứu chứng khoán</h4>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="input-group stock-search">
                                                                <input type="text" className="form-control"
                                                                       placeholder="Nhập mã chứng khoán"
                                                                       aria-label="basic-addon1"/>
                                                                    <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">
                                                        <i className="fa fa-search" aria-hidden="true"></i>
                                                    </span>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card flex-grow-1">
                                                        <div className="card-header border-bottom">
                                                            <h4 className="header-title mb-0">Đăng ký tài khoản chứng
                                                                khoán</h4>
                                                        </div>
                                                        <div className="card-body bg-reg-stock px-2">
                                                            <div className="text-center">
                                                                <p className="mb-1">Bạn chưa có tài khoản chứng
                                                                    khoán.</p>
                                                                <p className="mb-1">Đăng ký ngay với <a href=""
                                                                                                        className="text-info font-bold">Go
                                                                    Stock</a></p>
                                                                <p className="mb-1">Nhanh chóng - Đơn giản - Miễn
                                                                    phí</p>
                                                            </div>
                                                            <div className="mt-3 d-flex justify-content-center">
                                                                <a href="javascript:void(0);"
                                                                   className="btn btn-success btn-rounded waves-effect waves-light text-center">
                                                                    <i className="fa fa-plus mr-1"></i> <span
                                                                    className="font-semibold">Đăng ký</span> </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row equal-col">
                                        <div className="col-xl-9">
                                            <div className="row h-100">
                                                <div className="col-xl-6">
                                                    <div className="card h-100">
                                                        <div className="card-header border-bottom">
                                                            <h4 className="header-title mb-0">Phân tích cơ bản</h4>
                                                        </div>
                                                        <div className="card-body py-0">
                                                            <div className="news-list d-flex flex-column">
                                                                <div
                                                                    className="news-item border-bottom border-bottom-dark feature-news">
                                                                    <a href="" className="text-dark main-title mb-2">Giao
                                                                        dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ phiếu
                                                                        toàn thị trường</a>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="news-thumb">
                                                                            <div
                                                                                className="w-100 thumb-ratio ratio-16-9">
                                                                                <a href=""><img
                                                                                    src="../assets/images/demo/news/news-1.jpg"
                                                                                    alt=""/></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="news-info flex-grow-1 pl-2">
                                                                            <p className="mb-0 text-muted fs-13">11/11/2019</p>
                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Mới
                                                                                đây, Bộ Thương mại Trung Quốc cho biết
                                                                                Bắc Kinh và Washington đã đồng ý dỡ bỏ
                                                                                thuế quan hiện có theo từng giai
                                                                                đoạn.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="card h-100">
                                                        <div className="card-header border-bottom">
                                                            <h4 className="header-title mb-0">Phân tích kỹ thuật</h4>
                                                        </div>
                                                        <div className="card-body py-0">
                                                            <div className="news-list d-flex flex-column">
                                                                <div
                                                                    className="news-item border-bottom border-bottom-dark feature-news">
                                                                    <a href="" className="text-dark main-title mb-2">Giao
                                                                        dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ phiếu
                                                                        toàn thị trường</a>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="news-thumb">
                                                                            <div
                                                                                className="w-100 thumb-ratio ratio-16-9">
                                                                                <a href=""><img
                                                                                    src="../assets/images/demo/news/news-4.jpg"
                                                                                    alt=""/></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="news-info flex-grow-1 pl-2">
                                                                            <p className="mb-0 text-muted fs-13">11/11/2019</p>
                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Mới
                                                                                đây, Bộ Thương mại Trung Quốc cho biết
                                                                                Bắc Kinh và Washington đã đồng ý dỡ bỏ
                                                                                thuế quan hiện có theo từng giai
                                                                                đoạn.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="row h-100">
                                                <div className="col-12">
                                                    <div className="card h-100">
                                                        <div className="card-header border-bottom">
                                                            <h4 className="header-title mb-0">Báo cáo vĩ mô và góc nhìn
                                                                hay</h4>
                                                        </div>
                                                        <div className="card-body py-1">
                                                            <div
                                                                className="news-list d-flex flex-column slimscroll scrollbar-inner news-list-scroll">
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <div className="pt-0 mr-2">
                                                                        <span
                                                                            className="fs-24 font-semibold text-success">1</span>
                                                                    </div>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <div className="pt-0 mr-2">
                                                                        <span
                                                                            className="fs-24 font-semibold text-warning">2</span>
                                                                    </div>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Xả
                                                                            143 tỉ đồng cổ phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <div className="pt-0 mr-2">
                                                                        <span
                                                                            className="fs-24 font-semibold text-danger">3</span>
                                                                    </div>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Có
                                                                            nên học các khóa đào tọa chứng khoán hay
                                                                            không?</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <div className="pt-0 mr-2">
                                                                        <span
                                                                            className="fs-24 font-semibold text-muted">4</span>
                                                                    </div>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <div className="pt-0 mr-2">
                                                                        <span
                                                                            className="fs-24 font-semibold text-muted">5</span>
                                                                    </div>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <div className="pt-0 mr-2">
                                                                        <span
                                                                            className="fs-24 font-semibold text-muted">6</span>
                                                                    </div>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <div className="pt-0 mr-2">
                                                                        <span
                                                                            className="fs-24 font-semibold text-muted">7</span>
                                                                    </div>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <div className="pt-0 mr-2">
                                                                        <span
                                                                            className="fs-24 font-semibold text-muted">8</span>
                                                                    </div>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <div className="pt-0 mr-2">
                                                                        <span
                                                                            className="fs-24 font-semibold text-muted">9</span>
                                                                    </div>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row equal-col">
                                        <div className="col-xl-9">
                                            <div className="row h-100">
                                                <div className="col-xl-6">
                                                    <div className="card h-100">
                                                        <div className="card-header border-bottom">
                                                            <h4 className="header-title mb-0">Kỹ năng đầu tư chứng
                                                                khoán</h4>
                                                        </div>
                                                        <div className="card-body py-0">
                                                            <div className="news-list d-flex flex-column">
                                                                <div
                                                                    className="news-item border-bottom border-bottom-dark feature-news">
                                                                    <a href="" className="text-dark main-title mb-2">Giao
                                                                        dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ phiếu
                                                                        toàn thị trường</a>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="news-thumb">
                                                                            <div
                                                                                className="w-100 thumb-ratio ratio-16-9">
                                                                                <a href=""><img
                                                                                    src="../assets/images/demo/news/news-3.jpg"
                                                                                    alt=""/></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="news-info flex-grow-1 pl-2">
                                                                            <p className="mb-0 text-muted fs-13">11/11/2019</p>
                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Mới
                                                                                đây, Bộ Thương mại Trung Quốc cho biết
                                                                                Bắc Kinh và Washington đã đồng ý dỡ bỏ
                                                                                thuế quan hiện có theo từng giai
                                                                                đoạn.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="card h-100">
                                                        <div className="card-header border-bottom">
                                                            <h4 className="header-title mb-0">Hướng dẫn mở tài
                                                                khoản</h4>
                                                        </div>
                                                        <div className="card-body py-0">
                                                            <div className="news-list d-flex flex-column">
                                                                <div
                                                                    className="news-item border-bottom border-bottom-dark feature-news">
                                                                    <a href="" className="text-dark main-title mb-2">Giao
                                                                        dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ phiếu
                                                                        toàn thị trường</a>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="news-thumb">
                                                                            <div
                                                                                className="w-100 thumb-ratio ratio-16-9">
                                                                                <a href=""><img
                                                                                    src="../assets/images/demo/news/news-5.jpg"
                                                                                    alt=""/></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="news-info flex-grow-1 pl-2">
                                                                            <p className="mb-0 text-muted fs-13">11/11/2019</p>
                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Mới
                                                                                đây, Bộ Thương mại Trung Quốc cho biết
                                                                                Bắc Kinh và Washington đã đồng ý dỡ bỏ
                                                                                thuế quan hiện có theo từng giai
                                                                                đoạn.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="row h-100">
                                                <div className="col-12">
                                                    <div className="card h-100">
                                                        <div className="card-header border-bottom">
                                                            <h4 className="header-title mb-0">Lịch sự kiện - tin doanh
                                                                nghiệp</h4>
                                                        </div>
                                                        <div className="card-body py-1">
                                                            <div className="table-responsive">
                                                                <table className="table mb-0 stock-today-table">
                                                                    <thead>
                                                                    <tr>
                                                                        <th className="text-left border-0 fs-12 text-muted">Mã
                                                                            CK
                                                                        </th>
                                                                        <th className="text-center border-0 fs-12 text-muted">Ngày
                                                                            GDKHQ
                                                                        </th>
                                                                        <th className="text-right border-0 fs-12 text-muted">Tỉ
                                                                            lệ
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr>
                                                                        <td className="text-left font-semibold">APC</td>
                                                                        <td className="text-center font-semibold">11/11/2019</td>
                                                                        <td className="text-right text-success font-semibold">+10%</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="text-left font-semibold">APP</td>
                                                                        <td className="text-center font-semibold">11/11/2019</td>
                                                                        <td className="text-right text-warning font-semibold">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="text-left font-semibold">FSI</td>
                                                                        <td className="text-center font-semibold">11/11/2019</td>
                                                                        <td className="text-right text-down font-semibold">-1%</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="text-left font-semibold">APC</td>
                                                                        <td className="text-center font-semibold">11/11/2019</td>
                                                                        <td className="text-right text-success font-semibold">+10%</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="text-left font-semibold">APP</td>
                                                                        <td className="text-center font-semibold">11/11/2019</td>
                                                                        <td className="text-right text-warning font-semibold">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="text-left font-semibold">FSI</td>
                                                                        <td className="text-center font-semibold">11/11/2019</td>
                                                                        <td className="text-right text-down font-semibold">-1%</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="text-left font-semibold">APP</td>
                                                                        <td className="text-center font-semibold">11/11/2019</td>
                                                                        <td className="text-right text-warning font-semibold">0</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="text-left font-semibold">FSI</td>
                                                                        <td className="text-center font-semibold">11/11/2019</td>
                                                                        <td className="text-right text-down font-semibold">-1%</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row equal-col">
                                        <div className="col-xl-9">
                                            <div className="row h-100">
                                                <div className="col-xl-6">
                                                    <div className="card h-100">
                                                        <div className="card-header border-bottom">
                                                            <h4 className="header-title mb-0">Tin tức khác 1</h4>
                                                        </div>
                                                        <div className="card-body py-0">
                                                            <div className="news-list d-flex flex-column">
                                                                <div
                                                                    className="news-item border-bottom border-bottom-dark feature-news">
                                                                    <a href="" className="text-dark main-title mb-2">Giao
                                                                        dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ phiếu
                                                                        toàn thị trường</a>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="news-thumb">
                                                                            <div
                                                                                className="w-100 thumb-ratio ratio-16-9">
                                                                                <a href=""><img
                                                                                    src="../assets/images/demo/news/news-3.jpg"
                                                                                    alt=""/></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="news-info flex-grow-1 pl-2">
                                                                            <p className="mb-0 text-muted fs-13">11/11/2019</p>
                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Mới
                                                                                đây, Bộ Thương mại Trung Quốc cho biết
                                                                                Bắc Kinh và Washington đã đồng ý dỡ bỏ
                                                                                thuế quan hiện có theo từng giai
                                                                                đoạn.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="card h-100">
                                                        <div className="card-header border-bottom">
                                                            <h4 className="header-title mb-0">Tin tức khác 2</h4>
                                                        </div>
                                                        <div className="card-body py-0">
                                                            <div className="news-list d-flex flex-column">
                                                                <div
                                                                    className="news-item border-bottom border-bottom-dark feature-news">
                                                                    <a href="" className="text-dark main-title mb-2">Giao
                                                                        dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ phiếu
                                                                        toàn thị trường</a>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="news-thumb">
                                                                            <div
                                                                                className="w-100 thumb-ratio ratio-16-9">
                                                                                <a href=""><img
                                                                                    src="../assets/images/demo/news/news-5.jpg"
                                                                                    alt=""/></a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="news-info flex-grow-1 pl-2">
                                                                            <p className="mb-0 text-muted fs-13">11/11/2019</p>
                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Mới
                                                                                đây, Bộ Thương mại Trung Quốc cho biết
                                                                                Bắc Kinh và Washington đã đồng ý dỡ bỏ
                                                                                thuế quan hiện có theo từng giai
                                                                                đoạn.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                                    <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                                       aria-hidden="true"></i>
                                                                    <div className="">
                                                                        <a href="" className="text-dark main-title">Giao
                                                                            dịch khối ngoại 6/11: Xả 143 tỉ đồng cổ
                                                                            phiếu toàn thị trường</a>
                                                                        <p className="mb-0 text-muted">11/11/2019</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3">
                                            <div className="row h-100">
                                                <div className="col-12">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h4 className="mb-3 d-flex"><i className="fa fa-play-circle text-muted mr-2"
                                                                           aria-hidden="true"></i> Video nổi bật</h4>
                                        </div>
                                        <div className="col-auto">
                                            <div className="d-flex slide-cust-nav justify-content-end" id="video-nav">
                                                <a href="#"
                                                   className="text-muted slide-cust-nav-item slide-cust-prev"><i
                                                    className="mdi mdi-arrow-left"></i></a>
                                                <a href="#"
                                                   className="text-muted slide-cust-nav-item slide-cust-next ml-1"><i
                                                    className="mdi mdi-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="owl-carousel owl-theme video-owl">
                                                <div className="item">
                                                    <div className="video-youtube d-flex mb-3 flex-column flex-xl-row"
                                                         data-url="https://www.youtube.com/watch?v=4GuR_g75ufY">
                                                        <div className="youtube-thumb w-100">
                                                            <div className="thumb-ratio ratio-16-9">
                                                                <img src="../assets/images/no-image.jpg" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="youtube-info pl-0 pl-xl-3 mt-2 mt-xl-0">
                                                            <p className="main-title mb-1">
                                                                <a href="#" className="text-dark video-youtube-title">Con
                                                                    đường thành công: Tôi đã học chứng khoán như thế
                                                                    nào?</a>
                                                            </p>
                                                            <p className="text-muted mb-0 video-youtube-time">03:22</p>
                                                        </div>
                                                    </div>
                                                    <div className="video-youtube d-flex mb-3 flex-column flex-xl-row"
                                                         data-url="https://www.youtube.com/watch?v=EHASipZkZnk">
                                                        <div className="youtube-thumb w-100">
                                                            <div className="thumb-ratio ratio-16-9">
                                                                <img src="../assets/images/no-image.jpg" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="youtube-info pl-0 pl-xl-3 mt-2 mt-xl-0">
                                                            <p className="main-title mb-1">
                                                                <a href="#" className="text-dark video-youtube-title">Nhận
                                                                    định chứng khoán ngày 6/11: "Hướng đến thử thách
                                                                    vùng kháng cự mạnh 1.035-1.045"</a>
                                                            </p>
                                                            <p className="text-muted mb-0 video-youtube-time">03:22</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="video-youtube d-flex mb-3 flex-column flex-xl-row"
                                                         data-url="https://www.youtube.com/watch?v=c0cWr5sYP9s">
                                                        <div className="youtube-thumb w-100">
                                                            <div className="thumb-ratio ratio-16-9">
                                                                <img src="../assets/images/no-image.jpg" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="youtube-info pl-0 pl-xl-3 mt-2 mt-xl-0">
                                                            <p className="main-title mb-1">
                                                                <a href="#" className="text-dark video-youtube-title">1.200ha
                                                                    chuối ngập lụt, HAGL Agrico lỗ gần nghìn tỷ quý 3 dù
                                                                    đã "bán con"</a>
                                                            </p>
                                                            <p className="text-muted mb-0 video-youtube-time">03:22</p>
                                                        </div>
                                                    </div>
                                                    <div className="video-youtube d-flex mb-3 flex-column flex-xl-row"
                                                         data-url="https://www.youtube.com/watch?v=BhbETPFyuaY">
                                                        <div className="youtube-thumb w-100">
                                                            <div className="thumb-ratio ratio-16-9">
                                                                <img src="../assets/images/no-image.jpg" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="youtube-info pl-0 pl-xl-3 mt-2 mt-xl-0">
                                                            <p className="main-title mb-1">
                                                                <a href="#" className="text-dark video-youtube-title">Chứng
                                                                    khoán sáng 6/11: Thanh khoản sụt mạnh, VHM tiếp tục
                                                                    sứ mệnh kéo chỉ số</a>
                                                            </p>
                                                            <p className="text-muted mb-0 video-youtube-time">03:22</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="video-youtube d-flex mb-3 flex-column flex-xl-row"
                                                         data-url="https://www.youtube.com/watch?v=sG3AmfvbNVk">
                                                        <div className="youtube-thumb w-100">
                                                            <div className="thumb-ratio ratio-16-9">
                                                                <img src="../assets/images/no-image.jpg" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="youtube-info pl-0 pl-xl-3 mt-2 mt-xl-0">
                                                            <p className="main-title mb-1">
                                                                <a href="#" className="text-dark video-youtube-title">Blog
                                                                    chứng khoán: Đang tích lũy hay phân phối ngắn
                                                                    hạn?</a>
                                                            </p>
                                                            <p className="text-muted mb-0 video-youtube-time">03:22</p>
                                                        </div>
                                                    </div>
                                                    <div className="video-youtube d-flex mb-3 flex-column flex-xl-row"
                                                         data-url="https://www.youtube.com/watch?v=Pc1Wh0EXPPs">
                                                        <div className="youtube-thumb w-100">
                                                            <div className="thumb-ratio ratio-16-9">
                                                                <img src="../assets/images/no-image.jpg" alt=""/>
                                                            </div>
                                                        </div>
                                                        <div className="youtube-info pl-0 pl-xl-3 mt-2 mt-xl-0">
                                                            <p className="main-title mb-1">
                                                                <a href="#" className="text-dark video-youtube-title">Chứng
                                                                    khoán chiều 6/11: VHM lại lập công, tạo đủ điểm để
                                                                    VN-Index xanh</a>
                                                            </p>
                                                            <p className="text-muted mb-0 video-youtube-time">03:22</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h4 className="mb-3 d-flex"><i
                                                className="mdi mdi-account-supervisor text-muted mr-2"
                                                aria-hidden="true"></i> Đối tác khách hàng đến từ các công ty chứng
                                                khoán</h4>
                                        </div>
                                        <div className="col-auto">
                                            <div className="d-flex slide-cust-nav justify-content-end" id="brands-nav">
                                                <a href="#"
                                                   className="text-muted slide-cust-nav-item slide-cust-prev"><i
                                                    className="mdi mdi-arrow-left"></i></a>
                                                <a href="#"
                                                   className="text-muted slide-cust-nav-item slide-cust-next ml-1"><i
                                                    className="mdi mdi-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="owl-carousel owl-theme brand-owl">
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/images/demo/brands/brand-1.jpg" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/images/demo/brands/brand-2.png" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/images/demo/brands/brand-3.png" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/images/demo/brands/brand-4.png" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/images/demo/brands/brand-5.png" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/images/demo/brands/brand-6.png" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/images/demo/brands/brand-7.png" alt=""/>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/images/demo/brands/brand-8.png" alt=""/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="user-info" className="modal fade" tabIndex="-1" role="dialog"
                                 aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title text-center flex-grow-1" id="">Thông tin tài
                                                khoản</h4>
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-hidden="true">×
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="text-center">
                                                <img src="../assets/images/users/avatar-4.jpg" alt="user-image"
                                                     className="img-thumbnail avatar-xl rounded-circle"/>
                                            </div>
                                            <h4 className="text-uppercase text-center my-2">Trần Dần</h4>
                                            <hr/>
                                                <p className="d-flex justify-content-between align-items-center">
                                                    <span>Gói Basic</span>
                                                    <a className="btn btn-icon btn-rounded btn-light waves-effect waves-light"
                                                       href="#" data-toggle="modal" data-target="#user-update"> <i
                                                        className="fa fa-pencil" aria-hidden="true"></i> </a>
                                                </p>
                                                <p className="d-flex justify-content-between align-items-center">
                                                    <span>Thời gian sử dụng: 01/01/2019 - 01/01/2020</span>
                                                    <a className="btn btn-icon btn-rounded btn-light waves-effect waves-light"
                                                       href="Nâng cấp tài khoản.html"> <i className="fa fa-pencil"
                                                                                          aria-hidden="true"></i> </a>
                                                </p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-light waves-effect"
                                                    data-dismiss="modal">Đóng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="user-update" className="modal fade" tabIndex="-1" role="dialog"
                                 aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title text-center flex-grow-1" id="">Nâng cấp tài
                                                khoản</h4>
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-hidden="true">×
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form action="#" className="pt-2">
                                                <div className="form-group mb-3">
                                                    <div className="row">
                                                        <div className="col">
                                                            <label htmlFor="firstname">Tên</label>
                                                            <input className="form-control" type="text" id="firstname"
                                                                   placeholder="Tên" required/>
                                                        </div>
                                                        <div className="col">
                                                            <label htmlFor="lastname">Họ</label>
                                                            <input className="form-control" type="text" id="lastname"
                                                                   placeholder="Họ" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="birthday">Ngày sinh</label>
                                                    <input className="form-control" type="date" id="birthday" required
                                                           placeholder="Ngày sinh"/>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="emailaddress">Email</label>
                                                    <input className="form-control" type="email" id="emailaddress"
                                                           required placeholder="Email"/>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="address">Địa chỉ</label>
                                                    <input className="form-control" type="text" required id="address"
                                                           placeholder="Địa chỉ"/>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <div className="row">
                                                        <div className="col">
                                                            <label htmlFor="add-1">Quận</label>
                                                            <input className="form-control" type="text" id="add-1"
                                                                   placeholder="Quận" required/>
                                                        </div>
                                                        <div className="col">
                                                            <label htmlFor="add-2">Thành phố/Tỉnh</label>
                                                            <input className="form-control" type="text" id="add-2"
                                                                   placeholder="Thành phố/Tỉnh" required/>
                                                        </div>
                                                        <div className="col">
                                                            <label htmlFor="country">Quốc gia</label>
                                                            <input className="form-control" type="text" id="country"
                                                                   placeholder="Quốc gia" required/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="tel">Số điện thoại</label>
                                                    <input className="form-control" type="tel" required id="tel"
                                                           placeholder="Số điện thoại"/>
                                                </div>
                                                <div className="form-group mb-0 text-center">
                                                    <button className="btn btn-success btn-block" type="submit"> Cập
                                                        nhật
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-light waves-effect"
                                                    data-dismiss="modal">Đóng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rightbar-overlay"></div>
                        </div>
                    </div>

               </body>
           </>
        );
    }
}
export default Home;