import React from 'react'
import {  Section, Img, Name, Star, Description, H2 } from './RoomElements'
import '../../index.css';

const Room = ({data}) => {
    return (
        <div className="section-info">
            {data.map((index) => {
                const {image, name, star, description} = index;

                return (
                    <Section>
                        <Img src={image}/>
                        <Name>{name}</Name>
                        <Star>{star}</Star>
                        <Description>
                                {description}
                        </Description>
                    </Section>
                )
            })}

        </div>
    )
}

export default Room
