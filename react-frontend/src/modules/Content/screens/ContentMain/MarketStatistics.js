import React from "react";
import Topbar from '../../../../../src/components/Topbar';
import LeftSidebar from '../../../../../src/components/LeftSidebar';
import ModalUser from '../../../../../src/components/ModalUser';

class marketStatistics extends React.Component {
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
                                <div className="container-fluid p-0">
                                    <div className="col-12" id="market-statistics-nav">
                                        <nav className="navbar navbar-light bg-light">
                                            <ul className="nav nav-pills">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="#market-statistics-1">Tổng quan
                                                        chứng khoán thế giới và việt nam</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#market-statistics-2">Xu hướng thị
                                                        trường</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#market-statistics-3">Phân hóa thị
                                                        trường</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#market-statistics-4">Xu hướng dòng
                                                        tiền</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#market-statistics-5">Cổ phiếu nổi
                                                        bật</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div id="market-statistics-1" className="scroll-target-item mt-3">
                                        <h4 className="mb-3 d-flex target-scroll align-items-center col-12">Tổng quan
                                            chứng khoán thế giới và việt nam <i
                                                className="fa fa-info-circle ml-1 fs-13 icon-info" aria-hidden="true"
                                                data-toggle="tooltip" data-html="true"
                                                title='<em>Giải thích ý nghĩa</em>'></i></h4>
                                        <div className="scroll-target-div scrollbar-inner slimscroll">
                                            <div className="scroll-target-prev col-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="card">
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <div
                                                                        className="tb-slimscroll scrollbar-inner tb-slimscroll-001" style={{maxHeight:200}}>
                                                                        <style type="text/css" media="screen">

                                                                        </style>
                                                                        <table
                                                                            className="table table-dark table-bordered mb-0 gs-table table-sm table-max-content vertical-align-middle">
                                                                            <thead>
                                                                            <tr>
                                                                                <th colSpan="2"
                                                                                    className="text-center">20/11/2019
                                                                                </th>
                                                                                <th colSpan="2"
                                                                                    className="text-center">20/11/2019
                                                                                </th>
                                                                                <th colSpan="2"
                                                                                    className="text-center">20/11/2019
                                                                                </th>
                                                                                <th colSpan="2"
                                                                                    className="text-center">20/11/2019
                                                                                </th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <tr>
                                                                                <td colSpan="1" rowSpan="3">
                                                                                    <div>VNIDNEX</div>
                                                                                </td>
                                                                                <td>0 Điểm số, % thay đổi 996 (+1%)</td>
                                                                                <td colSpan="1" rowSpan="3">
                                                                                    <div>CK Mỹ</div>
                                                                                </td>
                                                                                <td>DJI (điểm và % thay đổi): 27000</td>
                                                                                <td colSpan="1" rowSpan="3">
                                                                                    <div>CK châu âu</div>
                                                                                </td>
                                                                                <td>DAX</td>
                                                                                <td colSpan="1" rowSpan="4">
                                                                                    <div>CK châu á</div>
                                                                                </td>
                                                                                <td>N225</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>TKL: 1,7M</td>
                                                                                <td>NASDAQ</td>
                                                                                <td>CAC40</td>
                                                                                <td>Hangseng</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Tổng GTGD: 3,200</td>
                                                                                <td>SP500</td>
                                                                                <td>FTSE100</td>
                                                                                <td>Shanghai</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Giá dầu</td>
                                                                                <td></td>
                                                                                <td>Giá vàng</td>
                                                                                <td></td>
                                                                                <td>Lãi suất liên ngân hàng</td>
                                                                                <td></td>
                                                                                <td>KOSPI</td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-body p-0">
                                                                <div
                                                                    className="tb-slimscroll scrollbar-inner tb-slimscroll-002" style={{maxHeight:115}}>
                                                                    <style type="text/css" media="screen">
                                                                    </style>
                                                                    <div className="d-flex list-branch-stock flex-wrap">
                                                                        <div
                                                                            className="px-0 col-12 col-sm-6 col-lg-4 col-xl-3 list-bs-item">
                                                                            <div
                                                                                className="text-center mb-0 lbs-item-title d-flex align-items-center justify-content-center py-1">
                                                                                <span className="mr-2 text-white">Ngành 1</span>
                                                                                <div
                                                                                    className="text-up mr-2 d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-up.svg"
                                                                                         alt="Go Stock Poitn"/><span>234,43</span>
                                                                                </div>
                                                                                <div
                                                                                    className="text-down d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-down.svg"
                                                                                         alt="Go Stock Poitn"/><span>2,43 %</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex lbs-item-content">
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-success">VCB
                                                                                    (+2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-danger">ACB
                                                                                    (-2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white">MBB
                                                                                    (+2%)
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="px-0 col-12 col-sm-6 col-lg-4 col-xl-3 list-bs-item">
                                                                            <div
                                                                                className="text-center mb-0 lbs-item-title d-flex align-items-center justify-content-center py-1">
                                                                                <span className="mr-2 text-white">Ngành 2</span>
                                                                                <div
                                                                                    className="text-up mr-2 d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-up.svg"
                                                                                         alt="Go Stock Poitn"/><span>234,43</span>
                                                                                </div>
                                                                                <div
                                                                                    className="text-down d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-down.svg"
                                                                                         alt="Go Stock Poitn"/><span>2,43 %</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex lbs-item-content">
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-success">VCB
                                                                                    (+2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-danger">ACB
                                                                                    (-2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white">MBB
                                                                                    (+2%)
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="px-0 col-12 col-sm-6 col-lg-4 col-xl-3 list-bs-item">
                                                                            <div
                                                                                className="text-center mb-0 lbs-item-title d-flex align-items-center justify-content-center py-1">
                                                                                <span className="mr-2 text-white">Ngành 3</span>
                                                                                <div
                                                                                    className="text-up mr-2 d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-up.svg"
                                                                                         alt="Go Stock Poitn"/><span>234,43</span>
                                                                                </div>
                                                                                <div
                                                                                    className="text-down d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-down.svg"
                                                                                         alt="Go Stock Poitn"/><span>2,43 %</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex lbs-item-content">
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-success">VCB
                                                                                    (+2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-danger">ACB
                                                                                    (-2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white">MBB
                                                                                    (+2%)
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="px-0 col-12 col-sm-6 col-lg-4 col-xl-3 list-bs-item">
                                                                            <div
                                                                                className="text-center mb-0 lbs-item-title d-flex align-items-center justify-content-center py-1">
                                                                                <span className="mr-2 text-white">Ngành 4</span>
                                                                                <div
                                                                                    className="text-up mr-2 d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-up.svg"
                                                                                         alt="Go Stock Poitn"/><span>234,43</span>
                                                                                </div>
                                                                                <div
                                                                                    className="text-down d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-down.svg"
                                                                                         alt="Go Stock Poitn"/><span>2,43 %</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex lbs-item-content">
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-success">VCB
                                                                                    (+2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-danger">ACB
                                                                                    (-2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white">MBB
                                                                                    (+2%)
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="px-0 col-12 col-sm-6 col-lg-4 col-xl-3 list-bs-item">
                                                                            <div
                                                                                className="text-center mb-0 lbs-item-title d-flex align-items-center justify-content-center py-1">
                                                                                <span className="mr-2 text-white">Ngành 5</span>
                                                                                <div
                                                                                    className="text-up mr-2 d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-up.svg"
                                                                                         alt="Go Stock Poitn"/><span>234,43</span>
                                                                                </div>
                                                                                <div
                                                                                    className="text-down d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-down.svg"
                                                                                         alt="Go Stock Poitn"/><span>2,43 %</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex lbs-item-content">
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-success">VCB
                                                                                    (+2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-danger">ACB
                                                                                    (-2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white">MBB
                                                                                    (+2%)
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="px-0 col-12 col-sm-6 col-lg-4 col-xl-3 list-bs-item">
                                                                            <div
                                                                                className="text-center mb-0 lbs-item-title d-flex align-items-center justify-content-center py-1">
                                                                                <span className="mr-2 text-white">Ngành 6</span>
                                                                                <div
                                                                                    className="text-up mr-2 d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-up.svg"
                                                                                         alt="Go Stock Poitn"/><span>234,43</span>
                                                                                </div>
                                                                                <div
                                                                                    className="text-down d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-down.svg"
                                                                                         alt="Go Stock Poitn"/><span>2,43 %</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex lbs-item-content">
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-success">VCB
                                                                                    (+2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-danger">ACB
                                                                                    (-2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white">MBB
                                                                                    (+2%)
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="px-0 col-12 col-sm-6 col-lg-4 col-xl-3 list-bs-item">
                                                                            <div
                                                                                className="text-center mb-0 lbs-item-title d-flex align-items-center justify-content-center py-1">
                                                                                <span className="mr-2 text-white">Ngành 7</span>
                                                                                <div
                                                                                    className="text-up mr-2 d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-up.svg"
                                                                                         alt="Go Stock Poitn"/><span>234,43</span>
                                                                                </div>
                                                                                <div
                                                                                    className="text-down d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-down.svg"
                                                                                         alt="Go Stock Poitn"/><span>2,43 %</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex lbs-item-content">
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-success">VCB
                                                                                    (+2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-danger">ACB
                                                                                    (-2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white">MBB
                                                                                    (+2%)
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="px-0 col-12 col-sm-6 col-lg-4 col-xl-3 list-bs-item">
                                                                            <div
                                                                                className="text-center mb-0 lbs-item-title d-flex align-items-center justify-content-center py-1">
                                                                                <span className="mr-2 text-white">Ngành 8</span>
                                                                                <div
                                                                                    className="text-up mr-2 d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-up.svg"
                                                                                         alt="Go Stock Poitn"/><span>234,43</span>
                                                                                </div>
                                                                                <div
                                                                                    className="text-down d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-down.svg"
                                                                                         alt="Go Stock Poitn"/><span>2,43 %</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex lbs-item-content">
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-success">VCB
                                                                                    (+2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-danger">ACB
                                                                                    (-2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white">MBB
                                                                                    (+2%)
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="px-0 col-12 col-sm-6 col-lg-4 col-xl-3 list-bs-item">
                                                                            <div
                                                                                className="text-center mb-0 lbs-item-title d-flex align-items-center justify-content-center py-1">
                                                                                <span className="mr-2 text-white">Ngành 9</span>
                                                                                <div
                                                                                    className="text-up mr-2 d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-up.svg"
                                                                                         alt="Go Stock Poitn"/><span>234,43</span>
                                                                                </div>
                                                                                <div
                                                                                    className="text-down d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-down.svg"
                                                                                         alt="Go Stock Poitn"/><span>2,43 %</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex lbs-item-content">
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-success">VCB
                                                                                    (+2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-danger">ACB
                                                                                    (-2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white">MBB
                                                                                    (+2%)
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="px-0 col-12 col-sm-6 col-lg-4 col-xl-3 list-bs-item">
                                                                            <div
                                                                                className="text-center mb-0 lbs-item-title d-flex align-items-center justify-content-center py-1">
                                                                                <span className="mr-2 text-white">Ngành 10</span>
                                                                                <div
                                                                                    className="text-up mr-2 d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-up.svg"
                                                                                         alt="Go Stock Poitn"/><span>234,43</span>
                                                                                </div>
                                                                                <div
                                                                                    className="text-down d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-down.svg"
                                                                                         alt="Go Stock Poitn"/><span>2,43 %</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex lbs-item-content">
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-success">VCB
                                                                                    (+2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-danger">ACB
                                                                                    (-2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white">MBB
                                                                                    (+2%)
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="px-0 col-12 col-sm-6 col-lg-4 col-xl-3 list-bs-item">
                                                                            <div
                                                                                className="text-center mb-0 lbs-item-title d-flex align-items-center justify-content-center py-1">
                                                                                <span className="mr-2 text-white">Ngành 11</span>
                                                                                <div
                                                                                    className="text-up mr-2 d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-up.svg"
                                                                                         alt="Go Stock Poitn"/><span>234,43</span>
                                                                                </div>
                                                                                <div
                                                                                    className="text-down d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-down.svg"
                                                                                         alt="Go Stock Poitn"/><span>2,43 %</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex lbs-item-content">
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-success">VCB
                                                                                    (+2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-danger">ACB
                                                                                    (-2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white">MBB
                                                                                    (+2%)
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="px-0 col-12 col-sm-6 col-lg-4 col-xl-3 list-bs-item">
                                                                            <div
                                                                                className="text-center mb-0 lbs-item-title d-flex align-items-center justify-content-center py-1">
                                                                                <span className="mr-2 text-white">Ngành 12</span>
                                                                                <div
                                                                                    className="text-up mr-2 d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-up.svg"
                                                                                         alt="Go Stock Poitn"/><span>234,43</span>
                                                                                </div>
                                                                                <div
                                                                                    className="text-down d-flex align-items-center">
                                                                                    <img src="../assets/svg/point-down.svg"
                                                                                         alt="Go Stock Poitn"/><span>2,43 %</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex lbs-item-content">
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-success">VCB
                                                                                    (+2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white bg-danger">ACB
                                                                                    (-2%)
                                                                                </div>
                                                                                <div
                                                                                    className="flex-grow-1 d-flex justify-content-center align-items-center text-white">MBB
                                                                                    (+2%)
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
                                    <div id="market-statistics-2" className="scroll-target-item">
                                        <h4 className="mb-3 d-flex target-scroll align-items-center col-12">Xu hướng thị
                                            trường <i className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                      aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                      title='<em>Giải thích ý nghĩa</em>'></i></h4>
                                        <div className="scroll-target-div scrollbar-inner slimscroll">
                                            <div className="scroll-target-prev col-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-12 col-lg-6">
                                                                <div className="card">
                                                                    <div className="card-body p-0">
                                                                        <div className="table-responsive">
                                                                            <div
                                                                                className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-003">
                                                                                <style type="text/css" media="screen" style={{maxHeight:345}} >

                                                                                </style>
                                                                                <table
                                                                                    className="table table-dark table-bordered mb-0 gs-table table-sm vertical-align-middle table-max-content">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th>
                                                                                            <div
                                                                                                className="d-flex justify-content-center align-items-center">
                                                                                                <div
                                                                                                    className="text-success px-1">
                                                                                                    100.2 <i
                                                                                                    className="mdi mdi-arrow-up-bold"></i>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="text-success px-1">
                                                                                                    2.12
                                                                                                </div>
                                                                                                <i className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                                                   aria-hidden="true"
                                                                                                   data-toggle="tooltip"
                                                                                                   data-html="true"
                                                                                                   title=""
                                                                                                   data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                                                            </div>
                                                                                        </th>
                                                                                        <th className="text-center">Tích
                                                                                            cực
                                                                                        </th>
                                                                                        <th className="text-center">Tiêu
                                                                                            cực
                                                                                        </th>
                                                                                        <th className="text-center"></th>
                                                                                        <th className="text-center">Đánh
                                                                                            giá
                                                                                        </th>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td>Mã vượt đỉnh, phá đáy 1
                                                                                            tháng <i
                                                                                                className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                                                aria-hidden="true"
                                                                                                data-toggle="tooltip"
                                                                                                data-html="true"
                                                                                                title=""
                                                                                                data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                                                        </td>
                                                                                        <td>11 Mã vượt đỉnh</td>
                                                                                        <td>22 Mã phá đáy</td>
                                                                                        <td className="text-center"></td>
                                                                                        <td className="bg-success text-center">UP</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Mã vượt đỉnh, phá đáy 6
                                                                                            tháng <i
                                                                                                className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                                                aria-hidden="true"
                                                                                                data-toggle="tooltip"
                                                                                                data-html="true"
                                                                                                title=""
                                                                                                data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                                                        </td>
                                                                                        <td>11 Mã vượt đỉnh</td>
                                                                                        <td>22 Mã phá đáy</td>
                                                                                        <td className="text-danger text-center">Lỏng
                                                                                            lẻo
                                                                                        </td>
                                                                                        <td className="bg-success text-center">UP</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>ROC10 <i
                                                                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                                            aria-hidden="true"
                                                                                            data-toggle="tooltip"
                                                                                            data-html="true" title=""
                                                                                            data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                                                        </td>
                                                                                        <td>122 Mã tăng</td>
                                                                                        <td>222 Mã giảm</td>
                                                                                        <td className="text-success text-center">0.12%</td>
                                                                                        <td className="bg-success text-center">UP</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>ROC20 <i
                                                                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                                            aria-hidden="true"
                                                                                            data-toggle="tooltip"
                                                                                            data-html="true" title=""
                                                                                            data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                                                        </td>
                                                                                        <td>122 Mã tăng</td>
                                                                                        <td>222 Mã giảm</td>
                                                                                        <td className="text-success text-center">0.12%</td>
                                                                                        <td className="bg-success text-center">UP</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>MA20 <i
                                                                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                                            aria-hidden="true"
                                                                                            data-toggle="tooltip"
                                                                                            data-html="true" title=""
                                                                                            data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                                                        </td>
                                                                                        <td>11 Mã nằm trên</td>
                                                                                        <td>100 Mã nằm dưới</td>
                                                                                        <td className="text-success text-center">0.12%</td>
                                                                                        <td className="bg-orange text-center">WEAK</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>MA50 <i
                                                                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                                            aria-hidden="true"
                                                                                            data-toggle="tooltip"
                                                                                            data-html="true" title=""
                                                                                            data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                                                        </td>
                                                                                        <td>11 Mã nằm trên</td>
                                                                                        <td>100 Mã nằm dưới</td>
                                                                                        <td className="text-danger text-center">-1.25%</td>
                                                                                        <td className="bg-danger text-center">DOWN</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Ma200 <i
                                                                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                                            aria-hidden="true"
                                                                                            data-toggle="tooltip"
                                                                                            data-html="true" title=""
                                                                                            data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                                                        </td>
                                                                                        <td>11 Mã nằm trên</td>
                                                                                        <td>100 Mã nằm dưới</td>
                                                                                        <td className="text-danger text-center">-1.25%</td>
                                                                                        <td className="bg-danger text-center">DOWN</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="border-right-0"
                                                                                            colSpan="4"></td>
                                                                                        <td className="text-center text-success font-bold border-left-0">UP</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-lg-6">
                                                                <div className="card mb-4">
                                                                    <div className="card-body p-0">
                                                                        <div className="table-responsive">
                                                                            <div
                                                                                className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-004" style={{maxHeight:160}}>
                                                                                <style type="text/css" media="screen">
                                                                                </style>
                                                                                <table
                                                                                    className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th className="text-white text-center"></th>
                                                                                        <th className="text-white bg-success text-center">today</th>
                                                                                        <th className="text-white bg-success text-center">1
                                                                                            tuần
                                                                                        </th>
                                                                                        <th className="text-white bg-success text-center">1
                                                                                            tháng
                                                                                        </th>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td className="text-white bg-orange text-left">VN300 <i
                                                                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                                            aria-hidden="true"
                                                                                            data-toggle="tooltip"
                                                                                            data-html="true" title=""
                                                                                            data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                                                        </td>
                                                                                        <td className="text-white text-center"></td>
                                                                                        <td className="text-white text-center"></td>
                                                                                        <td className="text-white text-center"></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-white bg-orange text-left">Blues
                                                                                            50 <i
                                                                                                className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                                                aria-hidden="true"
                                                                                                data-toggle="tooltip"
                                                                                                data-html="true"
                                                                                                title=""
                                                                                                data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                                                        </td>
                                                                                        <td className="text-white text-center"></td>
                                                                                        <td className="text-white text-center"></td>
                                                                                        <td className="text-white text-center"></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-white bg-orange text-left">Mid <i
                                                                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                                            aria-hidden="true"
                                                                                            data-toggle="tooltip"
                                                                                            data-html="true" title=""
                                                                                            data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                                                        </td>
                                                                                        <td className="text-white text-center"></td>
                                                                                        <td className="text-white text-center"></td>
                                                                                        <td className="text-white text-center"></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-white bg-orange text-left">Penny <i
                                                                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                                            aria-hidden="true"
                                                                                            data-toggle="tooltip"
                                                                                            data-html="true" title=""
                                                                                            data-original-title="<em>Giải thích ý nghĩa</em>"></i>
                                                                                        </td>
                                                                                        <td className="text-white text-center"></td>
                                                                                        <td className="text-white text-center"></td>
                                                                                        <td className="text-white text-center"></td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card pt-1">
                                                                    <div className="card-body p-0">
                                                                        <div className="table-responsive">
                                                                            <div
                                                                                className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-005" style={{maxHeight:160}}>
                                                                                <style type="text/css" media="screen">
                                                                                </style>
                                                                                <table
                                                                                    className="table table-dark table-bordered mb-0 gs-table table-sm table-max-content vertical-align-middle">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th colSpan="2"
                                                                                            className="border-0 text-center">
                                                                                            <b>Ngành tăng mạnh nhất</b>
                                                                                        </th>
                                                                                        <th colSpan="2"
                                                                                            className="border-0 text-center">
                                                                                            <b>ngành giảm mạnh nhất</b>
                                                                                        </th>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td>Ngành 1</td>
                                                                                        <td></td>
                                                                                        <td>Ngành 1</td>
                                                                                        <td></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Ngành 2</td>
                                                                                        <td></td>
                                                                                        <td>Ngành 2</td>
                                                                                        <td></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>Ngành 3</td>
                                                                                        <td></td>
                                                                                        <td>Ngành 3</td>
                                                                                        <td></td>
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
                                    <div id="market-statistics-3" className="scroll-target-item">
                                        <h4 className="mb-3 d-flex target-scroll align-items-center col-12">Phân hóa thị
                                            trường <i className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                      aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                      title='<em>Giải thích ý nghĩa</em>'></i></h4>
                                        <div className="scroll-target-div scrollbar-inner slimscroll">
                                            <div className="scroll-target-prev col-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-12 col-lg-4">
                                                                <div className="card">
                                                                    <div className="card-body p-0">
                                                                        <div className="table-responsive">
                                                                            <div
                                                                                className="tb-slimscroll scrollbar-inner tb-slimscroll-006" style={{maxHeight:215}}>
                                                                                <style type="text/css" media="screen">

                                                                                </style>
                                                                                <table
                                                                                    className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td className="text-center bg-success">Up</td>
                                                                                        <td className="text-center bg-danger">Down</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-center">3%</td>
                                                                                        <td className="text-center">-4%</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td colSpan="2" rowSpan="1"
                                                                                            className="text-center bg-primary">Tâm
                                                                                            lý thị trường
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-center bg-danger">Nóng</td>
                                                                                        <td className="text-center bg-info">Lạnh</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-center">​​&nbsp;</td>
                                                                                        <td className="text-center">​​&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-center">​​&nbsp;</td>
                                                                                        <td className="text-center">​​&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-center">​​&nbsp;</td>
                                                                                        <td className="text-center">​​&nbsp;</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-lg-4">
                                                                <div className="card">
                                                                    <div className="card-body p-0">
                                                                        <div className="table-responsive">
                                                                            <div
                                                                                className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-007" style={{maxHeight:215}}>
                                                                                <style type="text/css" media="screen">
                                                                                }
                                                                                </style>
                                                                                <table
                                                                                    className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle table-layout-fixed">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th className="bg-primary">Tổng
                                                                                            GTGD 3 sàn
                                                                                        </th>
                                                                                        <th className="bg-primary">Volume</th>
                                                                                        <th className="bg-primary">Value</th>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td className="bg-success">Up</td>
                                                                                        <td>&nbsp;</td>
                                                                                        <td>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="bg-danger">Down</td>
                                                                                        <td>&nbsp;</td>
                                                                                        <td>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="bg-orange">Unchange</td>
                                                                                        <td>&nbsp;</td>
                                                                                        <td>&nbsp;</td>
                                                                                    </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-lg-4">
                                                                <div className="card">
                                                                    <div className="card-body p-0">
                                                                        <div className="table-responsive">
                                                                            <div
                                                                                className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-008" style={{maxHeight:215}}>
                                                                                <style type="text/css" media="screen">
                                                                                </style>
                                                                                <table
                                                                                    className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                                    <thead>
                                                                                    <tr>
                                                                                        <th className="text-center bg-light">VN30</th>
                                                                                        <th className="text-center bg-success">Up</th>
                                                                                        <th className="text-center bg-danger">Down</th>
                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    <tr>
                                                                                        <td className="text-center">1%</td>
                                                                                        <td className="text-center">1</td>
                                                                                        <td className="text-center">2</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-center">2%</td>
                                                                                        <td className="text-center">1</td>
                                                                                        <td className="text-center">2</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-center">3%</td>
                                                                                        <td className="text-center">3</td>
                                                                                        <td className="text-center">4</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-center">4%</td>
                                                                                        <td className="text-center">5</td>
                                                                                        <td className="text-center">6</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-center">5%</td>
                                                                                        <td className="text-center">0</td>
                                                                                        <td className="text-center">0</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td className="text-center">6%</td>
                                                                                        <td className="text-center">0</td>
                                                                                        <td className="text-center">0</td>
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
                                    <div id="market-statistics-4" className="scroll-target-item">
                                        <h4 className="mb-3 d-flex target-scroll align-items-center col-12">Xu hướng
                                            dòng tiền <i className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                         aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                         title='<em>Giải thích ý nghĩa</em>'></i></h4>
                                        <div className="scroll-target-div scrollbar-inner slimscroll">
                                            <div className="scroll-target-prev col-12">
                                                <div className="row">
                                                    <div className="col-12 col-lg-6">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5 className="header-title mb-0">Xu hướng dòng tiền
                                                                    theo vốn hóa</h5>
                                                            </div>
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <div
                                                                        className="tb-slimscroll scrollbar-inner tb-slimscroll-009" style={{maxHeight:160}}>
                                                                        <style type="text/css" media="screen">
                                                                        </style>
                                                                        <table
                                                                            className="table table-dark table-bordered mb-0 mt-1 gs-table table-xs table-max-content vertical-align-middle table-layout-fixed">
                                                                            <colgroup>
                                                                                <col className="w-auto w-lg-175px"/>
                                                                                <col className="w-auto"/>
                                                                                <col className="w-auto w-lg-175px"/>
                                                                                <col className="w-auto"/>
                                                                            </colgroup>
                                                                            <tbody>
                                                                            <tr>
                                                                                <td>&nbsp;</td>
                                                                                <td>&nbsp;</td>
                                                                                <td>&nbsp;</td>
                                                                                <td>&nbsp;</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="bg-danger">dòng tiền
                                                                                    Vn300
                                                                                </td>
                                                                                <td></td>
                                                                                <td className="bg-primary">Vn300</td>
                                                                                <td></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="bg-danger">Dòng tiền
                                                                                    Blues 50
                                                                                </td>
                                                                                <td></td>
                                                                                <td className="bg-primary">Blues 50</td>
                                                                                <td></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="bg-danger">Dòng tiền
                                                                                    MID
                                                                                </td>
                                                                                <td></td>
                                                                                <td className="bg-primary">Mid cap</td>
                                                                                <td></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="bg-danger">Dòng tiền
                                                                                    Penny
                                                                                </td>
                                                                                <td></td>
                                                                                <td className="bg-primary">Penny</td>
                                                                                <td></td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-lg-6">
                                                        <div className="card">
                                                            <div className="card-header d-flex flex-column flex-sm-row">
                                                                <h5 className="col-12 col-sm-auto header-title mb-0 flex-fill">Xu
                                                                    hướng dòng tiền theo nhóm ngành</h5>
                                                                <div className="col-12 col-sm-auto mt-2 mt-sm-0">
                                                                    <select
                                                                        className="form-control form-control-sm width-sm"
                                                                        required="required">
                                                                        <option value="">Tuần</option>
                                                                        <option value="">Ngày</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <div
                                                                        className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-010" style={{maxHeight:160}}>
                                                                        <style type="text/css" media="screen">
                                                                        </style>
                                                                        <table
                                                                            className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                            <thead>
                                                                            <tr>
                                                                                <th className="bg-light">Tên ngành</th>
                                                                                <th className="bg-light text-center">%
                                                                                    dòng tiền vào
                                                                                </th>
                                                                                <th className="bg-light text-center">tổng
                                                                                    giá trị
                                                                                </th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <tr>
                                                                                <td>Ngành 1</td>
                                                                                <td className="text-center">20%</td>
                                                                                <td className="text-center">100 tỷ</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>ngành 2</td>
                                                                                <td className="text-center">15%</td>
                                                                                <td className="text-center">90 tỷ</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>ngành 3</td>
                                                                                <td className="text-center">10%</td>
                                                                                <td className="text-center">80 tỷ</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>ngành 4</td>
                                                                                <td className="text-center">5%</td>
                                                                                <td className="text-center">70 tỷ</td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 ">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5 className="header-title mb-0">Cổ phiếu có dòng tiền
                                                                    vào mạnh gần đây</h5>
                                                            </div>
                                                            <div className="card-body p-0">
                                                                <div className="table-responsive">
                                                                    <div
                                                                        className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-011" style={{maxHeight:330}}>
                                                                        <style type="text/css" media="screen">

                                                                        </style>
                                                                        <table
                                                                            className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle table-layout-fixed">
                                                                            <thead>
                                                                            <tr>
                                                                                <th data-priority="1"
                                                                                    className="text-center">Mã
                                                                                </th>
                                                                                <th data-priority="1"
                                                                                    className="text-center">Giá
                                                                                </th>
                                                                                <th data-priority="1"
                                                                                    className="text-center">% thay đổi
                                                                                </th>
                                                                                <th data-priority="1"
                                                                                    className="text-center">Khối lượng
                                                                                </th>
                                                                                <th data-priority="1"
                                                                                    className="text-center">Giá trị giao
                                                                                    dịch
                                                                                </th>
                                                                                <th data-priority="1"
                                                                                    className="text-center">Xếp hạng RS
                                                                                </th>
                                                                                <th data-priority="1"
                                                                                    className="text-center">Chỉ số tấn
                                                                                    công
                                                                                </th>
                                                                                <th data-priority="1"
                                                                                    className="text-center">Sức mạnh
                                                                                </th>
                                                                            </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            <tr>
                                                                                <td className="text-center">AAA</td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">20</span>
                                                                                </td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">1%</span>
                                                                                </td>
                                                                                <td className="text-center">200</td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">AAA</td>
                                                                                <td className="text-center"><span
                                                                                    className="text-danger">20</span>
                                                                                </td>
                                                                                <td className="text-center"><span
                                                                                    className="text-danger">1%</span>
                                                                                </td>
                                                                                <td className="text-center">200</td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">AAA</td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">20</span>
                                                                                </td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">1%</span>
                                                                                </td>
                                                                                <td className="text-center">200</td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">AAA</td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">20</span>
                                                                                </td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">1%</span>
                                                                                </td>
                                                                                <td className="text-center">200</td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">AAA</td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">20</span>
                                                                                </td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">1%</span>
                                                                                </td>
                                                                                <td className="text-center">200</td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">AAA</td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">20</span>
                                                                                </td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">1%</span>
                                                                                </td>
                                                                                <td className="text-center">200</td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">AAA</td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">20</span>
                                                                                </td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">1%</span>
                                                                                </td>
                                                                                <td className="text-center">200</td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">AAA</td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">20</span>
                                                                                </td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">1%</span>
                                                                                </td>
                                                                                <td className="text-center">200</td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">AAA</td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">20</span>
                                                                                </td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">1%</span>
                                                                                </td>
                                                                                <td className="text-center">200</td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">AAA</td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">20</span>
                                                                                </td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">1%</span>
                                                                                </td>
                                                                                <td className="text-center">200</td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">AAA</td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">20</span>
                                                                                </td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">1%</span>
                                                                                </td>
                                                                                <td className="text-center">200</td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                                <td className="text-center"></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">AAA</td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">20</span>
                                                                                </td>
                                                                                <td className="text-center"><span
                                                                                    className="text-success">1%</span>
                                                                                </td>
                                                                                <td className="text-center">200</td>
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="market-statistics-5" className="scroll-target-item">
                                        <h4 className="mb-3 d-flex target-scroll align-items-center col-12">Cổ phiếu nổi
                                            bật <i className="fa fa-info-circle ml-1 fs-13 icon-info" aria-hidden="true"
                                                   data-toggle="tooltip" data-html="true"
                                                   title='<em>Giải thích ý nghĩa</em>'></i></h4>
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-12 col-lg-4">
                                                    <div className="card">
                                                        <div className="card-body p-0">
                                                            <div className="table-responsive">
                                                                <div
                                                                    style={{maxHeight:330}} className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-012">
                                                                    <style type="text/css" media="screen">
                                                                    </style>
                                                                    <table
                                                                        className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                        <colgroup>
                                                                            <col className="w-100px w-lg-175px"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                        </colgroup>
                                                                        <thead>
                                                                        <tr>
                                                                            <th className="text-center bg-success">Top
                                                                                tăng
                                                                            </th>
                                                                            <th className="text-center">giá</th>
                                                                            <th className="text-center">% thay đổi</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td className="text-center bg-success">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-success">VIC</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-success">SDI</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-success">NTC</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-success">VHM</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-success">6</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-success">7</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-success">8</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-success">9</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-success">10</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-success">11</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-success">12</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-4">
                                                    <div className="card">
                                                        <div className="card-body p-0">
                                                            <div className="table-responsive">
                                                                <div
                                                                    style={{maxHeight:330}} className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-013">
                                                                    <style type="text/css" media="screen">

                                                                    </style>
                                                                    <table
                                                                        className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                        <colgroup>
                                                                            <col className="w-100px w-lg-175px"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                        </colgroup>
                                                                        <thead>
                                                                        <tr>
                                                                            <th className="text-center bg-primary">Top
                                                                                vượt đỉnh
                                                                            </th>
                                                                            <th className="text-center">Giá</th>
                                                                            <th className="text-center">cách đỉnh gần
                                                                                nhất %
                                                                            </th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center">85</td>
                                                                            <td className="text-center">5%</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">6</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">7</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">8</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">9</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">10</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">11</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">12</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-4">
                                                    <div className="card">
                                                        <div className="card-body p-0">
                                                            <div className="table-responsive">
                                                                <div
                                                                    style={{maxHeight:330}} className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-014">
                                                                    <style type="text/css" media="screen">
                                                                    </style>
                                                                    <table
                                                                        className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                        <colgroup>
                                                                            <col className="w-100px w-lg-175px"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                        </colgroup>
                                                                        <thead>
                                                                        <tr>
                                                                            <th className="text-center bg-primary">Top
                                                                                phá đáy
                                                                            </th>
                                                                            <th className="text-center">Giá</th>
                                                                            <th className="text-center">cách đáy gần
                                                                                nhất
                                                                            </th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td className="text-center">FLC</td>
                                                                            <td className="text-center">4</td>
                                                                            <td className="text-center">3%</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">FLC</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">FLC</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">FLC</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">FLC</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">6</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">7</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">8</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">9</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">10</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">11</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">12</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-4">
                                                    <div className="card">
                                                        <div className="card-body p-0">
                                                            <div className="table-responsive">
                                                                <div
                                                                    style={{maxHeight:330}} className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-015">
                                                                    <style type="text/css" media="screen">
                                                                    </style>
                                                                    <table
                                                                        className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                        <colgroup>
                                                                            <col className="w-100px w-lg-175px"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                        </colgroup>
                                                                        <thead>
                                                                        <tr>
                                                                            <th className="text-center bg-danger">Top
                                                                                giảm
                                                                            </th>
                                                                            <th className="text-center">giá</th>
                                                                            <th className="text-center">% thay đổi</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td className="text-center bg-danger">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-danger">VIC</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-danger">SDI</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-danger">NTC</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-danger">VHM</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-danger">6</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-danger">7</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-danger">8</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-danger">9</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-danger">10</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-danger">11</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-danger">12</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-8">
                                                    <div className="card">
                                                        <div className="card-body p-0">
                                                            <div className="table-responsive">
                                                                <div
                                                                    style={{maxHeight:330}} className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-016">
                                                                    <style type="text/css" media="screen">

                                                                    </style>
                                                                    <table
                                                                        className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                        <colgroup>
                                                                            <col className="w-100px w-lg-175px"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                        </colgroup>
                                                                        <thead>
                                                                        <tr>
                                                                            <th className="text-center bg-primary">Đột
                                                                                biến khối lượng
                                                                            </th>
                                                                            <th className="text-center">Giá</th>
                                                                            <th className="text-center">% thay đổi</th>
                                                                            <th className="text-center">Khối lượng</th>
                                                                            <th className="text-center">Điểm đột biến
                                                                            </th>
                                                                            <th className="text-center">Giá trị giao
                                                                                dịch
                                                                            </th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">5%</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">4</td>
                                                                            <td className="text-center">3%</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">6</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">7</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">8</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">9</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">10</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">11</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">12</td>
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
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-4">
                                                    <div className="card">
                                                        <div className="card-body p-0">
                                                            <div className="table-responsive">
                                                                <div
                                                                    style={{maxHeight:330}} className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-017">
                                                                    <style type="text/css" media="screen">

                                                                    </style>
                                                                    <table
                                                                        className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                        <colgroup>
                                                                            <col className="w-100px w-lg-175px"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                        </colgroup>
                                                                        <thead>
                                                                        <tr>
                                                                            <th className="bg-primary text-center">Top
                                                                                RS
                                                                            </th>
                                                                            <th className="text-center">Giá</th>
                                                                            <th className="text-center">% thay đổi</th>
                                                                            <th className="text-center">RS</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">6</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">7</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">8</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">9</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">10</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">11</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">12</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-8">
                                                    <div className="card">
                                                        <div className="card-body p-0">
                                                            <div className="table-responsive">
                                                                <div
                                                                    style={{maxHeight:330}} className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-018">
                                                                    <style type="text/css" media="screen">

                                                                    </style>
                                                                    <table
                                                                        className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                        <colgroup>
                                                                            <col className="w-100px w-lg-auto"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                        </colgroup>
                                                                        <thead>
                                                                        <tr>
                                                                            <th className="text-center bg-primary">Cổ
                                                                                phiếu có tổng điểm cao
                                                                            </th>
                                                                            <th className="text-center">giá</th>
                                                                            <th className="text-center">% thay đôi</th>
                                                                            <th className="text-center">GTGD</th>
                                                                            <th className="text-center">Tổng điểm</th>
                                                                            <th className="text-center">Rating cơ bản
                                                                            </th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center">85</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center bg-green-1">7</td>
                                                                            <td className="text-center">A</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center bg-green-2">6</td>
                                                                            <td className="text-center">A</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center bg-green-3">5</td>
                                                                            <td className="text-center">A</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center bg-green-4">4</td>
                                                                            <td className="text-center">A</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center bg-green-5">3</td>
                                                                            <td className="text-center">A</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center bg-green-5">3</td>
                                                                            <td className="text-center">A</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center bg-green-5">3</td>
                                                                            <td className="text-center">A</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center bg-green-5">3</td>
                                                                            <td className="text-center">A</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center bg-green-5">3</td>
                                                                            <td className="text-center">A</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center bg-green-5">3</td>
                                                                            <td className="text-center">A</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center bg-green-5">3</td>
                                                                            <td className="text-center">A</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center bg-green-5">3</td>
                                                                            <td className="text-center">A</td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-4">
                                                    <div className="card">
                                                        <div className="card-body p-0">
                                                            <div className="table-responsive">
                                                                <div
                                                                    style={{maxHeight:330}} className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-019">
                                                                    <style type="text/css" media="screen">

                                                                    </style>
                                                                    <table
                                                                        className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                        <colgroup>
                                                                            <col className="w-100px w-lg-175px"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                        </colgroup>
                                                                        <thead>
                                                                        <tr>
                                                                            <th className="text-center bg-primary">GD
                                                                                NĐTNN
                                                                            </th>
                                                                            <th className="text-center bg-success">NN
                                                                                mua:
                                                                            </th>
                                                                            <th className="text-center bg-danger">NN
                                                                                bán:
                                                                            </th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td className="text-center">Top 5</td>
                                                                            <td className="text-center">VCB 10 tỷ</td>
                                                                            <td className="text-center">MBB 5 tỷ</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center bg-success"
                                                                                colSpan="1" rowSpan="4">Ròng 5 tỷ
                                                                            </td>
                                                                            <td className="text-center">VIC 8 tỷ</td>
                                                                            <td className="text-center">BVH 4 tỷ</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">FLC 3 tỷ</td>
                                                                            <td className="text-center">TTF 3.5 tỷ</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">HPG 2 tỷ</td>
                                                                            <td className="text-center">HHS 2.5 tỷ</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">MSN 1 tỷ</td>
                                                                            <td className="text-center">NKG 1 tỷ</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center" colSpan="1"
                                                                                rowSpan="4">Ròng 5 tỷ
                                                                            </td>
                                                                            <td className="text-center">VIC 8 tỷ</td>
                                                                            <td className="text-center">BVH 4 tỷ</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">FLC 3 tỷ</td>
                                                                            <td className="text-center">TTF 3.5 tỷ</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">HPG 2 tỷ</td>
                                                                            <td className="text-center">HHS 2.5 tỷ</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">MSN 1 tỷ</td>
                                                                            <td className="text-center">NKG 1 tỷ</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center" colSpan="1"
                                                                                rowSpan="4">Ròng 5 tỷ
                                                                            </td>
                                                                            <td className="text-center">VIC 8 tỷ</td>
                                                                            <td className="text-center">BVH 4 tỷ</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">FLC 3 tỷ</td>
                                                                            <td className="text-center">TTF 3.5 tỷ</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">HPG 2 tỷ</td>
                                                                            <td className="text-center">HHS 2.5 tỷ</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">MSN 1 tỷ</td>
                                                                            <td className="text-center">NKG 1 tỷ</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">Tổng</td>
                                                                            <td className="text-center">24 tỷ</td>
                                                                            <td className="text-center">16 tỷ</td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-8">
                                                    <div className="card">
                                                        <div className="card-body p-0">
                                                            <div className="table-responsive">
                                                                <div
                                                                    style={{maxHeight:330}} className="tb-slimscroll scrollbar-inner table-scroll-thead tb-slimscroll-020">
                                                                    <style type="text/css" media="screen">

                                                                    </style>
                                                                    <table
                                                                        className="table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                        <colgroup>
                                                                            <col className="w-100px w-lg-175px"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                            <col className="w-auto"/>
                                                                        </colgroup>
                                                                        <thead>
                                                                        <tr>
                                                                            <th className="bg-primary text-center">Top
                                                                                sức mạnh
                                                                            </th>
                                                                            <th className="text-center">Giá</th>
                                                                            <th className="text-center">% thay đổi</th>
                                                                            <th className="text-center">RS</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">VCB</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">6</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">7</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">8</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">9</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">10</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">11</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">12</td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center"></td>
                                                                            <td className="text-center">100</td>
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
                </body>
            </>
        )
    }
}
export default marketStatistics;
