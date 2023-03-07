import React from 'react'
import Div from './Div'
import Button from './Button'

const Subscribe = () => {
    return (
        <Div className='w-full bg-[url("https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/banner%2Fbannershape.png?alt=media&token=1d77f81a-71ce-46cc-96ad-d27704cd8a5d")] bg-cover bg-no-repeat'>
            <Div className='container mx-auto flex flex-col justify-center py-20'>
                <Div className='w-10/10 flex items-center justify-between bg-[#F3F7FA] p-16 rounded-3xl'>
                    <Div className='w-6/12 px-4'>
                        <h1 className='text-[#3734A9] uppercase text-lg font-semibold mb-6'>Our Feature</h1>
                        <h2 className='font-black text-5xl leading-[60px] w-[600px] mb-9'>Receive payments quickly from anywhere</h2>
                        <p className='font-normal text-[19px] w-[512px] text-justify text-[#757095] mb-6'>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <Button className='py-4 px-9 font-semibold hover:bg-[#3734A9] hover:text-white duration-300 rounded-md active'>Get Started</Button>
                    </Div>

                    <Div className='w-4/12 px-4'>
                        <Div className='w-full'>
                            <h1 className='text-[#3734A9] capitalize text-xl font-bold mb-6'>Get Started for Free</h1>
                            <Div className='mb-4'>
                                <input className="appearance-none border rounded h-[60px] w-full py-2 px-6 text-gray-700 leading-tight font-normal text-xl focus:outline-none focus:shadow-outline" type="email" placeholder="Username" />
                            </Div>
                            <Div className="mb-6">
                                <input className="appearance-none border rounded h-[60px] w-full py-2 px-6 text-gray-700 leading-tight font-normal text-xl focus:outline-none focus:shadow-outline" type="password" placeholder="Password" />
                            </Div>
                            <Div className="flex items-center justify-between">
                                <Button className="bg-[#FF7F5C] w-full hover:bg-blue-700 text-white py-4 px-6 rounded focus:outline-none focus:shadow-outline text-xl font-semibold" type="button">Get Started</Button>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}

export default Subscribe