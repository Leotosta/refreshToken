import React, { useEffect, useState } from 'react'
import api from '../api'
import { getToken } from '../storage'

function Project() {

    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        async function fetchData(){
            api.defaults.headers.authorization = `Bearer ${getToken()}`
            
            const data = await api.get('/project')
            console.log(data)
            setLoading(false)
        }

        fetchData()

    }, [])

    if(loading)
        return <div> loading... </div>

    return (
        <div>
            <h2>sgf</h2>
        </div>
    )
}

export default Project
