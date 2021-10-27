import { ChangeEvent, FormEvent, useState } from 'react'
import GridRow from '../GridRow'
import Button from '../Button'


interface InteractiveGridProps {
  cols: number
}

interface Row {
  state: "stable" | "unstable"
}

const row: Row = {
  state: "unstable"
}


function InteractiveGrid(props: InteractiveGridProps) {

  const [rows, setRows] = useState(Array<Row>({ ...row }));
  const [input, setInput] = useState('')


  const rowList = rows.map((row,index) => (
    <GridRow key={index} cols={props.cols} state={row.state} />
  ))

  function addRow() {
    const updatedRows = [...rows, { ...row }]
    setRows(updatedRows)
  }

  function stabilize() {
    const updatedRows = [...rows]
    for (let i = 0; i < rows.length; i++) {
      updatedRows[i].state = "stable";
    }
    setRows(updatedRows)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if(Number(input)===(props.cols*rows.length)){
      stabilize()
      setInput('');
    }
  }

  function handleChange(e:ChangeEvent<HTMLInputElement>){
    setInput(e.target.value)
  }



  return (
    <div className="flex w-auto h-auto flex-col justify-start items-center m-10">
      {rowList}
      <div className="flex justify-center space-x-3">
      <Button text="+" onClick={() => addRow()} />
      <form onSubmit={handleSubmit}>
        <input type='text'
          className="border border-transparent outline-none rounded-lg text-center h-10"
          onChange={handleChange}
          placeholder="current number" 
          value={input}/>
      </form>
      </div>

    </div>
  )
}

export default InteractiveGrid;
