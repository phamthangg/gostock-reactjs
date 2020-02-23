import React from "react";
import urls from '../modules/Content/urls';
import {HOME_URL} from "../setting";
import $ from 'jquery'

class LeftSidebar extends React.Component {
    componentDidMount() {
        let pathName = window.location.pathname;
        $('#sidebar-menu').find('a').removeClass('active');
        switch (pathName) {
            case HOME_URL:
                $('a#home').addClass('active');
                return;
            case urls.marketStatistics:
                $('a#marketStatistics').addClass('active');
                return;
            case urls.technicalAnalysis:
                $('a#technicalAnalysis').addClass('active');
                return;
            case urls.signalsFilters:
                $('a#signalsFilters').addClass('active');
                return;
            case urls.recommendations:
                $('a#recommendations').addClass('active');
                return;
            case urls.catalogManagement:
                $('a#catalogManagement').addClass('active');
                return;
            case urls.filter:
                $('a#filter').addClass('active');
                return;
            case urls.philTown:
                $('a#philTown').addClass('active');
                return;
            case urls.detailsCharts:
                $('a#detailsCharts').addClass('active');
                return;
            case urls.createReport:
                $('a#createReport').addClass('active');
                return;
            case urls.manual:
                $('a#manual').addClass('active');
                return;
            case urls.upgradeAccount:
                $('a#upgradeAccount').addClass('active');
                return;
        }
    }
    render() {
        return (
            <>
                <div className="left-side-menu">
                    <div className="slimscroll-menu scrollbar-inner mm-show">
                        <div id="sidebar-menu" className="mm-active">
                            <ul className="metismenu mm-show" id="side-menu">
                                <li className="mm-active">
                                    <a href={HOME_URL} id="home">
                                        <img src="../assets/svg/left-nav-1.svg" alt="left nav img"/>
                                        <span> Home <b className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                       aria-hidden="true" data-toggle="tooltip"
                                                       data-html="true"
                                                       title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href={urls.marketStatistics} id="marketStatistics">
                                        <img src="../assets/svg/left-nav-2.svg" alt="left nav img"/>
                                        <span> Thống kê thị trường <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href={urls.technicalAnalysis} id="technicalAnalysis">
                                        <img src="../assets/svg/left-nav-3.svg" alt="left nav img"/>
                                        <span> Phân tích kỹ thuật <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href={urls.signalsFilters} id="signalsFilters">
                                        <img src="../assets/svg/left-nav-4.svg" alt="left nav img"/>
                                        <span> Tín hiệu và bộ lọc <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href={urls.recommendations} id="recommendations">
                                        <img src="../assets/svg/left-nav-5.svg" alt="left nav img"/>
                                        <span> Khuyến nghị của Gostock <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href={urls.catalogManagement} id="catalogManagement">
                                        <img src="../assets/svg/left-nav-6.svg" alt="left nav img"/>
                                        <span> Quản trị danh mục <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../assets/svg/left-nav-7.svg" alt="left nav img"/>
                                        <span> Công cụ hỗ trợ PTCB <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                        <span className="menu-arrow"></span>
                                    </a>
                                    <ul className="nav-second-level" aria-expanded="false">
                                        <li>
                                            <a href={urls.filter} id="filter">Bộ lọc <b
                                                className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                title='<em>Giải thích ý nghĩa</em>'></b></a>
                                        </li>
                                        <li>
                                            <a href={urls.philTown} id="philTown">Phương pháp 4M – Phil Town <b
                                                className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                title='<em>Giải thích ý nghĩa</em>'></b></a>
                                        </li>
                                        <li>
                                            <a href={urls.detailsCharts} id="detailsCharts">Chi tiết BCTC và biểu
                                                đồ <b className="fa fa-info-circle ml-1 fs-13 icon-info"
                                                      aria-hidden="true" data-toggle="tooltip" data-html="true"
                                                      title='<em>Giải thích ý nghĩa</em>'></b></a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href={urls.createReport} id="createReport">
                                        <img src="../assets/svg/left-nav-8.svg" alt="left nav img"/>
                                        <span> Tạo Báo Cáo <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href={urls.manual} id="manual">
                                        <img src="../assets/svg/left-nav-9.svg" alt="left nav img"/>
                                        <span> Hướng dẫn sử dụng <b
                                            className="fa fa-info-circle ml-1 fs-13 icon-info"
                                            aria-hidden="true" data-toggle="tooltip" data-html="true"
                                            title='<em>Giải thích ý nghĩa</em>'></b></span>
                                    </a>
                                </li>
                                <li>
                                    <a href={urls.upgradeAccount} id="upgradeAccount">
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
