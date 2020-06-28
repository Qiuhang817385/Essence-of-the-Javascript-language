import React, { useEffect } from 'react'
import './carouse.scss'
import move from './tool';
const ulRef = React.createRef();
// const imgList = [
//   '/img/1.jpg',
//   '/img/2.jpg',
//   '/img/3.jpg',
//   '/img/4.jpg',
// ]
export default function Carouse () {
  let timer;
  let index = 0;
  let allA
  useEffect(() => {
    let imgList = document.getElementById('imgList')
    allA = Array.from(document.getElementById('navDiv').children);
    for (let i = 0; i < allA.length; i++) {
      const element = allA[i];
      element.num = i;
      element.onclick = function () {
        clearInterval(timer);
        index = this.num;
        move(imgList, 'left', -420 * index, 30, function () {
          // autoChange()//表明动画执行完毕(end)
        })
        setClick(imgList, index);
      }

    }


    autoChange(imgList, index)
  }, [])

  const setClick = (imgList, index) => {
    allA = Array.from(document.getElementById('navDiv').children);
    if (index >= imgList.children.length - 1) {
      index = 0;
      imgList.style.left = 0 + 'px';
    }
    for (let i = 0; i < allA.length; i++) {
      const element = allA[i];
      element.style.backgroundColor = '';
      imgList.children[i].className = ''
    }
    imgList.children[index].className = 'active'
    allA[index].style.backgroundColor = 'black';
  }


  const autoChange = (imgList, index) => {
    // timer = setInterval(() => {
    // index++;
    // index = index % 5;
    move(imgList, 'left', -420 * index, 20, () => {
      setClick(imgList, index)
    })
    // }, 2000)
  }

  let val, start;
  const handleTouchStart = (e) => {
    val = e.targetTouches[0].clientX;
    // console.log('123');
    start = document.getElementById('imgList').style.left;
  }
  const handleTouchMove = (e) => {
    let moveStep = e.targetTouches[0].clientX;
    document.getElementById('imgList').style.left = parseInt(start) + (moveStep - val) + 'px';
  }
  const handleTouchEnd = (e) => {
    // return e.changedTouches[0].clientX
  }


  return (
    <div>
      <div className="containers" >
        <div className="outer">
          <ul id="imgList" ref={ulRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove} >
            <li className='active'><img src='/img/1.jpg' alt="1" /></li>
            <li ><img src='/img/2.jpg' alt="1" /></li>
            <li ><img src='/img/3.jpg' alt="1" /></li>
            <li ><img src='/img/4.jpg' alt="1" /></li>
            <li ></li>
          </ul>
        </div>
        <div id="navDiv">
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
        </div>
      </div>
    </div>
  )
}
