import React from 'react'



const Recording = (props)=>{
    
    
    return(
        <div className='main_record'>
            <h1>Meeting ID</h1>
            <audio controls >
                <source src={require('../records/1/Khanh.wav')} type="audio/wav"></source>
            </audio>

            
        </div>
    )
}
export default Recording