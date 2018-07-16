import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [{
  title: 'Pooper\'s Adventures',
  url: 'https://www.google.com',
  author: 'Marcus Hooper',
  num_comments: 9,
  points: 15,
  objectID: 0,
}, {
  title: 'Bille\'s Adventures',
  url: 'https://www.twtter.com',
  author: 'Bille Brown',
  num_comments: 500,
  points: 1000,
  objectID: 1,
}
];

const person = "Marcus";

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      list,
      name: person,
      searchTerm: '',

    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss(id) {
    const filtered = this.state.list.filter(item => item.objectID !== id);
    this.setState({list: filtered});
    console.log(this);
  }

  onSearchChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    const newText = 'I am new Text';
    const fancyText = 'poop';
    const coolObj = {
      firstName: 'Marcus',
      secondName: 'Pooper'
    };
    return (
      <div className="App">
        <h2>Hi I am {this.state.name}</h2>
        <p>{newText}</p>
        <p>Here is some super special {fancyText}</p>
        <p>His first name is {coolObj.firstName} and his second name is {coolObj.secondName}</p>
        <p>Bla {fancyText}</p>
        <form>
          <input
            type="text"
            onChange={this.onSearchChange}
          />
        </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author} </span>
              <span>{item.num_comments} </span>
              <span>{item.points} </span>
              <span>{item.objectID} </span>
              <span>
                <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                >
                Dismiss
                </button>
              </span>
              <hr />
            </div>
        )}
      </div>
    );
  }
}

export default App;
