import React from 'react'
import recordInformation from '../userData/recordInformation'
const Homescreen = (props)=>{
    //const readText = (e)=>{
    //    var reader = new FileReader();
    //    reader.onload = function(event)
    //    {
    //        var contents = event.target.result;
    //        var links= contents.split('\n')
    //        BotLogin(links)
            
    //    }
    //    reader.readAsText(e.target.files[0])
    
        
        
    //}
    const clickButton = (meetingPath,meetingId) =>{
        if (!(meetingPath || meetingId )) return;

        props.history.push({pathname:`/record/${meetingId}`,recordpath:`${meetingPath}`})
    }
    return(
        <div className='main'>
            
            <div className='main_left'>
                <h1>Choose a meeting</h1>
                <h4>Find a meeting record</h4>
                <img src='' alt='showmeetinginfo'></img>
                
            </div>
            <div className='main_right'>
                <h2>Audio</h2>
                {recordInformation.map((record,index)=>
                    <div className='record' key={index}>
                        <div className='record_info'>
                            <h3>Meeting {record.meetingId}</h3>
                            <p>Host Name: {record.hostname} </p>
                            <p>Size: </p>
                        </div>
                        <div className='record_button'>
                            <button className='button' onClick={()=>clickButton(record.audioPath,record.meetingId)}>Click Now</button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}
export default Homescreen