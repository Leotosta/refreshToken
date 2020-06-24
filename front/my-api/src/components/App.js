import React, { useEffect, useState} from 'react'
import { setToken, getToken } from '../storage'
import Context from '../stores/store'

function App() {
    const [loading, setLoading] = useState(true)
    // const {auth, setAuth} = useContext(Context)

    useEffect(() => {
        
        try{
              async function fetchData(){     

                   await fetch('http://localhost:4000/refreshToken', {
                        method: 'POST',
                        headers: {
                            'content-Type': 'application/json',
                            'authorization': `bearer ${getToken()}`
                        },
                        credentials: 'include'
                        
                    }).then(async res => {
                        const { acessToken } = await res.json()   

                        setToken(acessToken)
                        setLoading(false)
                    })
            }

            fetchData()

        }catch(e){
            console.log(e)
            if(e.response)  
                console.log(e.response.data)
        }
    }, [])

    if(loading){     
        return <div>Loading....</div>
    }

    return (
        <div>
            <h2> App</h2>
        </div>
    )
    
}

export default App
