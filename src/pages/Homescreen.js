import React from 'react'
import BotLogin from '../components/BotLogin'
const Homescreen = ()=>{
    const readText = (e)=>{
        var reader = new FileReader();
        reader.onload = function(event)
        {
            var contents = event.target.result;
            var links= contents.split('\n')
            BotLogin(links)
            
        }
        reader.readAsText(e.target.files[0])
    
        
        
    }
    return(
        <div className='main'>
            
            <div className='main_left'>
                <p>Speech Meeting go</p>
                <input type='file' id='avatar' name='avatar' onChange={(e)=>readText(e)}/>
            </div>
            <div className='main_right'>
                <p>Audio</p>
            </div>
        </div>
    )
}
export default Homescreen