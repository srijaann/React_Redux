import React from "react";
import "./App.css";
import Model from "./Component/Model";
import { connect } from "react-redux";
import ReduxDispatch from "./Component/ReduxDispatch";

function App({ posts }) {
  return (
    <div className="App">
      <header className="App-header">
        <Model></Model>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
        <ReduxDispatch></ReduxDispatch>
      </header>
    </div>
  );
}
const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(App);
