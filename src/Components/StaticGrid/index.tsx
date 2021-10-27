import GridRow from '../GridRow';

interface StaticGridProps{
  rows:number,
  cols:number

}

function StaticGrid(props: StaticGridProps) {

  const rowList = Array(props.rows).fill((
    <GridRow cols={props.cols} state="stable"></GridRow>
  ));

  return (
    <div className="flex w-auto h-auto flex-col justify-start m-10">
      {rowList}
    </div>
  )
}

export default StaticGrid;