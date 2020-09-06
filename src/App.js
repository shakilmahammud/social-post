import React from 'react';
import './App.css';
import Post from './Component/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PostDetails from './Component/PostDetails/PostDetails';


function App() {
  return (

     <Router>
       <Switch>
        <Route path="/post">
          <Post></Post>
        </Route>
         <Route path="/:postId">
         <PostDetails></PostDetails>
         </Route>
         <Route exact path="/">
         <Post/>
         </Route>
         <Redirect to="/" />
       </Switch>
     </Router>
  );
}

export default App;
