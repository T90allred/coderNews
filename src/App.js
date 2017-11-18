import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Underscore',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 2,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 3,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 4,
  },
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list,
    };
    this.onDelete = this.onDelete.bind(this);
  }
  
  onDelete(id) {
    const updatedList = this.state.list.filter( (item) => item.objectID !== id);
    // different way of doing above line
    // const isNotId = item => item.objectID !== id;
    // const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {

    return (
      <div className="App">
        {this.state.list.map( item => 
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => this.onDelete(item.objectID)}
                  type='button'>
                  Delete
                </button>
              </span>
            </div>
        )}
      </div>
    );
  }
}

export default App;
