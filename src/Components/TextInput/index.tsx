import { useState } from 'react';


export default function TextInput(props: any) {

  const [value, setValue] = useState('')

  function handleChange(e: any) {
    setValue(e.target.value)
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    props.onSubmit(value);
    setValue("");
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} placeholder="enter value for stabilization" className="shadow bg-background appearance-none border rounded-lg w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
    </form>
  )
}