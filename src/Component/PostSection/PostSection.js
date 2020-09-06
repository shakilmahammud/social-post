import React, { useEffect, useState } from 'react';
import {Button,Container,makeStyles,Grid}from '@material-ui/core';
import { Link } from 'react-router-dom';
import './PostSection.css';


const useStyles = makeStyles({
    root:{
      backgroundColor: '#fff',
      color:'#000',
      border:'2px solid rgba(0,0,0,0.5)',
      padding:'10px',
      borderRadius:'10px',
      marginTop:'20px',
      marginBottom:'10px',
    },
  });

const PostSection = (props) => {
    const classes = useStyles();
    const {id,title}=props.posts;

    return (
       
            <Container className={classes.root}>
            <Grid container spacing={3}>
              <Grid item md={12}>
              <div className="post">
            <h3 >User Unique ID: {id}</h3>
            <h4>Post Title: {title}</h4>  
           <Link to={`/${id}`} style={{textDecoration: 'none'}}><Button variant="contained" color="secondary" >See Details</Button></Link>
           </div>
              </Grid>
            </Grid>
            </Container>
      
    );
};

export default PostSection;