import React, { useEffect, useState } from 'react'
import Div from './Div'
import Img from './Img'
import Button from './Button'
import axios from 'axios'

const Finance = () => {
    let [financeData, setFinanceData] = useState([]);

    useEffect(() => {
        axios.get("https://bwfc-api.vercel.app/finance").then((res) => {
            setFinanceData(res.data)
        })
    }, [])
    return (
        <Div className='w-full'>
            <Div className='container mx-auto flex flex-col justify-center py-20'>
                <Div className='flex items-center justify-center'>
                    <Div className='w-6/12 px-4'>
                        <h1 className='text-[#3734A9] uppercase text-lg font-semibold mb-6'>{financeData.sunbTitle}</h1>
                        <h2 className='font-black text-5xl leading-[60px] w-[540px] mb-9'>{financeData.heading}</h2>
                        <p className='font-normal text-[19px] w-[512px] text-justify text-[#757095] mb-6'>{financeData.paragraph}</p>
                        {financeData.button &&
                            <Button className='py-4 px-9 font-semibold hover:bg-[#3734A9] hover:text-white duration-300 rounded-md active'>{financeData.button.text}</Button>
                        }
                    </Div>
                    <Div className='w-6/12 px-4'>
                        <Img className='w-full' src={financeData.image} />
                    </Div>

                </Div>
            </Div>
        </Div>
    )
}

export default Finance