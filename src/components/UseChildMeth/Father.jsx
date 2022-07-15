/*
 * @Description: 
 * @Author: xulinbin
 * @LastEditors: xulinbin
 */
import React from 'react'
import { useRef } from 'react'

import Child from './Child'

export default function Father() {

  const btnRef = useRef()
  const childRef = useRef()

  const faBtnClick = () =>{
    // console.log(btnRef.current)    //注意，函数组件不能用ref去拿实例(函数组件没有实例？)，只能拿拿dom，所以这里拿的是btn的
    // 且类组件ref拿到子组件也没有它身上的方法，所以只能用子传父的方式把自己的实例传给父来，然后父就可以拿到其值了
   childRef.current.openTheDoor('小李')   //子组件暴露啥，它上面只有啥
    
  }

  return (
    <div>
      我是父
      <button onClick={faBtnClick} ref={btnRef}>我要调用子的openTheDoor</button>
      <Child ref={childRef}/>
    </div>
  )
}
