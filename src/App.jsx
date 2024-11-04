import Great, { Hello, Great2} from './Hello';
import { useState } from 'react';
import { Button } from './Button';
import { Display } from './Display';
import { History } from './History'
// import './App.css'
const App =  () =>{
  const [clickes, setClicks] = useState({
    left: 0, right:0
  })
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([])
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState(0);

  const handleLeft = () => {
    setAllClicks(allClicks.concat('L'))
    console.log('left before', left)
    let newLeft = left + 1
    setLeft(newLeft)
    console.log('left after',newLeft )
    setTotal(newLeft + right) 
  }

const setToValue = (val)=>{
  console.log("Older value : ", value)
  console.log("new value is : ", val);
  setValue(val);
}
const handleRight = () => {
  setAllClicks(allClicks.concat('R'));
  console.log('right before', right)
  let newRight = right +1;
  setRight(newRight);
  console.log('right after', newRight)
  setTotal(total+1)
};
const hello = ()=>{
  const greet = ()=> console.log("Hello")
  return greet;
}
  return(
    <div>
      <div className="d-flex bg-white m-2 rounded p-2 align-items-center">
        <Display text={left}></Display>
        <Button onClick = {handleLeft} name="left"></Button>
        <Button onClick = {handleRight} name="right"></Button>
        <Display text={right}></Display>
      </div>
      <div className="d-flex bg-white m-2 rounded p-2 align-items-center">
        <History allClicks={allClicks}></History>    
        {/* <button onClick={hello()}></button> */}
        
      </div>
      <br />
      <div className="d-flex bg-white m-2 rounded p-2 align-items-center">
        <Display text={total}></Display>
        <button onClick={()=>setToValue(1000)}>1000</button>
        <button onClick={()=>setToValue(0)}>0</button>
        <button onClick={()=>setToValue(-1)}>-1</button>
      </div>
    </div>
    
  )
  // const [counter, setCounter] = useState(0);
  // console.log("page refres", counter)
  // // const add = ()=>{
  // //   setTimeout(
  // //     ()=> setCounter(counter + 1),0.5
  // //   )
  // // }
  
  // console.log("page refreshhed", counter)
  // return (
  //   <div className="d-flex bg-white m-2 rounded p-2 align-items-center">
  //     <Display text = {counter}></Display>
  //     {/* <h4 className="counter flex-fill text-center font-italic">{counter}</h4> */}
  //     <Button className="btn btn-primary flex-fill mx-1" name = "add" onClick={() => setCounter(counter + 1)}>Add</Button>
  //     <Button className="btn btn-primary flex-fill mx-1" name="minus" onClick={() => setCounter(counter - 1)}></Button>
      
  //   </div>
  //);
  
}
export default App;
// import { useState } from 'react';
// const App = () => {
//   const [counter, setCounter] = useState(0)
//   setTimeout(
//     ()=> setCounter(counter +1),1000
//   )

//   console.log('rendering...', counter)
//   return (
//     <div>
//       {counter}
//       {/* <Hello name = " rohit" age = {90}></Hello>
      
//       <Great2 name="Sameer" age={60}></Great2> */}
//       {/* <Great name = "Yogi"  age={30}></Great> */}
//     </div>
//   )
// }

// export default App