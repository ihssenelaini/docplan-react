import React, { Component } from 'react';
import Doc from './docplan'
import './App.css';
import Nav from './nav';
import Img from './img'
import Text1 from'./text1';
import ListBox from './listBox';
import Img2 from './img2';
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Doc/>
        <Img/>
        <Text1/>
        <ListBox/>
        <Img2/>
        <Footer/>
      </div>
    );
  }
}

export default App;
