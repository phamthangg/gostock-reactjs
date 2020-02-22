import React from "react";
import Topbar from '../../../../../src/components/Topbar';
import LeftSidebar from '../../../../../src/components/LeftSidebar';
import ModalUser from '../../../../../src/components/ModalUser';

class PhilTown extends React.Component {
    render() {
        return (
            <>
                <body className="light-version left-side-menu-dark">
                <div id="wrapper">
                    <Topbar/>
                    <LeftSidebar/>
                    <ModalUser />
                    <div className="content-page">
                        <div className="content py-3">
                            <div className="container-fluid">
                                <div className="mb-3">
                                    <h4 className="mb-2 d-flex">Các mã cần quan tâm
                                    </h4>
                                    <div className="table-responsive">
                                        <div style={{maxHeight:175}} className="tb-slimscroll scrollbar-inner tb-slimscroll-getNews">
                                            <style type="text/css" media="screen">

                                            </style>
                                            <table
                                                className="table table-dark table-bordered mb-0 gs-table table-xs vertical-align-middle">
                                                <thead>
                                                <tr>
                                                    <th className="bg-light text-center" rowSpan="2">STT</th>
                                                    <th className="bg-light text-center" rowSpan="2">Mã chứng khoán</th>
                                                    <th className="bg-light text-center">Meaning<br/>
                                                        <small>(Ý nghĩa)</small></th>
                                                    <th className="bg-light text-center">Moat<br/>
                                                        <small>(Lợi thế cạnh tranh)</small></th>
                                                    <th className="bg-light text-center">Financial<br/>
                                                        <small>(Tài chính)</small></th>
                                                    <th className="bg-light text-center">Management<br/>
                                                        <small>(Ban lãnh đạo)</small></th>
                                                    <th className="bg-light text-center" colSpan="3">Margin of
                                                        safety<br/>
                                                            <small>(Biên an toàn)</small></th>
                                                    <th className="bg-light text-center" rowSpan="2">Tổng điểm đánh
                                                        giá
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <th className="bg-light text-muted text-center fs-12">Điểm đánh
                                                        giá
                                                    </th>
                                                    <th className="bg-light text-muted text-center fs-12">Điểm đánh
                                                        giá
                                                    </th>
                                                    <th className="bg-light text-muted text-center fs-12">Điểm đánh
                                                        giá
                                                    </th>
                                                    <th className="bg-light text-muted text-center fs-12">Điểm đánh
                                                        giá
                                                    </th>
                                                    <th className="bg-light text-muted text-center fs-12">Điểm đánh
                                                        giá
                                                    </th>
                                                    <th className="bg-light text-muted text-center fs-12">Giá trị nội
                                                        tại
                                                    </th>
                                                    <th className="bg-light text-muted text-center fs-12">Giá trị trả
                                                        giá
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="text-center">1</td>
                                                    <td className="text-center">HPG</td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">20 - 30</td>
                                                    <td className="text-center">50</td>
                                                    <td className="text-center">80</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">2</td>
                                                    <td className="text-center">ACB</td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">20 - 30</td>
                                                    <td className="text-center">50</td>
                                                    <td className="text-center">80</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">3</td>
                                                    <td className="text-center">NKG</td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star text-warning"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                            <i className="fa fa-star-o text-muted"
                                                               aria-hidden="true"></i>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">20 - 30</td>
                                                    <td className="text-center">50</td>
                                                    <td className="text-center">80</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h4 className="mb-2 d-flex target-scroll align-items-center justify-content-between">
                                        <div>
                                            Các con số của Phil Town
                                        </div>
                                        <div className="ml-3">
                                            <div className="input-group input-group-sm stock-search cust-search-style">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id=""><i className="fa fa-search"
                                                                                                aria-hidden="true"></i></span>
                                                </div>
                                                <input type="text" className="form-control"
                                                       placeholder="Chọn mã cổ phiếu" aria-label=""/>
                                            </div>
                                        </div>
                                    </h4>
                                    <div className="table-responsive">
                                        <div className="tb-slimscroll scrollbar-inner">
                                            <table
                                                className="table table-dark table-bordered mb-0 gs-table table-xs vertical-align-middle">
                                                <thead>
                                                <tr>
                                                    <th className="bg-light w-auto mw-200px">Moat - Lợi thế cạnh tranh
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">10
                                                        năm
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">7
                                                        năm
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">5
                                                        năm
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">3
                                                        năm
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">1
                                                        năm
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="">ROIC</td>
                                                    <td className="text-center bg-success">29%</td>
                                                    <td className="text-center bg-success">21%</td>
                                                    <td className="text-center bg-warning">9%</td>
                                                    <td className="text-center bg-success">13%</td>
                                                    <td className="text-center bg-light">12%</td>
                                                </tr>
                                                <tr>
                                                    <td className="">Tăng trưởng bình quân VCSH</td>
                                                    <td className="text-center bg-success">30%</td>
                                                    <td className="text-center bg-success">19.4%</td>
                                                    <td className="text-center bg-danger">3%</td>
                                                    <td className="text-center bg-warning">7.1%</td>
                                                    <td className="text-center bg-light">5%</td>
                                                </tr>
                                                <tr>
                                                    <td className="">Tăng trưởng bình quân doanh thu</td>
                                                    <td className="text-center bg-success">27%</td>
                                                    <td className="text-center bg-success">19.2%</td>
                                                    <td className="text-center bg-danger">5%</td>
                                                    <td className="text-center bg-danger">2%</td>
                                                    <td className="text-center bg-light">-3%</td>
                                                </tr>
                                                <tr>
                                                    <td className="">Tăng trưởng bình quân EPS</td>
                                                    <td className="text-center bg-success">25%</td>
                                                    <td className="text-center bg-success">19.7%</td>
                                                    <td className="text-center bg-warning">7.9%</td>
                                                    <td className="text-center bg-warning">7.8%</td>
                                                    <td className="text-center bg-light">6%</td>
                                                </tr>
                                                <tr>
                                                    <td className="">Tăng trưởng bình quân FCF</td>
                                                    <td className="text-center bg-success">25%</td>
                                                    <td className="text-center bg-success">19.7%</td>
                                                    <td className="text-center bg-warning">7.9%</td>
                                                    <td className="text-center bg-warning">7.8%</td>
                                                    <td className="text-center bg-light">6%</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <p className="my-2">
                                        <a href="#" className="text-muted link-to-show text-underline text-hover-info"
                                           data-target="#table-double-moat" data-more="Xem thêm"
                                           data-less="Thu gọn"><span className="link-to-show-txt">Xem thêm</span> - Tốc
                                            độ tăng trưởng kép các chỉ số của lợi thế cạnh tranh <i
                                                className="fa fa-info-circle ml-1 fs-13 icon-info" aria-hidden="true"
                                                data-toggle="tooltip" data-html="true"
                                                title='<em>Giải thích ý nghĩa</em>'></i></a>
                                    </p>
                                    <div className="table-responsive" id="table-double-moat" style={{display:'none'}}>
                                        <div className="tb-slimscroll scrollbar-inner">
                                            <table
                                                className="table table-bordered mb-2 gs-table table-xs vertical-align-middle">
                                                <thead>
                                                <tr>
                                                    <th className="bg-light w-auto mw-200px">Moat - Lợi thế cạnh tranh
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">10
                                                        năm
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">7
                                                        năm
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">5
                                                        năm
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">3
                                                        năm
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">1
                                                        năm
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="">ROIC</td>
                                                    <td className="text-center bg-success">29%</td>
                                                    <td className="text-center bg-success">21%</td>
                                                    <td className="text-center bg-warning">9%</td>
                                                    <td className="text-center bg-success">13%</td>
                                                    <td className="text-center bg-light">12%</td>
                                                </tr>
                                                <tr>
                                                    <td className="">Tăng trưởng kép VCSH</td>
                                                    <td className="text-center bg-success">30%</td>
                                                    <td className="text-center bg-success">19.4%</td>
                                                    <td className="text-center bg-danger">3%</td>
                                                    <td className="text-center bg-warning">7.1%</td>
                                                    <td className="text-center bg-light">5%</td>
                                                </tr>
                                                <tr>
                                                    <td className="">Tăng trưởng kép doanh thu</td>
                                                    <td className="text-center bg-success">27%</td>
                                                    <td className="text-center bg-success">19.2%</td>
                                                    <td className="text-center bg-danger">5%</td>
                                                    <td className="text-center bg-danger">2%</td>
                                                    <td className="text-center bg-light">-3%</td>
                                                </tr>
                                                <tr>
                                                    <td className="">Tăng trưởng kép EPS</td>
                                                    <td className="text-center bg-success">25%</td>
                                                    <td className="text-center bg-success">19.7%</td>
                                                    <td className="text-center bg-warning">7.9%</td>
                                                    <td className="text-center bg-warning">7.8%</td>
                                                    <td className="text-center bg-light">6%</td>
                                                </tr>
                                                <tr>
                                                    <td className="">Tăng trưởng kép FCF</td>
                                                    <td className="text-center bg-success">25%</td>
                                                    <td className="text-center bg-success">19.7%</td>
                                                    <td className="text-center bg-warning">7.9%</td>
                                                    <td className="text-center bg-warning">7.8%</td>
                                                    <td className="text-center bg-light">6%</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="table-responsive">
                                        <div className="tb-slimscroll scrollbar-inner">
                                            <table
                                                className="table table-dark table-bordered mb-3 gs-table table-xs vertical-align-middle">
                                                <thead>
                                                <tr>
                                                    <th className="bg-light w-auto mw-200px">Financial - Tình hình tài
                                                        chính
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">10
                                                        năm
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">7
                                                        năm
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">5
                                                        năm
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">3
                                                        năm
                                                    </th>
                                                    <th className="bg-light w-100px w-md-150px w-lg-200px text-center">1
                                                        năm
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="">Nợ phải trả/VCSH</td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                </tr>
                                                <tr>
                                                    <td className="">FCF/Nợ vay dài hạn</td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                </tr>
                                                <tr>
                                                    <td className="">EBIT/Lãi vay</td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <div className="tb-slimscroll scrollbar-inner">
                                            <table
                                                className="table table-dark table-bordered mb-0 gs-table table-xs vertical-align-middle">
                                                <thead>
                                                <tr>
                                                    <th className="bg-light">Chi tiết các chỉ số</th>
                                                    <th className="bg-light text-center">2019</th>
                                                    <th className="bg-light text-center">2018</th>
                                                    <th className="bg-light text-center">2017</th>
                                                    <th className="bg-light text-center">2016</th>
                                                    <th className="bg-light text-center">2015</th>
                                                    <th className="bg-light text-center">2014</th>
                                                    <th className="bg-light text-center">2013</th>
                                                    <th className="bg-light text-center">2012</th>
                                                    <th className="bg-light text-center">2011</th>
                                                    <th className="bg-light text-center">2010</th>
                                                    <th className="bg-light text-center">2009</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="">ROIC</td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                </tr>
                                                <tr>
                                                    <td className="">Tăng trưởng VCSH</td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                </tr>
                                                <tr>
                                                    <td className="">Tăng trưởng doanh thu</td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                </tr>
                                                <tr>
                                                    <td className="">Tăng trưởng EPS</td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                </tr>
                                                <tr>
                                                    <td className="">Tăng trưởng FCF</td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                </tr>
                                                <tr>
                                                    <td className="">Nợ phải trả/VCSH</td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                </tr>
                                                <tr>
                                                    <td className="">FCF/Nợ vay dài hạn</td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                </tr>
                                                <tr>
                                                    <td className="">EBIT/Lãi vay</td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                    <td className="text-center"></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <h4 className="mb-2 d-flex">Biên an toàn
                                    </h4>
                                    <div className="row">
                                        <div className="col-12 col-lg-5">
                                            <div className="card h-100">
                                                <div className="card-body">
                                                    <form>
                                                        <div className="form-group row d-flex mb-2">
                                                            <label className="col col-form-label" htmlFor="">EPS năm gần
                                                                nhất</label>
                                                            <div className="d-flex align-items-center w-125px">
                                                                <input type="text"
                                                                       className="form-control form-control-sm text-right"
                                                                       id="" value="" placeholder="Nhập giá trị"/>
                                                                    <i className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                       aria-hidden="true" data-toggle="tooltip"
                                                                       data-html="true" title=""
                                                                       data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row d-flex mb-2">
                                                            <label className="col col-form-label" htmlFor="">Tốc độ tăng
                                                                trưởng vốn chủ sở hữu ước tính</label>
                                                            <div className="d-flex align-items-center w-125px">
                                                                <input type="text"
                                                                       className="form-control form-control-sm text-right"
                                                                       id="" value="" placeholder="Nhập giá trị"/>
                                                                    <i className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                       aria-hidden="true" data-toggle="tooltip"
                                                                       data-html="true" title=""
                                                                       data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row d-flex mb-2">
                                                            <label className="col col-form-label" htmlFor="">EPS 10 năm
                                                                tới</label>
                                                            <div className="d-flex align-items-center w-125px">
                                                                <input type="text"
                                                                       className="form-control form-control-sm text-right"
                                                                       id="" value="22" disabled="disabled"/>
                                                                    <i className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                       aria-hidden="true" data-toggle="tooltip"
                                                                       data-html="true" title=""
                                                                       data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row d-flex mb-2">
                                                            <label className="col col-form-label" htmlFor="">P/E 10 năm
                                                                tới</label>
                                                            <div className="d-flex align-items-center w-125px">
                                                                <input type="text"
                                                                       className="form-control form-control-sm text-right"
                                                                       id="" value="11"/>
                                                                    <i className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                       aria-hidden="true" data-toggle="tooltip"
                                                                       data-html="true" title=""
                                                                       data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row d-flex mb-2">
                                                            <label className="col col-form-label" htmlFor="">Giá trị nội
                                                                tại cổ phiếu 10 năm tới</label>
                                                            <div className="d-flex align-items-center w-125px">
                                                                <input type="text"
                                                                       className="form-control form-control-sm text-right"
                                                                       id="" value="12" disabled="disabled"/>
                                                                    <i className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                       aria-hidden="true" data-toggle="tooltip"
                                                                       data-html="true" title=""
                                                                       data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row d-flex mb-2">
                                                            <label className="col col-form-label" htmlFor="">Tỉ lệ sinh
                                                                lời yêu cầu</label>
                                                            <div className="d-flex align-items-center w-125px">
                                                                <input type="text"
                                                                       className="form-control form-control-sm text-right"
                                                                       id="" value="32"/>
                                                                    <i className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                       aria-hidden="true" data-toggle="tooltip"
                                                                       data-html="true" title=""
                                                                       data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row d-flex mb-2">
                                                            <label className="col col-form-label" htmlFor="">Giá trị nội
                                                                tại cổ phiếu hiện tại</label>
                                                            <div className="d-flex align-items-center w-125px">
                                                                <input type="text"
                                                                       className="form-control form-control-sm text-right"
                                                                       id="" value="24" disabled="disabled"/>
                                                                    <i className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                       aria-hidden="true" data-toggle="tooltip"
                                                                       data-html="true" title=""
                                                                       data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row d-flex mb-2">
                                                            <label className="col col-form-label" htmlFor="">Biên an
                                                                toàn</label>
                                                            <div className="d-flex align-items-center w-125px">
                                                                <input type="text"
                                                                       className="form-control form-control-sm text-right"
                                                                       id="" value="15"/>
                                                                    <i className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                       aria-hidden="true" data-toggle="tooltip"
                                                                       data-html="true" title=""
                                                                       data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row d-flex mb-2">
                                                            <label className="col col-form-label" htmlFor="">Giá trị trả
                                                                giá</label>
                                                            <div className="d-flex align-items-center w-125px">
                                                                <input type="text"
                                                                       className="form-control form-control-sm text-right"
                                                                       id="" value="31" disabled="disabled"/>
                                                                    <i className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                       aria-hidden="true" data-toggle="tooltip"
                                                                       data-html="true" title=""
                                                                       data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-7">
                                            <div className="card h-100">
                                                <div className="card-body p-1">
                                                    <div className="philtown_chart_parent w-100 h-100">
                                                        <div id="philtown_chart">
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
export default PhilTown;
