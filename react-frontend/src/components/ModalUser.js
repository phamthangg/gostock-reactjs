import React from "react";

class ModalUser extends React.Component {
    render() {
        return (
            <>
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
            </>
        )
    }
}

export default ModalUser;
