// import api from './api'

async function callPost(){
    
    try{
        // await fetch('http://localhost:4000/refreshToken', {
        //     method: 'POST',
        //     headers: {
        //         'content-Type': 'application/json',
        //         'authorization': `bearer ${localStorage.getItem('token')}`
        //     },
        //     credentials: 'include'
            
        // }).then(async res => {
        //     const { acessToken } = await res.json()   
        //     console.log(acessToken + ' acessTOken')
        //     setToken(acessToken)
        //     localStorage.setItem('token', acessToken)
        // })                        
    
       
    }catch(e){
        console.log(e)
       
    }
}

export default callPost
 


  