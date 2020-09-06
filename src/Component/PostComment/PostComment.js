import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Container,Grid}from '@material-ui/core';
import './PostComment.css';

const PostComment = (props) => {
    const {postId}=useParams();
   const [comment,setComment]=useState([]);
    /* single post comment api */
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[]);
    return (
        <>
        <h2>Comment:</h2>
        {comment.map((comment) => (
     <Container className="comment-textArea">
        <Grid container spacing={3}>
        <Grid item xs={1}>
        <img
                  style={{ borderRadius: "50%", padding: "10px" }}
                  src={`https://loremflickr.com/600/400?random=${comment.id}`}
                  alt=""
                  height="50"
                  width="50"
                />
                
        </Grid>
        <Grid item xs={10}>
        <div> 
        <h3 style={{ padding: "10px" }}>User:{comment.name.slice(0, 10)}</h3>
            <p>Email: {comment.email}</p>
            <p>{comment.body}</p>
        </div>
        </Grid>
        </Grid>
        </Container>
          ))}
        </>
    );
};

export default PostComment;