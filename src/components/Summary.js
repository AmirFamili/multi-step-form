import React from 'react';
import { Link } from 'react-router-dom';

const Summary = ({ setStep, plan, period, setPeriod, online, storage, profile }) => {

    setStep(4);
 var total = 0;
    const sum = () => {

       
        if (period) {

            plan == 0 ? total += 9 : plan == 1 ? total += 12 : total += 15;
            if (online) {
                total += 1;
            }
            if (storage) {
                total += 2;
            }
            if (profile) {
                total += 2;
            }

        } else {
            plan == 0 ? total += 90 : plan == 1 ? total += 120 : total += 150;
            if (online) {
                total += 10;
            }
            if (storage) {
                total += 20;
            }
            if (profile) {
                total += 20;
            }


        }
        return total;
    }

 
    return (
        <div className='p-16 pt-10 max-lg:p-10 max-sm:p-5 '>
            <h1 className=' ubuntu-bold '>Finishing up</h1>
            <p className='ubuntu-light pt-1 pb-5'>Double-check everything looks OK before confirming.</p>


            <div className="bg-gray-100 p-5 rounded-lg">
                <div className="flex justify-between items-center border-b-2  pb-5">
                    <div className="max-sm:text-sm ">
                        <p className="font-medium">{plan == 0 ? 'Arcade' : plan == 1 ? 'Advanced' : 'pro'}{period ? ' (Monthly)' : ' (Yearly)'}</p>
                        <p className="text-sm ubuntu-light cursor-pointer underline hover:text-indigo-600 " onClick={() => setPeriod(!period)}>Change</p>
                    </div>

                    <p className=" font-medium max-sm:text-sm">{period ? plan == 0 ? '$9/mo' : plan == 1 ? '$12/mo' : '$15/mo' : plan == 0 ? '$90/yr' : plan == 1 ? '$120/yr' : '$150/yr'}</p>
                </div>
                {online ?
                    <div className="flex justify-between items-center p-3 ">
                        <p className='ubuntu-light text-sm'>Online service</p>
                        <p className='text-sm  text-gray-600'>{period ? '+$1/mo' : '+$10/yr'}</p>
                    </div> : ''}
                {storage ?
                    <div className="flex justify-between items-center p-3 ">
                        <p className='ubuntu-light text-sm'>Larger storage</p>
                        <p className='text-sm  text-gray-600'>{period ? '+$2/mo' : '+$20/yr'}</p>
                    </div> : ''}
                {profile ?
                    <div className="flex justify-between items-center p-3 ">
                        <p className='ubuntu-light text-sm'>Customizable profile</p>
                        <p className='text-sm text-gray-600'>{period ? '+$2/mo' : '+$20/yr'}</p>
                    </div> : ''}
            </div>

            <div className='p-5 flex justify-between items-center'>
                <p className='text-gray-400'>Total{period ? ' (per month)' : ' (per year)'}</p>
                <p className='text-indigo-600 font-bold '>
                    ${sum()}/{period ? ' mo' : ' yr'}
                </p>
            </div>

            <div className='relative  w-full h-32 max-md:bg-white  max-md:absolute max-md:bottom-0 max-md:left-0 max-md:h-20 '>
                <Link to="/add-ons" className="absolute bottom-0 max-md:left-10 left-0 max-md:bottom-5 py-2 px-4 text-gray-500 hover:text-gray-700 rounded-md ">Go Back</Link>
                <Link to="/thank-you" className=" absolute bottom-0 max-md:bottom-5 max-md:right-10  right-0 py-2 px-4 rounded-md  bg-indigo-600 text-white hover:bg-indigo-400 ">Confirm</Link>
            </div>

        </div>
    );
}

export default Summary;