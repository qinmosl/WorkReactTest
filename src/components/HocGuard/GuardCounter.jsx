/*
 * @Description:  redux数据感觉可以全在这边取
 * @Author: xulinbin
 * @LastEditors: xulinbin
 */
import React from 'react'

const GuardCounter = (OriginalComponent) => {
  const NewComponent = props =>{

    return (
      // 登录判断成功，返回 否则返回
      <OriginalComponent {...props}/>
    )
  }
  return NewComponent
}

export default GuardCounter
