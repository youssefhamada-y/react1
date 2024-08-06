import React from 'react';


function Home() {
    return (
        <>
            <section className='bggreen d-flex flex-column justify-content-center align-items-center'>
                <div className='  '>
                    <img className=' widthsmall pt-4 ' src="./avataaars.svg" alt="avatar" />
                </div>
                <h2 className='text-white roboto text-center fontsize text-uppercase pt-2'>Start Framework</h2>
                <div className=' d-flex flex-row justify-content-center align-items-center'>
                    <span className=' widthsmallpx  bg-white '> </span>
                    <span>
                        <i className=' fa-solid fa-star text-white ms-2 '></i>
                    </span>
                    <span className=' widthsmallpx  bg-white ms-2'> </span>
                </div>
                <p className=' text-white text-center roboto mt-3'>
                    Graphic Artist - Web Designer - Illustrator
                </p>
            </section>
        </>
    );
}

export default Home;