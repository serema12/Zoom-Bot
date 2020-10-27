import axios from "axios"

const BotLogin = (links)=>{
    window.open(links[0])
    const info = axios.get(`localhost:4000/zoom`,{
                                headers: { 
                                    
                                    
                                },
                        })
                      .then(res =>{
                          console.log(res)
                      })
                      .catch(err=>{
                          console.log(err)
                      })
    console.log(info)
}

export default BotLogin