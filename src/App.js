import './App.css';
import React from 'react';
import box from './box';
import Boxx from './Boxx';


 function App(props){

  const[squares,setsquares]=React.useState(box)
  
  // const styles={
  //   backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  // }
  const squareElements = squares.map(items =>(
    <Boxx 
        key={items.id} 
        on={items.on}
         />
  ))


  

  return (
    <main>  
        {squareElements}
    </main>
  )

}

export default App;
