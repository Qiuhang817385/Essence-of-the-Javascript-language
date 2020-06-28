import React from 'react'
import './Card.scss';
import CommonCard from './CommonCard';

const Content = () => {
  return <>
    <div className="compare-wrapper">
      <div className="compare">
        <span>日同比</span>
        <span className="emphasis">7.33%</span>
        <div className="increase"></div>
      </div>
      <div className="compare">
        <span>月同比</span>
        <span className="emphasis">36.33%</span>
        <div className="decrease"></div>
      </div>
    </div></>
}
const Footer = () => {
  return <>
    <span>昨日销售额</span>
    <span className="emphasis">$ 32,039,165</span>
  </>
}

export default function TotalCard () {
  return (
    <div>
      <CommonCard title="累计销售额" value="$ 32,039,165" Content={<Content />} Footer={<Footer />} />
    </div>
  )
}
