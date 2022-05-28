// import logo from './logo.svg';
import './App.css';
import React from 'react';


class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      image: null,
      id: null,
      Name: null,
      Height: null,
      Mass: null,
      HomeWorld: null
    }
  } 
  getNewCharacter() {
    console.log("clicked");
    const randomNumber = Math.round(Math.random() * 88)
    const url= `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          image: data.image,
          id: data.name,
          Name: data.name,
          Height: data.height,
          Mass: data.mass,
          HomeWorld: data.homeworld,
          loadedCharacter: true
        });
      })
    
  }
  render() {
    return (
      <div>
        {
          this.state.loadedCharacter &&
          <div>
            <img src={this.state.image}></img>
            <h1>{this.state.id}</h1>
            <p>{this.state.Name}</p>
            <p>{this.state.Height}</p>
            <p>{this.state.Mass}</p>
            <p>{this.state.HomeWorld}</p>
          </div>
        }
        <button onClick={() => this.getNewCharacter()} type='button' className='btn'>Generate Character</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars></StarWars>
      </header>
    </div>
  );
}

export default App;
