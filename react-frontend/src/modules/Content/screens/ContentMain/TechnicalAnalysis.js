import React from "react";
import Topbar from '../../../../../src/components/Topbar';
import LeftSidebar from '../../../../../src/components/LeftSidebar';
import ModalUser from '../../../../../src/components/ModalUser';

class TechnicalAnalysis extends React.Component {
    render() {
        return (
            <>
                <body className="light-version left-side-menu-dark overflow-hidden">
                    <div id="wrapper">
                        <Topbar/>
                        <LeftSidebar/>
                        <ModalUser />
                        <div className="content-page content-page-full">
                            <div className="content p-0">
                                <div className="mega-grid active">
                                    <div className="mega-grid-top d-flex justify-content-between">
                                        <div className="mgt-left d-flex align-items-stretch">
                                            <div className="mgt-stock-list d-flex align-items-stretch">
                                                <a href="#"
                                                   className="btn btn-light waves-effect waves-light btn-outline-secondary active">VN-INDEX</a>
                                                <a href="#"
                                                   className="btn btn-light waves-effect waves-light btn-outline-secondary">HN-INDEX</a>
                                                <a href="#"
                                                   className="btn btn-light waves-effect waves-light btn-outline-secondary mgt-add-stock"><i
                                                    className="dripicons-plus"></i></a>
                                            </div>
                                        </div>
                                        <div className="mgt-right">
                                            <div className="mgt-right-tools d-flex align-items-center">
                                                <a href="#" title="Đặt lại"
                                                   className="btn btn-light waves-effect waves-light btn-outline-secondary">
                                                    <i className="fa fa-circle-o-notch" aria-hidden="true"></i>
                                                    <span>Đặt lại</span>
                                                </a>
                                                <a href="#" title="Tải dữ liệu"
                                                   className="btn btn-light waves-effect waves-light btn-outline-secondary">
                                                    <i className="fa fa-cloud-download" aria-hidden="true"></i>
                                                    <span>Tải dữ liệu</span>
                                                </a>
                                                <a href="#" title="Đóng"
                                                   className="btn btn-light waves-effect waves-light btn-outline-secondary">
                                                    <i className="fa fa-times" aria-hidden="true"></i>
                                                    <span>Đóng</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mega-grid-bottom">
                                        <div className="tradingview-widget-container">
                                            <div id="tradingview_6cb8d"></div>
                                            <div className="tradingview-widget-copyright"></div>
                                        </div>
                                    </div>
                                    <div className="mega-grid-right active">
                                        <div className="row">
                                            <div className="col-auto mgr-col-left mega-grid-right-mobile">
                                                <div className="tab-content pt-0" id="v-pills-tabContent">
                                                    <div className="tab-pane fade" id="v-pills-tab-1">
                                                        <div className="v-pills-pane">
                                                            <div className="v-pills-pane-header">
                                                                <h6 className="v-pills-pane-title d-flex justify-content-between">
                                                                    <span>Watchlist</span>
                                                                    <div className="dropdown">
                                                                        <button type="button"
                                                                                className="btn btn-light bg-transparent border-0 p-0 btn-sm dropdown-toggle text-dark"
                                                                                data-toggle="dropdown"><i
                                                                            className="fa fa-list"></i></button>
                                                                        <div
                                                                            className="dropdown-menu dropdown-menu-right"
                                                                            x-placement="bottom-start">
                                                                            <a className="dropdown-item" href="#">*Tạo
                                                                                watchlist</a>
                                                                        </div>
                                                                    </div>
                                                                </h6>
                                                            </div>
                                                            <div className="v-pills-pane-content">
                                                                <div className="scrollbar-inner">
                                                                    <div className="px-1">
                                                                        <input type="text" className="form-control mb-1"
                                                                               id="simpleinput"
                                                                               placeholder="Nhập mã chứng khoán"/>
                                                                            <div className="watch-list no-content">
                                                                                <p className="p-2 bg-light m-0">
                                                                                    <small>Chưa có cổ phiếu nào trong
                                                                                        watchlist. Hãy thêm cổ phiếu vào
                                                                                        danh sách.
                                                                                    </small>
                                                                                </p>
                                                                            </div>
                                                                            <div className="watch-list has-content">
                                                                                <table
                                                                                    className="table table-dark table-sm">
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <b>MÃ CK</b>
                                                                                        </td>
                                                                                        <td className="text-right">
                                                                                            <b>GIÁ</b>
                                                                                        </td>
                                                                                        <td>
                                                                                            <b>+/-</b>
                                                                                        </td>
                                                                                        <td className="text-right">
                                                                                            <b>%</b>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <a href="#"
                                                                                               className="text-info font-bold text-hover-underline">ABC</a>
                                                                                        </td>
                                                                                        <td className="text-right text-warning">
                                                                                            25.00
                                                                                        </td>
                                                                                        <td className="text-warning">
                                                                                            0.00
                                                                                        </td>
                                                                                        <td className="text-right text-warning">
                                                                                            0.00
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <a href="#"
                                                                                               className="text-info font-bold text-hover-underline">HNI</a>
                                                                                        </td>
                                                                                        <td className="text-right text-warning">
                                                                                            25.00
                                                                                        </td>
                                                                                        <td className="text-warning">
                                                                                            0.00
                                                                                        </td>
                                                                                        <td className="text-right text-warning">
                                                                                            0.00
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <a href="#"
                                                                                               className="text-info font-bold text-hover-underline">VNA</a>
                                                                                        </td>
                                                                                        <td className="text-right text-warning">
                                                                                            25.00
                                                                                        </td>
                                                                                        <td className="text-warning">
                                                                                            0.00
                                                                                        </td>
                                                                                        <td className="text-right text-warning">
                                                                                            0.00
                                                                                        </td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="v-pills-tab-2">
                                                        <div className="v-pills-pane">
                                                            <div className="v-pills-pane-header">
                                                                <h6 className="v-pills-pane-title d-flex justify-content-between">
                                                                    <span>Cảnh báo</span>
                                                                    <div className="dropdown">
                                                                        <button type="button"
                                                                                className="btn btn-light bg-transparent border-0 p-0 btn-sm dropdown-toggle text-dark"
                                                                                data-toggle="dropdown"><i
                                                                            className="fa fa-list"></i></button>
                                                                        <div
                                                                            className="dropdown-menu dropdown-menu-right"
                                                                            x-placement="bottom-start">
                                                                            <a className="dropdown-item" href="#">Xóa
                                                                                hết thông báo</a>
                                                                            <a className="dropdown-item" href="#">Thiết
                                                                                lập cảnh báo</a>
                                                                        </div>
                                                                    </div>
                                                                </h6>
                                                            </div>
                                                            <div className="v-pills-pane-content">
                                                                <div className="scrollbar-inner">
                                                                    <div className="px-1">
                                                                        <div className="watch-list no-content">
                                                                            <p className="p-2 bg-light m-0">
                                                                                <small>Chưa nhận được thông báo nào. Hãy
                                                                                    thiết lập cảnh báo để nhận được
                                                                                    thông tin tức thời về diễn biến thị
                                                                                    trường và giao dịch cổ phiếu.
                                                                                </small>
                                                                            </p>
                                                                        </div>
                                                                        <div className="watch-list has-content">
                                                                            <table
                                                                                className="table table-dark table-sm">
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        <a href="#"
                                                                                           className="text-info font-bold text-hover-underline">ABC</a>
                                                                                    </td>
                                                                                    <td>
                                                                                        KL dự kiến đạt 2,384,250 vượt
                                                                                        57% TB 5 ngày
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <a href="#"
                                                                                           className="text-info font-bold text-hover-underline">HNI</a>
                                                                                    </td>
                                                                                    <td>
                                                                                        KL dự kiến đạt 277,695 vượt 271%
                                                                                        TB 5 ngày
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <a href="#"
                                                                                           className="text-info font-bold text-hover-underline">VNA</a>
                                                                                    </td>
                                                                                    <td>
                                                                                        KL dự kiến đạt 391,425 vượt 110%
                                                                                        TB 5 ngày
                                                                                    </td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade active show" id="v-pills-tab-3">
                                                        <div className="v-pills-pane">
                                                            <div className="v-pills-pane-header">
                                                                <ul className="nav nav-pills navtab-bg nav-justified v-pills-pane-navtab">
                                                                    <li className="nav-item">
                                                                        <a href="#gostock-total-tab" data-toggle="tab"
                                                                           aria-expanded="false"
                                                                           className="nav-link active">
                                                                            Tổng hợp
                                                                        </a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a href="#gostock-foreign-tab" data-toggle="tab"
                                                                           aria-expanded="true" className="nav-link">
                                                                            Nước ngoài
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="v-pills-pane-content">
                                                                <div className="scrollbar-inner">
                                                                    <div className="tab-content py-0">
                                                                        <div className="tab-pane show active"
                                                                             id="gostock-total-tab">
                                                                            <div className="scroll-container"
                                                                                 id="marketDetailStatistics">
                                                                                <table
                                                                                    className="fs-12 table table-dark mb-3 table-sm stock-statistic">
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            Giá hiện tại
                                                                                        </td>
                                                                                        <td align="right"
                                                                                            className="priceDown">
                                                                                            <span
                                                                                                className="text-up">1,010.03</span>
                                                                                            <span
                                                                                                className="sep">|</span>
                                                                                            <span className="text-up"><i
                                                                                                className="mdi mdi-arrow-up-bold"></i> -2.27 -0.22%</span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            Cao nhất/Thấp nhất
                                                                                        </td>
                                                                                        <td align="right">
                                                                                            <span
                                                                                                className="priceUp text-up">1,015.16</span>
                                                                                            <span
                                                                                                className="sep">|</span>
                                                                                            <span className="text-down"><i
                                                                                                className="mdi mdi-arrow-down-bold"></i> 1,005.10</span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            KL GD/GT GD
                                                                                        </td>
                                                                                        <td align="right">
                                                                                            <span>1,015.16</span> <span
                                                                                            className="sep">|</span>
                                                                                            <span>1,005.10</span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            KLTB (10 ngày)
                                                                                        </td>
                                                                                        <td align="right">
                                                                                            <span>1,015.16</span> <span
                                                                                            className="sep">|</span>
                                                                                            <span>1,005.10</span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                                <table
                                                                                    className="fs-12 table table-dark mb-3 table-sm">
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <b>KL Giao dịch</b>
                                                                                        </td>
                                                                                        <td>
                                                                                            <b>Dự kiến</b>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            212,329,658
                                                                                        </td>
                                                                                        <td>
                                                                                            212,329,658
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <b>GT Giao dịch</b>
                                                                                        </td>
                                                                                        <td>
                                                                                            <b>Dự kiến</b>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            5,150.74 tỷ
                                                                                        </td>
                                                                                        <td>
                                                                                            5,150.74 tỷ
                                                                                        </td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                                <table
                                                                                    className="fs-12 table table-dark mb-3 table-sm">
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td className=" border-0 text-center">
                                                                                            <b>ĐẶT MUA</b>
                                                                                        </td>
                                                                                        <td className=" border-0 text-center">
                                                                                            <b>ĐẶT BÁN</b>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="">
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <span>1,465,290</span>
                                                                                                <span
                                                                                                    className="block-progress bg-info mx-1"
                                                                                                    style={{width: 40}}></span>
                                                                                                <span><b
                                                                                                    className="text-info">4.16</b></span>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="">
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <span><b
                                                                                                    className="text-danger">4.17</b></span>
                                                                                                <span
                                                                                                    className="block-progress bg-danger mx-1"
                                                                                                    style={{width: 20}}></span>
                                                                                                <span>100</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="">
                                                                                        </td>
                                                                                        <td className="">
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <span><b
                                                                                                    className="text-danger">4.19</b></span>
                                                                                                <span
                                                                                                    className="block-progress bg-danger mx-1"
                                                                                                    style={{width: 5}}></span>
                                                                                                <span>94,540</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="">
                                                                                        </td>
                                                                                        <td className="">
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <span><b
                                                                                                    className="text-danger">4.20</b></span>
                                                                                                <span
                                                                                                    className="block-progress bg-danger mx-1"
                                                                                                    style={{width: 15}}></span>
                                                                                                <span>132,320</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                                <table
                                                                                    className="fs-12 table table-dark table-sm mt-2 mb-3 toogle-show-tr"
                                                                                    data-show-max="10">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th>KHỚP</th>
                                                                                        <th className="text-center">GIÁ</th>
                                                                                        <th className="text-center">KL</th>
                                                                                        <th className="text-center">M/B</th>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-success">24.90</td>
                                                                                        <td className="text-center text-warning">0</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">4.16</td>
                                                                                        <td className="text-center text-danger">-0.31</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-pink">2.15</td>
                                                                                        <td className="text-center text-pink">-0.16</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">35.20</td>
                                                                                        <td className="text-center text-danger">0.20</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">22.75</td>
                                                                                        <td className="text-center text-danger">-0.20</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">1.57</td>
                                                                                        <td className="text-center text-danger">-0.07</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">1.70</td>
                                                                                        <td className="text-center text-danger">-0.07</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">7.75</td>
                                                                                        <td className="text-center text-danger">-0.09</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">5.50</td>
                                                                                        <td className="text-center text-danger">-0.40</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">22.65</td>
                                                                                        <td className="text-center text-danger">0.00</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">15.05</td>
                                                                                        <td className="text-center text-danger">-0.20</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">3.98</td>
                                                                                        <td className="text-center text-danger">-0.29</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">58.60</td>
                                                                                        <td className="text-center text-danger">0.30</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">21.70</td>
                                                                                        <td className="text-center text-danger">0.10</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">28.35</td>
                                                                                        <td className="text-center text-danger">-0.65</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">1.05</td>
                                                                                        <td className="text-center text-danger">-0.02</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">123.00</td>
                                                                                        <td className="text-center text-danger">-2.90</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">3.11</td>
                                                                                        <td className="text-center text-danger">-0.03</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">6.73</td>
                                                                                        <td className="text-center text-danger">-0.50</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">13.45</td>
                                                                                        <td className="text-center text-danger">0.05</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">6.17</td>
                                                                                        <td className="text-center text-danger">-0.12</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">21.10</td>
                                                                                        <td className="text-center text-danger">-0.35</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">10.05</td>
                                                                                        <td className="text-center text-danger">0.00</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">10.70</td>
                                                                                        <td className="text-center text-danger">0.00</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">9.11</td>
                                                                                        <td className="text-center text-danger">-0.24</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">11.80</td>
                                                                                        <td className="text-center text-danger">-0.05</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">4.01</td>
                                                                                        <td className="text-center text-danger">-0.07</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">21.40</td>
                                                                                        <td className="text-center text-danger">0.40</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">24.90</td>
                                                                                        <td className="text-center text-danger">0.20</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>14:46:20</td>
                                                                                        <td className="text-center text-info">16.15</td>
                                                                                        <td className="text-center text-danger">0.55</td>
                                                                                        <td className="text-center">M</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                    <tfoot>
                                                                                    <tr>
                                                                                        <td colSpan="4"
                                                                                            className="text-right"><a
                                                                                            href="#"
                                                                                            className="text-info toogle-show-tr-link"><span
                                                                                            className="toogle-show-tr-text">Toàn bộ lần khớp</span>
                                                                                            <i className="fa fa-caret-down"></i></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    </tfoot>
                                                                                </table>
                                                                                <div className="row">
                                                                                    <div className="col-md-12">
                                                                                        <div
                                                                                            className="section-header-2">Phân
                                                                                            bổ dòng tiền
                                                                                        </div>
                                                                                        <div id="moneyFlowChart"></div>
                                                                                    </div>
                                                                                    <div className="col-md-12">
                                                                                        <div
                                                                                            className="section-header-2 mt-4">Số
                                                                                            mã Tăng/Giảm/Tham chiếu
                                                                                        </div>
                                                                                        <div id="marketMoversChart"></div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                        <div className="tab-pane"
                                                                             id="gostock-foreign-tab">
                                                                            <table
                                                                                className="table table-dark table-sm">
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        <b>KL NN Mua</b>
                                                                                    </td>
                                                                                    <td>
                                                                                        <b>KL NN Bán</b>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        14,310,560
                                                                                    </td>
                                                                                    <td>
                                                                                        16,580,850
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <b>GT NN Mua</b>
                                                                                    </td>
                                                                                    <td>
                                                                                        <b>GT NN Bán</b>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        1,487.75 tỷ
                                                                                    </td>
                                                                                    <td>
                                                                                        1,668.92 tỷ
                                                                                    </td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <div className="section-header-2">Khối lượng
                                                                                NN mua ròng trong phiên
                                                                            </div>
                                                                            <div className="">
                                                                                <div id="gostock-foreign-chart"></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="px-1 pt-1">
                                                                <a href="#"
                                                                   className="btn btn-success btn-rounded waves-effect waves-light btn-block"
                                                                   data-toggle="modal"
                                                                   data-target="#v-pills-tab-3-detail"> <i
                                                                    className="fa fa-info mr-1" aria-hidden="true"></i>
                                                                    <span className="font-semibold">Xem chi tiết</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="v-pills-tab-4">
                                                        <div className="v-pills-pane">
                                                            <div className="v-pills-pane-header">
                                                                <h6 className="v-pills-pane-title d-flex justify-content-between">
                                                                    <select
                                                                        className="selectpicker cust-selectpicker text-align-left show-tick"
                                                                        data-live-search="true" data-style="btn-light">
                                                                        <option>HSX</option>
                                                                        <option>HNX</option>
                                                                        <option>UPCOM</option>
                                                                    </select>
                                                                    <select
                                                                        className="selectpicker cust-selectpicker text-align-right show-tick"
                                                                        data-live-search="true" data-style="btn-light">
                                                                        <option>Tích cực</option>
                                                                        <option data-divider="true"></option>
                                                                        <option>Tăng (+/-)</option>
                                                                        <option>Giảm (+/-)</option>
                                                                        <option data-divider="true"></option>
                                                                        <option>Tăng (%)</option>
                                                                        <option>Giảm (%)</option>
                                                                    </select>
                                                                </h6>
                                                            </div>
                                                            <div className="v-pills-pane-content">
                                                                <div className="scrollbar-inner">
                                                                    <div className="px-1">
                                                                        <div className="watch-list has-content">
                                                                            <table
                                                                                className="table table-dark table-sm fs-12">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th>MÃ CK</th>
                                                                                    <th>GIÁ</th>
                                                                                    <th>+/-</th>
                                                                                    <th>%</th>
                                                                                    <th>KL</th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">ROS</a>
                                                                                    </td>
                                                                                    <td className="text-warning">24.90</td>
                                                                                    <td className="text-danger">-0.10</td>
                                                                                    <td className="text-success">-0.40%</td>
                                                                                    <td>26,666,540</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">FLC</a>
                                                                                    </td>
                                                                                    <td className="text-warning">4.16</td>
                                                                                    <td className="text-danger">-0.31</td>
                                                                                    <td className="text-success">-6.94%</td>
                                                                                    <td>18,595,440</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">HAI</a>
                                                                                    </td>
                                                                                    <td className="text-warning">2.15</td>
                                                                                    <td className="text-danger">-0.16</td>
                                                                                    <td className="text-success">-6.93%</td>
                                                                                    <td>15,701,750</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">VRE</a>
                                                                                    </td>
                                                                                    <td className="text-warning">35.20</td>
                                                                                    <td className="text-danger">0.20</td>
                                                                                    <td className="text-success">0.57%</td>
                                                                                    <td>6,260,710</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">MBB</a>
                                                                                    </td>
                                                                                    <td className="text-warning">22.75</td>
                                                                                    <td className="text-danger">-0.20</td>
                                                                                    <td className="text-success">-0.87%</td>
                                                                                    <td>5,963,420</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">DLG</a>
                                                                                    </td>
                                                                                    <td className="text-warning">1.57</td>
                                                                                    <td className="text-danger">-0.07</td>
                                                                                    <td className="text-success">-4.27%</td>
                                                                                    <td>4,952,190</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">AMD</a>
                                                                                    </td>
                                                                                    <td className="text-warning">1.70</td>
                                                                                    <td className="text-danger">-0.07</td>
                                                                                    <td className="text-success">-3.95%</td>
                                                                                    <td>4,378,980</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">HSG</a>
                                                                                    </td>
                                                                                    <td className="text-warning">7.75</td>
                                                                                    <td className="text-danger">-0.09</td>
                                                                                    <td className="text-success">-1.15%</td>
                                                                                    <td>3,920,780</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">SCR</a>
                                                                                    </td>
                                                                                    <td className="text-warning">5.50</td>
                                                                                    <td className="text-danger">-0.40</td>
                                                                                    <td className="text-success">-6.78%</td>
                                                                                    <td>3,837,060</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">HPG</a>
                                                                                    </td>
                                                                                    <td className="text-warning">22.65</td>
                                                                                    <td className="text-danger">0.00</td>
                                                                                    <td className="text-success">0.00%</td>
                                                                                    <td>3,431,350</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">AAA</a>
                                                                                    </td>
                                                                                    <td className="text-warning">15.05</td>
                                                                                    <td className="text-danger">-0.20</td>
                                                                                    <td className="text-success">-1.31%</td>
                                                                                    <td>2,655,020</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">TSC</a>
                                                                                    </td>
                                                                                    <td className="text-warning">3.98</td>
                                                                                    <td className="text-danger">-0.29</td>
                                                                                    <td className="text-success">-6.79%</td>
                                                                                    <td>2,643,260</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">FPT</a>
                                                                                    </td>
                                                                                    <td className="text-warning">58.60</td>
                                                                                    <td className="text-danger">0.30</td>
                                                                                    <td className="text-success">0.51%</td>
                                                                                    <td>2,568,040</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">CTG</a>
                                                                                    </td>
                                                                                    <td className="text-warning">21.70</td>
                                                                                    <td className="text-danger">0.10</td>
                                                                                    <td className="text-success">0.46%</td>
                                                                                    <td>2,515,020</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">HDB</a>
                                                                                    </td>
                                                                                    <td className="text-warning">28.35</td>
                                                                                    <td className="text-danger">-0.65</td>
                                                                                    <td className="text-success">-2.24%</td>
                                                                                    <td>2,507,740</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">HQC</a>
                                                                                    </td>
                                                                                    <td className="text-warning">1.05</td>
                                                                                    <td className="text-danger">-0.02</td>
                                                                                    <td className="text-success">-1.87%</td>
                                                                                    <td>2,417,570</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">VNM</a>
                                                                                    </td>
                                                                                    <td className="text-warning">123.00</td>
                                                                                    <td className="text-danger">-2.90</td>
                                                                                    <td className="text-success">-2.30%</td>
                                                                                    <td>2,384,360</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">ITA</a>
                                                                                    </td>
                                                                                    <td className="text-warning">3.11</td>
                                                                                    <td className="text-danger">-0.03</td>
                                                                                    <td className="text-success">-0.96%</td>
                                                                                    <td>1,951,270</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">HVG</a>
                                                                                    </td>
                                                                                    <td className="text-warning">6.73</td>
                                                                                    <td className="text-danger">-0.50</td>
                                                                                    <td className="text-success">-6.92%</td>
                                                                                    <td>1,886,870</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">POW</a>
                                                                                    </td>
                                                                                    <td className="text-warning">13.45</td>
                                                                                    <td className="text-danger">0.05</td>
                                                                                    <td className="text-success">0.37%</td>
                                                                                    <td>1,774,620</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">ASM</a>
                                                                                    </td>
                                                                                    <td className="text-warning">6.17</td>
                                                                                    <td className="text-danger">-0.12</td>
                                                                                    <td className="text-success">-1.91%</td>
                                                                                    <td>1,700,240</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">SSI</a>
                                                                                    </td>
                                                                                    <td className="text-warning">21.10</td>
                                                                                    <td className="text-danger">-0.35</td>
                                                                                    <td className="text-success">-1.63%</td>
                                                                                    <td>1,624,740</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">LDG</a>
                                                                                    </td>
                                                                                    <td className="text-warning">10.05</td>
                                                                                    <td className="text-danger">0.00</td>
                                                                                    <td className="text-success">0.00%</td>
                                                                                    <td>1,619,580</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">STB</a>
                                                                                    </td>
                                                                                    <td className="text-warning">10.70</td>
                                                                                    <td className="text-danger">0.00</td>
                                                                                    <td className="text-success">0.00%</td>
                                                                                    <td>1,610,810</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">BCG</a>
                                                                                    </td>
                                                                                    <td className="text-warning">9.11</td>
                                                                                    <td className="text-danger">-0.24</td>
                                                                                    <td className="text-success">-2.57%</td>
                                                                                    <td>1,531,300</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">HBC</a>
                                                                                    </td>
                                                                                    <td className="text-warning">11.80</td>
                                                                                    <td className="text-danger">-0.05</td>
                                                                                    <td className="text-success">-0.42%</td>
                                                                                    <td>1,529,380</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">HAG</a>
                                                                                    </td>
                                                                                    <td className="text-warning">4.01</td>
                                                                                    <td className="text-danger">-0.07</td>
                                                                                    <td className="text-success">-1.72%</td>
                                                                                    <td>1,492,730</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">VPB</a>
                                                                                    </td>
                                                                                    <td className="text-warning">21.40</td>
                                                                                    <td className="text-danger">0.40</td>
                                                                                    <td className="text-success">1.90%</td>
                                                                                    <td>1,380,960</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">TCB</a>
                                                                                    </td>
                                                                                    <td className="text-warning">24.90</td>
                                                                                    <td className="text-danger">0.20</td>
                                                                                    <td className="text-success">0.81%</td>
                                                                                    <td>1,355,990</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><a href="#"
                                                                                           className="text-info font-bold text-hover-underline">IJC</a>
                                                                                    </td>
                                                                                    <td className="text-warning">16.15</td>
                                                                                    <td className="text-danger">0.55</td>
                                                                                    <td className="text-success">3.53%</td>
                                                                                    <td>1,159,660</td>
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
                                            </div>
                                            <div className="col-auto mgr-col-right">
                                                <div className="nav flex-column nav-pills nav-pills-tab"
                                                     id="mgt-tab-nav" role="tablist" aria-orientation="vertical">
                                                    <a title="Watchlist" className="nav-link mb-2"
                                                       id="v-pills-content-1" data-toggle="pill" href="#v-pills-tab-1"
                                                       aria-selected="true">
                                                        <i className="icon-magnifier"></i>
                                                    </a>
                                                    <a title="Cảnh báo" className="nav-link mb-2" id="v-pills-content-2"
                                                       data-toggle="pill" href="#v-pills-tab-2" role="tab"
                                                       aria-selected="false">
                                                        <i className="icon-bell"></i>
                                                    </a>
                                                    <a title="Chi tiết mã CK" className="nav-link mb-2 active show"
                                                       id="v-pills-content-3" data-toggle="pill" href="#v-pills-tab-3"
                                                       role="tab" aria-selected="false">
                                                        <i className="fa fa-info" aria-hidden="true"></i>
                                                    </a>
                                                    <a title="Top cổ phiếu" className="nav-link mb-2"
                                                       id="v-pills-content-4" data-toggle="pill" href="#v-pills-tab-4"
                                                       role="tab" aria-selected="false">
                                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" tabIndex="-1" role="dialog"
                                 aria-labelledby="#v-pills-tab-3-title" aria-hidden="true" id="v-pills-tab-3-detail">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title text-left" id="v-pills-tab-3-title">
                                                CTCP Tập đoàn FLC <span
                                                className="font-normal ml-3 fs-14">HSX:FLC</span> <span
                                                className="text-down font-normal ml-3 fs-14">4.03 <i
                                                className="mdi mdi-arrow-down-bold"></i> -0.13 -3.13%</span>
                                            </h4>
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-hidden="true">×
                                            </button>
                                        </div>
                                        <div className="modal-body p-0">
                                            <div className="px-2">
                                                <ul className="nav nav-tabs nav-bordered">
                                                    <li className="nav-item">
                                                        <a href="#v-pills-tab-3-profile" data-toggle="tab"
                                                           aria-expanded="false" className="nav-link active">
                                                            Hồ sơ
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#v-pills-tab-3-news" data-toggle="tab"
                                                           aria-expanded="false" className="nav-link">
                                                            Tin tức
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#v-pills-tab-3-finance" data-toggle="tab"
                                                           aria-expanded="true" className="nav-link">
                                                            Tài chính
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="px-2 py-2 tab-content-cust">
                                                <div className="tab-content p-0">
                                                    <div className="tab-pane show active" id="v-pills-tab-3-profile">
                                                        <div className="row equal-col">
                                                            <div className="col-xl-7">
                                                                <div className="row h-100">
                                                                    <div className="col-12">
                                                                        <div className="card h-100">
                                                                            <div className="card-header border-bottom">
                                                                                <h4 className="header-title mb-0">GIỚI
                                                                                    THIỆU</h4>
                                                                            </div>
                                                                            <div className="card-body">
                                                                                <p>Công ty Cổ phầnTập đoàn FLC là một
                                                                                    công ty hoạt động trong lĩnh vực bất
                                                                                    động sản mới gia nhập thị trường.
                                                                                    Tuy nhiên, nhờ có đội ngũ quản lý có
                                                                                    nhiều kinh nghiệm trong ngành, Công
                                                                                    ty đang từng bước tạo lập uy tín và
                                                                                    thương hiệu “FLC” trên thị trường.
                                                                                    Số lượng khách hàng của Công ty ngày
                                                                                    càng tăng không chỉ dựa vào mối quan
                                                                                    hệ tốt sẵn có của các cán bộ quản lý
                                                                                    mà còn dựa vào chính chất lượng sản
                                                                                    phẩm dịch vụ mà FLC mang đến cho
                                                                                    khách hàng. FLC định hướng trở thành
                                                                                    một trong những tập đoàn kinh doanh
                                                                                    tư vấn bất động sản hàng đầu tại
                                                                                    Việt Nam.</p>
                                                                                <div className="row">
                                                                                    <div className="col-12 col-lg-6">
                                                                                        <table
                                                                                            className="table table-dark table-bordered mb-0 gs-table table-sm vertical-align-middle">
                                                                                            <thead>
                                                                                            <tr>
                                                                                                <th colSpan="2">Thông
                                                                                                    tin cơ bản
                                                                                                </th>
                                                                                            </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td>Mã SIC</td>
                                                                                                <td className="text-right">1221</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Mã ngành ICB</td>
                                                                                                <td className="text-right">8637</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Năm thành lập</td>
                                                                                                <td className="text-right"></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Vốn điều lệ</td>
                                                                                                <td className="text-right">7,099.98
                                                                                                    tỷ
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Số lượng nhân sự
                                                                                                </td>
                                                                                                <td className="text-right">347</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Số lượng chi nhánh
                                                                                                </td>
                                                                                                <td className="text-right">3</td>
                                                                                            </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                    <div className="col-12 col-lg-6">
                                                                                        <table
                                                                                            className="table table-dark table-bordered mb-0 gs-table table-sm vertical-align-middle">
                                                                                            <thead>
                                                                                            <tr>
                                                                                                <th colSpan="2">Thông
                                                                                                    tin niêm yết
                                                                                                </th>
                                                                                            </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td>Ngày niêm yết</td>
                                                                                                <td className="text-right">06/08/2013</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Nơi niêm yết</td>
                                                                                                <td className="text-right">HSX</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Giá chào sàn</td>
                                                                                                <td className="text-right">5500</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Ngày phát hành
                                                                                                    cuối
                                                                                                </td>
                                                                                                <td className="text-right">09/07/2019</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>KL đang niêm yết
                                                                                                </td>
                                                                                                <td className="text-right">709,997,807</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>GT niêm yết</td>
                                                                                                <td className="text-right">2,861.29
                                                                                                    tỷ
                                                                                                </td>
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
                                                            <div className="col-xl-5">
                                                                <div className="row h-100">
                                                                    <div className="col-12">
                                                                        <div className="card h-100">
                                                                            <div className="card-header border-bottom">
                                                                                <h4 className="header-title mb-0">BAN
                                                                                    LÃNH ĐẠO</h4>
                                                                            </div>
                                                                            <div className="card-body">
                                                                                <div
                                                                                    className="slimscroll scrollbar-inner list-managers">
                                                                                    <div
                                                                                        className="d-flex align-items-center mb-2">
                                                                                        <div className="w-50px">
                                                                                            <div
                                                                                                className="w-100 thumb-ratio ratio-1-1">
                                                                                                <a href=""><img
                                                                                                    src="../assets/images/users/avatar-4.jpg"
                                                                                                    alt=""/></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="news-info flex-grow-1 pl-2">
                                                                                            <a className="mb-0 text-dark fs-14 text-hover-underline"
                                                                                               href="#">Hương Trần Kiều
                                                                                                Dung</a>
                                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Phó
                                                                                                Chủ tịch HĐQT</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="d-flex align-items-center mb-2">
                                                                                        <div className="w-50px">
                                                                                            <div
                                                                                                className="w-100 thumb-ratio ratio-1-1">
                                                                                                <a href=""><img
                                                                                                    src="../assets/images/users/avatar-4.jpg"
                                                                                                    alt=""/></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="news-info flex-grow-1 pl-2">
                                                                                            <a className="mb-0 text-dark fs-14 text-hover-underline"
                                                                                               href="#">Hương Trần Kiều
                                                                                                Dung</a>
                                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Phó
                                                                                                Chủ tịch HĐQT</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="d-flex align-items-center mb-2">
                                                                                        <div className="w-50px">
                                                                                            <div
                                                                                                className="w-100 thumb-ratio ratio-1-1">
                                                                                                <a href=""><img
                                                                                                    src="../assets/images/users/avatar-4.jpg"
                                                                                                    alt=""/></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="news-info flex-grow-1 pl-2">
                                                                                            <a className="mb-0 text-dark fs-14 text-hover-underline"
                                                                                               href="#">Hương Trần Kiều
                                                                                                Dung</a>
                                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Phó
                                                                                                Chủ tịch HĐQT</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="d-flex align-items-center mb-2">
                                                                                        <div className="w-50px">
                                                                                            <div
                                                                                                className="w-100 thumb-ratio ratio-1-1">
                                                                                                <a href=""><img
                                                                                                    src="../assets/images/users/avatar-4.jpg"
                                                                                                    alt=""/></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="news-info flex-grow-1 pl-2">
                                                                                            <a className="mb-0 text-dark fs-14 text-hover-underline"
                                                                                               href="#">Hương Trần Kiều
                                                                                                Dung</a>
                                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Phó
                                                                                                Chủ tịch HĐQT</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="d-flex align-items-center mb-2">
                                                                                        <div className="w-50px">
                                                                                            <div
                                                                                                className="w-100 thumb-ratio ratio-1-1">
                                                                                                <a href=""><img
                                                                                                    src="../assets/images/users/avatar-4.jpg"
                                                                                                    alt=""/></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="news-info flex-grow-1 pl-2">
                                                                                            <a className="mb-0 text-dark fs-14 text-hover-underline"
                                                                                               href="#">Hương Trần Kiều
                                                                                                Dung</a>
                                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Phó
                                                                                                Chủ tịch HĐQT</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="d-flex align-items-center mb-2">
                                                                                        <div className="w-50px">
                                                                                            <div
                                                                                                className="w-100 thumb-ratio ratio-1-1">
                                                                                                <a href=""><img
                                                                                                    src="../assets/images/users/avatar-4.jpg"
                                                                                                    alt=""/></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="news-info flex-grow-1 pl-2">
                                                                                            <a className="mb-0 text-dark fs-14 text-hover-underline"
                                                                                               href="#">Hương Trần Kiều
                                                                                                Dung</a>
                                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Phó
                                                                                                Chủ tịch HĐQT</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="d-flex align-items-center mb-2">
                                                                                        <div className="w-50px">
                                                                                            <div
                                                                                                className="w-100 thumb-ratio ratio-1-1">
                                                                                                <a href=""><img
                                                                                                    src="../assets/images/users/avatar-4.jpg"
                                                                                                    alt=""/></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="news-info flex-grow-1 pl-2">
                                                                                            <a className="mb-0 text-dark fs-14 text-hover-underline"
                                                                                               href="#">Hương Trần Kiều
                                                                                                Dung</a>
                                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Phó
                                                                                                Chủ tịch HĐQT</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="d-flex align-items-center mb-2">
                                                                                        <div className="w-50px">
                                                                                            <div
                                                                                                className="w-100 thumb-ratio ratio-1-1">
                                                                                                <a href=""><img
                                                                                                    src="../assets/images/users/avatar-4.jpg"
                                                                                                    alt=""/></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="news-info flex-grow-1 pl-2">
                                                                                            <a className="mb-0 text-dark fs-14 text-hover-underline"
                                                                                               href="#">Hương Trần Kiều
                                                                                                Dung</a>
                                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Phó
                                                                                                Chủ tịch HĐQT</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="d-flex align-items-center mb-2">
                                                                                        <div className="w-50px">
                                                                                            <div
                                                                                                className="w-100 thumb-ratio ratio-1-1">
                                                                                                <a href=""><img
                                                                                                    src="../assets/images/users/avatar-4.jpg"
                                                                                                    alt=""/></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="news-info flex-grow-1 pl-2">
                                                                                            <a className="mb-0 text-dark fs-14 text-hover-underline"
                                                                                               href="#">Hương Trần Kiều
                                                                                                Dung</a>
                                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Phó
                                                                                                Chủ tịch HĐQT</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="d-flex align-items-center mb-2">
                                                                                        <div className="w-50px">
                                                                                            <div
                                                                                                className="w-100 thumb-ratio ratio-1-1">
                                                                                                <a href=""><img
                                                                                                    src="../assets/images/users/avatar-4.jpg"
                                                                                                    alt=""/></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="news-info flex-grow-1 pl-2">
                                                                                            <a className="mb-0 text-dark fs-14 text-hover-underline"
                                                                                               href="#">Hương Trần Kiều
                                                                                                Dung</a>
                                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Phó
                                                                                                Chủ tịch HĐQT</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="d-flex align-items-center mb-2">
                                                                                        <div className="w-50px">
                                                                                            <div
                                                                                                className="w-100 thumb-ratio ratio-1-1">
                                                                                                <a href=""><img
                                                                                                    src="../assets/images/users/avatar-4.jpg"
                                                                                                    alt=""/></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="news-info flex-grow-1 pl-2">
                                                                                            <a className="mb-0 text-dark fs-14 text-hover-underline"
                                                                                               href="#">Hương Trần Kiều
                                                                                                Dung</a>
                                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Phó
                                                                                                Chủ tịch HĐQT</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="d-flex align-items-center mb-2">
                                                                                        <div className="w-50px">
                                                                                            <div
                                                                                                className="w-100 thumb-ratio ratio-1-1">
                                                                                                <a href=""><img
                                                                                                    src="../assets/images/users/avatar-4.jpg"
                                                                                                    alt=""/></a>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            className="news-info flex-grow-1 pl-2">
                                                                                            <a className="mb-0 text-dark fs-14 text-hover-underline"
                                                                                               href="#">Hương Trần Kiều
                                                                                                Dung</a>
                                                                                            <p className="mb-0 text-muted text-line-3 fs-13">Phó
                                                                                                Chủ tịch HĐQT</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xl-7">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <div className="card">
                                                                            <div className="card-header border-bottom">
                                                                                <h4 className="header-title mb-0">THỐNG
                                                                                    KÊ CƠ BẢN</h4>
                                                                            </div>
                                                                            <div className="card-body">
                                                                                <div className="row">
                                                                                    <div className="col-12 col-lg-6">
                                                                                        <table
                                                                                            className="table table-dark table-bordered mb-0 gs-table table-sm vertical-align-middle">
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td>Thị giá vốn</td>
                                                                                                <td className="text-right">
                                                                                                    <b>2,861.3 tỷ</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Số SLCP lưu hành
                                                                                                </td>
                                                                                                <td className="text-right">
                                                                                                    <b>710.00 triệu</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>EPS</td>
                                                                                                <td className="text-right">
                                                                                                    <b>405</b></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>P/E</td>
                                                                                                <td className="text-right">
                                                                                                    <b>9.96</b></td>
                                                                                            </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                    <div className="col-12 col-lg-6">
                                                                                        <table
                                                                                            className="table table-dark table-bordered mb-0 gs-table table-sm vertical-align-middle">
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td>Doanh thu (4 quý)
                                                                                                </td>
                                                                                                <td className="text-right">
                                                                                                    <b>15,558.46 tỷ</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Lợi nhuận (4 quý)
                                                                                                </td>
                                                                                                <td className="text-right">
                                                                                                    <b>302.42 tỷ</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>Tài sản (Quý gần
                                                                                                    nhất)
                                                                                                </td>
                                                                                                <td className="text-right">
                                                                                                    <b>29,111.65 tỷ</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>ROE (4 quý)</td>
                                                                                                <td className="text-right">
                                                                                                    <b>3.39%</b></td>
                                                                                            </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card">
                                                                            <div className="card-header border-bottom">
                                                                                <h4 className="header-title mb-0">CÔNG
                                                                                    TY CON VÀ LIÊN KẾT</h4>
                                                                            </div>
                                                                            <div className="card-body pt-0">
                                                                                <table
                                                                                    className="fs-12 table table-dark table-sm mt-2 toogle-show-tr"
                                                                                    data-show-max="13">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th className="border-0">Công ty
                                                                                            con
                                                                                        </th>
                                                                                        <th className="border-0 text-right">Vốn
                                                                                            điều lệ
                                                                                        </th>
                                                                                        <th className="border-0 text-right">Tỷ
                                                                                            lệ nắm giữ
                                                                                        </th>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                    <tfoot>
                                                                                    <tr>
                                                                                        <td colSpan="4"
                                                                                            className="text-right"><a
                                                                                            href="#"
                                                                                            className="text-info toogle-show-tr-link"><span
                                                                                            className="toogle-show-tr-text">Xem toàn bộ</span>
                                                                                            <i className="fa fa-caret-down"></i></a>
                                                                                        </td>
                                                                                    </tr>
                                                                                    </tfoot>
                                                                                </table>
                                                                                <table
                                                                                    className="fs-12 table table-dark table-sm mt-2 toogle-show-tr"
                                                                                    data-show-max="10">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th className="border-0">Công ty
                                                                                            liên kết
                                                                                        </th>
                                                                                        <th className="border-0 text-right">Vốn
                                                                                            điều lệ
                                                                                        </th>
                                                                                        <th className="border-0 text-right">Tỷ
                                                                                            lệ nắm giữ
                                                                                        </th>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div
                                                                                                className="d-flex align-items-center">
                                                                                                <i className="fa fa-university fs-20 text-muted"
                                                                                                   aria-hidden="true"></i>
                                                                                                <a href="#"
                                                                                                   className="text-dark ml-2 text-hover-underline"><b>Công
                                                                                                    ty TNHH Hàng không
                                                                                                    Tre Việt</b></a>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td className="text-right">1,300.00
                                                                                            tỷ
                                                                                        </td>
                                                                                        <td className="text-right">100.00%</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-5">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <div className="card">
                                                                            <div className="card-header border-bottom">
                                                                                <h4 className="header-title mb-0">GIAO
                                                                                    DỊCH</h4>
                                                                            </div>
                                                                            <div className="card-body">
                                                                                <div className="table-responsive">
                                                                                    <div
                                                                                        className="tb-slimscroll scrollbar-inner table-scroll-thead tb-details-001" style={{maxHeight:400}}>
                                                                                        <style type="text/css"
                                                                                               media="screen">
                                                                                        </style>
                                                                                        <table
                                                                                            className="table table-dark table-bordered mb-0 gs-table table-sm vertical-align-middle">
                                                                                            <thead>
                                                                                            <tr>
                                                                                                <th>Ngày</th>
                                                                                                <th>Giao dịch</th>
                                                                                                <th>Cổ phiếu</th>
                                                                                                <th>KL</th>
                                                                                            </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td className="text-success">
                                                                                                    <b>13/08/2018</b>
                                                                                                </td>
                                                                                                <td className="text-success">
                                                                                                    <b>MUA</b></td>
                                                                                                <td className="text-success">
                                                                                                    <a href="#"
                                                                                                       className="text-hover-underline"><b>AMD</b></a>
                                                                                                </td>
                                                                                                <td className="text-success">
                                                                                                    <b>1,000,000</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="text-success">
                                                                                                    <b>13/08/2018</b>
                                                                                                </td>
                                                                                                <td className="text-success">
                                                                                                    <b>MUA</b></td>
                                                                                                <td className="text-success">
                                                                                                    <a href="#"
                                                                                                       className="text-hover-underline"><b>AMD</b></a>
                                                                                                </td>
                                                                                                <td className="text-success">
                                                                                                    <b>1,000,000</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="text-success">
                                                                                                    <b>13/08/2018</b>
                                                                                                </td>
                                                                                                <td className="text-success">
                                                                                                    <b>MUA</b></td>
                                                                                                <td className="text-success">
                                                                                                    <a href="#"
                                                                                                       className="text-hover-underline"><b>AMD</b></a>
                                                                                                </td>
                                                                                                <td className="text-success">
                                                                                                    <b>1,000,000</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="text-danger">
                                                                                                    <b>13/08/2018</b>
                                                                                                </td>
                                                                                                <td className="text-danger">
                                                                                                    <b>MUA</b></td>
                                                                                                <td className="text-danger">
                                                                                                    <a href="#"
                                                                                                       className="text-hover-underline"><b>AMD</b></a>
                                                                                                </td>
                                                                                                <td className="text-danger">
                                                                                                    <b>1,000,000</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="text-danger">
                                                                                                    <b>13/08/2018</b>
                                                                                                </td>
                                                                                                <td className="text-danger">
                                                                                                    <b>MUA</b></td>
                                                                                                <td className="text-danger">
                                                                                                    <a href="#"
                                                                                                       className="text-hover-underline"><b>AMD</b></a>
                                                                                                </td>
                                                                                                <td className="text-danger">
                                                                                                    <b>1,000,000</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="text-danger">
                                                                                                    <b>13/08/2018</b>
                                                                                                </td>
                                                                                                <td className="text-danger">
                                                                                                    <b>MUA</b></td>
                                                                                                <td className="text-danger">
                                                                                                    <a href="#"
                                                                                                       className="text-hover-underline"><b>AMD</b></a>
                                                                                                </td>
                                                                                                <td className="text-danger">
                                                                                                    <b>1,000,000</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="text-danger">
                                                                                                    <b>13/08/2018</b>
                                                                                                </td>
                                                                                                <td className="text-danger">
                                                                                                    <b>MUA</b></td>
                                                                                                <td className="text-danger">
                                                                                                    <a href="#"
                                                                                                       className="text-hover-underline"><b>AMD</b></a>
                                                                                                </td>
                                                                                                <td className="text-danger">
                                                                                                    <b>1,000,000</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="text-danger">
                                                                                                    <b>13/08/2018</b>
                                                                                                </td>
                                                                                                <td className="text-danger">
                                                                                                    <b>MUA</b></td>
                                                                                                <td className="text-danger">
                                                                                                    <a href="#"
                                                                                                       className="text-hover-underline"><b>AMD</b></a>
                                                                                                </td>
                                                                                                <td className="text-danger">
                                                                                                    <b>1,000,000</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="text-success">
                                                                                                    <b>13/08/2018</b>
                                                                                                </td>
                                                                                                <td className="text-success">
                                                                                                    <b>MUA</b></td>
                                                                                                <td className="text-success">
                                                                                                    <a href="#"
                                                                                                       className="text-hover-underline"><b>AMD</b></a>
                                                                                                </td>
                                                                                                <td className="text-success">
                                                                                                    <b>1,000,000</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="text-success">
                                                                                                    <b>13/08/2018</b>
                                                                                                </td>
                                                                                                <td className="text-success">
                                                                                                    <b>MUA</b></td>
                                                                                                <td className="text-success">
                                                                                                    <a href="#"
                                                                                                       className="text-hover-underline"><b>AMD</b></a>
                                                                                                </td>
                                                                                                <td className="text-success">
                                                                                                    <b>1,000,000</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="text-success">
                                                                                                    <b>13/08/2018</b>
                                                                                                </td>
                                                                                                <td className="text-success">
                                                                                                    <b>MUA</b></td>
                                                                                                <td className="text-success">
                                                                                                    <a href="#"
                                                                                                       className="text-hover-underline"><b>AMD</b></a>
                                                                                                </td>
                                                                                                <td className="text-success">
                                                                                                    <b>1,000,000</b>
                                                                                                </td>
                                                                                            </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card">
                                                                            <div className="card-header border-bottom">
                                                                                <h4 className="header-title mb-0">CÔNG
                                                                                    TY CÙNG NGÀNH</h4>
                                                                            </div>
                                                                            <div className="card-body">
                                                                                <div className="table-responsive">
                                                                                    <div
                                                                                        className="tb-slimscroll scrollbar-inner table-scroll-thead tb-details-002" style={{maxHeight:400}}>
                                                                                        <style type="text/css"
                                                                                               media="screen">
                                                                                        </style>
                                                                                        <table
                                                                                            className="table table-dark table-bordered mb-0 gs-table table-sm vertical-align-middle">
                                                                                            <thead>
                                                                                            <tr>
                                                                                                <th>CÔNG TY</th>
                                                                                                <th>GIÁ</th>
                                                                                            </tr>
                                                                                            </thead>
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td className="w-auto">
                                                                                                    <p className="mb-0">
                                                                                                        <a href="text-info text-hover-underline"><b>ABC</b></a>
                                                                                                    </p>
                                                                                                    <p className="fs-12 mb-0">CTCP
                                                                                                        Phát triển Đô
                                                                                                        thị Công nghiệp
                                                                                                        Số 2 Hà Nội Việt
                                                                                                        Nam năm 2019</p>
                                                                                                </td>
                                                                                                <td className="fs-12 w-150px">
                                                                                                    <p className="mb-0 text-danger">24.40</p>
                                                                                                    <p className="mb-0 text-danger">-0.20
                                                                                                        -0.81%</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="w-auto">
                                                                                                    <p className="mb-0">
                                                                                                        <a href="text-info text-hover-underline"><b>ABC</b></a>
                                                                                                    </p>
                                                                                                    <p className="fs-12 mb-0">CTCP
                                                                                                        Phát triển Đô
                                                                                                        thị Công nghiệp
                                                                                                        Số 2 Hà Nội Việt
                                                                                                        Nam năm 2019</p>
                                                                                                </td>
                                                                                                <td className="fs-12 w-150px">
                                                                                                    <p className="mb-0 text-warning">24.40</p>
                                                                                                    <p className="mb-0 text-warning">-0.20
                                                                                                        -0.81%</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="w-auto">
                                                                                                    <p className="mb-0">
                                                                                                        <a href="text-info text-hover-underline"><b>ABC</b></a>
                                                                                                    </p>
                                                                                                    <p className="fs-12 mb-0">CTCP
                                                                                                        Phát triển Đô
                                                                                                        thị Công nghiệp
                                                                                                        Số 2 Hà Nội Việt
                                                                                                        Nam năm 2019</p>
                                                                                                </td>
                                                                                                <td className="fs-12 w-150px">
                                                                                                    <p className="mb-0 text-success">24.40</p>
                                                                                                    <p className="mb-0 text-success">-0.20
                                                                                                        -0.81%</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="w-auto">
                                                                                                    <p className="mb-0">
                                                                                                        <a href="text-info text-hover-underline"><b>ABC</b></a>
                                                                                                    </p>
                                                                                                    <p className="fs-12 mb-0">CTCP
                                                                                                        Phát triển Đô
                                                                                                        thị Công nghiệp
                                                                                                        Số 2 Hà Nội Việt
                                                                                                        Nam năm 2019</p>
                                                                                                </td>
                                                                                                <td className="fs-12 w-150px">
                                                                                                    <p className="mb-0 text-danger">24.40</p>
                                                                                                    <p className="mb-0 text-danger">-0.20
                                                                                                        -0.81%</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="w-auto">
                                                                                                    <p className="mb-0">
                                                                                                        <a href="text-info text-hover-underline"><b>ABC</b></a>
                                                                                                    </p>
                                                                                                    <p className="fs-12 mb-0">CTCP
                                                                                                        Phát triển Đô
                                                                                                        thị Công nghiệp
                                                                                                        Số 2 Hà Nội Việt
                                                                                                        Nam năm 2019</p>
                                                                                                </td>
                                                                                                <td className="fs-12 w-150px">
                                                                                                    <p className="mb-0 text-danger">24.40</p>
                                                                                                    <p className="mb-0 text-danger">-0.20
                                                                                                        -0.81%</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="w-auto">
                                                                                                    <p className="mb-0">
                                                                                                        <a href="text-info text-hover-underline"><b>ABC</b></a>
                                                                                                    </p>
                                                                                                    <p className="fs-12 mb-0">CTCP
                                                                                                        Phát triển Đô
                                                                                                        thị Công nghiệp
                                                                                                        Số 2 Hà Nội Việt
                                                                                                        Nam năm 2019</p>
                                                                                                </td>
                                                                                                <td className="fs-12 w-150px">
                                                                                                    <p className="mb-0 text-danger">24.40</p>
                                                                                                    <p className="mb-0 text-danger">-0.20
                                                                                                        -0.81%</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="w-auto">
                                                                                                    <p className="mb-0">
                                                                                                        <a href="text-info text-hover-underline"><b>ABC</b></a>
                                                                                                    </p>
                                                                                                    <p className="fs-12 mb-0">CTCP
                                                                                                        Phát triển Đô
                                                                                                        thị Công nghiệp
                                                                                                        Số 2 Hà Nội Việt
                                                                                                        Nam năm 2019</p>
                                                                                                </td>
                                                                                                <td className="fs-12 w-150px">
                                                                                                    <p className="mb-0 text-danger">24.40</p>
                                                                                                    <p className="mb-0 text-danger">-0.20
                                                                                                        -0.81%</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="w-auto">
                                                                                                    <p className="mb-0">
                                                                                                        <a href="text-info text-hover-underline"><b>ABC</b></a>
                                                                                                    </p>
                                                                                                    <p className="fs-12 mb-0">CTCP
                                                                                                        Phát triển Đô
                                                                                                        thị Công nghiệp
                                                                                                        Số 2 Hà Nội Việt
                                                                                                        Nam năm 2019</p>
                                                                                                </td>
                                                                                                <td className="fs-12 w-150px">
                                                                                                    <p className="mb-0 text-danger">24.40</p>
                                                                                                    <p className="mb-0 text-danger">-0.20
                                                                                                        -0.81%</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="w-auto">
                                                                                                    <p className="mb-0">
                                                                                                        <a href="text-info text-hover-underline"><b>ABC</b></a>
                                                                                                    </p>
                                                                                                    <p className="fs-12 mb-0">CTCP
                                                                                                        Phát triển Đô
                                                                                                        thị Công nghiệp
                                                                                                        Số 2 Hà Nội Việt
                                                                                                        Nam năm 2019</p>
                                                                                                </td>
                                                                                                <td className="fs-12 w-150px">
                                                                                                    <p className="mb-0 text-danger">24.40</p>
                                                                                                    <p className="mb-0 text-danger">-0.20
                                                                                                        -0.81%</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="w-auto">
                                                                                                    <p className="mb-0">
                                                                                                        <a href="text-info text-hover-underline"><b>ABC</b></a>
                                                                                                    </p>
                                                                                                    <p className="fs-12 mb-0">CTCP
                                                                                                        Phát triển Đô
                                                                                                        thị Công nghiệp
                                                                                                        Số 2 Hà Nội Việt
                                                                                                        Nam năm 2019</p>
                                                                                                </td>
                                                                                                <td className="fs-12 w-150px">
                                                                                                    <p className="mb-0 text-danger">24.40</p>
                                                                                                    <p className="mb-0 text-danger">-0.20
                                                                                                        -0.81%</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td className="w-auto">
                                                                                                    <p className="mb-0">
                                                                                                        <a href="text-info text-hover-underline"><b>ABC</b></a>
                                                                                                    </p>
                                                                                                    <p className="fs-12 mb-0">CTCP
                                                                                                        Phát triển Đô
                                                                                                        thị Công nghiệp
                                                                                                        Số 2 Hà Nội Việt
                                                                                                        Nam năm 2019</p>
                                                                                                </td>
                                                                                                <td className="fs-12 w-150px">
                                                                                                    <p className="mb-0 text-danger">24.40</p>
                                                                                                    <p className="mb-0 text-danger">-0.20
                                                                                                        -0.81%</p>
                                                                                                </td>
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
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="v-pills-tab-3-news">
                                                        <div className="card">
                                                            <div className="card-header border-bottom">
                                                                <h4 className="header-title mb-0">Phân tích cơ bản</h4>
                                                            </div>
                                                            <div className="card-body py-0">
                                                                <div className="news-list d-flex flex-column">
                                                                    <div
                                                                        className="news-item border-bottom border-bottom-dark feature-news">
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
                                                                                <a href=""
                                                                                   className="text-dark main-title mb-1 text-hover-underline">Giao
                                                                                    dịch khối ngoại 6/11: Xả 143 tỉ đồng
                                                                                    cổ phiếu toàn thị trường</a>
                                                                                <p className="mb-0 text-muted fs-13">
                                                                                    <span>BizLIVE</span><span
                                                                                    className="mx-1">|</span><span>4 ngày trước</span>
                                                                                </p>
                                                                                <p className="mb-0 text-muted text-line-3 fs-13">Mới
                                                                                    đây, Bộ Thương mại Trung Quốc cho
                                                                                    biết Bắc Kinh và Washington đã đồng
                                                                                    ý dỡ bỏ thuế quan hiện có theo từng
                                                                                    giai đoạn.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="news-item border-bottom border-bottom-dark feature-news">
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
                                                                                <a href=""
                                                                                   className="text-dark main-title mb-1 text-hover-underline">Giao
                                                                                    dịch khối ngoại 6/11: Xả 143 tỉ đồng
                                                                                    cổ phiếu toàn thị trường</a>
                                                                                <p className="mb-0 text-muted fs-13">
                                                                                    <span>BizLIVE</span><span
                                                                                    className="mx-1">|</span><span>4 ngày trước</span>
                                                                                </p>
                                                                                <p className="mb-0 text-muted text-line-3 fs-13">Mới
                                                                                    đây, Bộ Thương mại Trung Quốc cho
                                                                                    biết Bắc Kinh và Washington đã đồng
                                                                                    ý dỡ bỏ thuế quan hiện có theo từng
                                                                                    giai đoạn.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="news-item border-bottom border-bottom-dark feature-news">
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
                                                                                <a href=""
                                                                                   className="text-dark main-title mb-1 text-hover-underline">Giao
                                                                                    dịch khối ngoại 6/11: Xả 143 tỉ đồng
                                                                                    cổ phiếu toàn thị trường</a>
                                                                                <p className="mb-0 text-muted fs-13">
                                                                                    <span>BizLIVE</span><span
                                                                                    className="mx-1">|</span><span>4 ngày trước</span>
                                                                                </p>
                                                                                <p className="mb-0 text-muted text-line-3 fs-13">Mới
                                                                                    đây, Bộ Thương mại Trung Quốc cho
                                                                                    biết Bắc Kinh và Washington đã đồng
                                                                                    ý dỡ bỏ thuế quan hiện có theo từng
                                                                                    giai đoạn.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="news-item border-bottom border-bottom-dark feature-news">
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
                                                                                <a href=""
                                                                                   className="text-dark main-title mb-1 text-hover-underline">Giao
                                                                                    dịch khối ngoại 6/11: Xả 143 tỉ đồng
                                                                                    cổ phiếu toàn thị trường</a>
                                                                                <p className="mb-0 text-muted fs-13">
                                                                                    <span>BizLIVE</span><span
                                                                                    className="mx-1">|</span><span>4 ngày trước</span>
                                                                                </p>
                                                                                <p className="mb-0 text-muted text-line-3 fs-13">Mới
                                                                                    đây, Bộ Thương mại Trung Quốc cho
                                                                                    biết Bắc Kinh và Washington đã đồng
                                                                                    ý dỡ bỏ thuế quan hiện có theo từng
                                                                                    giai đoạn.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="news-item border-bottom border-bottom-dark feature-news">
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
                                                                                <a href=""
                                                                                   className="text-dark main-title mb-1 text-hover-underline">Giao
                                                                                    dịch khối ngoại 6/11: Xả 143 tỉ đồng
                                                                                    cổ phiếu toàn thị trường</a>
                                                                                <p className="mb-0 text-muted fs-13">
                                                                                    <span>BizLIVE</span><span
                                                                                    className="mx-1">|</span><span>4 ngày trước</span>
                                                                                </p>
                                                                                <p className="mb-0 text-muted text-line-3 fs-13">Mới
                                                                                    đây, Bộ Thương mại Trung Quốc cho
                                                                                    biết Bắc Kinh và Washington đã đồng
                                                                                    ý dỡ bỏ thuế quan hiện có theo từng
                                                                                    giai đoạn.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <nav>
                                                                    <ul className="pagination">
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#"
                                                                               aria-label="Previous">
                                                                                <span aria-hidden="true">Đầu</span>
                                                                                <span className="sr-only">Trước</span>
                                                                            </a>
                                                                        </li>
                                                                        <li className="page-item active"><a
                                                                            className="page-link" href="#">1</a></li>
                                                                        <li className="page-item"><a
                                                                            className="page-link" href="#">2</a></li>
                                                                        <li className="page-item"><a
                                                                            className="page-link" href="#">3</a></li>
                                                                        <li className="page-item"><a
                                                                            className="page-link" href="#">4</a></li>
                                                                        <li className="page-item"><a
                                                                            className="page-link" href="#">5</a></li>
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#"
                                                                               aria-label="Next">
                                                                                <span aria-hidden="true">Tiếp</span>
                                                                                <span className="sr-only">Cuối</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </nav>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane" id="v-pills-tab-3-finance">
                                                        <div id="v-pills-tab-3-finance-detail">
                                                            <div className="row">
                                                                <div className="col-12 col-lg-7">
                                                                    <div className="card">
                                                                        <div
                                                                            className="card-header border-bottom align-items-between d-flex justify-content-between">
                                                                            <h4 className="header-title mb-0">DOANH THU
                                                                                (TỶ)</h4>
                                                                        </div>
                                                                        <div className="card-body">
                                                                            <table
                                                                                className="table table-dark table-bordered mb-3 gs-table table-sm vertical-align-middle">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th className="bg-light text-right"></th>
                                                                                    <th className="bg-light text-right"></th>
                                                                                    <th className="bg-light text-right">2016</th>
                                                                                    <th className="bg-light text-right">2017</th>
                                                                                    <th className="bg-light text-right">2018</th>
                                                                                    <th className="bg-light text-right">2019</th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td>Quý 1</td>
                                                                                    <td>
                                                                                        <div className="sale-sparkline"
                                                                                             data-value="[11, 2, 7, 8]"></div>
                                                                                    </td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Quý 2</td>
                                                                                    <td>
                                                                                        <div className="sale-sparkline"
                                                                                             data-value="[3, 6, 1, 1]"></div>
                                                                                    </td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Quý 3</td>
                                                                                    <td>
                                                                                        <div className="sale-sparkline"
                                                                                             data-value="[3, 3, 3, 8]"></div>
                                                                                    </td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Quý 4</td>
                                                                                    <td>
                                                                                        <div className="sale-sparkline"
                                                                                             data-value="[3, 6, 7, 8]"></div>
                                                                                    </td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><b>Năm</b></td>
                                                                                    <td>
                                                                                        <div className="sale-sparkline"
                                                                                             data-value="[2, 6, 2, 8]"></div>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <b>1,437.82</b></td>
                                                                                    <td className="text-right">
                                                                                        <b>1,437.82</b></td>
                                                                                    <td className="text-right">
                                                                                        <b>1,437.82</b></td>
                                                                                    <td className="text-right">
                                                                                        <b>1,437.82</b></td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <div className="row">
                                                                                <div className="col-12 col-lg-6">
                                                                                    <div id="sale_FlowChart_1"></div>
                                                                                </div>
                                                                                <div className="col-12 col-lg-6">
                                                                                    <div id="sale_FlowChart_2"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="card">
                                                                        <div className="card-header border-bottom">
                                                                            <h4 className="header-title mb-0">LỢI NHUẬN
                                                                                (TỶ)</h4>
                                                                        </div>
                                                                        <div className="card-body">
                                                                            <table
                                                                                className="table table-dark table-bordered mb-3 gs-table table-sm vertical-align-middle">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th className="bg-light text-right"></th>
                                                                                    <th className="bg-light text-right"></th>
                                                                                    <th className="bg-light text-right">2016</th>
                                                                                    <th className="bg-light text-right">2017</th>
                                                                                    <th className="bg-light text-right">2018</th>
                                                                                    <th className="bg-light text-right">2019</th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td>Quý 1</td>
                                                                                    <td>
                                                                                        <div className="sale-sparkline"
                                                                                             data-value="[11, 2, 7, 8]"></div>
                                                                                    </td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Quý 2</td>
                                                                                    <td>
                                                                                        <div className="sale-sparkline"
                                                                                             data-value="[3, 6, 1, 1]"></div>
                                                                                    </td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Quý 3</td>
                                                                                    <td>
                                                                                        <div className="sale-sparkline"
                                                                                             data-value="[3, 3, 3, 8]"></div>
                                                                                    </td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Quý 4</td>
                                                                                    <td>
                                                                                        <div className="sale-sparkline"
                                                                                             data-value="[3, 6, 7, 8]"></div>
                                                                                    </td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                    <td className="text-right">1,437.82</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><b>Năm</b></td>
                                                                                    <td>
                                                                                        <div className="sale-sparkline"
                                                                                             data-value="[2, 6, 2, 8]"></div>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <b>1,437.82</b></td>
                                                                                    <td className="text-right">
                                                                                        <b>1,437.82</b></td>
                                                                                    <td className="text-right">
                                                                                        <b>1,437.82</b></td>
                                                                                    <td className="text-right">
                                                                                        <b>1,437.82</b></td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <div className="row">
                                                                                <div className="col-12 col-lg-6">
                                                                                    <div id="sale_FlowChart_3"></div>
                                                                                </div>
                                                                                <div className="col-12 col-lg-6">
                                                                                    <div id="sale_FlowChart_4"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-lg-5">
                                                                    <div className="card">
                                                                        <div className="card-header border-bottom">
                                                                            <h4 className="header-title mb-0">CHỈ TIÊU
                                                                                TÀI CHÍNH</h4>
                                                                        </div>
                                                                        <div className="card-body">
                                                                            <table
                                                                                className="table table-dark table-bordered mb-3 gs-table table-sm vertical-align-middle">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th className="bg-light text-center"
                                                                                        colSpan="2">ĐỊNH GIÁ
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td className="w-auto">P/E</td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>404.65</b></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="w-auto">P/E</td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>404.65</b></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="w-auto">P/E</td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>404.65</b></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="w-auto">P/E</td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>404.65</b></td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <table
                                                                                className="table table-dark table-bordered mb-3 gs-table table-sm vertical-align-middle">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th className="bg-light text-center"
                                                                                        colSpan="2">SỨC MẠNH TÀI CHÍNH
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td className="w-auto">Thanh toán
                                                                                        nhanh
                                                                                    </td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>11</b></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="w-auto">Thanh toán
                                                                                        hiện hành
                                                                                    </td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>22</b></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="w-auto">Tổng nợ/Vốn
                                                                                        CSH
                                                                                    </td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>33</b></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="w-auto">Tổng nợ/Tổng
                                                                                        tài sản
                                                                                    </td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>44</b></td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <table
                                                                                className="table table-dark table-bordered mb-3 gs-table table-sm vertical-align-middle">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th className="bg-light text-center"
                                                                                        colSpan="2">KHẢ NĂNG HOẠT ĐỘNG
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td className="w-auto">Vòng quay
                                                                                        tổng tài sản
                                                                                    </td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>111</b></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="w-auto">Vòng quay
                                                                                        hàng tồn kho
                                                                                    </td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>222</b></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="w-auto">Vòng quay các
                                                                                        khoản phải thu
                                                                                    </td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>212</b></td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <table
                                                                                className="table table-dark table-bordered mb-3 gs-table table-sm vertical-align-middle">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th className="bg-light text-center"
                                                                                        colSpan="2">KHẢ NĂNG SINH LỢI
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td className="w-auto">Tỷ lệ lãi
                                                                                        gộp
                                                                                    </td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>2.31%</b></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="w-auto">Tỷ lệ lãi từ
                                                                                        hoạt động KD
                                                                                    </td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>2.31%</b></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="w-auto">Tỷ lệ EBIT
                                                                                    </td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>2.31%</b></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="w-auto">Tỷ lệ lãi
                                                                                        ròng
                                                                                    </td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b>2.31%</b></td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <table
                                                                                className="table table-dark table-bordered mb-3 gs-table table-sm vertical-align-middle">
                                                                                <thead>
                                                                                <tr>
                                                                                    <th className="bg-light text-center"
                                                                                        colSpan="2">HIỆU QUẢ QUẢN LÝ
                                                                                    </th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td className="w-auto">ROA</td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b className="text-success">1.09%</b>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="w-auto">ROB</td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b className="text-success">1.09%</b>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="w-auto">ROIC</td>
                                                                                    <td className="text-right w-200px">
                                                                                        <b className="text-danger">-11%</b>
                                                                                    </td>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </>
        )
    }
}
export default TechnicalAnalysis;
