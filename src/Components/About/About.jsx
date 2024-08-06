

function About() {
    return (
        <section className="bggreen p-5">
            <div className=" container p-5">
                <h1 className=" text-uppercase text-center text-white roboto">about component</h1>
                <div className=' d-flex flex-row justify-content-center align-items-center'>
                    <span className=' widthsmallpx  bg-white '> </span>
                    <span>
                        <i className=' fa-solid fa-star text-white ms-2 '></i>
                    </span>
                    <span className=' widthsmallpx  bg-white ms-2'> </span>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className=" text-white text-center p-4 ">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className=" text-white text-center p-4 ">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;