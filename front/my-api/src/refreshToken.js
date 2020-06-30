
async function refreshToken(){

   const resp =  await fetch('http://localhost:4000/refreshToken', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${localStorage.getItem('token')}`
        },
        credentials: 'include'
    })

    const { acessToken } = await resp.json()
    
}

export default refreshToken
