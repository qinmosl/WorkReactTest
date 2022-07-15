/*
 * @Description: 
 * @Author: xulinbin
 * @LastEditors: xulinbin
 */
import  localforage from 'localforage'
import { useEffect } from 'react';

let obj = {
  contact:{
      '213113213':{
        cc:1233,
        nickName:'小李子'
      }
  }
}

function TestLocalForage() {

  const contactStore = localforage.createInstance({
    name: 'contact'
  })

  const hereStore = localforage.createInstance({
    name: "here"
  });


  useEffect( ()=>{
      // 设置某个数据仓库 key 的值不会影响到另一个数据仓库   在indexedDB中查看
      contactStore.setItem("name", {zz:'直接',cc:'真难'});
      hereStore.setItem("name", "老杨");

      contactStore.getItem("name").then((value) => {
        console.log(value);
      });

      console.log(Object.values(obj.contact)) //0: {cc: 1233, nickName: '小李子'}
  },[])

  return (
    <div className="test-local-forage">
        测试localforage
    </div>
  );
}

export default TestLocalForage;
