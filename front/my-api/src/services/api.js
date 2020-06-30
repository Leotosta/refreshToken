import axios from 'axios'
import history from '../history'
import jwtDecode from 'jwt-decode'

let apiURL = 'http://localhost:4000'


let instance = axios.create({
    baseURL: apiURL,
    withCredentials: true
})

instance.interceptors.request.use(config => {

    const token = localStorage.getItem('token')
    
    if(token){
        config.headers['authorization'] = `bearer ${token}`
    }

    config.headers['Content-Type'] = 'application/json'

    return config
}, err =>{
    console.log(err)
    Promise.reject(err)
})


instance.interceptors.response.use(response => {

    return response
}, async err => {
    const { config, response: { status: data }} = err

    const originalRequest = config
    if(data === 401 && originalRequest.url === 
    'http://localhost:4000/refreshToken/project'){
        history.push('/SignIn')
        return Promise.reject(err)
    }

    if(data === 404 && !originalRequest._retry){
        originalRequest._retry = true
        await fetch('http://localhost:4000/refreshToken', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include'

        }).then(async resp => {
                
            const  {acessToken}  = await resp.json()
            
            localStorage.setItem('token', acessToken)
            return originalRequest

            })                        
    
    }

    return Promise.reject(err)

})

export default instance

