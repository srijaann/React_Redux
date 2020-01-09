import React, { Component } from "react";
import { connect } from "react-redux";

class ReduxDispatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      postId: 2
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({
      type: "ADD_POST",
      payload: { id: this.state.postId, title: this.state.value }
    });
    this.setState({
      postId: this.state.postId + 1
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            this.props.dispatch({
                type: "GET_POST",
                payload: json
            });
        });
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
          <div>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
        <ul>
          {this.props.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

const mapDispatchToProps = dispatch=>{
    return{dispatch};
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxDispatch)
