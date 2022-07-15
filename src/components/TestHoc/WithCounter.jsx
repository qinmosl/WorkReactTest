/*
 * @Description: 
 * @Author: xulinbin
 * @LastEditors: xulinbin
 */
import React,{useState} from 'react'

const WithCounter = (OriginalComponent,step = 1) => {
  // 使用它包的组件，那么给那个组件传props，就会到这边来
  const NewComponent = props =>{
    console.log(props)
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(prevoiusCount => prevoiusCount + step)
    }
    return (
      // 在这里把props传下去了
      <OriginalComponent count={count} incrementCount={incrementCount} {...props}/>
    )
  }
  return NewComponent
}


export default WithCounter
