const Footer=(()=>{
    return(
        <footer style={{ width: "100%" }} className="text-center text-lg-start bg-body-tertiary text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/rihab-nikh/" target="_blank"
                       className="text-muted me-4 text-decoration-none">
                        <i className="bi bi-linkedin"></i> Rihab's LinkedIn</a>
                    <a href="https://github.com/Rihab-nikh" target="_blank"
                       className="text-muted me-4 text-decoration-none">
                        <i className="bi bi-github"></i> Rihab's Github</a>
                    <a href="https://linkedin.com/in/yahya-fekrane" target="_blank"
                       className="text-muted me-4 text-decoration-none">
                        <i className="bi bi-linkedin"></i> Yahya's LinkedIn</a>
                    <a href="https://github.com/yahya-fk" target="_blank"
                       className="text-muted me-4 text-decoration-none">
                        <i className="bi bi-github"></i> Yahya's GitHub</a>
                </div>
            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Comfy Rental
                            </h6>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold ">Contact</h6>
                            <p><i className="bi bi-envelope me-3"></i>
                                Fekyah0@gmail.com</p>
                            <p><i className="bi bi-envelope me-3"></i>
                                rihab_nikh@outlook.fr</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center p-4" style={{backgroundColor:"rgba(0, 0, 0, 0.05)"}}>
                © 2024 Copyright:
                <a className="text-reset fw-bold text-decoration-none"
                   href="https://github.com/yahya-fk/ComfyRental/"> BACK-END</a> -
                <a className="text-reset fw-bold text-decoration-none"
                   href="https://github.com/Rihab-nikh/comfy_rental_front"> FRONT-END</a>

            </div>
        </footer>
    );
})
export default Footer;