import React, { useState, useEffect } from 'react'
import Img from './Img'
import { FaQuoteLeft } from 'react-icons/fa'
import Div from './Div'
import Rating from './Rating'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'

const Testimonial = () => {
    let [testmonialData, setTestimonialData] = useState([]);

    useEffect(() => {
        axios.get("https://bwfc-api.vercel.app/client").then((res) => {
            setTestimonialData(res.data)
        })
    }, [])

    console.log(testmonialData)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: testmonialData.slideToShow,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };
    return (
        <Div className='container mx-auto py-20'>
            <Div className='sectionHeading px-4'>
                <h1 className='text-[#3734A9] uppercase text-lg font-semibold mb-6'>{testmonialData.subTitle}</h1>
                <h2 className='font-black text-5xl leading-[60px] w-[540px] mb-9'>{testmonialData.title}</h2>
            </Div>

            <Slider {...settings}>
                {testmonialData.sliderItem && testmonialData.sliderItem.map((item, index) => (
                    <Div key={index} className='testimonial_Slider w-full flex items-center justify-between'>
                        <Div className='w-6/12 px-4'>
                            <Img src={item.image} />
                        </Div>
                        <Div className='w-6/12 px-4'>
                            <span className='font-extrabold text-4xl text-[#FF7F5C] block'>{item.symbol}</span>
                            <span className='font-extrabold text-xl w-[290px] inline-block my-4'>{item.heading}</span>
                            <p className='font-normal text-[16px] text-[#757095] mb-4 text-justify'>{item.paragraph}</p>

                            <Rating score={item.rating} />

                            <span className='font-extrabold text-[16px] block mt-4'>{item.name}</span>
                            <span className='font-normal text-[16px] block'>{item.designation}</span>
                        </Div>
                    </Div>
                ))}
            </Slider>

        </Div >
    )
}

export default Testimonial