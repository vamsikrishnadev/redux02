import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './actions'


function App() {
  const counter=useSelector(state=>state.counter)
  const isLoggedin = useSelector(state=>state.loggedIn)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div>Counter  {counter}</div>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      
      {isLoggedin?<div>Confidential info</div>:''}
      
    </div>
  );
}

export default App;
