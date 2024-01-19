import React from 'react';
import ThankYouImg from '../assets/images/icon-thank-you.svg';


const ThankYou = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-32 max-md:mt-16'>

            <img src={ThankYouImg} alt="Thank-you" />
            <h1 className="mt-8 ubuntu-bold">Thank you!</h1>
            <p className="text-center mt-3 mx-10 max-sm:mx-1 text-gray-400">Thanks for confirming your subcription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com. </p>
        </div>
    );
}

export default ThankYou;