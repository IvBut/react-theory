import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Car from "./Car/Car";

class App extends Component {
    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2019},
            {name: 'Mazda', year: 2010},
        ],
        pageTitle: 'Hello React'
    };

    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    changeTitle() {
        this.setState({pageTitle: 'Changed'})
    }

    handleCarChangeYear = (props) => {
      this.setState({pageTitle: `${props.name} ${props.year}`})
    };

   handleInput(e) {
        this.setState({pageTitle: e.target.value})
   }

    render() {
        const divStyle = {
            color: 'black',
            'textAlign': 'center'
        };
        const cars = this.state.cars;
        return (
            <div className="App" style={divStyle}>
                <h1>{this.state.pageTitle}</h1>
                <div>
                    <input type="text" onChange={this.handleInput}/>
                </div>
                {cars.map((car, index) => (<Car name={car.name} key={index} year={car.year} onCarChangeYear={this.handleCarChangeYear}/>) )}
                <button onClick={this.changeTitle.bind(this)}>Change tittle</button>
            </div>


            //
            // <div className = "App" style={divStyle}>
            //     <h1>hello</h1>
            //     Number : <Car name= "Ford" year = '2018' />
            //     <Car name={'Audi'} year={'2019'}><p style={{color: 'Blue'}}>COLOR</p></Car>
            // </div>
            // return React.createElement(
            //     'div',
            //     {className: 'App'},
            //     React.createElement('h1',null, 'test hello')
            // )
        )
    }

}

export default App;
