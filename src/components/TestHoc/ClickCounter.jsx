/*
 * @Description: 
 * @Author: xulinbin
 * @LastEditors: xulinbin
 */
import React from 'react'
import WithCounter from './WithCounter';
const ClickCounter = props => {
  const { count, incrementCount,name } = props;
  return (
    <div>
        <span>{name}</span>
        <button onClick={incrementCount}>点击{count}次</button>
    </div>
  )
}

export default WithCounter(ClickCounter,5)
