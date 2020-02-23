import React from "react";
import Topbar from '../../../../../src/components/Topbar';
import LeftSidebar from '../../../../../src/components/LeftSidebar';
import ModalUser from '../../../../../src/components/ModalUser';

class Filter extends React.Component {
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
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-header border-bottom p-2">
                                                    <h4 className="header-title mb-0">Bộ lọc cổ phiếu</h4>
                                                </div>
                                                <div className="card-body pt-2 pb-0 px-2">
                                                    <div className="d-flex align-items-center row">
                                                        <div className="col-auto w-200px mb-2">
                                                            <select name="" id=""
                                                                    className="form-control form-control-sm">
                                                                <option value="">Tất cả sàn</option>
                                                                <option value="">HOSE</option>
                                                                <option value="">HNX</option>
                                                                <option value="">VN30</option>
                                                                <option value="">HNX30</option>
                                                                <option value="">UPCOM</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-auto w-200px mb-2">
                                                            <select name="" id=""
                                                                    className="form-control form-control-sm">
                                                                <option value="">Tất cả ngành</option>
                                                                <option value="">Dầu khí</option>
                                                                <option value="">Nguyên vật liệu</option>
                                                                <option value="">Công nghiệp</option>
                                                                <option value="">Hàng Tiêu dùng</option>
                                                                <option value="">Dược phẩm và Y tế</option>
                                                                <option value="">Dịch vụ Tiêu dùng</option>
                                                                <option value="">Viễn thông</option>
                                                                <option value="">Tiện ích Cộng đồng</option>
                                                                <option value="">Tài chính</option>
                                                                <option value="">Ngân hàng</option>
                                                                <option value="">Công nghệ Thông tin</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12 col-lg-6">
                                                            <div className="filter-tabs-content mb-2">
                                                                <div className="bg-light px-2 py-1">THÊM CHỈ TIÊU</div>
                                                                <div className="filter-tabs-left">
                                                                    <div className="row">
                                                                        <div className="col-sm-3 pr-0">
                                                                            <div className="slimscroll scrollbar-inner">
                                                                                <div
                                                                                    className="nav flex-column nav-pills nav-pills-tab"
                                                                                    id="v-pills-tab" role="tablist"
                                                                                    aria-orientation="vertical">
                                                                                    <a className="nav-link active show"
                                                                                       id="" data-toggle="pill"
                                                                                       href="#bo-loc-tab-1" role="tab"
                                                                                       aria-controls=""
                                                                                       aria-selected="true">
                                                                                        Phổ biến
                                                                                    </a>
                                                                                    <a className="nav-link" id=""
                                                                                       data-toggle="pill"
                                                                                       href="#bo-loc-tab-2" role="tab"
                                                                                       aria-controls=""
                                                                                       aria-selected="false">
                                                                                        Tỉ số
                                                                                    </a>
                                                                                    <a className="nav-link" id=""
                                                                                       data-toggle="pill"
                                                                                       href="#bo-loc-tab-3" role="tab"
                                                                                       aria-controls=""
                                                                                       aria-selected="false">
                                                                                        Giá
                                                                                    </a>
                                                                                    <a className="nav-link" id=""
                                                                                       data-toggle="pill"
                                                                                       href="#bo-loc-tab-4" role="tab"
                                                                                       aria-controls=""
                                                                                       aria-selected="false">
                                                                                        Khối lượng & Biến động
                                                                                    </a>
                                                                                    <a className="nav-link" id=""
                                                                                       data-toggle="pill"
                                                                                       href="#bo-loc-tab-5" role="tab"
                                                                                       aria-controls=""
                                                                                       aria-selected="true">
                                                                                        Giá trị GD
                                                                                    </a>
                                                                                    <a className="nav-link" id=""
                                                                                       data-toggle="pill"
                                                                                       href="#bo-loc-tab-6" role="tab"
                                                                                       aria-controls=""
                                                                                       aria-selected="false">
                                                                                        Cơ bản
                                                                                    </a>
                                                                                    <a className="nav-link" id=""
                                                                                       data-toggle="pill"
                                                                                       href="#bo-loc-tab-7" role="tab"
                                                                                       aria-controls=""
                                                                                       aria-selected="false">
                                                                                        Cổ Tức
                                                                                    </a>
                                                                                    <a className="nav-link" id=""
                                                                                       data-toggle="pill"
                                                                                       href="#bo-loc-tab-8" role="tab"
                                                                                       aria-controls=""
                                                                                       aria-selected="false">
                                                                                        Chỉ Số Kĩ Thuật
                                                                                    </a>
                                                                                    <a className="nav-link" id=""
                                                                                       data-toggle="pill"
                                                                                       href="#bo-loc-tab-9" role="tab"
                                                                                       aria-controls=""
                                                                                       aria-selected="false">
                                                                                        Go Stock Indicators
                                                                                    </a>
                                                                                    <a className="nav-link" id=""
                                                                                       data-toggle="pill"
                                                                                       href="#bo-loc-tab-10" role="tab"
                                                                                       aria-controls=""
                                                                                       aria-selected="false">
                                                                                        Tùy biến <b
                                                                                        className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                                                        aria-hidden="true"
                                                                                        data-toggle="tooltip"
                                                                                        data-html="true" title=""
                                                                                        data-original-title="<em>Giải thích ý nghĩa</em>"></b>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-9 filter-tabs-left-ct">
                                                                            <div className="tab-content pt-0">
                                                                                <div
                                                                                    className="tab-pane fade active show"
                                                                                    id="bo-loc-tab-1" role="tabpanel"
                                                                                    aria-labelledby="">
                                                                                    <div
                                                                                        className="slimscroll scrollbar-inner">
                                                                                        <div className="px-1">
                                                                                            <div
                                                                                                className="checkbox my-2 checkbox-info">
                                                                                                <input id="checkbox01"
                                                                                                       type="checkbox"
                                                                                                       checked/>
                                                                                                    <label
                                                                                                        htmlFor="checkbox01">
                                                                                                        Giá
                                                                                                    </label>
                                                                                            </div>
                                                                                            <div
                                                                                                className="checkbox my-2 checkbox-info">
                                                                                                <input id="checkbox02"
                                                                                                       type="checkbox"
                                                                                                       checked/>
                                                                                                    <label
                                                                                                        htmlFor="checkbox02">
                                                                                                        Vốn hóa
                                                                                                    </label>
                                                                                            </div>
                                                                                            <div
                                                                                                className="checkbox my-2 checkbox-info">
                                                                                                <input id="checkbox03"
                                                                                                       type="checkbox"/>
                                                                                                    <label
                                                                                                        htmlFor="checkbox03">
                                                                                                        Demo
                                                                                                    </label>
                                                                                            </div>
                                                                                            <div
                                                                                                className="checkbox my-2 checkbox-info">
                                                                                                <input id="checkbox04"
                                                                                                       type="checkbox"/>
                                                                                                    <label
                                                                                                        htmlFor="checkbox04">
                                                                                                        Demo
                                                                                                    </label>
                                                                                            </div>
                                                                                            <div
                                                                                                className="checkbox my-2 checkbox-info">
                                                                                                <input id="checkbox05"
                                                                                                       type="checkbox"/>
                                                                                                    <label
                                                                                                        htmlFor="checkbox05">
                                                                                                        Demo
                                                                                                    </label>
                                                                                            </div>
                                                                                            <div
                                                                                                className="checkbox my-2 checkbox-info">
                                                                                                <input id="checkbox06"
                                                                                                       type="checkbox"/>
                                                                                                    <label
                                                                                                        htmlFor="checkbox06">
                                                                                                        Demo
                                                                                                    </label>
                                                                                            </div>
                                                                                            <div
                                                                                                className="checkbox my-2 checkbox-info">
                                                                                                <input id="checkbox07"
                                                                                                       type="checkbox"/>
                                                                                                    <label
                                                                                                        htmlFor="checkbox07">
                                                                                                        Demo
                                                                                                    </label>
                                                                                            </div>
                                                                                            <div
                                                                                                className="checkbox my-2 checkbox-info">
                                                                                                <input id="checkbox08"
                                                                                                       type="checkbox"/>
                                                                                                    <label
                                                                                                        htmlFor="checkbox08">
                                                                                                        Demo
                                                                                                    </label>
                                                                                            </div>
                                                                                            <div
                                                                                                className="checkbox my-2 checkbox-info">
                                                                                                <input id="checkbox09"
                                                                                                       type="checkbox"/>
                                                                                                    <label
                                                                                                        htmlFor="checkbox09">
                                                                                                        Demo
                                                                                                    </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tab-pane fade"
                                                                                     id="bo-loc-tab-2" role="tabpanel"
                                                                                     aria-labelledby="">
                                                                                    <div
                                                                                        className="slimscroll scrollbar-inner">
                                                                                        <div className="px-1">
                                                                                            <div
                                                                                                className="checkbox my-2 checkbox-info">
                                                                                                <input id="checkbox22"
                                                                                                       type="checkbox"
                                                                                                       checked/>
                                                                                                    <label
                                                                                                        htmlFor="checkbox22">
                                                                                                        Growth (Go Stock
                                                                                                        Score)
                                                                                                    </label>
                                                                                            </div>
                                                                                            <div
                                                                                                className="checkbox my-2 checkbox-info">
                                                                                                <input id="checkbox33"
                                                                                                       type="checkbox"/>
                                                                                                    <label
                                                                                                        htmlFor="checkbox33">
                                                                                                        Demo
                                                                                                    </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tab-pane fade"
                                                                                     id="bo-loc-tab-3" role="tabpanel"
                                                                                     aria-labelledby="">
                                                                                    <div
                                                                                        className="slimscroll scrollbar-inner">
                                                                                        <div className="px-1">
                                                                                            3333<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>3333
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tab-pane fade"
                                                                                     id="bo-loc-tab-4" role="tabpanel"
                                                                                     aria-labelledby="">
                                                                                    <div
                                                                                        className="slimscroll scrollbar-inner">
                                                                                        <div className="px-1">
                                                                                            4444<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>4444
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tab-pane fade"
                                                                                     id="bo-loc-tab-5" role="tabpanel"
                                                                                     aria-labelledby="">
                                                                                    <div
                                                                                        className="slimscroll scrollbar-inner">
                                                                                        <div className="px-1">
                                                                                            5555<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>5555
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tab-pane fade"
                                                                                     id="bo-loc-tab-6" role="tabpanel"
                                                                                     aria-labelledby="">
                                                                                    <div
                                                                                        className="slimscroll scrollbar-inner">
                                                                                        <div className="px-1">
                                                                                            6666<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>6666
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tab-pane fade"
                                                                                     id="bo-loc-tab-7" role="tabpanel"
                                                                                     aria-labelledby="">
                                                                                    <div
                                                                                        className="slimscroll scrollbar-inner">
                                                                                        <div className="px-1">
                                                                                            7777<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>7777
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tab-pane fade"
                                                                                     id="bo-loc-tab-8" role="tabpanel"
                                                                                     aria-labelledby="">
                                                                                    <div
                                                                                        className="slimscroll scrollbar-inner">
                                                                                        <div className="px-1">
                                                                                            8888<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>8888
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tab-pane fade"
                                                                                     id="bo-loc-tab-9" role="tabpanel"
                                                                                     aria-labelledby="">
                                                                                    <div
                                                                                        className="slimscroll scrollbar-inner">
                                                                                        <div className="px-1">
                                                                                            9999<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>9999
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tab-pane fade"
                                                                                     id="bo-loc-tab-10" role="tabpanel"
                                                                                     aria-labelledby="">
                                                                                    <div
                                                                                        className="slimscroll scrollbar-inner">
                                                                                        <div className="px-1 my-2">
                                                                                            <a href="#"
                                                                                               className="mb-2 btn btn-xs btn-outline-success waves-effect waves-light"><i
                                                                                                className="fa fa-plus mr-1"></i> Thêm
                                                                                                chỉ tiêu</a>
                                                                                            <div
                                                                                                className="mb-2 d-flex align-items-center">
                                                                                                <div
                                                                                                    className="checkbox my-2 checkbox-info">
                                                                                                    <input
                                                                                                        id="checkbox023"
                                                                                                        type="checkbox"
                                                                                                        checked/>
                                                                                                        <label
                                                                                                            htmlFor="checkbox023"></label>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="d-flex align-items-center">
                                                                                                    <div
                                                                                                        className="ct-item mr-2 mb-1">
                                                                                                        <label
                                                                                                            htmlFor=""
                                                                                                            className="col-form-label">Chỉ
                                                                                                            tiêu</label>
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            className="form-control form-control-sm"
                                                                                                            id=""
                                                                                                            placeholder="Chỉ tiêu"/>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="ct-item mr-2 mb-1">
                                                                                                        <label
                                                                                                            htmlFor=""
                                                                                                            className="col-form-label">Thời
                                                                                                            gian</label>
                                                                                                        <select id=""
                                                                                                                className="form-control form-control-sm">
                                                                                                            <option>1
                                                                                                                tháng
                                                                                                            </option>
                                                                                                            <option>3
                                                                                                                tháng
                                                                                                            </option>
                                                                                                            <option>6
                                                                                                                tháng
                                                                                                            </option>
                                                                                                            <option>12
                                                                                                                tháng
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="mb-2 d-flex align-items-center">
                                                                                                <div
                                                                                                    className="checkbox my-2 checkbox-info">
                                                                                                    <input
                                                                                                        id="checkbox033"
                                                                                                        type="checkbox"/>
                                                                                                        <label
                                                                                                            htmlFor="checkbox033"></label>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="d-flex align-items-center">
                                                                                                    <div
                                                                                                        className="ct-item mr-2 mb-1">
                                                                                                        <label
                                                                                                            htmlFor=""
                                                                                                            className="col-form-label">Phép
                                                                                                            toán</label>
                                                                                                        <select id=""
                                                                                                                className="form-control form-control-sm">
                                                                                                            <option>+</option>
                                                                                                            <option>-</option>
                                                                                                            <option>*</option>
                                                                                                            <option>/</option>
                                                                                                        </select>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="ct-item mr-2 mb-1">
                                                                                                        <label
                                                                                                            htmlFor=""
                                                                                                            className="col-form-label">Chỉ
                                                                                                            tiêu</label>
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            className="form-control form-control-sm"
                                                                                                            id=""
                                                                                                            placeholder="Chỉ tiêu"/>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="ct-item mr-2 mb-1">
                                                                                                        <label
                                                                                                            htmlFor=""
                                                                                                            className="col-form-label">Thời
                                                                                                            gian</label>
                                                                                                        <select id=""
                                                                                                                className="form-control form-control-sm">
                                                                                                            <option>1
                                                                                                                tháng
                                                                                                            </option>
                                                                                                            <option>3
                                                                                                                tháng
                                                                                                            </option>
                                                                                                            <option>6
                                                                                                                tháng
                                                                                                            </option>
                                                                                                            <option>12
                                                                                                                tháng
                                                                                                            </option>
                                                                                                        </select>
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
                                                        <div className="col-12 col-lg-6">
                                                            <div className="filter-tabs-content mb-2">
                                                                <div className="bg-light px-2 py-1">CHỈ TIÊU ĐÃ CHỌN
                                                                </div>
                                                                <div className="filter-tabs-right">
                                                                    <div className="col-12 pr-0">
                                                                        <div className="slimscroll scrollbar-inner">
                                                                            <div className="px-1">
                                                                                <div className="my-2">
                                                                                    <div
                                                                                        className="d-flex align-items-center">
                                                                                        <div className="col">
                                                                                            <div
                                                                                                className="checkbox checkbox-info mb-1">
                                                                                                <input id="checkbox66"
                                                                                                       type="checkbox"/>
                                                                                                    <label
                                                                                                        htmlFor="checkbox66"
                                                                                                        className="">
                                                                                                        Growth (Go Stock
                                                                                                        Score)
                                                                                                    </label>
                                                                                            </div>
                                                                                            <div>
                                                                                                <div
                                                                                                    className="radio radio-info form-check-inline mb-1">
                                                                                                    <input type="radio"
                                                                                                           id="inlineRadio1"
                                                                                                           value="option1"
                                                                                                           name=""
                                                                                                           checked/>
                                                                                                        <label
                                                                                                            htmlFor="inlineRadio1"> A </label>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="radio radio-info form-check-inline mb-1">
                                                                                                    <input type="radio"
                                                                                                           id="inlineRadio2"
                                                                                                           value="option1"
                                                                                                           name=""
                                                                                                           checked/>
                                                                                                        <label
                                                                                                            htmlFor="inlineRadio2"> B </label>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="radio radio-info form-check-inline mb-1">
                                                                                                    <input type="radio"
                                                                                                           id="inlineRadio3"
                                                                                                           value="option1"
                                                                                                           name=""/>
                                                                                                        <label
                                                                                                            htmlFor="inlineRadio3"> C </label>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="radio radio-info form-check-inline mb-1">
                                                                                                    <input type="radio"
                                                                                                           id="inlineRadio4"
                                                                                                           value="option1"
                                                                                                           name=""/>
                                                                                                        <label
                                                                                                            htmlFor="inlineRadio4"> D </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-auto">
                                                                                            <a href="#"
                                                                                               className="text-muted"><i
                                                                                                className=" mdi mdi-close-circle"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="my-2">
                                                                                    <div
                                                                                        className="d-flex align-items-center">
                                                                                        <div className="col no-irs">
                                                                                            <p className="mb-0">Giá</p>
                                                                                            <input type="text"
                                                                                                   id="range_03"
                                                                                                   style={{display:'none'}}/>
                                                                                        </div>
                                                                                        <div className="col-auto">
                                                                                            <a href="#"
                                                                                               className="text-muted"><i
                                                                                                className=" mdi mdi-close-circle"></i></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="my-2">
                                                                                    <div
                                                                                        className="d-flex align-items-center">
                                                                                        <div className="col no-irs">
                                                                                            <p className="mb-0">Vốn
                                                                                                hóa</p>
                                                                                            <input type="text"
                                                                                                   id="range_04"
                                                                                                   style={{display:'none'}}/>
                                                                                        </div>
                                                                                        <div className="col-auto">
                                                                                            <a href="#"
                                                                                               className="text-muted"><i
                                                                                                className=" mdi mdi-close-circle"></i></a>
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
                                                    <div className="d-flex justify-content-end">
                                                        <div className="d-flex">
                                                            <a href="#"
                                                               className="mb-2 ml-1 btn btn-xs btn-outline-success waves-effect waves-light">Áp
                                                                dụng</a>
                                                            <a href="#"
                                                               className="mb-2 ml-1 btn btn-xs btn-outline-success waves-effect waves-light"
                                                               data-toggle="modal"
                                                               data-target="#save-filter-modal">Lưu</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header border-bottom p-2">
                                                    <h4 className="header-title mb-0">Kết quả sàng lọc <span
                                                        className="badge badge-danger">100</span></h4>
                                                </div>
                                                <div className="card-body pt-2 pb-2 px-2">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <ul className="nav nav-pills navtab-bg">
                                                            <li className="nav-item">
                                                                <a href="#filter-result-1" data-toggle="tab"
                                                                   aria-expanded="false" className="nav-link active">
                                                                    Tổng quan
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a href="#filter-result-2" data-toggle="tab"
                                                                   aria-expanded="true" className="nav-link">
                                                                    Tài chính
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a href="#filter-result-3" data-toggle="tab"
                                                                   aria-expanded="false" className="nav-link">
                                                                    Kỹ thuật
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <a href="#"
                                                           className="btn btn-xs btn-outline-success waves-effect waves-light"><i
                                                            className="mdi mdi-download mr-1"></i> TẢI XUỐNG</a>
                                                    </div>
                                                    <div className="tab-content">
                                                        <div className="tab-pane show active" id="filter-result-1">
                                                            <div className="table-responsive">
                                                                <div
                                                                    style={{maxHeight:345}} className="tb-slimscroll scrollbar-inner table-scroll-thead tb-filter-result-1">
                                                                    <style type="text/css" media="screen">

                                                                    </style>
                                                                    <table
                                                                        className="table table-dark table-bordered mb-0 gs-table table-sm table-max-content vertical-align-middle">
                                                                        <thead>
                                                                        <tr>
                                                                            <th>Mã</th>
                                                                            <th>Ngành</th>
                                                                            <th className="text-right">Giá</th>
                                                                            <th className="text-right">Vốn hóa</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td>Xây dựng</td>
                                                                            <td className="text-right">30.00</td>
                                                                            <td className="text-right">2.000.000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td>Xây dựng</td>
                                                                            <td className="text-right">30.00</td>
                                                                            <td className="text-right">2.000.000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td>Xây dựng</td>
                                                                            <td className="text-right">30.00</td>
                                                                            <td className="text-right">2.000.000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td>Xây dựng</td>
                                                                            <td className="text-right">30.00</td>
                                                                            <td className="text-right">2.000.000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td>Xây dựng</td>
                                                                            <td className="text-right">30.00</td>
                                                                            <td className="text-right">2.000.000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td>Xây dựng</td>
                                                                            <td className="text-right">30.00</td>
                                                                            <td className="text-right">2.000.000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td>Xây dựng</td>
                                                                            <td className="text-right">30.00</td>
                                                                            <td className="text-right">2.000.000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td>Xây dựng</td>
                                                                            <td className="text-right">30.00</td>
                                                                            <td className="text-right">2.000.000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td>Xây dựng</td>
                                                                            <td className="text-right">30.00</td>
                                                                            <td className="text-right">2.000.000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td>Xây dựng</td>
                                                                            <td className="text-right">30.00</td>
                                                                            <td className="text-right">2.000.000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td>Xây dựng</td>
                                                                            <td className="text-right">30.00</td>
                                                                            <td className="text-right">2.000.000</td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane" id="filter-result-2">
                                                            <div className="table-responsive">
                                                                <div
                                                                    style={{maxHeight:345}} className="tb-slimscroll scrollbar-inner table-scroll-thead tb-filter-result-1">
                                                                    <style type="text/css" media="screen">

                                                                    </style>
                                                                    <table
                                                                        className="table table-dark table-bordered mb-0 gs-table table-sm table-max-content vertical-align-middle">
                                                                        <thead>
                                                                        <tr>
                                                                            <th>Mã</th>
                                                                            <th className="text-right">Giá</th>
                                                                            <th className="text-right">% thay đổi</th>
                                                                            <th className="text-right">Doanh thu (TTM)
                                                                            </th>
                                                                            <th className="text-right">Lợi nhuận (TTM)
                                                                            </th>
                                                                            <th className="text-right">EPS (TTM)</th>
                                                                            <th className="text-right">BVPS (VND)</th>
                                                                            <th className="text-right">P/E</th>
                                                                            <th className="text-right">P/B</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">111</td>
                                                                            <td className="text-right text-success">2%</td>
                                                                            <td className="text-right">200.00</td>
                                                                            <td className="text-right text-danger">-11</td>
                                                                            <td className="text-right text-danger">-1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right  text-warning">0</td>
                                                                            <td className="text-right">1</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">29</td>
                                                                            <td className="text-right text-danger">-11%</td>
                                                                            <td className="text-right">200.00</td>
                                                                            <td className="text-right text-warning">0</td>
                                                                            <td className="text-right text-warning">0</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right text-danger">-1</td>
                                                                            <td className="text-right">1</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">111</td>
                                                                            <td className="text-right text-success">2%</td>
                                                                            <td className="text-right">200.00</td>
                                                                            <td className="text-right text-danger">-11</td>
                                                                            <td className="text-right text-danger">-1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right  text-warning">0</td>
                                                                            <td className="text-right">1</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">29</td>
                                                                            <td className="text-right text-danger">-11%</td>
                                                                            <td className="text-right">200.00</td>
                                                                            <td className="text-right text-warning">0</td>
                                                                            <td className="text-right text-warning">0</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right text-danger">-1</td>
                                                                            <td className="text-right">1</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">111</td>
                                                                            <td className="text-right text-success">2%</td>
                                                                            <td className="text-right">200.00</td>
                                                                            <td className="text-right text-danger">-11</td>
                                                                            <td className="text-right text-danger">-1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right  text-warning">0</td>
                                                                            <td className="text-right">1</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">29</td>
                                                                            <td className="text-right text-danger">-11%</td>
                                                                            <td className="text-right">200.00</td>
                                                                            <td className="text-right text-warning">0</td>
                                                                            <td className="text-right text-warning">0</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right text-danger">-1</td>
                                                                            <td className="text-right">1</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">111</td>
                                                                            <td className="text-right text-success">2%</td>
                                                                            <td className="text-right">200.00</td>
                                                                            <td className="text-right text-danger">-11</td>
                                                                            <td className="text-right text-danger">-1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right  text-warning">0</td>
                                                                            <td className="text-right">1</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">29</td>
                                                                            <td className="text-right text-danger">-11%</td>
                                                                            <td className="text-right">200.00</td>
                                                                            <td className="text-right text-warning">0</td>
                                                                            <td className="text-right text-warning">0</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right text-danger">-1</td>
                                                                            <td className="text-right">1</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">111</td>
                                                                            <td className="text-right text-success">2%</td>
                                                                            <td className="text-right">200.00</td>
                                                                            <td className="text-right text-danger">-11</td>
                                                                            <td className="text-right text-danger">-1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right  text-warning">0</td>
                                                                            <td className="text-right">1</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">29</td>
                                                                            <td className="text-right text-danger">-11%</td>
                                                                            <td className="text-right">200.00</td>
                                                                            <td className="text-right text-warning">0</td>
                                                                            <td className="text-right text-warning">0</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right text-danger">-1</td>
                                                                            <td className="text-right">1</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">111</td>
                                                                            <td className="text-right text-success">2%</td>
                                                                            <td className="text-right">200.00</td>
                                                                            <td className="text-right text-danger">-11</td>
                                                                            <td className="text-right text-danger">-1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right  text-warning">0</td>
                                                                            <td className="text-right">1</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">29</td>
                                                                            <td className="text-right text-danger">-11%</td>
                                                                            <td className="text-right">200.00</td>
                                                                            <td className="text-right text-warning">0</td>
                                                                            <td className="text-right text-warning">0</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right text-danger">-1</td>
                                                                            <td className="text-right">1</td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane" id="filter-result-3">
                                                            <div className="table-responsive">
                                                                <div
                                                                    style={{maxHeight:345}} className="tb-slimscroll scrollbar-inner table-scroll-thead tb-filter-result-1">
                                                                    <style type="text/css" media="screen">

                                                                    </style>
                                                                    <table
                                                                        className="table table-dark table-bordered mb-0 gs-table table-sm table-max-content vertical-align-middle">
                                                                        <thead>
                                                                        <tr>
                                                                            <th>Mã</th>
                                                                            <th className="text-right">Khối lượng</th>
                                                                            <th className="text-right">Giá</th>
                                                                            <th className="text-right">% thay đổi</th>
                                                                            <th className="text-right">MA20</th>
                                                                            <th className="text-right">MA50</th>
                                                                            <th className="text-right">MA100</th>
                                                                            <th className="text-right">RSI</th>
                                                                            <th className="text-right">Mô hình nến</th>
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>

                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">0.2</td>
                                                                            <td className="text-right text-success">111</td>
                                                                            <td className="text-right text-success">2%</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">99</td>
                                                                            <td className="text-right">Hangin Man <i
                                                                                className="mdi mdi-arrow-down-bold text-down"></i>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">12</td>
                                                                            <td className="text-right text-danger">29</td>
                                                                            <td className="text-right text-danger">-11%</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">100</td>
                                                                            <td className="text-right">Hamer <i
                                                                                className="mdi mdi-arrow-up-bold text-up"></i>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">0.2</td>
                                                                            <td className="text-right text-success">111</td>
                                                                            <td className="text-right text-success">2%</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">99</td>
                                                                            <td className="text-right">Hangin Man <i
                                                                                className="mdi mdi-arrow-down-bold text-down"></i>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">12</td>
                                                                            <td className="text-right text-danger">29</td>
                                                                            <td className="text-right text-danger">-11%</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">100</td>
                                                                            <td className="text-right">Hamer <i
                                                                                className="mdi mdi-arrow-up-bold text-up"></i>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">0.2</td>
                                                                            <td className="text-right text-success">111</td>
                                                                            <td className="text-right text-success">2%</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">99</td>
                                                                            <td className="text-right">Hangin Man <i
                                                                                className="mdi mdi-arrow-down-bold text-down"></i>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">12</td>
                                                                            <td className="text-right text-danger">29</td>
                                                                            <td className="text-right text-danger">-11%</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">100</td>
                                                                            <td className="text-right">Hamer <i
                                                                                className="mdi mdi-arrow-up-bold text-up"></i>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">0.2</td>
                                                                            <td className="text-right text-success">111</td>
                                                                            <td className="text-right text-success">2%</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">99</td>
                                                                            <td className="text-right">Hangin Man <i
                                                                                className="mdi mdi-arrow-down-bold text-down"></i>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">12</td>
                                                                            <td className="text-right text-danger">29</td>
                                                                            <td className="text-right text-danger">-11%</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">100</td>
                                                                            <td className="text-right">Hamer <i
                                                                                className="mdi mdi-arrow-up-bold text-up"></i>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">0.2</td>
                                                                            <td className="text-right text-success">111</td>
                                                                            <td className="text-right text-success">2%</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">99</td>
                                                                            <td className="text-right">Hangin Man <i
                                                                                className="mdi mdi-arrow-down-bold text-down"></i>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">12</td>
                                                                            <td className="text-right text-danger">29</td>
                                                                            <td className="text-right text-danger">-11%</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">100</td>
                                                                            <td className="text-right">Hamer <i
                                                                                className="mdi mdi-arrow-up-bold text-up"></i>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">0.2</td>
                                                                            <td className="text-right text-success">111</td>
                                                                            <td className="text-right text-success">2%</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">99</td>
                                                                            <td className="text-right">Hangin Man <i
                                                                                className="mdi mdi-arrow-down-bold text-down"></i>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><a href="#"
                                                                                   className="text-info font-bold text-hover-underline">ROS</a>
                                                                            </td>
                                                                            <td className="text-right">12</td>
                                                                            <td className="text-right text-danger">29</td>
                                                                            <td className="text-right text-danger">-11%</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">1</td>
                                                                            <td className="text-right">100</td>
                                                                            <td className="text-right">Hamer <i
                                                                                className="mdi mdi-arrow-up-bold text-up"></i>
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
                            <div className="modal fade" id="save-filter-modal" tabIndex="-1" role="dialog"
                                 aria-labelledby="" aria-hidden="true" style={{display:'none'}}>
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title" id="">
                                                <small>Lưu bộ lọc</small>
                                            </h4>
                                            <button type="button" className="close" data-dismiss="modal"
                                                    aria-hidden="true">×
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <input type="text" name="" id=""
                                                           className="form-control form-control-sm" value=""
                                                           required="required" title="" placeholder="Đặt tên bộ lọc"/>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <div className="d-flex justify-content-end">
                                                        <button type="button"
                                                                className="ml-1 btn btn-xs btn-danger waves-effect waves-light"
                                                                data-dismiss="modal">Hủy
                                                        </button>
                                                        <button type="submit"
                                                                className="ml-1 btn btn-xs btn-success waves-effect waves-light">Khởi
                                                            tạo
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
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
export default Filter;
