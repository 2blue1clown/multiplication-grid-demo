
interface ElementProps {
  color:string,
}

function GridElement(props: ElementProps){

  const style =`bg-${props.color} rounded-full w-20 h-20 m-3`
  return (
    <div className={style} />
  )
}

export default GridElement