import React from "react";
import Topbar from '../../../../../src/components/Topbar';
import LeftSidebar from '../../../../../src/components/LeftSidebar';
import ModalUser from '../../../../../src/components/ModalUser';
class CatalogManagement extends React.Component {
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
                                    <h4 className="mb-2 d-flex target-scroll align-items-center justify-content-between">
                                        <div>
                                            Quản trị danh mục và săn tin <i
                                            className="fa fa-info-circle ml-1 fs-13 icon-info" aria-hidden="true"
                                            data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></i>
                                        </div>
                                        <div className="ml-3">
                                            <input type="text" name="" id="input"
                                                   className="color-input form-control form-control-sm" value=""
                                                   required="required" pattern="" title="" placeholder="Thêm mã"/>
                                        </div>
                                    </h4>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card">
                                                <div className="card-body p-0">
                                                    <div className="table-responsive">
                                                        <div
                                                            style={{maxHeight:280}} className="tb-slimscroll scrollbar-inner tb-slimscroll-getNews table-scroll-thead">
                                                            <style type="text/css" media="screen">
                                                            </style>
                                                            <table
                                                                className="table table-dark table-bordered mb-0 gs-table table-xs vertical-align-middle">
                                                                <tbody>
                                                                <tr>
                                                                    <td colSpan="15">
                                                                        <div className="d-flex align-items-center p-1">
                                                                            <span
                                                                                className="mr-2">Tổng vốn ban đầu</span>
                                                                            <input type="text" name="" id="input"
                                                                                   className="form-control form-control-sm bg-light fs-12 w-100px"
                                                                                   value="" required="required"
                                                                                   pattern="" title=""
                                                                                   placeholder="Nhập dữ liệu"/>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="bg-light w-100px text-center">thông
                                                                        báo
                                                                    </td>
                                                                    <td className="bg-light w-100px text-center">Danh
                                                                        mục theo dõi
                                                                    </td>
                                                                    <td className="bg-light w-100px text-center">Tín
                                                                        hiệu Mua/bán
                                                                    </td>
                                                                    <td className="bg-light w-100px text-center">Giá
                                                                        vốn
                                                                    </td>
                                                                    <td className="bg-light w-100px text-center">Giá thị
                                                                        trường
                                                                    </td>
                                                                    <td className="bg-light w-100px text-center">Target/
                                                                        Giá cảnh báo
                                                                    </td>
                                                                    <td className="bg-light w-100px text-center">Stoploss/
                                                                        giá cảnh báo
                                                                    </td>
                                                                    <td className="bg-light w-100px text-center">Khối
                                                                        lượng nắm giữ
                                                                    </td>
                                                                    <td className="bg-light w-100px text-center">% NAV
                                                                    </td>
                                                                    <td className="bg-light w-100px text-center">tỷ lệ
                                                                        lỗ tối đa/NAV<br/>
                                                                            <small>(tùy chỉnh)</small></td>
                                                                    <td className="bg-light w-100px text-center">Giá trị
                                                                        chứng khoán
                                                                    </td>
                                                                    <td className="bg-light w-100px text-center">% Lãi /
                                                                        Lỗ
                                                                    </td>
                                                                    <td className="bg-light w-100px text-center">Sức
                                                                        mạnh
                                                                    </td>
                                                                    <td className="bg-light w-100px text-center">RS</td>
                                                                    <td className="bg-light w-100px text-center">Tổng
                                                                        điểm
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-center">
                                                                        <div className="d-flex justify-content-center">
                                                                            <input type="checkbox" checked
                                                                                   data-plugin="switchery"
                                                                                   data-color="#64b0f2"
                                                                                   data-size="small"/>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">ACB</td>
                                                                    <td className="text-center">
                                                                        <div
                                                                            className="d-flex justify-content-end align-items-center">
                                                                            <select name="" id="input"
                                                                                    className="form-control form-control-sm fs-12 border-0 w-100px arrow-muted text-nowrap m-auto">
                                                                                <option value=""
                                                                                        selected="selected">Mua
                                                                                </option>
                                                                                <option value="">Bán</option>
                                                                                <option value="">Theo dõi</option>
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center"><input type="text"
                                                                                                       name=""
                                                                                                       id="input"
                                                                                                       className="form-control form-control-sm bg-light fs-12 w-100px m-auto"
                                                                                                       value=""
                                                                                                       required="required"
                                                                                                       pattern=""
                                                                                                       title=""
                                                                                                       placeholder="Nhập dữ liệu"/>
                                                                    </td>
                                                                    <td className="text-center">$31,00</td>
                                                                    <td className="text-center"><input type="text"
                                                                                                       name=""
                                                                                                       id="input"
                                                                                                       className="form-control form-control-sm bg-light fs-12 w-100px m-auto"
                                                                                                       value=""
                                                                                                       required="required"
                                                                                                       pattern=""
                                                                                                       title=""
                                                                                                       placeholder="Nhập dữ liệu"/>
                                                                    </td>
                                                                    <td className="text-center"><input type="text"
                                                                                                       name=""
                                                                                                       id="input"
                                                                                                       className="form-control form-control-sm bg-light fs-12 w-100px m-auto"
                                                                                                       value=""
                                                                                                       required="required"
                                                                                                       pattern=""
                                                                                                       title=""
                                                                                                       placeholder="Nhập dữ liệu"/>
                                                                    </td>
                                                                    <td className="text-center"><span>---</span></td>
                                                                    <td className="text-center"><span>---</span></td>
                                                                    <td className="text-center"><span><input type="text"
                                                                                                             name=""
                                                                                                             id="input"
                                                                                                             className="form-control form-control-sm bg-light fs-12 w-100px m-auto"
                                                                                                             value=""
                                                                                                             required="required"
                                                                                                             pattern=""
                                                                                                             title=""
                                                                                                             placeholder="Nhập dữ liệu"/></span>
                                                                    </td>
                                                                    <td className="text-center"><span>---</span></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                    <td className="text-center"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-center">
                                                                        <div className="d-flex justify-content-center">
                                                                            <input type="checkbox" checked
                                                                                   data-plugin="switchery"
                                                                                   data-color="#64b0f2"
                                                                                   data-size="small"/>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">VCB</td>
                                                                    <td className="text-center">
                                                                        <div
                                                                            className="d-flex justify-content-end align-items-center">
                                                                            <select name="" id="input"
                                                                                    className="form-control form-control-sm fs-12 border-0 w-100px arrow-muted text-nowrap m-auto">
                                                                                <option value="">Mua</option>
                                                                                <option value="">Bán</option>
                                                                                <option value=""
                                                                                        selected="selected">Theo dõi
                                                                                </option>
                                                                            </select>
                                                                        </div>
                                                                    </td>
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
                                                                    <td className="text-center"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="text-center">
                                                                        <div className="d-flex justify-content-center">
                                                                            <input type="checkbox" checked
                                                                                   data-plugin="switchery"
                                                                                   data-color="#64b0f2"
                                                                                   data-size="small"/>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">VNM</td>
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
                                        <div className="col-12 col-xl-6">
                                            <div className="card h-100">
                                                <div className="card-header border-bottom">
                                                    <h4 className="header-title mb-0">Tin tức liên quan</h4>
                                                </div>
                                                <div className="card-body py-0">
                                                    <div className="news-list d-flex flex-column">
                                                        <div
                                                            className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                            <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                               aria-hidden="true"></i>
                                                            <div className="">
                                                                <a href="" className="text-dark main-title">Giao dịch
                                                                    khối ngoại 6/11</a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                            <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                               aria-hidden="true"></i>
                                                            <div className="">
                                                                <a href="" className="text-dark main-title">Xả 143 tỉ
                                                                    đồng cổ phiếu toàn thị trường</a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                            <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                               aria-hidden="true"></i>
                                                            <div className="">
                                                                <a href="" className="text-dark main-title">Có nên học
                                                                    các khóa đào tọa chứng khoán hay không?</a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                            <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                               aria-hidden="true"></i>
                                                            <div className="">
                                                                <a href="" className="text-dark main-title">Giao dịch
                                                                    khối ngoại 6/11: Xả 143 tỉ đồng cổ phiếu toàn thị
                                                                    trường</a>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="news-item d-flex align-items-start border-bottom border-bottom-dark">
                                                            <i className="news-icon mdi mdi-chevron-double-right text-orange pt-0 mr-1"
                                                               aria-hidden="true"></i>
                                                            <div className="">
                                                                <a href="" className="text-dark main-title">Giao dịch
                                                                    khối ngoại 6/11: Xả 143 tỉ đồng cổ phiếu toàn thị
                                                                    trường</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-6">
                                            <h4 className="mb-3 d-flex target-scroll align-items-center justify-content-between">
                                                <div>
                                                    Danh mục theo dõi <i
                                                    className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                    aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                    title='<em>Giải thích ý nghĩa</em>'></i>
                                                </div>
                                                <div className="ml-3">
                                                    <input type="text" name="" id="input"
                                                           className="color-input form-control form-control-sm" value=""
                                                           required="required" pattern="" title=""
                                                           placeholder="Thêm mã"/>
                                                </div>
                                            </h4>
                                            <div className="card">
                                                <div className="card-body p-0">
                                                    <div className="table-responsive">
                                                        <div
                                                            style={{maxHeight:250}} className="tb-slimscroll scrollbar-inner tb-slimscroll-stockSub table-scroll-thead">
                                                            <style type="text/css" media="screen">

                                                            </style>
                                                            <table
                                                                className="table table-dark table-bordered mb-0 gs-table table-sm vertical-align-middle">
                                                                <thead>
                                                                <tr>
                                                                    <th>Mã</th>
                                                                    <th className="text-center">Giá</th>
                                                                    <th className="text-center">+/-giá (%)</th>
                                                                    <th className="text-center">Sức mạnh</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>VCB</td>
                                                                    <td className="text-center">82</td>
                                                                    <td className="text-center">+3.5%</td>
                                                                    <td className="text-center">189</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VCB</td>
                                                                    <td className="text-center">82</td>
                                                                    <td className="text-center">+3.5%</td>
                                                                    <td className="text-center">189</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>VCB</td>
                                                                    <td className="text-center">82</td>
                                                                    <td className="text-center">+3.5%</td>
                                                                    <td className="text-center">189</td>
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
export default CatalogManagement;
