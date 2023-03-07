import React, { useEffect, useState } from 'react'
import Div from './Div'
import Dropdown from './Dropdown'
import Img from './Img'
import List from './List'
import ListItem from './ListItem'
import { IoIosArrowDown } from 'react-icons/io'
import axios from 'axios'
import Button from './Button'
const Header = () => {
    let [headerData, setHeaderData] = useState([])
    useEffect(() => {
        axios.get("https://bwfc-api.vercel.app/navbar").then((res) => {
            setHeaderData(res.data)
        })
    }, [])

    return (
        <>
            <Div className='container mx-auto flex items-center justify-between py-4'>
                <Div className='w-3/12 px-4'>
                    <Img src={headerData.logo} />
                </Div>
                <Div className='w-5/12 px-4'>
                    <List className='flex items-center justify-center gap-5'>
                        {headerData.navItems && headerData.navItems.map((navItem, index) => (
                            <Div key={index}>
                                {navItem.dropDown ?
                                    <Dropdown className='relative inline-block text-left' dropDownItems={navItem.dropDownItem}>{navItem.item} <IoIosArrowDown className='text-xl mt-1 ml-1' /></Dropdown>
                                    :
                                    <ListItem className='font-medium'>{navItem.item}</ListItem>
                                }
                            </Div>
                        ))}
                    </List>
                </Div>
                <Div className='w-4/12 px-4'>
                    <Div className='flex items-center justify-end gap-3'>
                        {headerData.buttonOne &&
                            <Button className='py-4 px-9 font-semibold hover:bg-[#3734A9] hover:text-white duration-300 rounded-md'>{headerData.buttonOne.text}</Button>
                        }

                        {headerData.buttonTwo &&
                            <Button className='py-4 px-9 font-semibold hover:bg-[#3734A9] hover:text-white duration-300 rounded-md active'>{headerData.buttonTwo.text}</Button>
                        }

                        {headerData.buttonThree &&
                            <Button className='py-4 px-9 font-semibold hover:bg-[#3734A9] hover:text-white duration-300 rounded-md'>{headerData.buttonThree.text}</Button>
                        }
                    </Div>
                </Div>
            </Div >
        </>
    )
}

export default Header