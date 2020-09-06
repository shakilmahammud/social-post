import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Container,Grid}from '@material-ui/core';
import './PostComment.css';

const PostComment = (props) => {
    const {postId}=useParams();
   const [comment,setComment]=useState({});
   const {name,email,body}=comment;
   const {thumbnailUrl}=props.image;
    /* single post comment api */
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/comments/${postId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[]);
    return (
        <>
        <Container className="comment-textArea">
        <Grid container spacing={3}>
        <Grid item xs={1}>
        <div className="commentArea"><img src={thumbnailUrl} alt=""/></div>
        </Grid>
        <Grid item xs={10}>
         <div className="comment-text">
         <h3> User Name : {name} </h3>
         <p> User Email : {email} </p>
         <p> Comment : <br/> {body} </p>
         </div>
        </Grid>
        </Grid>
        </Container>
        </>
    );
};

export default PostComment;