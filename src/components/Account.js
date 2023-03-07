import React, { useEffect, useState } from 'react'
import Div from './Div'
import Img from './Img'
import Button from './Button'
import axios from 'axios'

const Account = () => {
    let [accountData, setAccountData] = useState([]);

    useEffect(() => {
        axios.get("https://bwfc-api.vercel.app/account").then((res) => {
            setAccountData(res.data)
        })
    }, [])

    return (
        <Div className='w-full bg-[url("https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/banner%2Fbannershape.png?alt=media&token=1d77f81a-71ce-46cc-96ad-d27704cd8a5d")] bg-cover bg-no-repeat'>
            <Div className='container mx-auto flex flex-col justify-center py-20'>
                <Div className='flex items-center justify-center'>
                    <Div className='w-6/12 px-4'>
                        <h1 className='text-[#3734A9] uppercase text-lg font-semibold mb-6'>{accountData.subTitle}</h1>
                        <h2 className='font-black text-5xl leading-[60px] w-[540px] mb-9'>{accountData.title}</h2>
                        <p className='font-normal text-[19px] w-[512px] text-justify text-[#757095] mb-6'>{accountData.paragraph}</p>
                        {accountData.button &&
                            <Button className='py-4 px-9 font-semibold hover:bg-[#3734A9] hover:text-white duration-300 rounded-md active'>{accountData.button.text}</Button>
                        }
                    </Div>
                    <Div className='w-6/12 px-4'>
                        <Img className='w-full' src={accountData.accountImage} />
                    </Div>

                </Div>
            </Div>
        </Div>
    )
}

export default Account