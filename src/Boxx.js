import React from "react";

export default function Boxx(props){
    const [on,setOn]=React.useState(props.on )
    const styles ={
        backgroundColor: on ? "#222222" : "#cccccc"
    }
    function click(){
        setOn(prevOn => !prevOn)
    }
    return(
        <div 
             style={styles}
             className="box" 
             onClick={click}
             >   
        </div>
    )
}