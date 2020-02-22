import React from "react";
import Topbar from '../../../../../src/components/Topbar';
import LeftSidebar from '../../../../../src/components/LeftSidebar';
import ModalUser from '../../../../../src/components/ModalUser';
class SignalsFilters extends React.Component {
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
                                    <h4 className="mb-3 d-flex target-scroll align-items-center">Top tín hiệu mua <i
                                        className="fa fa-info-circle ml-1 fs-13 icon-info" aria-hidden="true"
                                        data-toggle="tooltip" data-html="true" title='<em>Giải thích ý nghĩa</em>'></i>
                                    </h4>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                    <div className="table-responsive">
                                                        <div
                                                            style={{maxHeight: 200}} className="tb-slimscroll scrollbar-inner tb-slimscroll-001">
                                                            <style type="text/css" media="screen">

                                                            </style>
                                                            <table
                                                                className="font-bold table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                <thead>
                                                                <tr>
                                                                    <th className="w-100px bg-light text-center">Mã</th>
                                                                    <th className="w-100px bg-light text-center">Giá</th>
                                                                    <th className="w-100px bg-light text-center">+/-
                                                                        Giá
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Rating
                                                                        RS
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Tín
                                                                        hiệu
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Tổng
                                                                        điểm Kỹ thuật
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Chỉ số
                                                                        tấn công
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Sức
                                                                        mạnh
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Biên độ
                                                                        giao động G21
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Điểm
                                                                        chặt chẽ
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Nền
                                                                        nhỏ
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Đột
                                                                        biến khối lượng
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Xu
                                                                        hướng
                                                                    </th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td className="bg-success text-center text-uppercase">ACV</td>
                                                                    <td className="text-center">30</td>
                                                                    <td className="text-center">+5%</td>
                                                                    <td className="bg-danger text-center"></td>
                                                                    <td className="bg-success text-center text-uppercase text-nowrap">STRONG
                                                                        BUY
                                                                    </td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center">8%</td>
                                                                    <td className="text-center">180</td>
                                                                    <td className="text-center">6%</td>
                                                                    <td className="text-center">6</td>
                                                                    <td className="text-center">5.5</td>
                                                                    <td className="text-center">5</td>
                                                                    <td className="bg-success text-center text-uppercase">tăng</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="bg-success text-center text-uppercase">MBB</td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="bg-success text-center text-uppercase text-nowrap">SMALL
                                                                        BUY
                                                                    </td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center text-uppercase"></td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="mb-3 d-flex target-scroll align-items-center">Top tín hiệu bán <i
                                        className="fa fa-info-circle ml-1 fs-13 icon-info" aria-hidden="true"
                                        data-toggle="tooltip" data-html="true" title='<em>Giải thích ý nghĩa</em>'></i>
                                    </h4>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                    <div className="table-responsive">
                                                        <div
                                                            style={{maxHeight: 200}} className="tb-slimscroll scrollbar-inner tb-slimscroll-002">
                                                            <style type="text/css" media="screen">
                                                            </style>
                                                            <table
                                                                className="font-bold table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                <thead>
                                                                <tr>
                                                                    <th className="w-100px bg-light text-center">Mã</th>
                                                                    <th className="w-100px bg-light text-center">Giá</th>
                                                                    <th className="w-100px bg-light text-center">+/-
                                                                        Giá
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Rating
                                                                        RS
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Tín
                                                                        hiệu
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Tổng
                                                                        điểm Kỹ thuật
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Chỉ số
                                                                        tấn công
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Sức
                                                                        mạnh
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Biên độ
                                                                        giao động G21
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Điểm
                                                                        chặt chẽ
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Nền
                                                                        nhỏ
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Đột
                                                                        biến khối lượng
                                                                    </th>
                                                                    <th className="w-100px bg-light text-center">Xu
                                                                        hướng
                                                                    </th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td className="text-center bg-danger text-uppercase">ACV</td>
                                                                    <td className="text-center">30</td>
                                                                    <td className="text-center">+5%</td>
                                                                    <td className="text-center bg-danger"></td>
                                                                    <td className="text-center bg-danger text-uppercase text-nowrap">STRONG
                                                                        SELL
                                                                    </td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center">8%</td>
                                                                    <td className="text-center">180</td>
                                                                    <td className="text-center">6%</td>
                                                                    <td className="text-center">6</td>
                                                                    <td className="text-center">5.5</td>
                                                                    <td className="text-center">5</td>
                                                                    <td className="text-center bg-danger text-uppercase">giảm</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-center bg-danger text-uppercase">MBB</td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center bg-danger text-uppercase text-nowrap">SMALL
                                                                        SELL
                                                                    </td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center text-uppercase"></td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="mb-3 d-flex target-scroll align-items-center">Tương quan và chart
                                        line <i className="fa fa-info-circle ml-1 fs-13 icon-info" aria-hidden="true"
                                                data-toggle="tooltip" data-html="true"
                                                title='<em>Giải thích ý nghĩa</em>'></i></h4>
                                    <div className="row">
                                        <div className="col-12 col-xl-6">
                                            <div className="card border">
                                                <div className="card-body p-0">
                                                    <div
                                                        className="d-flex justify-content-between py-1 px-2 align-items-center">
                                                        <p className="m-0">Tương quan Index</p>
                                                        <div className="m-0">
                                                            <input type="text" name="" id="input"
                                                                   className="color-input form-control form-control-sm"
                                                                   value="" required="required" pattern="" title=""
                                                                   placeholder="Thêm mã"/>
                                                        </div>
                                                    </div>
                                                    <div id="chart_line_1"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-6">
                                            <div className="card border">
                                                <div className="card-body p-0">
                                                    <div
                                                        className="d-flex justify-content-between py-1 px-2 align-items-center">
                                                        <p className="m-0">Tương quan ngành</p>
                                                        <div className="m-0">
                                                            <input type="text" name="" id="input"
                                                                   className="color-input form-control form-control-sm"
                                                                   value="" required="required" pattern="" title=""
                                                                   placeholder="Thêm mã"/>
                                                        </div>
                                                    </div>
                                                    <div id="chart_line_2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-xl-6">
                                            <div className="card border">
                                                <div className="card-body p-0">
                                                    <div
                                                        className="d-flex justify-content-between py-1 px-2 align-items-center">
                                                        <p className="m-0">Thống kê NDDTNN mua bán ròng</p>
                                                        <div className="m-0">
                                                            <select name="" id=""
                                                                    className="form-control form-control-sm"
                                                                    required="required">
                                                                <option value="">Ngày</option>
                                                                <option value="">Tuần</option>
                                                                <option value="">Tháng</option>
                                                                <option value="">Năm</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div id="chart_line_3"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-6">
                                            <div className="card border">
                                                <div className="card-body p-0">
                                                    <div
                                                        className="d-flex justify-content-between py-1 px-2 align-items-center">
                                                        <p className="m-0">Biểu đồ dòng tiền <i
                                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                            title=""
                                                            data-original-title="<em>Dòng tiền toàn thị trường, VN30, MID, Penny</em>"></i>
                                                        </p>
                                                    </div>
                                                    <div id="chart_line_4"></div>
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
export default SignalsFilters;
