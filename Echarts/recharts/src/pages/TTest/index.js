import React, { useState } from 'react'
import { Button } from 'antd';
import classnames from 'classnames';
import './index.scss'
const LiItem = (props) => {
  const { index, item, active, currentIndex } = props
  const className = classnames('liItem', {
    'active': currentIndex.toString() === index.toString()
  })
  return <li index={index} onClick={() => { active(index) }} className={className} key={index}>{item}</li>
}
export default function Index () {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [currentIndex, setCurrentIndex] = useState('1');
  const pre = () => {
    let mid;
    let newArr = JSON.parse(JSON.stringify(arr));
    if (parseInt(currentIndex) <= 0) {
      return
    } else {
      let i = parseInt(currentIndex);
      mid = newArr[i - 1];
      newArr[i - 1] = newArr[i];
      newArr[i] = mid;
      setArr(newArr)
    }
  }
  const active = (index) => {
    // console.log('index', index);
    setCurrentIndex(index.toString());
  }
  return (
    <div>
      <ul>
        {
          arr.map((item, index) => <LiItem currentIndex={currentIndex} active={active} item={item} key={index} index={index} />)
        }
      </ul>
      <Button type="primary" onClick={pre}>点击</Button>
    </div>
  )
}
