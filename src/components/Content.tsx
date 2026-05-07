import React from 'react'
import LeftMenu from './LeftMenu';
import AppGemini from './AppGemini';
import Header from './Header';
import Footer from './Footer';

function Content(){
    return(
        <div className="row border">
            <Header/>
            <LeftMenu/>
            <AppGemini/>
            <Footer/>
        </div>
    )
}

export default Content;