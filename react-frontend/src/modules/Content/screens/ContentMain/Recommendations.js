import React from "react";
import Topbar from '../../../../../src/components/Topbar';
import LeftSidebar from '../../../../../src/components/LeftSidebar';
import ModalUser from '../../../../../src/components/ModalUser';class Recommendations extends React.Component {
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
                                                            style={{maxHeight:200}} className="tb-slimscroll scrollbar-inner tb-slimscroll-001">
                                                            <style type="text/css" media="screen">
                                                            </style>
                                                            <table
                                                                className="font-bold table table-dark table-bordered mb-0 gs-table table-xs table-max-content vertical-align-middle">
                                                                <thead>
                                                                <tr>
                                                                    <th className="w-100px bg-light"><a href="#"
                                                                                                        className="text-hover-underline text-hover-info text-underline text-white show-detail-stock-link">Chi
                                                                        tiết</a></th>
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
                                                                    <th><a href="#"
                                                                           className="text-hover-underline text-hover-info text-underline text-white show-report-stock-link">Báo
                                                                        cáo</a></th>
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
                                                                    <th><a href="#"
                                                                           className="text-hover-underline text-hover-info text-underline text-white show-report-stock-link">Báo
                                                                        cáo</a></th>
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
                                    <h4 className="mb-3 d-flex target-scroll align-items-center">Báo cáo <i
                                        className="fa fa-info-circle ml-1 fs-13 icon-info" aria-hidden="true"
                                        data-toggle="tooltip" data-html="true" title='<em>Giải thích ý nghĩa</em>'></i>
                                    </h4>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-header border-bottom">
                                                    <h4 className="header-title mb-0">Tiêu đề</h4>
                                                </div>
                                                <div className="card-body">
                                                    Nội dung
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="mb-3 d-flex target-scroll align-items-center justify-content-between">
                                        <div>
                                            Tổng điểm cơ bản Go Stock <i
                                            className="fa fa-info-circle ml-1 fs-13 icon-info" aria-hidden="true"
                                            data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></i>
                                        </div>
                                    </h4>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                    <div className="table-responsive">
                                                        <div
                                                            style={{maxHeight:480}} className="tb-slimscroll scrollbar-inner tb-slimscroll-total table-scroll-thead">
                                                            <style type="text/css" media="screen">
                                                            </style>
                                                            <table
                                                                className="table table-dark table-bordered mb-0 gs-table table-xs vertical-align-middle">
                                                                <thead>
                                                                <tr>
                                                                    <th rowSpan="2"
                                                                        className="bg-light mw-150px text-center">Mã
                                                                    </th>
                                                                    <th colSpan="2" className="bg-light text-center">Lợi
                                                                        nhuận sau thuế
                                                                    </th>
                                                                    <th colSpan="2"
                                                                        className="bg-light text-center">Dòng tiền thuần
                                                                        từ hoạt động kinh doanh
                                                                    </th>
                                                                    <th colSpan="2"
                                                                        className="bg-light text-center">Biên lợi nhuận
                                                                        gộp
                                                                    </th>
                                                                    <th colSpan="2" className="bg-light text-center">Tỷ
                                                                        suất sinh lời của tài sản (ROA)
                                                                    </th>
                                                                    <th colSpan="2" className="bg-light text-center">Hệ
                                                                        số khả năng thanh toán nợ ngắn hạn
                                                                    </th>
                                                                    <th colSpan="2" className="bg-light text-center">Hệ
                                                                        số nợ dài hạn/Tổng tài sản
                                                                    </th>
                                                                    <th colSpan="2"
                                                                        className="bg-light text-center">Vòng quay tài
                                                                        sản
                                                                    </th>
                                                                    <th rowSpan="2"
                                                                        className="bg-light mw-125px text-center">Chất
                                                                        lượng lợi nhuận
                                                                    </th>
                                                                    <th rowSpan="2"
                                                                        className="bg-light mw-125px text-center">Số
                                                                        lượng cổ phiếu phổ thông đang lưu hành
                                                                    </th>
                                                                    <th rowSpan="2"
                                                                        className="bg-light mw-125px text-center">Tổng
                                                                        điểm
                                                                    </th>
                                                                    <th rowSpan="2"
                                                                        className="bg-light mw-125px text-center">Đánh
                                                                        giá
                                                                    </th>
                                                                </tr>
                                                                <tr>
                                                                    <th className="bg-light mw-125px text-center">2017</th>
                                                                    <th className="bg-light mw-125px text-center">2018</th>
                                                                    <th className="bg-light mw-125px text-center">2017</th>
                                                                    <th className="bg-light mw-125px text-center">2018</th>
                                                                    <th className="bg-light mw-125px text-center">2017</th>
                                                                    <th className="bg-light mw-125px text-center">2018</th>
                                                                    <th className="bg-light mw-125px text-center">2017</th>
                                                                    <th className="bg-light mw-125px text-center">2018</th>
                                                                    <th className="bg-light mw-125px text-center">2017</th>
                                                                    <th className="bg-light mw-125px text-center">2018</th>
                                                                    <th className="bg-light mw-125px text-center">2017</th>
                                                                    <th className="bg-light mw-125px text-center">2018</th>
                                                                    <th className="bg-light mw-125px text-center">2017</th>
                                                                    <th className="bg-light mw-125px text-center">2018</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>
                                                                        MSH
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td>
                                                                        <select name="" id=""
                                                                                className="form-control form-control-sm border-0 select-right arrow-muted">
                                                                            <option value="">Đạt</option>
                                                                            <option value="">Không đạt</option>
                                                                        </select>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td>
                                                                        <select name="" id=""
                                                                                className="form-control form-control-sm border-0 select-right arrow-muted">
                                                                            <option value="">Đạt</option>
                                                                            <option value="">Không đạt</option>
                                                                        </select>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        MSH
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td>
                                                                        <select name="" id=""
                                                                                className="form-control fs-12 form-control-sm border-0 select-right arrow-muted">
                                                                            <option value="">Đạt</option>
                                                                            <option value="">Không đạt</option>
                                                                        </select>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td>
                                                                        <select name="" id=""
                                                                                className="form-control fs-12 form-control-sm border-0 select-right arrow-muted">
                                                                            <option value="">Đạt</option>
                                                                            <option value="">Không đạt</option>
                                                                        </select>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        MSH
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td>
                                                                        <select name="" id=""
                                                                                className="form-control form-control-sm border-0 select-right arrow-muted">
                                                                            <option value="">Đạt</option>
                                                                            <option value="">Không đạt</option>
                                                                        </select>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td>
                                                                        <select name="" id=""
                                                                                className="form-control form-control-sm border-0 select-right arrow-muted">
                                                                            <option value="">Đạt</option>
                                                                            <option value="">Không đạt</option>
                                                                        </select>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        MSH
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td>
                                                                        <select name="" id=""
                                                                                className="form-control form-control-sm border-0 select-right arrow-muted">
                                                                            <option value="">Đạt</option>
                                                                            <option value="">Không đạt</option>
                                                                        </select>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td>
                                                                        <select name="" id=""
                                                                                className="form-control form-control-sm border-0 select-right arrow-muted">
                                                                            <option value="">Đạt</option>
                                                                            <option value="">Không đạt</option>
                                                                        </select>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        MSH
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td>
                                                                        <select name="" id=""
                                                                                className="form-control form-control-sm border-0 select-right arrow-muted">
                                                                            <option value="">Đạt</option>
                                                                            <option value="">Không đạt</option>
                                                                        </select>
                                                                    </td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td>
                                                                        <select name="" id=""
                                                                                className="form-control form-control-sm border-0 select-right arrow-muted">
                                                                            <option value="">Đạt</option>
                                                                            <option value="">Không đạt</option>
                                                                        </select>
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
                </body>
            </>
        )
    }
}
export default Recommendations;
