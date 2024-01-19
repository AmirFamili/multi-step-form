import React from 'react';


const MultiStep = ({step}) => {

    return (
        <div className="multi-step-box  w-2/6 h-full rounded-xl max-md:hidden">
            <div className='flex  pt-10 px-5'>
                <div className={step===1?"circle text-blue-950 bg-blue-300 rounded-full w-8 h-8 flex justify-center items-center ":"text-white circle rounded-full w-8 h-8 flex justify-center items-center "}>1</div>
                <div className=" text-white pl-3">
                    <p className='text-xs'>STEP 1</p>
                    <h5 className='text-sm font-bold'>YOUR INFO</h5>
                </div>
            </div>


            <div className='flex  pt-5 px-5 '>
                <div className={step===2?"circle text-blue-950 bg-blue-300 rounded-full w-8 h-8 flex justify-center items-center ":"text-white circle rounded-full w-8 h-8 flex justify-center items-center "}>2</div>
                <div className=" text-white pl-3">
                    <p className='text-xs'>STEP 2</p>
                    <h5 className='text-sm font-bold'>SELECT PLAN</h5>
                </div>
            </div>



            <div className='flex  pt-5 px-5'>
                <div className={step===3?"circle text-blue-950 bg-blue-300 rounded-full w-8 h-8 flex justify-center items-center ":"text-white circle rounded-full w-8 h-8 flex justify-center items-center "}>3</div>
                <div className=" text-white pl-3">
                    <p className='text-xs'>STEP 3</p>
                    <h5 className='text-sm font-bold'>ADD-ONS</h5>
                </div>
            </div>


            <div className='flex  pt-5 px-5'>
                <div className={step===4?"circle text-blue-950 bg-blue-300 rounded-full w-8 h-8 flex justify-center items-center ":"text-white circle rounded-full w-8 h-8 flex justify-center items-center "}>4</div>
                <div className=" text-white pl-3">
                    <p className='text-xs'>STEP 4</p>
                    <h5 className='text-sm font-bold'>SUMMARY</h5>
                </div>
            </div>
        </div>
    );
}

export default MultiStep;