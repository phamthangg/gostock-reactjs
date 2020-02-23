import React from "react";
import Topbar from '../../../../../src/components/Topbar';
import LeftSidebar from '../../../../../src/components/LeftSidebar';
import ModalUser from '../../../../../src/components/ModalUser';
class UpgradeAccount extends React.Component {
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
                                <section className="fdb-block">

                                    <div className="row text-center">
                                        <div className="col">
                                            <h2>Nâng cấp tài khoản</h2>
                                        </div>
                                    </div>
                                    <table className="table text-center mt-3 d-none d-lg-table table-sm">
                                        <tbody>
                                        <tr>
                                            <th className="border-0"></th>
                                            <th className="border-0"></th>
                                            <td className="mw-175px text-center border-0">
                                                <h2 className="font-weight-light">Basic</h2>
                                                <p className="lead">Miễn phí</p>
                                                <p><a href="#" className="btn btn-outline-primary">Chọn</a></p>
                                            </td>
                                            <td className="mw-175px text-center border-0">
                                                <h2 className="font-weight-light">GOLD 1</h2>
                                                <p className="lead d-flex justify-content-center">
                                                    <select name="" id="" className="w-auto form-control form-control"
                                                            required="required">
                                                        <option value="">1 tháng 600k</option>
                                                        <option value="">3 tháng 1600k</option>
                                                        <option value="">6 tháng 3000k</option>
                                                        <option value="">12 tháng 5700k</option>
                                                    </select>
                                                </p>
                                                <p><a href="#" className="btn btn-outline-primary">Chọn</a></p>
                                            </td>
                                            <td className="mw-175px text-center border-0">
                                                <h2 className="font-weight-light">GOLD 2</h2>
                                                <p className="lead">1 năm</p>
                                                <p><a href="#" className="btn btn-primary">Liên hệ</a></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th rowSpan="2" className="text-success align-middle">Tổng hợp</th>
                                            <th>Xu hướng thị trường</th>
                                            <td>✓</td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th>Các cp có tín hiệu mua bán và xu hướng dòng tiền</th>
                                            <td>✓</td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th rowSpan="2" className="text-success align-middle">Khuyến nghị của FS
                                                team
                                            </th>
                                            <th>Khuyến nghị cơ sở chọn lọc</th>
                                            <td></td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th>Khuyến nghị phái sinh</th>
                                            <td></td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th rowSpan="7" className="text-success align-middle">Săn cổ phiếu</th>
                                            <th>Quản trị danh mục( báo tín hiệu, báo theo giá mục tiêu lựa chọn, báo
                                                theo thông tin mới)
                                            </th>
                                            <td>Giới hạn chức năng</td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th>Các bộ lọc cổ phiếu</th>
                                            <td></td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th>Nhóm ngành dòng tiền đang vào mạnh</th>
                                            <td></td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th>Danh mục cổ phiếu theo từng giai đoạn thị trường</th>
                                            <td></td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th>Săn tin</th>
                                            <td>Giới hạn 3 mã</td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th>Lọc siêu cổ</th>
                                            <td></td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th>Định giá cơ bản vùng giá trị hợp lý</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th rowSpan="4" className="text-success align-middle">Hướng dẫn sử dụng</th>
                                            <th>Hướng dẫn sử dụng các tính năng</th>
                                            <td>✓</td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th>Hướng dẫn sử dụng bảng overview</th>
                                            <td>✓</td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th>Phương pháp đầu tư</th>
                                            <td>✓</td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th>Cách đi tiền</th>
                                            <td></td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th rowSpan="3" className="text-success align-middle">Kiến thức đầu tư</th>
                                            <th>Các quy tắc và kinh nghiệm đầu tư</th>
                                            <td>✓</td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th>Review các sách đầu tư hay đáng mua</th>
                                            <td>✓</td>
                                            <td>Đăng ký sử dụng<br/>được giảm giá mua sách</td>
                                            <td>Đăng ký sử dụng<br/>được giảm giá mua sách</td>
                                        </tr>
                                        <tr>
                                            <th>Các khóa học chứng khoán: PTCB, PTKT ( mua ngoài lẻ lên tới 2 củ)</th>
                                            <td></td>
                                            <td>✓</td>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-success align-middle">Tư vấn</th>
                                            <th>Được broker tư vấn</th>
                                            <td></td>
                                            <td></td>
                                            <td>✓</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className="table text-center mt-5 d-table d-lg-none">
                                        <tbody>
                                        <tr>
                                            <td colSpan="2" className="text-center border-0">
                                                <h2 className="font-weight-light">Basic</h2>
                                                <p className="lead">Miễn phí</p>
                                                <p><a href="#" className="btn btn-outline-primary">Chọn</a></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Xu hướng thị trường</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Các cp có tín hiệu mua bán và xu hướng dòng tiền
                                            </th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Khuyến nghị cơ sở chọn lọc</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Khuyến nghị phái sinh</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Quản trị danh mục( báo tín hiệu, báo theo giá mục
                                                tiêu lựa chọn, báo theo thông tin mới)
                                            </th>
                                            <td>Giới hạn chức năng</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Các bộ lọc cổ phiếu</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Nhóm ngành dòng tiền đang vào mạnh</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Danh mục cổ phiếu theo từng giai đoạn thị trường
                                            </th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Săn tin</th>
                                            <td>Giới hạn 3 mã</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Lọc siêu cổ</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Định giá cơ bản vùng giá trị hợp lý</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Hướng dẫn sử dụng các tính năng</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Hướng dẫn sử dụng bảng overview</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Phương pháp đầu tư</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Cách đi tiền</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Các quy tắc và kinh nghiệm đầu tư</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Review các sách đầu tư hay đáng mua</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Các khóa học chứng khoán: PTCB, PTKT ( mua ngoài
                                                lẻ lên tới 2 củ)
                                            </th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Được broker tư vấn</th>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className="table text-center mt-5 d-table d-lg-none">
                                        <tbody>
                                        <tr>
                                            <td colSpan="2" className="text-center border-0">
                                                <h2 className="font-weight-light">GOLD 1</h2>
                                                <p className="lead d-flex justify-content-center">
                                                    <select name="" id="" className="w-auto form-control form-control"
                                                            required="required">
                                                        <option value="">1 tháng 600k</option>
                                                        <option value="">3 tháng 1600k</option>
                                                        <option value="">6 tháng 3000k</option>
                                                        <option value="">12 tháng 5700k</option>
                                                    </select>
                                                </p>
                                                <p><a href="#" className="btn btn-outline-primary">Chọn</a></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Xu hướng thị trường</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Các cp có tín hiệu mua bán và xu hướng dòng tiền
                                            </th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Khuyến nghị cơ sở chọn lọc</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Khuyến nghị phái sinh</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Quản trị danh mục( báo tín hiệu, báo theo giá mục
                                                tiêu lựa chọn, báo theo thông tin mới)
                                            </th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Các bộ lọc cổ phiếu</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Nhóm ngành dòng tiền đang vào mạnh</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Danh mục cổ phiếu theo từng giai đoạn thị trường
                                            </th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Săn tin</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Lọc siêu cổ</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Định giá cơ bản vùng giá trị hợp lý</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Hướng dẫn sử dụng các tính năng</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Hướng dẫn sử dụng bảng overview</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Phương pháp đầu tư</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Cách đi tiền</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Các quy tắc và kinh nghiệm đầu tư</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Review các sách đầu tư hay đáng mua</th>
                                            <td>Đăng ký sử dụng<br/>được giảm giá mua sách</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Các khóa học chứng khoán: PTCB, PTKT ( mua ngoài
                                                lẻ lên tới 2 củ)
                                            </th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Được broker tư vấn</th>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className="table text-center mt-5 d-table d-lg-none">
                                        <tbody>
                                        <tr>
                                            <td colSpan="2" className="mw-175px text-center border-0">
                                                <h2 className="font-weight-light">GOLD 2</h2>
                                                <p className="lead">1 năm</p>
                                                <p><a href="#" className="btn btn-primary">Liên hệ</a></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Xu hướng thị trường</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Các cp có tín hiệu mua bán và xu hướng dòng tiền
                                            </th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Khuyến nghị cơ sở chọn lọc</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Khuyến nghị phái sinh</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Quản trị danh mục( báo tín hiệu, báo theo giá mục
                                                tiêu lựa chọn, báo theo thông tin mới)
                                            </th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Các bộ lọc cổ phiếu</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Nhóm ngành dòng tiền đang vào mạnh</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Danh mục cổ phiếu theo từng giai đoạn thị trường
                                            </th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Săn tin</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Lọc siêu cổ</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Định giá cơ bản vùng giá trị hợp lý</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Hướng dẫn sử dụng các tính năng</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Hướng dẫn sử dụng bảng overview</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Phương pháp đầu tư</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Cách đi tiền</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Các quy tắc và kinh nghiệm đầu tư</th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Review các sách đầu tư hay đáng mua</th>
                                            <td>Đăng ký sử dụng<br/>được giảm giá mua sách</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Các khóa học chứng khoán: PTCB, PTKT ( mua ngoài
                                                lẻ lên tới 2 củ)
                                            </th>
                                            <td>✓</td>
                                        </tr>
                                        <tr>
                                            <th className="text-left">Được broker tư vấn</th>
                                            <td>✓</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                    <h5 className="text-center text-muted">*Free đối với khách hàng có NAV từ 300 triệu
                                        trở nên mở tk giao dịch tại Go Stock và 500 triệu trở nên tại Go Stock</h5>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                </body>
            </>
        )
    }
}
export default UpgradeAccount;
