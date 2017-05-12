import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import BoringComponent from './BoringComponent.js';
import Counter from './Counter.js';
import TodoList from './TodoList.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <BoringComponent />

        <Counter />

        <TodoList />

        <Footer />
      </div>
    );
  }
}

export default App;
//same as
// module.exports = App;
