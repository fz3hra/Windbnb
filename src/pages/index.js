import React from 'react'
import Header from '../components/Header'
import Info from '../components/InfoSection'
import Modal from '../components/Modal'
import Search from '../components/Search'

const Home = () => {
    // const {openModal} = Modal();
    // console.log(openModal)
    
    return (
        <>
            <Header />
            <Search />
            <Info />
        </>
        
    )
}

export default Home
