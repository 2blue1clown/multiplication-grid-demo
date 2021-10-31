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




  const style = 'flex '+animation;

  const elements = Array(props.cols).fill({});

  const elementList = elements.map(((ele,index) => (
    <GridElement
      key={index} 
    />
  )));

  return (
    <div className={style} onAnimationIteration={() => handleAnimationIteration()}>
      {elementList}
    </div>
  )
}

export default GridRow;