import React from 'react';
import { Link } from 'react-router-dom';

const AddOns = ({ setStep, online, setOnline, storage, setStorage, profile, setProfile, period }) => {

    setStep(3);

    return (
        <div className='p-16 pt-10 max-md:p-8 max-sm:p-5'>
            <h1 className=' ubuntu-bold'>Pick add-ons</h1>
            <p className='ubuntu-light pt-1 pb-5'>Add-ons help enhance your gaming experience.</p>

            <div className={online?"my-2 w-full border bg-slate-100  border-purple-900 flex justify-between items-center p-5 rounded-lg hover:border-purple-900 max-sm:p-2":"my-2 w-full border flex justify-between items-center p-5 max-sm:p-2 rounded-lg hover:border-purple-900"}>
                <div className='flex justify-around items-center'>
                    <input type="checkbox" onChange={()=>setOnline(!online)} checked={online?true:false} />
                    <div>
                        <h2 className='pl-3 max-sm:text-sm '>Online service</h2>
                        <p className='ubuntu-light text-xs	pl-3 pt-1'>Access to multiplayer games</p>
                    </div>
                </div>
                <p className='text-purple-800 max-md:text-sm'>{period?"+$1/mo":"+$10/yr"} </p>
            </div>

            <div className={storage?"my-2 w-full border bg-slate-100  border-purple-900 flex justify-between items-center p-5 rounded-lg hover:border-purple-900 max-sm:p-2":"my-2 w-full border flex justify-between hover:border-purple-900 items-center p-5 rounded-lg max-sm:p-2"}>
                <div className='flex justify-around items-center'>
                    <input type="checkbox" onChange={()=>setStorage(!storage)} checked={storage?true:false}  />
                    <div>
                        <h2 className='pl-3 max-sm:text-sm'>Larger storage</h2>
                        <p className='ubuntu-light text-xs	pl-3 pt-1'>Extra 1TB of cloud save</p>
                    </div>
                </div>
                <p className='text-purple-800 max-md:text-sm'>{period?"+$2/mo":"+$20/yr"}</p>
            </div>

            <div className={profile?"my-2 w-full border bg-slate-100  border-purple-900 flex justify-between items-center p-5 rounded-lg hover:border-purple-900 max-sm:p-2":"my-2 w-full border flex justify-between items-center p-5 rounded-lg hover:border-purple-900 max-sm:p-2"}>
                <div className='flex justify-around items-center'>
                    <input type="checkbox" onChange={()=>setProfile(!profile)} checked={profile?'true':false} />
                    <div>
                        <h2 className='pl-3 max-sm:text-sm'>Customizable profile</h2>
                        <p className='ubuntu-light text-xs	pl-3 pt-1'>Custom theme on your profile</p>
                    </div>
                </div>
                <p className='text-purple-800 max-md:text-sm'>{period?"+$2/mo":"+$20/yr"}</p>
            </div>

            <div className='relative  w-full h-32 max-md:bg-white  max-md:absolute max-md:bottom-0 max-md:left-0 max-md:h-20 '>
                <Link to="/select-plan" className="absolute bottom-0 max-md:left-10 left-0 max-md:bottom-5 py-2 px-4 text-gray-500 hover:text-gray-700 rounded-md ">Go Back</Link>
                <Link to="/summary" className="submit absolute bottom-0 max-md:bottom-5 max-md:right-10  right-0 py-2 px-4 rounded-md hover:bg-blue-900">Next Step</Link>
            </div>
        </div>


    );
}

export default AddOns;