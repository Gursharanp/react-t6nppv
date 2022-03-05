import React,{Component} from 'react';

class MyClass extends Component{
constructor(){
  super();

}
handleClick=()=>{

}
  render(){
    return(
      <>
        <div> Hello </div>
        <button onClick={this.handleClick}>Click-Me</button>
      </>
    )
  }
};

export default MyClass;