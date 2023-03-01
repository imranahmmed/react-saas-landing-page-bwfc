import React, { useState } from 'react'
import List from './List'
import ListItem from './ListItem'

const Dropdown = ({ className, children, dropDownItems }) => {
    let [showDropDown, setShowDropDown] = useState(false)
    let handleDropDown = () => {
        setShowDropDown(!showDropDown)
    }

    return (
        <ListItem className={className}>
            <span onClick={handleDropDown} type="button" className="flex w-full items-center justify-center bg-white text-gray-700 shadow-sm font-semibold">
                {children}
            </span>

            {showDropDown &&
                <List className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {dropDownItems && dropDownItems.map((dropDownItem, index) => (
                        <ListItem className="py-1" key={index}>
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm">{dropDownItem.dropItem}</a>
                        </ListItem>
                    ))}

                </List>
            }
        </ListItem>

    )
}

export default Dropdown