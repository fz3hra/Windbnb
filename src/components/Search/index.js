import React, { useState} from 'react';
import { Div, Input, Line, InputGuest, Icon } from './SearchElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ModalTest from '../SearchModal';

// { openModal, showModal,setShowModal}
const Search = () => {
    const [openModal, setOpenModal] = useState(false)
    const toggle = () => 
    {
        setOpenModal(!openModal)
    }
    // css styling
    const styles = {
        Icon: {
            position: "absolute",
            left: "90.53%",
            right: "14.92%",
            top: "32.11%",
            bottom: "84.51%",
            color: "rgba(235, 87, 87, 0.9)"
        }
    };
    return (
        <Div>
            <Input
                // newModal:
                onClick={() => {toggle()}}
                // onClick={() => {console.log("click click")}}
                // onClick={openModal}
                // showModal={showModal}
                text="Finland"
                placeholder="Helsinki, Finland"
                style = {{ left:"25px" }}
            />
            {/* <Modal setShowModal={setShowModal} showModal={showModal} /> */}
            
            {/* {openModal ?
                <div>modal open</div>
            : null} */}
            <Line 
                style={{ left: "122px"}}
            />
            <Input 
                onClick={() => {toggle()}}
                placeholder="Add Guests"
                style={{left:"172px" }}
            />
            {/* <Modal setShowModal={setShowModal} showModal={showModal} /> */}
            {/* <ModalTest openModal={openModal} setOpenModal={setOpenModal}/> */}
            <InputGuest 
                style={{ left: "230px"}}
            />
            <FontAwesomeIcon 
                // onClick={() => {toggle()}}
                style={styles.Icon}
                icon={faSearch}
            />
            {/* <Modal setShowModal={setShowModal} showModal={showModal} /> */}
            {/* <ModalTest show={openModal} setOpenModal={setOpenModal}/> */}
            <ModalTest openModal={openModal} setOpenModal={setOpenModal}/>
        </Div>
    )
}

export default Search


