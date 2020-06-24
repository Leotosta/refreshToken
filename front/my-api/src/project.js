import React, {useState} from 'react'
import Context from '../src/stores/store'

function Project(props){

    const [ auth, setAuth ] = useState('')

    return(
        <Context.Provider value={{auth, setAuth}} >
            {props.children}
        </Context.Provider>
    )

}

export default Project