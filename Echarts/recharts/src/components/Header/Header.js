import React, { useState } from 'react'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
const Item = Menu.Item;
export default function Header () {
  const [current, setCurrent] = useState('echarts1')
  const handleClick = (e) => {
    setCurrent(e.key)
  }

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="echarts1">
          <NavLink to="echarts1">Echarts1</NavLink>
        </Item>
        <Item key="echarts2">
          <NavLink to="echarts2">Echarts2</NavLink>
        </Item>
      </Menu>
    </div>
  )
}
