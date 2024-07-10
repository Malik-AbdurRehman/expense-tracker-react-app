import { useEffect, useState } from "react";

const App=()=>{
    const [resourceType, setResourceType]=useState('posts')

    return(
        <>
        <button on onClick={()=>setResourceType('posts')}>Posts</button>
        
        <button on onClick={()=>setResourceType('users')}>Posts</button>
        
        <button on onClick={()=>setResourceType('comments')}>Posts</button>
        </>
    )
}
export default App 