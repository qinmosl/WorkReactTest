/*
 * @Description: 
 * @Author: xulinbin
 * @LastEditors: xulinbin
 */
import React from 'react'
import ClickCounter from './ClickCounter'

export default function TestHoc() {
  return (
    <div>
      {/* 高阶组件传值会传到WithCounter 组件上 */}
      <ClickCounter name="小别扇"/>
    </div>
  )
}
