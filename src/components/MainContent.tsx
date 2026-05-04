import React from 'react'
import Message from './Message';
function MainContent(){
    return(
            <div className="col-9">Main Content
            <br/>
            <div className="chatcontainer">
            <Message type="question">Pergunta</Message>
            <Message type="answer">Resposta</Message>
            </div>
            <input id="typeprompt" placeholder='Ask anything'></input>
            <button type="button" className="btn btn-secondary">Submit</button>
            </div>
    )
}

export default MainContent;