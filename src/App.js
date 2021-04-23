import './App.css';
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

class App extends React.Component{
  render() {
    let nav = this.props.nav;
    let pic = this.props.pic;
    let contacts = this.props.contact;

    return (
        <>
          <div className="App">
            <img src={pic.picture} style={pic} className="logo2" alt="logo"/>
            <h1>
              {this.props.title}
            </h1>
            <p>
              {this.props.hero}
            </p>
            <Nav nav={nav}/>
          </div>
          <Footer contact={contacts}/>
        </>

    );
  }
}

export default App;