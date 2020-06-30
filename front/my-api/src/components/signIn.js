import React from 'react'
import  {useForm}  from 'react-hook-form'
import api from '../services/api'
import history from '../history'
import {getToken, setToken} from '../storage'

function SignIn() {
    
    const { register, handleSubmit } = useForm()


   async function onSubmit(dados){
       try{
          
           const {data: {token}} = await api.post('/SignIn', dados)
           
           if(!token)
               return new Error('Invalid section!')
           
            localStorage.setItem('token', token)

           history.push('/refreshToken/project')

       }catch(e){
           if(e.response)
               console.log(e.response.data)
       }

   }
  

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label> Username </label>
                <input type="text" defaultValue="leotosta11" name="username" ref={register} />
            </div>

            <div>
                <label> Password </label>
                <input type="password" defaultValue="123456" name="password" ref={register} />
            </div>

            <button > Submit </button>

        </form>
    )
}

export default SignIn
