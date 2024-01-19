import React from 'react';


const MultiStepMobile = ({step}) => {

    return (
        <div className="z-0 absolute top-0 multi-step-mobile  hidden max-sm:flex justify-center  h-96">
            <div className=' pt-5 px-2 mt-5'>
                <div className={step===1?"circle text-blue-950 bg-blue-300 rounded-full w-8 h-8 flex justify-center items-center ":"text-white circle border rounded-full w-8 h-8 flex justify-center items-center "}>1</div>
               
            </div>


            <div className='  pt-5 px-2 mt-5 '>
                <div className={step===2?"circle text-blue-950 bg-blue-300 rounded-full w-8 h-8 flex justify-center items-center ":"text-white circle rounded-full w-8 h-8 flex justify-center items-center border "}>2</div>
                
            </div>



            <div className='  pt-5 px-2 mt-5'>
                <div className={step===3?"circle text-blue-950 bg-blue-300 rounded-full w-8 h-8 flex justify-center items-center ":"text-white circle rounded-full w-8 h-8 flex justify-center items-center border "}>3</div>
               
            </div>


            <div className=' pt-5 px-2 mt-5'>
                <div className={step===4?"circle text-blue-950 bg-blue-300 rounded-full w-8 h-8 flex justify-center items-center ":"text-white circle rounded-full w-8 h-8 flex justify-center items-center border"}>4</div>
                
            </div>
        </div>
    );
}

export default MultiStepMobile;