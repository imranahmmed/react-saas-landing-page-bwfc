import React from 'react'
import { FaStar } from 'react-icons/fa'
import { ImStarFull, ImStarHalf } from 'react-icons/im'
import Div from './Div'
const Rating = ({ score }) => {
    return (
        <>
            {score === 1 &&
                <Div className='flex items-center justify-start gap-1'>
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#d1d1d1]' />
                    <FaStar className='text-[#d1d1d1]' />
                    <FaStar className='text-[#d1d1d1]' />
                    <FaStar className='text-[#d1d1d1]' />
                </Div>
            }
            {score === 2 &&
                <Div className='flex items-center justify-start gap-1'>
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#d1d1d1]' />
                    <FaStar className='text-[#d1d1d1]' />
                    <FaStar className='text-[#d1d1d1]' />
                </Div>
            }
            {score === 3 &&
                <Div className='flex items-center justify-start gap-1'>
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#d1d1d1]' />
                    <FaStar className='text-[#d1d1d1]' />
                </Div>
            }

            {score === 3.5 &&
                <Div className='flex items-center justify-start gap-1'>
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                    <ImStarHalf className='text-[#F9896B]' />
                    <FaStar className='text-[#d1d1d1]' />
                </Div>
            }
            {score === 4.5 &&
                <Div className='flex items-center justify-start gap-1'>
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                    <ImStarHalf className='text-[#F9896B]' />
                </Div>
            }

            {score === 4 &&
                <Div className='flex items-center justify-start gap-1'>
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#d1d1d1]' />
                </Div>
            }
            {score === 5 &&
                <Div className='flex items-center justify-start gap-1'>
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                    <FaStar className='text-[#F9896B]' />
                </Div>
            }
        </>
    )
}

export default Rating