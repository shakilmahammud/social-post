import React,{ useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {Button,Container,makeStyles,Grid}from '@material-ui/core';
import CommentSection from '../CommentSection/CommentSection';

const useStyles = makeStyles({
    root:{
        backgroundColor: '#fff',
        color:'#000',
        border:'2px solid rgba(0,0,0,0.5)',
        padding:'10px',
        borderRadius:'10px',
        marginTop:'20px',
        marginBottom:'10px',
        boxShadow:'0px 10px 40px rgba(0,0,0,0.5)'
    },
  });
const PostDetails = () => {
    const classes = useStyles();
    const {postId}=useParams();
    const [postDetails,setPostDetail]=useState({});
    const {userId,id,title,body}=postDetails;
    /* user image  */
    /* single comment  */
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPostDetail(data));
},[])
    return (
        <>
        <Container className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                 <h2>User- {userId}</h2>
                <h3>User Unique ID:{id}</h3>
                <h4>Post Title: {title}</h4> 
                <h5>Post : {body}</h5>
                <Link to="/" style={{textDecoration: 'none'}}><Button variant="contained" color="secondary" >Back To Home</Button></Link>
                </Grid>
            </Grid>
        </Container>
        <Container>
            <CommentSection/>
        </Container>
        </>
    );
    }

export default PostDetails;