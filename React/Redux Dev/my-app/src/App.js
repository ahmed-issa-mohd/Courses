import Todo from './Todo'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <p>ahmed is logged</p> : ''}
      <hr />
      <Todo counter={counter} />
    </div >
  );
}

export default App;
