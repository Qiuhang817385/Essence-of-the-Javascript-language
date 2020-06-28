import React from 'react'
import './Common.scss'
export default function CommonCard (props) {
  const { title, Footer, value, Content } = props;
  return (
    <div className="common-card">
      <div className="title">{title}</div>
      <div className="value">{value}</div>
      <div className="chart">{Content}</div>
      <div className="line"></div>
      <div className="total">
        {Footer}
      </div>
    </div>
  )
}
