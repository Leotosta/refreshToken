import React, {useEffect, useState} from 'react'
import api from '../services/api'
import refreshToken from '../refreshToken'

function ProjectRef() {
    
    const [ loading , setLoading ] = useState(true)

    useEffect(() => {
        async function fetchData(){
            const  res  = await api.get('/refreshToken/project') 
            
             console.log(res )

            setLoading(false)

        }

        fetchData()

    }, [])

    if(loading)
        return <div>loading...</div>
    
    return (
        <div>
            <h2>here</h2>
        </div>
    )
}

export default ProjectRef
