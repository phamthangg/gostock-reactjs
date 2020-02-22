import React from "react";
import Topbar from '../components/Topbar';
import LeftSidebar from '../components/LeftSidebar';

class Home extends React.Component {
    state = {
        name: JSON.parse(localStorage["appState"]).user.name ? JSON.parse(localStorage["appState"]).user.name : "Trần Dần"
    };
    render() {
        return (
           <>
               <body className="light-version left-side-menu-dark">
                    <div id="wrapper">
                        <Topbar/>
                        <LeftSidebar/>
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