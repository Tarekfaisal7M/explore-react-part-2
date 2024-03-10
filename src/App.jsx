import './App.css'
import Team from './Team';
import Counter from './counter';

function App() {

  function handleClick (){
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 done')
  }
 

  return (
    <>
      <h3>React Explore part 2</h3>
      <Counter></Counter>
      <Team></Team>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click more</button>
      <button onClick={() => {alert('i love you')}}>third button</button>
    </>
  )
}

export default App
