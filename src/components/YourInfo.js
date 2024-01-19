import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';



const YourInfo = ({ setStep }) => {

    setStep(1);

    const handleNext = () => {
        window.location.href = "http://localhost:3000/select-plan";
    }
    return (
        <div className='p-16 pt-10 max-sm:p-8'>
            <h1 className=' ubuntu-bold'>Personal info</h1>
            <p className='ubuntu-light pt-1 pb-5'>Please provide your name, email address, and phone number.</p>


            <Formik initialValues={{
                name: "",
                email: "",
                phone: "",

            }}

                onSubmit={(values) => {
                    
                    values.name = '';
                    values.email = '';
                    values.phone = '';
                    handleNext();
                   
                }}


                validate={(values) => {
                    const errors = {};


                    if (values.name === '') {

                        errors.name = 'Name is required';
                    }

                    if (values.email === '') {

                        errors.email = 'Provide valid email';
                    } else if (!values.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                        errors.email = 'This is not a valid email'
                    }

                    if (values.phone === '') {

                        errors.phone = 'Phone is required';
                    }

                    return errors;
                }}
            >



                <Form className="form-registration max-sm:text-sm" action="index.html" enctype="multipart/form-data">


                    <div className='flex justify-between '>
                        <label for="name" >Name</label> <ErrorMessage name='name' >
                            {(errorMsg) => <div className="error text-red-600 ">{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <Field type="text" name="name" className="name border  w-full rounded-md h-10 mt-1 mb-5 p-2 outline-none hover:border-purple-800 focus:border-purple-800" placeholder="e.g. Stephen King" />


                    <div className='flex justify-between'>
                        <label for="email">Email Address</label>
                        <ErrorMessage name='email' >
                            {(errorMsg) => <div className="error text-red-600 ">{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <Field type="email" name="email" className="email border w-full rounded-md h-10 mt-1 mb-5 p-2 outline-none hover:border-purple-800 focus:border-purple-800" placeholder="e.g. stephenking@lorem.com" />




                    <div className='flex justify-between'>

                        <label for="phone">Phone Number</label> <ErrorMessage name='phone' >
                            {(errorMsg) => <div className="error text-red-600 ">{errorMsg}</div>}
                        </ErrorMessage>
                    </div>
                    <Field type="phone" name="phone" className="phone border w-full rounded-md h-10 mt-1 mb-5 p-2 outline-none hover:border-purple-800 focus:border-purple-800" placeholder="e.g. +1 234 567 890" />


                    <div className='relative  w-full h-32 max-md:bg-white  max-md:absolute max-md:bottom-0 max-md:left-0 max-md:h-20 '>
                        <button className="submit absolute bottom-0 max-md:bottom-5 max-md:right-10  right-0 py-2 px-4 rounded-md hover:bg-blue-900" type="submit" >Next Step</button>
                    </div>
                   
                </Form>

            </Formik>

        </div>
    );
}

export default YourInfo;