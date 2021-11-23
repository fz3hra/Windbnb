import React, {useState} from 'react'
import {  RoomInfo } from './InfoSectionElements'
import data from './Data'
import Room from '../Rooms'

const Info = () => {
    const [index, setIndex] = useState(data)
    // const {image, name, star, description} = data[index]
    return (
        <>
            {/* <RoomInfo>
                Stays in Finland
            </RoomInfo> */}
            <Room data={index}/>
        </>
    )
}

export default Info
