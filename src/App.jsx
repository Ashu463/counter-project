/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from 'react'
import './App.css'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';



function App() {

  return (
    <RecoilRoot>
      <div style={{display : 'flex', justifyContent : 'center'}}>
        <Card style = {{padding: 20 , width : 500}}>
          <Typography varirant = 'h5'>Welcome to the counter game</Typography>
          <br />
          <Buttons />
          <CountComponent />
        </Card>
      </div>
    </RecoilRoot>
  )
}
function Buttons(){
  return (
    <div style={{display : 'flex', justifyContent : 'space-between'}}>
      <Increase />
      <Decrease />
    </div>
  )
    
  
}
function Increase(){
  console.log("increase component hitted")
  const setCount =  useSetRecoilState(countState);
  return (
    <div>
      <Button varirant = {"contained"} onClick = {() => {
        setCount(existingCount => existingCount + 1)
      }} >Increase counter</Button>
    </div>
  )
}
function Decrease(){
  console.log("decrease component hitted")
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button varirant = {"contained"} onClick = {() => {
        setCount(existingCount => existingCount - 1)
        
      }} >Decrease counter</Button>
    </div>
  )
}
function CountComponent(){
  console.log("count component hitted")
  const count = useRecoilValue(countState)
  return <div>
    <Typography varirant = {'h5'} textAlign = {'center'}>
      {count}
    </Typography>
  </div>
}
export default App

const countState = atom({
  key: 'countState', 
  default: 0, 
});