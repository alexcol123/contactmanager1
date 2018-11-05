import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch(
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data =>
          this.setState({
            title: data.title,
            body: data.body
          })
        )
    );
  }

  render() {
    const { title, body } = this.state;
    return (
      <div className="text-center">
        <h5>{title}</h5>
        <p>{body}</p>
      </div>
    );
  }
}
export default Test;
