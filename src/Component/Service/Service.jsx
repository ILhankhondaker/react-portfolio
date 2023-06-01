import React from 'react';

const Service = () => {
    return (
        <div>
            <div id='service' className=' py-40'>
                <h1 className=' text-center text-neutral font-bold text-5xl  '>Select your preferred package</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 '>

                    {/* ======basic ===== */}
                    <div className="card lg:w-96 hover:shadow-lg hover:shadow-red-500/50 p-0 bg-base-200  rounded-md hover:scale-110 duration-500">
                        <div className="card-body  ">
                            {/* heading  */}
                            <div className='flex justify-between'>
                                <h2 className=" text-neutral font-bold text-4xl text-center ">Basic</h2>
                                <div className="badge font-bold bg-red-500 border-0 text-white">US 150$</div>
                            </div>
                            <p className='text-neutral text-center'>A small dynamic react js  Landing page website  up to 4 sections</p>

                            <h1 className='text-neutral font-bold'>→ 1 Page</h1>

                            <h1 className='text-neutral font-bold'>→ Design customization</h1>

                            <h1 className='text-neutral font-bold'>→ Content upload</h1>

                            <h1 className='text-neutral font-bold'>→ Responsive design</h1>

                            <h1 className='text-neutral font-bold'>→ Include source code</h1>


                            <div className="card-actions justify-center mt-2">
                                <a href="http://wa.me/+8801680576091" target="_blank" rel="noopener noreferrer"> <button className="btn btn-wide font-bold bg-red-500 border-0 text-white">Temp To Hire </button></a>

                            </div>
                        </div>
                    </div>

                    {/* ====standard ===== */}

                    <div className="card lg:w-96  p-0 bg-base-200 hover:shadow-lg hover:shadow-red-500/50  rounded-md hover:scale-110 duration-500">

                        <div className="card-body  ">
                            {/* heading  */}
                            <div className='flex justify-between'>
                                <h2 className=" text-neutral font-bold text-4xl text-center ">Standard</h2>
                                <div className="badge font-bold bg-red-500 border-0 text-white">US 280$</div>
                            </div>
                            <p className='text-neutral text-center'>complete realtime web application with  in  react js</p>


                            <h1 className='text-neutral font-bold'>→ 5 pages</h1>

                            <h1 className='text-neutral font-bold'>→ Design customization</h1>

                            <h1 className='text-neutral font-bold'>→ Content upload</h1>

                            <h1 className='text-neutral font-bold'>→ Responsive design</h1>

                            <h1 className='text-neutral font-bold'>→ Include source code</h1>

                            <h1 className='text-neutral font-bold'>→ Design customization</h1>

                            <div className="card-actions justify-center mt-2">
                                <a href="http://wa.me/+8801680576091" target="_blank" rel="noopener noreferrer"> <button className="btn btn-wide font-bold bg-red-500 border-0 text-white">Temp To Hire </button></a>

                            </div>
                        </div>
                    </div>


                    {/*==== premium ======= */}

                    <div className="card lg:w-96  p-0 hover:shadow-lg hover:shadow-red-500/50 rounded-md hover:scale-110 duration-500 bg-base-200">

                        <div className="card-body  ">
                            {/* heading  */}
                            <div className='flex justify-between'>
                                <h2 className=" text-neutral font-bold text-4xl text-center ">Premium</h2>
                                <div className="badge font-bold bg-red-500 border-0 text-white">US 450$</div>
                            </div>
                            <p className='text-neutral text-center'>A responsive dynamic  web site/app with responsive Header, Footer & </p>

                            <h1 className='text-neutral font-bold'>→ 3 pages</h1>

                            <h1 className='text-neutral font-bold'>→ Design customization</h1>

                            <h1 className='text-neutral font-bold'>→ Content upload</h1>

                            <h1 className='text-neutral font-bold'>→ Responsive design</h1>

                            <h1 className='text-neutral font-bold'>→ Include source code</h1>

                            <h1 className='text-neutral font-bold'>→ Design customization</h1>

                            <div className="card-actions justify-center mt-2">
                                <a href="http://wa.me/+8801680576091" target="_blank" rel="noopener noreferrer"> <button className="btn btn-wide font-bold bg-red-500 border-0 text-white">Temp To Hire </button></a>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Service;