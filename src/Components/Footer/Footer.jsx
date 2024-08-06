

function Footer() {
    return (
        <>
            <footer className="bglightblue p-5">
                <div className=" container">
                    <div className="row">
                        <div className=" col-lg-4 col-md-4 col-sm-12  ">
                            <div className="inner pb-4 ps-5">
                                <h2 className="roboto text-white">LOCATION</h2>
                                <h3 className=" text-white">2215 John Daniel Drive</h3>
                                <h4 className=" text-white">Clark, MO 65243</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 ">
                            <div className="inner pb-4 ps-5 ">
                                <h2 className="roboto text-white text-center">AROUND THE WEB</h2>
                                <div className=" d-flex flex-row justify-content-center">
                                    <i className=" fa-brands fa-facebook fs-4 text-white me-2 circle p-2"></i>
                                    <i className=" fa-brands fa-twitter fs-4 text-white me-2 circle p-2"></i>
                                    <i className=" fa-brands fa-linkedin fs-4 text-white me-2 circle p-2"></i>
                                    <i className=" fa-solid fa-globe fs-4 text-white me-2 circle p-2"></i>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-4 col-sm-12 ">
                            <div className="inner pb-4 ps-5">
                                <h2 className="roboto text-white text-center">ABOUT FREELANCER</h2>
                                <h3 className="text-white text-center">Freelance is a free to use, licensed Bootstrap</h3>
                                <h4 className=" text-white text-center">theme created by Route</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bgdarkblue p-3">
                <p className="roboto text-white text-center">Copyright © Your Website 2021</p>
            </div>
        </>
    );
}

export default Footer;