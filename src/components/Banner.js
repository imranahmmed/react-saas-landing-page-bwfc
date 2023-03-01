import React from 'react'
import Button from './Button'
import Div from './Div'
import Img from './Img'
import { FaPlay } from 'react-icons/fa'
const Banner = () => {
    return (
        <Div className='container mx-auto bg-[url("https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/banner%2Fbannershape.png?alt=media&token=1d77f81a-71ce-46cc-96ad-d27704cd8a5d")] min-h-[663px]'>
            <Div className='w-full flex items-center justify-between'>
                <Div className='w-6/12'>
                    <h1 className='text-6xl font-extrabold leading-[80px]'>Managing business payments has never been easier</h1>
                    <p className='font-normal text-[19px] w-[446px] text-justify mt-4'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                    <Div className='buttons flex items-center gap-3 mt-4'>
                        <Button className='py-4 px-9 font-semibold bg-[#3734A9] text-white duration-300 rounded-[50px]'>Get Started</Button>
                        <Div className='flex items-center gap-3'>
                            <Button className='py-4 px-4 font-semibold bg-[#22D497] text-white duration-300 rounded-full'><FaPlay/></Button>
                            <h1>See How It Works</h1>
                        </Div>
                    </Div>
                </Div>
                <Div className='w-6/12'>
                    <Img className='ml-[126px]' src="https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/banner%2Fbannerrightimg.png?alt=media&token=0eac3ad9-3100-40b9-b6aa-c06c8b3e4399" />
                </Div>

            </Div>
        </Div>
    )
}

export default Banner