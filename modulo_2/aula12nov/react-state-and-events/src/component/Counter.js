import {useState} from 'react'

const Counter = (props) => {
  const [count, setCount] = useState(0) //nome do estado, função que muda o estado

  return (
    <div calssName="Counter">
      <h2>{props.name}</h2>
      <p>You clicked {count} times</p>

      <button onClick={() => {setCount(prevCount => prevCount - 1)}}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  )
}

export default Counter
