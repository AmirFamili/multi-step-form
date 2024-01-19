import React from 'react';
import Arcade from '../assets/images/icon-arcade.svg';
import Advance from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import { Link } from 'react-router-dom';



const SelectPlan = ({ setStep, plan, setPlan, period, setPeriod }) => {


    setStep(2);

    return (
        <div className='p-16 pt-10 max-sm:p-8 max-sm:pt-0'>
            <h1 className=' ubuntu-bold max-sm:text-2xl'>Select your plan</h1>
            <p className='ubuntu-light pt-1 pb-5  max-sm:pb-1'>You have the option of monthly or yearly billing.</p>

            <div className="flex  justify-around items-center py-3 max-lg:py-0 max-lg:block max-md:py-2">
                <div className={plan == 0 ? 'p-3 border bg-slate-100 border-purple-900 w-32 m-2 rounded-lg cursor-pointer hover:border-purple-900 max-lg:flex max-lg:w-full' : 'p-3 border w-32 m-2 rounded-lg cursor-pointer hover:border-purple-900 max-lg:flex max-lg:w-full'} onClick={() => setPlan(0)}>
                    <img src={Arcade} className='mb-10 max-lg:mb-0' />
                    <div className='pl-3'>
                        <p className='max-sm:text-sm'>Arcade</p>
                        {period ? <p className="text-sm text-gray-400">$9/mo</p> :
                            <div >
                                <p className="text-sm text-gray-400">$90/yr</p>
                                <p className="text-sm ">2 months free</p></div>}
                    </div>
                </div>
                <div className={plan == 1 ? 'p-3 border bg-slate-100 border-purple-900 w-32 m-2 rounded-lg cursor-pointer hover:border-purple-900 max-lg:flex max-lg:w-full' : 'p-3 border  w-32 m-2 rounded-lg cursor-pointer hover:border-purple-900 max-lg:flex max-lg:w-full'} onClick={() => setPlan(1)}>
                  
                        <img src={Advance} className='mb-9 max-lg:mb-0' />
                         <div className='pl-3'> 
                        <p className='max-sm:text-sm'>Advanced</p>
                        {period ? <p className="text-sm text-gray-400">$12/mo</p> : <div>
                            <p className="text-sm text-gray-400">$120/yr</p>
                            <p className="text-sm ">2 months free</p></div>}
                    </div>
                </div>
                <div className={plan == 2 ? 'p-3 border cursor-pointer bg-slate-100 border-purple-900 hover:border-purple-900   w-32 m-2 rounded-lg max-lg:flex max-lg:w-full' : 'p-3 border  w-32 m-2 rounded-lg cursor-pointer hover:border-purple-900 max-lg:flex max-lg:w-full'} onClick={() => setPlan(2)}>
                    <img src={pro} className='mb-9 max-lg:mb-0' />
                    <div className='pl-3'>
                        <p className='max-sm:text-sm'>Pro</p>
                        {period ? <p className="text-sm text-gray-400">$15/mo</p> : <div>
                            <p className="text-sm text-gray-400">$150/yr</p>
                            <p className="text-sm ">2 months free</p></div>}
                    </div>
                </div>
            </div>
            <div className="flex justify-center item-center w-full mt-5 p-3 rounded-lg bg-gray-100 text-center max-md:mt-2 ">
                <span className={period ? 'pr-3 text-black  max-sm:text-sm' : 'text-gray-400 pr-3  max-sm:text-sm'}>Monthly</span>
                <div className={period ? "w-9 h-5 mt-1  rounded-3xl cursor-pointer bg-gray-700 flex items-center  justify-start p-1" : "w-9 h-5 mt-1  rounded-3xl cursor-pointer bg-gray-700 flex items-center  justify-end p-1"} onClick={() => setPeriod(!period)}>
                    <button className="rounded-full bg-gray-200 w-3 h-3 " ></button>
                </div>
                <span className={period ? 'pl-3  text-gray-400 max-sm:text-sm' : 'text-black pl-3  max-sm:text-sm'}>Yearly</span>
            </div>

            <div className='relative  w-full h-32 max-md:bg-white  max-md:absolute max-md:bottom-0 max-md:left-0 max-md:h-20 '>
                <Link to="/" className="absolute bottom-0 max-md:left-10 left-0 max-md:bottom-5 py-2 px-4 text-gray-500 hover:text-gray-700 rounded-md ">Go Back</Link>
                <Link to="/add-ons" className="submit absolute bottom-0 max-md:bottom-5 max-md:right-10  right-0 py-2 px-4 rounded-md hover:bg-blue-900">Next Step</Link>
            </div>

        </div>
    );
}

export default SelectPlan;