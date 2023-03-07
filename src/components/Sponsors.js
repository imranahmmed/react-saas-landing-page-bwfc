import React, { useEffect, useState } from 'react'
import Div from './Div'
import Img from './Img'
import axios from 'axios'


const Sponsors = () => {
    let [sponsorData, setSponsorData] = useState([]);

    useEffect(() => {
        axios.get("https://bwfc-api.vercel.app/sponsor").then((res) => {
            setSponsorData(res.data)
        })
    }, [])

    return (
        <Div className='container mx-auto flex flex-col justify-center py-20'>
            <Div className='w-8/8 px-5 text-center'>
                <h1 className='font-medium text-2xl mb-6'>{sponsorData.title}</h1>
            </Div>

            <Div className='flex flex-wrap items-center justify-center'>
                {sponsorData.logos && sponsorData.logos.map((item, index) => (
                    <Div key={index} className='w-[13%] px-5 mb-5'>
                        <Img className='w-full' src={item.src} />
                    </Div>
                ))}
            </Div>
        </Div>
    )
}

export default Sponsors