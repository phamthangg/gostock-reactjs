import React from "react";

class LeftSidebar extends React.Component {
    render() {
        return (
            <>
                <div className="left-side-menu">
                    <div className="slimscroll-menu scrollbar-inner mm-show">
                        <div id="sidebar-menu" className="mm-active">
                            <ul className="metismenu mm-show" id="side-menu">
                                <li className="mm-active">
                                    <a href="5.index.html" className="active">
                                        <img src="../assets/svg/left-nav-1.svg" alt="left nav img"/>
                                        <span> Home <b className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                       aria-hidden="true" data-toggle="tooltip"
                                                       data-html="true"
                                                       title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="6.Thống kê thị trường.html">
                                        <img src="../assets/svg/left-nav-2.svg" alt="left nav img"/>
                                        <span> Thống kê thị trường <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="7.Phân tích kỹ thuật.html">
                                        <img src="../assets/svg/left-nav-3.svg" alt="left nav img"/>
                                        <span> Phân tích kỹ thuật <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="8.Tín hiệu và bộ lọc.html">
                                        <img src="../assets/svg/left-nav-4.svg" alt="left nav img"/>
                                        <span> Tín hiệu và bộ lọc <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="9.Khuyến nghị của Gostock.html">
                                        <img src="../assets/svg/left-nav-5.svg" alt="left nav img"/>
                                        <span> Khuyến nghị của Gostock <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="10.Quản trị danh mục.html">
                                        <img src="../assets/svg/left-nav-6.svg" alt="left nav img"/>
                                        <span> Quản trị danh mục <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <img src="../assets/svg/left-nav-7.svg" alt="left nav img"/>
                                        <span> Công cụ hỗ trợ PTCB <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                        <span className="menu-arrow"></span>
                                    </a>
                                    <ul className="nav-second-level" aria-expanded="false">
                                        <li>
                                            <a href="11.Bộ lọc.html">Bộ lọc <b
                                                className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                title='<em>Giải thích ý nghĩa</em>'></b></a>
                                        </li>
                                        <li>
                                            <a href="12.PhilTown.html">Phương pháp 4M – Phil Town <b
                                                className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                title='<em>Giải thích ý nghĩa</em>'></b></a>
                                        </li>
                                        <li>
                                            <a href="13.Chi tiết BCTC và biểu đồ.html">Chi tiết BCTC và biểu
                                                đồ <b className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                      aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                      title='<em>Giải thích ý nghĩa</em>'></b></a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="14.Tạo Báo Cáo.html">
                                        <img src="../assets/svg/left-nav-8.svg" alt="left nav img"/>
                                        <span> Tạo Báo Cáo <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="15.Hướng dẫn sử dụng.html">
                                        <img src="../assets/svg/left-nav-9.svg" alt="left nav img"/>
                                        <span> Hướng dẫn sử dụng <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="17.Nâng cấp tài khoản.html">
                                        <img src="../assets/svg/left-nav-10.svg" alt="left nav img"/>
                                        <span> Nâng cấp tài khoản <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="16.About Gostock.html">
                                        <img src="../assets/svg/left-nav-11.svg" alt="left nav img"/>
                                        <span> About Gostock <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://facebook.com/gostock" target="_blank">
                                        <img src="../assets/svg/left-nav-12.svg" alt="left nav img"/>
                                        <span> Cộng đồng <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="Góp ý.html">
                                        <img src="../assets/svg/left-nav-13.svg" alt="left nav img"/>
                                        <span> Góp ý <b className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                        aria-hidden="true" data-toggle="tooltip"
                                                        data-html="true"
                                                        title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-fixBtn">
                        <a href="Hợp tác với chúng tôi.html">
                            <i className="fa fa-plus mr-1"></i> <span> Hợp tác với chúng tôi </span>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}

export default LeftSidebar;
