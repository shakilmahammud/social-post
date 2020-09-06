import React, { useEffect, useState } from 'react';
import PostSection from '../PostSection/PostSection';

const Post = () => {
    const [posts,setPost]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPost(data))
        
    },[])
    return (
        <div>
            {
                posts.map(pd=><PostSection posts={pd} key={pd.id}></PostSection>)
            }
        </div>
    );
};

export default Post;