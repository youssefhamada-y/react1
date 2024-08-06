import React from 'react';
function Portfolio() {
    return (
        <>
            <section>
                <div className=' container'>
                    <h1 className=' text-center roboto textblue text-uppercase'>
                        portfolio component
                    </h1>
                    <div className=' d-flex flex-row justify-content-center align-items-center'>
                        <span className=' widthsmallpx bgblue '> </span>
                        <span>
                            <i className=' fa-solid fa-star textblue ms-2 '></i>
                        </span>
                        <span className=' widthsmallpx  bgblue ms-2'> </span>
                    </div>
                    <div className='row g-5 mt-1 pb-4'>
                        <div className=' col-lg-4 col-md-4 col-sm-12'>
                            <div className='inner position-relative'>
                                <img className='w-100 rounded-2 visibleimage ' src="./poert1.png" alt="" />
                                <div className=' hide position-absolute top-0 start-0 end-0 bottom-0 bggreentrans d-flex justify-content-center align-items-center  '>
                                    <i className=' fa-solid fa-plus text-white fa-8x '></i>
                                </div>
                            </div>
                        </div>
                        <div className=' col-lg-4 col-md-4 col-sm-12'>
                            <div className='inner position-relative'>
                                <img className='w-100 rounded-2 visibleimage ' src="./port2.png" alt="" />
                                <div className=' hide position-absolute top-0 start-0 end-0 bottom-0 bggreentrans d-flex justify-content-center align-items-center  '>
                                    <i className=' fa-solid fa-plus text-white fa-8x '></i>
                                </div>
                            </div>
                        </div>
                        <div className=' col-lg-4 col-md-4 col-sm-12'>
                            <div className='inner position-relative'>
                                <img className='w-100 rounded-2 visibleimage ' src="./port3.png" alt="" />
                                <div className=' hide position-absolute top-0 start-0 end-0 bottom-0 bggreentrans d-flex justify-content-center align-items-center  '>
                                    <i className=' fa-solid fa-plus text-white fa-8x '></i>
                                </div>
                            </div>
                        </div>
                        <div className=' col-lg-4 col-md-4 col-sm-12'>
                            <div className='inner position-relative'>
                                <img className='w-100 rounded-2 visibleimage ' src="./poert1.png" alt="" />
                                <div className=' hide position-absolute top-0 start-0 end-0 bottom-0 bggreentrans d-flex justify-content-center align-items-center  '>
                                    <i className=' fa-solid fa-plus text-white fa-8x '></i>
                                </div>
                            </div>
                        </div>
                        <div className=' col-lg-4 col-md-4 col-sm-12'>
                            <div className='inner position-relative'>
                                <img className='w-100 rounded-2 visibleimage ' src="./port2.png" alt="" />
                                <div className=' hide position-absolute top-0 start-0 end-0 bottom-0 bggreentrans d-flex justify-content-center align-items-center  '>
                                    <i className=' fa-solid fa-plus text-white fa-8x '></i>
                                </div>
                            </div>
                        </div>
                        <div className=' col-lg-4 col-md-4 col-sm-12'>
                            <div className='inner position-relative'>
                                <img className='w-100 rounded-2 visibleimage ' src="./port3.png" alt="" />
                                <div className=' hide position-absolute top-0 start-0 end-0 bottom-0 bggreentrans d-flex justify-content-center align-items-center  '>
                                    <i className=' fa-solid fa-plus text-white fa-8x '></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;