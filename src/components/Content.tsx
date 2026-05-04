import React from 'react'
import LeftMenu from './LeftMenu';
import AppGemini from './AppGemini';

function Content(){
    return(
        <div className="row border">
            <LeftMenu/>
            <AppGemini/>
        </div>
    )
}

export default Content;