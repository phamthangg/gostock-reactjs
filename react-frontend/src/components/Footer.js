import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-auto text-center text-sm-left mb-2 mb-sm-0">
                                <span className="text-muted">© 2019</span> <a href="#"
                                                                              className="font-bold text-info">Go Stock</a>
                            </div>
                            <div className="col-12 col-sm-auto text-right flex-grow-1">
                                <div
                                    className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-end">
                                    <a href="mailto:support@gostock.com" className="mr-3 text-muted mb-2 mb-sm-0"><i
                                        className="fa fa-envelope" aria-hidden="true"></i> support@gostock.com</a>
                                    <a href="tel:+8424312502" className="mr-3 text-muted mb-2 mb-sm-0"><i
                                        className="fa fa-phone" aria-hidden="true"></i> +84(24) 312 502</a>
                                    <div className="d-flex align-items-center mb-2 mb-sm-0">
                                        <a href="#" className="mr-2 text-muted"><i className="fa fa-facebook"
                                                                                   aria-hidden="true"></i></a>
                                        <a href="#" className="mr-2 text-muted"><i className="fa fa-google"
                                                                                   aria-hidden="true"></i></a>
                                        <a href="#" className="mr-0 text-muted"><i className="fa fa-twitter"
                                                                                   aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;
