import { useState } from 'react'
import InteractiveGrid from './Components/InteractiveGrid'
import Button from './Components/Button'

function Home() {


  const [cols, setCols] = useState(5);
  const options = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (<div className='flex flex-col items-center'>
    <h1 className="text-5xl m-4"><strong>Multiplication Grid</strong></h1>
    <hr className='w-1/2'/>
    <h2 className="text-3xl mt-4">Demo</h2>
    <InteractiveGrid cols={cols} />
    <div className='flex flex-col items-center space-y-3'>
      <div className='flex justify-center space-x-3'>
        {options.map(number => (
          <Button key={`${number}`} text={`${number}`} onClick={() => setCols(number)} />
        ))}
      </div>
    </div>

    <h2 className='text-3xl mt-4 text-left'><strong>Explanation</strong></h2>
    <div className='w-1/2 text-left'>
    <p className="my-4">
      Understanding the grid representation of multiplication helps draw the link between multiplication and repeated addition. <br /><br />
      
      Often students are shown this representation on paper or loose dots that they can move around on the table. This representation is usually quickly discarded because it is too cumbersome to represent efficient multiplication strategies. 
      </p>
      
      <p>
      <strong>However</strong>, making the representation digital allows the visual representation to stay relevant and usable when learning multiplication strategies such as doubling or tripling. 
    </p>
    <h2 className="my-4 text-3xl text-left">Example Usage</h2>
    <p className='text-left'><strong>Represent 3 groups of 5:</strong></p>
    <ol className="list-decimal ml-4">
      <li>Click the "+" button to add a row</li>
      <li>Stabilize the dots by typing the current about of dots into the answer box.</li>
      <li>Repeat until you have shown 5 groups of 3.</li>
    </ol>
    <br />
    <p>The idea is that the tutor and student interact with each other while using the grid as a reference point.</p>
  </div>
  <br /><br />
  </div>
  )
}


export default Home;