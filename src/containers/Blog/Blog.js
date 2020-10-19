import React, { Component } from "react";
// import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import "./Blog.css";
import Posts from "../Blog/Posts/Posts";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {



  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" 
                exact
                activeClassName="my-active"
                activeStyle={{
                  color: "#fa923f",
                  textDecoration: "underline"
                }}>Home</NavLink>
              </li>
              <li>
                {/* This is the way not to reload the page every time when clicking on the inner NavLink.
                In this way react rerenders only those parts that needed to be reloaded. 
                We are not loading the same page again: */}
                <NavLink to={{
                  // Absolute path:
                  pathname: "/new-post",
                  hash: "#submit",
                  search: "?quick-submit=true"
                }}>New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home 2</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
