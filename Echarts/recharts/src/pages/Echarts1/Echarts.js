import React from 'react'
import './index.scss'
export default function Echarts (props) {
  const imgList = [
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
  ]
  console.log('props', props);
  return (
    <div>
      <div className="wrapper">
        <div className="card-left">
          <div className="img"></div>
        </div>
        {/* 卡片 */}
        <div className="card-right">
          <div className="sub">
            <p className="text title"><span className="yinhao">“</span>唐家三少给木子</p>
            <p className="text subtitle">---感动千万人的真爱告白<span className="yinhao">”</span></p>
            <p className="foot">
              <span className="price">17.98元/本</span>
              <span className="vip">开通会员,立享全栈畅读</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
