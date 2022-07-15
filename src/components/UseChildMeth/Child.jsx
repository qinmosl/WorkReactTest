/*
 * @Description: 
 * @Author: xulinbin
 * @LastEditors: xulinbin
 */
import React,{forwardRef, memo, useImperativeHandle} from 'react'

// memo要在外面
const Child = memo( forwardRef((props,ref)=>{

  const openTheDoor = (name = 'FBI') => {
    alert(`${name} open the door`)
  }

  const cc = ()=>{}

  //将自己的openTheDoor方法暴露给父组件
  useImperativeHandle(ref,()=>({openTheDoor}))

  return (
    <div>
      <div>Child</div>
      <button onClick={() => openTheDoor()}>open the door</button>
    </div>
  )
}))


export default Child;