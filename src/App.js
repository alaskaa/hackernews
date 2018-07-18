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

const person = "Sibylle";

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
    const newText = 'You gonna learn ALL the things';
    const fancyText = 'stuff';
    const coolObj = {
      firstName: 'Marcus',
      secondName: 'Pooper'
    };
    const { searchTerm, list} = this.state;
    return (
      <div className="App">
        <h1>{helloWorld}</h1>
        <h2>Hi I am {this.state.name}</h2>
        <p>{newText}</p>
        <p>Here is some super special {fancyText}</p>
        <p>His first name is {coolObj.firstName} and his second name is {coolObj.secondName}</p>
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        >
        Search:
        </Search>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
        </div>
    );
    }
  }

  // This shows how a React Component can be refactored
  // class Search extends React.Component {
  //   render() {
  //     const { value, onChange, children } = this.props;
  //     return (
  //       <form>
  //         {children} <input
  //           type="text"
  //           value={value}
  //           onChange={onChange}
  //         />
  //       </form>
  //     );
  //   }
  //
  // }

  const Search = ({value, onChange, children}) => {
    return (
      <form>
        {children} <input
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
    );
  }

  // class Table extends React.Component {
  //   render() {
  //     const { list, pattern, onDismiss } = this.props;
  //     return (
  //       <div>
  //         {list.filter(isSearched(pattern)).map(item =>
  //             <div key={item.objectID}>
  //               <span>
  //                 <a href={item.url}>{item.title}</a>
  //               </span>
  //               <span>{item.author} </span>
  //               <span>{item.num_comments} </span>
  //               <span>{item.points} </span>
  //               <span>{item.objectID} </span>
  //               <span>
  //                 <Button
  //                   onClick={() => onDismiss(item.objectID)}
  //                 >
  //                 Dismiss
  //                 </Button>
  //               </span>
  //               <hr />
  //             </div>
  //         )}
  //       </div>
  //     );
  //   }
  // }

  const Table = ({ list, pattern, onDismiss}) => {
    return(
      <div>
        {list.filter(isSearched(pattern)).map(item =>
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author} </span>
              <span>{item.num_comments} </span>
              <span>{item.points} </span>
              <span>{item.objectID} </span>
              <span>
                <Button
                  onClick={() => onDismiss(item.objectID)}
                >
                Dismiss
                </Button>
              </span>
              <hr />
            </div>
        )}
      </div>
    );
  }



  const Button = ({onClick, className='', children}) => {
      return (
        <button
          onClick={onClick}
          className={className}
          type='button'
        > {children}
        </button>
      );
  }



export default App;
