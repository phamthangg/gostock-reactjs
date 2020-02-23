import React from "react";
import Topbar from '../../../../../src/components/Topbar';
import LeftSidebar from '../../../../../src/components/LeftSidebar';
import ModalUser from '../../../../../src/components/ModalUser';
class CreateReport extends React.Component {
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
                                    <div className="row">
                                        <div className="col-12 col-lg-8 col-xl-9">
                                            <div
                                                className="mb-3 d-flex target-scroll align-items-center justify-content-between border border-light px-2 py-2 border-radius-3">
                                                <div className="col-12 col-sm-6 ">
                                                    <div className="w-auto">
                                                        <input type="text" name="" id="input"
                                                               className="w-auto  form-control form-control-sm" value=""
                                                               required="required" pattern="" title=""
                                                               placeholder="Search mã"/>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <div className="d-flex align-items-center justify-content-end">
                                                        <label htmlFor="" className="text-nowrap mr-1 mb-0 ">Họ và tên
                                                            người tạo báo cáo:</label>
                                                        <input type="text" name="" id="input"
                                                               className="w-auto  form-control form-control-sm" value=""
                                                               required="required" pattern="" title=""
                                                               placeholder="Họ và tên"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-report">
                                                <div className="card mb-3">
                                                    <div className="card-header bg-light border-bottom">
                                                        <h4 className="header-title mb-0 text-center">Báo cáo được tạo
                                                            bởi: <span>chuyên viên tư vấn Nguyễn Văn A - FPTS</span>
                                                        </h4>
                                                    </div>
                                                    <div className="card-body p-0">
                                                        <div
                                                            className="pl-2 pr-2 pt-2 pb-0 d-flex align-items-center justify-content-between">
                                                            <h4>Tổng công ty máy động lực và máy nông nghiệp Việt Nam
                                                                (VEA)</h4>
                                                            <h4>Báo cáo KQKD</h4>
                                                        </div>
                                                        <div className="report-content pl-2 pr-2 pt-2 pb-0">
                                                            <div className="row">
                                                                <div
                                                                    className="col-12 col-md-6 col-lg-6 col-xl-4 mb-2 px-1">
                                                                    <div className="border border-light h-100 p-2">
                                                                        <table
                                                                            className="table text-dark fs-13 table-borderless table-paddingless table-dark table-bordered mb-0 gs-table table-xs vertical-align-middle">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td><b className="text-info">Ngành</b>
                                                                                </td>
                                                                                <td className="text-right"><b
                                                                                    className="text-info">Ô tô</b></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><b className="text-info">Ngày báo
                                                                                    cáo</b></td>
                                                                                <td className="text-right"><b
                                                                                    className="text-info">20/11/2019</b>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Giá hiện tại</td>
                                                                                <td className="text-right">20.000VND</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Giá mục tiêu</td>
                                                                                <td className="text-right">20.000VND</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>TL tăng</td>
                                                                                <td className="text-right">+13%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Lợi suất cổ tức</td>
                                                                                <td className="text-right">7%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Tổng mức sinh lời</td>
                                                                                <td className="text-right">20%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Khuyến nghị</td>
                                                                                <td className="text-right">MUA</td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-12 col-md-6 col-lg-6 col-xl-4 mb-2 px-1">
                                                                    <div className="border border-light h-100 p-2">
                                                                        <table
                                                                            className="table text-dark fs-13 table-borderless table-paddingless table-dark table-bordered mb-0 gs-table table-xs vertical-align-middle">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td></td>
                                                                                <td className="text-right text-underline">2019</td>
                                                                                <td className="text-right text-underline">Q3.2019 <b
                                                                                    className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                                    aria-hidden="true"
                                                                                    data-toggle="tooltip"
                                                                                    data-html="true" title=""
                                                                                    data-original-title="<em>Lấy quý gần nhất</em>"></b>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Tăng trưởng DT</td>
                                                                                <td className="text-right">7.8%</td>
                                                                                <td className="text-right">21%</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Tăng trưởng EPS</td>
                                                                                <td className="text-right">...</td>
                                                                                <td className="text-right">...</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Biên lợi nhuận gộp</td>
                                                                                <td className="text-right">...</td>
                                                                                <td className="text-right">...</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Biên lợi nhuận ròng</td>
                                                                                <td className="text-right">...</td>
                                                                                <td className="text-right">...</td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-12 col-md-6 col-lg-6 col-xl-4 mb-2 px-1">
                                                                    <div
                                                                        className="border border-light h-100 p-2 d-flex align-items-center">
                                                                        <div id="chart-report-gen"></div>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    className="col-12 col-md-6 col-lg-6 col-xl-4 mb-2 px-1">
                                                                    <div className="border border-light h-100 p-2">
                                                                        <table
                                                                            className="table text-dark fs-13 table-borderless table-paddingless table-dark table-bordered mb-0 gs-table table-xs vertical-align-middle">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td>Giá trị vốn hóa</td>
                                                                                <td className="text-right">3.0 tỷ USD
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>...</td>
                                                                                <td className="text-right">...</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>...</td>
                                                                                <td className="text-right">...</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>...</td>
                                                                                <td className="text-right">...</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>...</td>
                                                                                <td className="text-right">...</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>...</td>
                                                                                <td className="text-right">...</td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-12 col-md-6 col-lg-6 col-xl-4 mb-2 px-1">
                                                                    <div className="border border-light h-100 p-2">
                                                                        <div className="chart-baocao-cocau-parent">
                                                                            <div id="chart-baocao-cocau"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-12 col-md-6 col-lg-6 col-xl-4 mb-2 px-1">
                                                                    <div className="border border-light h-100 p-2">
                                                                        <table
                                                                            className="table text-dark fs-13 table-borderless table-paddingless table-dark table-bordered mb-0 gs-table table-xs vertical-align-middle">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td className="text-underline">Tổng quan
                                                                                    công ty
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    VEA: Tin tức và dữ liệu chi tiết về
                                                                                    Tổng Công ty Máy động lực và Máy
                                                                                    nông nghiệp Việt Nam – CTCP (VEAM):
                                                                                    giá realtime, đồ thị, phân tích,
                                                                                    thống kê giao dịch, ...
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
                                                <div className="p-1">
                                                    <div className="card bg-light">
                                                        <div className="card-body h-100">
                                                            <div
                                                                className="h-100 d-flex align-items-center justify-content-center text-muted fs-12">
                                                                Body người tạo báo cáo tự viết.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 className="mb-1 text-center">Biểu đồ tình hình tài chính</h4>
                                                <div className="row">
                                                    <div className="col-12 col-xl-4">
                                                        <div className="card">
                                                            <div className="card-body pt-1">
                                                                <h4 className="text-white text-center mb-2">Doanh thu
                                                                    thuần</h4>
                                                                <div id="chart-dt-thuan"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-xl-4">
                                                        <div className="card">
                                                            <div className="card-body pt-1">
                                                                <h4 className="text-white text-center mb-2">Lợi nhuận
                                                                    cốt lõi</h4>
                                                                <div id="chart-ln-cotloi"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-xl-4">
                                                        <div className="card">
                                                            <div className="card-body pt-1">
                                                                <h4 className="text-white text-center mb-2">Lợi nhuận
                                                                    sau thuế</h4>
                                                                <div id="chart-ln-sauthue"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 className="mb-1 text-center">Biểu đồ kỹ thuật và các chỉ tiêu kỹ
                                                    thuật</h4>
                                                <div className="p-1">
                                                    <div className="row">
                                                        <div className="col-12 col-md-6">
                                                            <div className="card bg-light h-100">
                                                                <div className="card-body h-100">
                                                                    <div
                                                                        className="h-100 d-flex align-items-center justify-content-center text-muted fs-12">
                                                                        Ng tạo báo cáo chèn hình chart PTKT
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="card bg-light h-100">
                                                                <div className="card-body p-0">
                                                                    <div className="table-responsive mb-2">
                                                                        <table
                                                                            className="table text-dark table-dark table-bordered mb-0 gs-table table-xs vertical-align-middle">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td className="w-100px text-center bg-light">Giá</td>
                                                                                <td className="w-100px text-center bg-light">+/-
                                                                                    Giá
                                                                                </td>
                                                                                <td className="w-100px text-center bg-light">Rating
                                                                                    RS
                                                                                </td>
                                                                                <td className="w-100px text-center bg-light">Sức
                                                                                    mạnh
                                                                                </td>
                                                                                <td className="w-100px text-center bg-light">MA20</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td className="text-center">30</td>
                                                                                <td className="text-center">+5%</td>
                                                                                <td className="text-center bg-danger"></td>
                                                                                <td className="text-center">180</td>
                                                                                <td className="text-center"></td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-center text-muted fs-12 m-2">
                                                                        Các chỉ tiêu ng tạo báo cáo tự thêm
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="mb-3 text-center text-muted">Báo cáo này được tạo bởi nền
                                                    tảng của Gostock.vn</h5>
                                            </div>

                                        </div>
                                        <div className="col-12 col-lg-4 col-xl-3">
                                            <div className="card mb-3">
                                                <div className="card-header border-bottom">
                                                    <h4 className="header-title mb-0">Tùy chọn</h4>
                                                </div>
                                                <div className="card-body pt-1">
                                                    <div className="mb-2">
                                                        <label htmlFor="" className="col-form-label">Chọn biểu đồ tài
                                                            chính</label>
                                                        <select id="" className="form-control">
                                                            <option>Doanh thu thuần</option>
                                                            <option>Lợi nhuận thuần</option>
                                                            <option>Định giá</option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-1">
                                                        <label htmlFor="" className="col-form-label">Chọn chỉ tiêu kỹ
                                                            thuật</label>
                                                        <select id="" className="form-control">
                                                            <option>Chỉ tiêu 1</option>
                                                            <option>Chỉ tiêu 2</option>
                                                            <option>Chỉ tiêu 3</option>
                                                            <option>Chỉ tiêu 4</option>
                                                            <option>Chỉ tiêu 5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card bg-light-transparent mb-3">
                                                <div className="card-body p-0">
                                                    <div className="d-flex align-items-center">
                                                        <a href="#"
                                                           className="mt-0 mb-0 mr-1 btn btn-success waves-effect waves-light btn-block">
                                                            <i className="fa fa-download mr-1"></i> <span
                                                            className="font-semibold">Xuất báo cáo</span>
                                                        </a>
                                                        <a href="#"
                                                           className="mt-0 mb-0 ml-1 btn btn-info waves-effect waves-light btn-block">
                                                            <i className="fa fa-cloud-upload mr-1"></i> <span
                                                            className="font-semibold">Lưu báo cáo</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-3">
                                                <div className="card-header border-bottom">
                                                    <h4 className="header-title mb-0">Các báo cáo đã lưu</h4>
                                                </div>
                                                <div className="card-body pt-1 pr-x pl-3">
                                                    <div
                                                        className="news-list d-flex flex-column slimscroll scrollbar-inner news-list-scroll">
                                                        <div
                                                            className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                            <div className="pt-0 mr-2">
                                                                <span className="text-muted fs-14">1</span>
                                                            </div>
                                                            <div className="">
                                                                <a href=""
                                                                   className="text-dark main-title fs-14 p-0 text-hover-underline">VCB
                                                                    - Báo cáo khuyến nghị 1</a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                            <div className="pt-0 mr-2">
                                                                <span className="text-muted fs-14">2</span>
                                                            </div>
                                                            <div className="">
                                                                <a href=""
                                                                   className="text-dark main-title fs-14 p-0 text-hover-underline">VCB
                                                                    - Báo cáo khuyến nghị 1</a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                            <div className="pt-0 mr-2">
                                                                <span className="text-muted fs-14">3</span>
                                                            </div>
                                                            <div className="">
                                                                <a href=""
                                                                   className="text-dark main-title fs-14 p-0 text-hover-underline">VCB
                                                                    - Báo cáo khuyến nghị 1</a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                            <div className="pt-0 mr-2">
                                                                <span className="text-muted fs-14">4</span>
                                                            </div>
                                                            <div className="">
                                                                <a href=""
                                                                   className="text-dark main-title fs-14 p-0 text-hover-underline">VCB
                                                                    - Báo cáo khuyến nghị 1</a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                            <div className="pt-0 mr-2">
                                                                <span className="text-muted fs-14">5</span>
                                                            </div>
                                                            <div className="">
                                                                <a href=""
                                                                   className="text-dark main-title fs-14 p-0 text-hover-underline">VCB
                                                                    - Báo cáo khuyến nghị 1</a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                            <div className="pt-0 mr-2">
                                                                <span className="text-muted fs-14">6</span>
                                                            </div>
                                                            <div className="">
                                                                <a href=""
                                                                   className="text-dark main-title fs-14 p-0 text-hover-underline">VCB
                                                                    - Báo cáo khuyến nghị 1</a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                            <div className="pt-0 mr-2">
                                                                <span className="text-muted fs-14">7</span>
                                                            </div>
                                                            <div className="">
                                                                <a href=""
                                                                   className="text-dark main-title fs-14 p-0 text-hover-underline">VCB
                                                                    - Báo cáo khuyến nghị 1</a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                            <div className="pt-0 mr-2">
                                                                <span className="text-muted fs-14">8</span>
                                                            </div>
                                                            <div className="">
                                                                <a href=""
                                                                   className="text-dark main-title fs-14 p-0 text-hover-underline">VCB
                                                                    - Báo cáo khuyến nghị 1</a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                            <div className="pt-0 mr-2">
                                                                <span className="text-muted fs-14">9</span>
                                                            </div>
                                                            <div className="">
                                                                <a href=""
                                                                   className="text-dark main-title fs-14 p-0 text-hover-underline">VCB
                                                                    - Báo cáo khuyến nghị 1</a>
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
export default CreateReport;
