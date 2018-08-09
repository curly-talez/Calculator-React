import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleClick=this.handleClick.bind(this);
  }
  render() {
    return (
      <div className="calculator">
        <h1>CALCULATOR</h1>
        <input value={this.state.value} type="text" className="Disp" />
        <div className="Keypad">
        <div className="calc-key">
          <button  onClick={this.handleClick}  value="1">1</button>
          <button  onClick={this.handleClick}  value="2">2</button>
          <button  onClick={this.handleClick}  value="3">3</button>
          <button  onClick={this.handleClick}  value="/">/</button>
        </div>

        <div className="calc-key">
          <button  onClick={this.handleClick}  value="4">4</button>
          <button  onClick={this.handleClick}  value="5">5</button>
          <button  onClick={this.handleClick}  value="6">6</button>
          <button  onClick={this.handleClick}  value="*">*</button>
        </div>

        <div className="calc-key">
          <button  onClick={this.handleClick}  value="7">7</button>
          <button  onClick={this.handleClick}  value="8">8</button>
          <button  onClick={this.handleClick}  value="9">9</button>
          <button  onClick={this.handleClick}  value="-">-</button>
        </div>

        <div className="calc-key">
          <button  onClick={this.handleClick}  value="0">0</button>
          <button  onClick={this.handleClick}  value=".">.</button>
          <button  onClick={this.handleClick}  value="=">=</button>
          <button  onClick={this.handleClick}  value="+">+</button>
        </div>
        <div className="calc-key">
          <button className="big" onClick={this.handleClick}  value="AC">AC</button>
          <button className="big" onClick={this.handleClick}  value="C">C</button>
        </div>
      </div>
      </div>
    );
  }
  handleClick(e) {
    var val= e.target.value;
    if(val==='='){
      // this.setState(prevState =>({
      //   value:String(eval(prevState.value))
      // }));
      try{
      var g=String(eval(this.state.value))    ;
      this.setState({value:g})}
      catch(err){
        // alert(err);
      this.setState(prevState =>({
      value:' Invalid Expression'
        }));
      }
    }
    else if(val==='AC'){
      this.setState(prevState =>({
        value:''
      }));
    }
    else if(val==='C'){
      this.setState(prevState =>({
        value:prevState.value.slice(0,-1)
      }));
    }
    else{
      this.setState(prevState =>({
        value: prevState.value.concat(val)
      }));
    }    
  }
}


ReactDOM.render(
  <Calculator />,
  document.getElementById('root'));