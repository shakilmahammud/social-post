import React, { useState, useEffect } from 'react';
import {Container,Grid}from '@material-ui/core';
import './CommentSection.css';
import {AddAPhoto,EmojiEmotions,Send} from '@material-ui/icons';
import PostComment from '../PostComment/PostComment';
import { useParams } from 'react-router-dom';

const CommentSection = (props) => {
const {postId}=useParams();
const [image,setImage]=useState({});
const {thumbnailUrl}=image;

/* single post image */
useEffect(()=>{
const imageUrl=`https://jsonplaceholder.typicode.com/photos/${postId}`;
fetch(imageUrl)
.then(res=>res.json())
.then(data=>setImage(data))
},[]);

    return (
       <>
        <Container className="commentMainArea">
        <Grid container spacing={3}>
       <Grid item xs={1}>
        <div className="commentArea"> <img src={thumbnailUrl} alt=""/></div>
       </Grid>
       <Grid item xs={10}>
      <div className="commentArea">
      <textarea name="" placeholder="Write a Comment" rows="5"></textarea>
     <div className="commentIcon"> 
         <AddAPhoto/>
         <EmojiEmotions className="icon"/>
         <Send className="sendIcon"></Send>
         </div>
      </div>
       </Grid>
       <Grid item xs={1}>
           <Send ></Send>
       </Grid>
        </Grid>
        </Container>
        <PostComment image={image}/>
       </>
    );
};

export default CommentSection;