import {useState, useEffect, SetStateAction} from 'react'


function RandomQuote(){

  const [quote,setQuote] = useState('')
  const [author,setAuthor] = useState('')
  
  useEffect(()=>{
    const axios = require('axios')
    axios.get("https://random-math-quote-api.herokuapp.com/")
    .then((response: { data: { quote: SetStateAction<string>; author: SetStateAction<string> } }) => {
      setQuote(response.data.quote)
      setAuthor(response.data.author)
      
    })
  },[])

  console.log({quote})

  return (quote === '') ? 
    (<div>
    </div>)
    : 
    (<div className="border rounded p-3 shadow-xl">
      <p className="text-left">Quote:</p>
      <p>{quote}</p>
      <p className="text-right">~{author}</p>
    </div>)
  
}

export default RandomQuote