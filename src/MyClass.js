import React,{Component} from 'react';

class MyClass extends Component{
constructor(){
  super();
  this.myRef=React.createRef();
}
handleClick=()=>{
console.log(this.myRef.current.value);
}
  render(){
    return(
      <>
        <input type='text' ref={this.myRef}/>
        <button onClick={this.handleClick} >Click-Me</button>
      </>
    )
  }
};

export default MyClass;