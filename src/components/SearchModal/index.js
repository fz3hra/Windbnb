import React, {useState} from 'react'
import Search from '../Search'
import { Div, Header, EditSearch, Seperator, Input, Button } from './SearchModelElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const ModalTest = ({openModal, setOpenModal, toggle}) => {
    const styles = {
        Icon: {
            position: "absolute",
            left: "27rem",
            right: "22.53%",
            top: "22.53%",
            bottom: "22.53%",
        }
    };
    return <>{openModal ? 
            <Div>
                <Header>
                    Edit your search
                    <FontAwesomeIcon icon={faTimes} style={styles.Icon} onClick={() => setOpenModal(!openModal)}/>
                </Header>
                <EditSearch>
                    <p className="location">location</p>
                    <Input
                    text="Finland"
                    placeholder="Helsinki, Finland"
                    style = {{ left:"36px", top:"32px"}}
                    />
                    <Seperator />
                    <p className="guests">Guests</p>
                    <Input
                    text="Add guests"
                    placeholder="Add Guests"
                    style = {{ left:"36px", top:"83px" }}
                    />
                </EditSearch>
                <Button>Search</Button>
            </Div> : null} 
        </>;
    // return 
    // (
    //     // <Search onclick={() => {"you click me"}}/>
    //     <div>
    //         {/* <h2>modal open</h2>
    //         <button onClick={() => toggle()}>close</button> */}
    //         {/* {openModal ? <div>modal open</div> : null} */}
    //         <h2>open</h2>
    //     </div>
    // )
}

export default ModalTest
