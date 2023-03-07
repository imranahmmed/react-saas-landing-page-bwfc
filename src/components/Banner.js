import React, { useEffect, useState } from 'react'
import Button from './Button'
import Div from './Div'
import Img from './Img'
import { FaPlay } from 'react-icons/fa'
import axios from 'axios'

const Banner = () => {
    let [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        axios.get("https://bwfc-api.vercel.app/banner").then((res) => {
            setBannerData(res.data)
        })
    }, [])
    return (
        <Div className='w-full bg-[url("https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/banner%2Fbannershape.png?alt=media&token=1d77f81a-71ce-46cc-96ad-d27704cd8a5d")] bg-cover bg-no-repeat'>
            <Div className='container mx-auto py-20'>
                <Div className='w-full flex items-center justify-between'>
                    <Div className='w-6/12 px-4'>
                        <Div>
                            <h1 className='text-6xl font-black leading-[80px] w-[646px]'>{bannerData.bannerheading}</h1>
                            <p className='font-normal text-[19px] w-[446px] text-justify mt-4'>{bannerData.bannerparagraph}</p>
                            <Div className='buttons flex items-center gap-3 mt-4'>
                                {bannerData.bannerButton &&
                                    <Button className='py-4 px-9 font-semibold bg-[#3734A9] text-white duration-300 rounded-[50px]'>{bannerData.bannerButton.text}</Button>
                                }

                                {bannerData.video &&
                                    <Div className='flex items-center gap-3'>
                                        <button className='py-4 px-4 font-semibold bg-[#22D497] text-white duration-300 rounded-full'><FaPlay /></button>
                                        <h1>{bannerData.video.text}</h1>
                                    </Div>

                                }
                            </Div>
                        </Div>
                    </Div>
                    <Div className='w-6/12 px-4'>
                        <Img className='ml-[126px]' src="./assets/images/bannerImg.png" />
                        {/* <Img className='ml-[126px]' src={bannerData.bannerrightimg} /> */}
                    </Div>

                </Div>
            </Div>
        </Div>
    )
}

export default Banner