import {useState} from 'react'
import './App.css';
import Counter from './component/Counter';

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = (event) => {
    setTheme(event.target.value)
  }


  return (
    <div className={'App ' + theme}>
      <h1>React State and Events</h1>
      <Counter name='My Counter'/>
      <select onChange={toggleTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export default App;
