import { useState } from 'react';
import GridElement from '../GridElement';

interface RowProps {
  cols: number,
  state:"stable"|"unstable"
}

function GridRow(props: RowProps) {
  
  const [animation,setAnimation] = useState("animate-jump")

  function handleAnimationIteration(){
    if(props.state === "stable"){
      setAnimation("animate-kill")
    }
  }

  let color:string;


  switch(props.state){
    case "unstable":
      color = "primary"
      break;
    case "stable":
      color= "secondary"
      break;
  }

  const style = 'flex '+animation;

  const elements = Array(props.cols).fill({ color: color });

  const elementList = elements.map(((ele,index) => (
    <GridElement
      key={index} 
      color={ele.color}
    />
  )));

  return (
    <div className={style} onAnimationIteration={() => handleAnimationIteration()}>
      {elementList}
    </div>
  )
}

export default GridRow;