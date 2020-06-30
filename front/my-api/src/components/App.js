// import React, { useEffect, useState}  from 'react'
// import { Link } from 'react-router-dom'
// import callPost from '../services/apiDefault'


// function App() {
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
        
//         try{
//             function fetchData(){     
//                 callPost()
//                 setLoading(false)
//             }

//             fetchData()

//         }catch(e){
//             console.log(e)
//             if(e.response)  
//                 console.log(e.response.data)
//         }
//     }, [])

//     if(loading){     
//         return <div>Loading....</div>
//     }

//     return (
//         <div>
//             <h2> App</h2>
//             <Link to="/refreshToken/project"> Go to </Link>
//         </div>
//     )
    
// }

// export default App
