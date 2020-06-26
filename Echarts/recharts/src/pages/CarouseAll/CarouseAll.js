import React, { useEffect } from 'react'
import './index.scss'
import Carouse from './Carouse'
import './turn.scss'
import trun from './trun'

export default function Echarts (props) {
  useEffect(() => {
    new trun({
      id: "zturn",
      opacity: 0.9,
      width: 382,
      Awidth: 1024,
      scale: 0.9
    })
  }, [])
  console.log('props', props);
  return (
    <div>


      <div className="lb_gl">
        <div className="container">
          <h1 className="turn_3d">听听这些老前辈的分享，你会获得信心</h1>
          <div className="pictureSlider poster-main">

            <div className="poster-btn poster-prev-btn">
              <ul id="zturn" className="poster-list">
                <li className="poster-item zturn-item">
                  <p className="xxgy">学员感言0</p>
                  <p className="say">明月几时有</p>
                  <div className="for_btn">
                    <img src="../img/a1.png" width="100%" />
                    <a href="#" className="in_page"><img src="../img/iconin.png" /></a>
                  </div>
                </li>
                <li className="poster-item zturn-item">
                  <p className="xxgy">学员感言0</p>
                  <p className="say">明月几时有</p>
                  <div className="for_btn">
                    <img src="../img/a1.png" width="100%" />
                    <a href="#" className="in_page"><img src="../img/iconin.png" /></a>
                  </div>
                </li>
                <li className="poster-item zturn-item">
                  <p className="xxgy">学员感言0</p>
                  <p className="say">明月几时有</p>
                  <div className="for_btn">
                    <img src="../img/a1.png" width="100%" />
                    <a href="#" className="in_page"><img src="../img/iconin.png" /></a>
                  </div>
                </li>
                <li className="poster-item zturn-item">
                  <p className="xxgy">学员感言0</p>
                  <p className="say">明月几时有</p>
                  <div className="for_btn">
                    <img src="../img/a1.png" width="100%" />
                    <a href="#" className="in_page"><img src="../img/iconin.png" /></a>
                  </div>
                </li>
                <li className="poster-item zturn-item">
                  <p className="xxgy">学员感言0</p>
                  <p className="say">明月几时有</p>
                  <div className="for_btn">
                    <img src="../img/a1.png" width="100%" />
                    <a href="#" className="in_page"><img src="../img/iconin.png" /></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


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
      <Carouse></Carouse>
    </div>
  )
}
