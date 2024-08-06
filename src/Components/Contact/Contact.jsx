

function Contact() {
    return (
        <>
            <section>
                <div className=" container">
                    <h1 className=' text-center roboto textblue text-uppercase mt-5'>
                        conatct section
                    </h1>
                    <div className=' d-flex flex-row justify-content-center align-items-center'>
                        <span className=' widthsmallpx bgblue '> </span>
                        <span>
                            <i className=' fa-solid fa-star textblue ms-2 '></i>
                        </span>
                        <span className=' widthsmallpx  bgblue ms-2'> </span>
                    </div>
                    <div class="form-floating mb-3 mt-5 w-50  m-auto">
                        <input type="text" class="form-control" id="floatingInput" placeholder="userName" />
                        <label for="floatingInput">userName</label>
                    </div>
                    <div class="form-floating mb-3 mt-5 w-50  m-auto">
                        <input type="text" class="form-control" id="floatingInput" placeholder="userName" />
                        <label for="floatingInput">userAge</label>
                    </div>
                    <div class="form-floating mb-3 mt-5 w-50  m-auto">
                        <input type="email" class="form-control" id="floatingInput" placeholder="userName" />
                        <label for="floatingInput">userEmail</label>
                    </div>
                    <div class="form-floating mb-3 mt-5 w-50  m-auto">
                        <input type="password" class="form-control" id="floatingInput" placeholder="userName" />
                        <label for="floatingInput">userPassword</label>
                    </div>
                   
                    <button className="btn btn-success rounded-3  marginstart pb-2 mb-3">send Messages</button>
                  
                </div>
            </section>
        </>
    );
}

export default Contact;